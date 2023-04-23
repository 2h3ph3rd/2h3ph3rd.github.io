package bookmarks

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"2h3ph3rd.github.io/tools/common"
	"gopkg.in/yaml.v3"
)

// Generate generates the bookmarks.json file from the bookmarks.yml file in input
func Generate() {
	fmt.Println("Generating bookmarks")

	new := ReadNewBookmarks()
	bookmarks := ReadActualBookmarks()

	for _, b := range new {
		// Store only new bookmarks
		i := CheckDuplicate(bookmarks, b.URL)
		if i == -1 {
			bookmarks = append(bookmarks, NewBookmark(b.URL, b.Category, b.Tags))
		} else {
			fmt.Printf("Bookmark with url %s already exists! Tags will be overwritten!\n", b.URL)
			bookmarks[i].Tags = b.Tags
		}
	}

	WriteBookmarks(bookmarks)

	fmt.Println("Data written to file successfully")
}

// ReadNewBookmarks reads the new bookmarks from the bookmarks.yml file
func ReadNewBookmarks() []Bookmark {
	var bookmarks []Bookmark

	data, err := os.ReadFile("./bookmarks.yml")
	if err != nil {
		log.Fatal(err)
	}

	if err := yaml.Unmarshal(data, &bookmarks); err != nil {
		log.Fatal(err)
	}

	return bookmarks
}

// ReadActualBookmarks reads the actual bookmarks from the bookmarks.json file
func ReadActualBookmarks() []Bookmark {
	var bookmarks []Bookmark

	data, err := os.ReadFile(common.DataFolder + "/bookmarks.json")
	if err != nil {
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
func CheckDuplicate(bookmarks []Bookmark, new string) int {
	for i, b := range bookmarks {
		if b.URL == new {
			return i
		}
	}

	return -1
}

// WriteBookmarks writes the bookmarks to the bookmarks.json file
func WriteBookmarks(bookmarks []Bookmark) {
	js, err := json.MarshalIndent(bookmarks, "", "\t")
	if err != nil {
		log.Fatal(err)
	}

	if err := os.WriteFile("../data/bookmarks.json", js, 0664); err != nil {
		log.Fatal(err)
	}
}