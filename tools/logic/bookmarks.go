package logic

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"gopkg.in/yaml.v3"
)

func GenerateBookmarks() {
	fmt.Println("Generating bookmarks")

	new := ReadNewBookmarks()
	bookmarks := ReadActualBookmarks()

	for _, b := range new {
		// Store only new bookmarks
		i := CheckDuplicate(bookmarks, b.URL)
		if i == -1 {
			bookmarks = append(bookmarks, NewBookmark(b.URL, b.Tags))
		} else {
			fmt.Printf("Bookmark with url %s already exists! Tags will be overwritten!\n", b.URL)
			bookmarks[i].Tags = b.Tags
		}
	}

	WriteBookmarks(bookmarks)

	fmt.Println("Data written to file successfully")
}

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

func ReadActualBookmarks() []Bookmark {
	var bookmarks []Bookmark

	data, err := os.ReadFile(DataFolder + "/bookmarks.json")
	if err != nil {
		log.Fatal(err)
	}

	if err := yaml.Unmarshal(data, &bookmarks); err != nil {
		log.Fatal(err)
	}

	return bookmarks
}

func CheckDuplicate(bookmarks []Bookmark, new string) int {
	for i, b := range bookmarks {
		if b.URL == new {
			return i
		}
	}

	return -1
}

func WriteBookmarks(bookmarks []Bookmark) {
	js, err := json.MarshalIndent(bookmarks, "", "\t")
	if err != nil {
		log.Fatal(err)
	}

	if err := os.WriteFile("../data/bookmarks.json", js, 0664); err != nil {
		log.Fatal(err)
	}
}
