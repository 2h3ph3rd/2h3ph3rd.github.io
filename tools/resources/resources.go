package resources

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"2h3ph3rd.github.io/tools/common"
	"gopkg.in/yaml.v3"
)

var InputFile = "./tools/resources.yml"
var OutputFile = common.DataFolder + "/resources.json"

// Generate generates the bookmarks.json file from the bookmarks.yml file in input
func Generate() {
	fmt.Println("Generating bookmarks")

	new := ReadNewBookmarks()
	bookmarks := ReadActualBookmarks()

	for _, b := range new {
		// Store only new bookmarks
		i := CheckDuplicate(bookmarks, b.URL)
		b.AddData()
		if i == -1 {
			bookmarks = append(bookmarks, b)
		} else {
			fmt.Println("Bookmark already exists! Data will be overwritten!")
			bookmarks[i] = b
		}
		fmt.Println()
	}

	WriteBookmarks(bookmarks)

	fmt.Println("Data written to file successfully")
}

// ReadNewBookmarks reads the new bookmarks from the bookmarks.yml file
func ReadNewBookmarks() []Resource {
	var bookmarks []Resource

	data, err := os.ReadFile(InputFile)
	if err != nil {
		log.Fatal(err)
	}

	if err := yaml.Unmarshal(data, &bookmarks); err != nil {
		log.Fatal(err)
	}

	return bookmarks
}

// ReadActualBookmarks reads the actual bookmarks from the bookmarks.json file
func ReadActualBookmarks() []Resource {
	var bookmarks []Resource

	data, err := os.ReadFile(OutputFile)
	if os.IsNotExist(err) {
		return bookmarks
	} else if err != nil {
		log.Fatal(err)
	}

	if err := yaml.Unmarshal(data, &bookmarks); err != nil {
		log.Fatal(err)
	}

	return bookmarks
}

// CheckDuplicate checks if the new bookmark already exists in the bookmarks slice.
//
// If it exists, it returns the index of the bookmark otherwise it returns -1
func CheckDuplicate(bookmarks []Resource, new string) int {
	for i, b := range bookmarks {
		if b.URL == new {
			return i
		}
	}

	return -1
}

// WriteBookmarks writes the bookmarks to the bookmarks.json file
func WriteBookmarks(bookmarks []Resource) {
	js, err := json.MarshalIndent(bookmarks, "", "\t")
	if err != nil {
		log.Fatal(err)
	}

	if err := os.WriteFile(OutputFile, js, 0664); err != nil {
		log.Fatal(err)
	}
}