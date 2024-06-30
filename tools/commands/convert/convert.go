package convert

import (
	"errors"
	"fmt"
	"log"
	"os"
	"os/exec"
	"slices"
	"strings"

	"2h3ph3rd.github.io/tools/common"
)

var imageExtensions = []string{"jpg", "jpeg", "png", "gif", "svg", "avif"}

func Convert() error {
	log.Println("Converting images...")

	if err := checkFolder("./docs/writeups"); err != nil {
		return err
	}

	log.Println("Conversion finished")

	return nil
}

var ErrMissingMarkdownFile = errors.New("cannot find markdown file")

// checkFolder checks the folder for images and converts them to avif format
// this operation is done recursively to check all subfolders
func checkFolder(path string) error {
	log.Println(path)

	entries, err := os.ReadDir(path)
	if err != nil {
		return err
	}

	for _, entry := range entries {
		if entry.IsDir() {
			subpath := fmt.Sprintf("%s/%s", path, entry.Name())
			if err := checkFolder(subpath); err != nil {
				return err
			}
		}

		nameSplitted := strings.Split(entry.Name(), ".")
		if len(nameSplitted) < 2 { // no extension
			continue
		}

		if slices.Contains(imageExtensions, nameSplitted[1]) {
			if err := convertImage(path, nameSplitted[0], nameSplitted[1]); err != nil {
				return err
			}
		}
	}

	return nil
}

// convertImage converts the image to avif format
func convertImage(path, name, ext string) error {
	imagePath := fmt.Sprintf("%s/%s.%s", path, name, ext)
	convertedImagePath := fmt.Sprintf("%s/%s.webp", path, name)
	cmd := exec.Command("convert", imagePath, convertedImagePath)
	if err := cmd.Run(); err != nil {
		return err
	}

	mdFilePath := fmt.Sprintf("%s/index.md", path)
	if !common.FileExists(mdFilePath) {

		mdFilePath = fmt.Sprintf("%s/index.mdx", path)
		if !common.FileExists(mdFilePath) {
			return ErrMissingMarkdownFile
		}
	}

	mdFileContent, err := os.ReadFile(mdFilePath)
	if err != nil {
		return err
	}

	newMdFileContent := strings.ReplaceAll(string(mdFileContent), fmt.Sprintf("%s.%s", name, ext), fmt.Sprintf("%s.webp", name))
	if err := os.WriteFile(mdFilePath, []byte(newMdFileContent), 0644); err != nil {
		return err
	}

	cmd = exec.Command("rm", imagePath)
	if err := cmd.Run(); err != nil {
		return err
	}

	return nil
}
