package main

import (
	"flag"
	"fmt"

	"2h3ph3rd.github.io/tools/bookmarks"
)

func main() {
	fmt.Println("Hey there!")
	generateBookmarks := flag.Bool("bookmarks", false, "Generate bookmarks from the given urls")

	flag.Parse()

	switch {
	case *generateBookmarks:
		bookmarks.Generate()
	}
}
