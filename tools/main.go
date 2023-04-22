package main

import (
	"flag"
	"fmt"

	"2h3ph3rd.github.io/tools/logic"
)

func main() {
	fmt.Println("Hey there!")
	addBookmarks := flag.Bool("add-bookmarks", false, "Generate bookmarks from the given urls")

	flag.Parse()

	switch {
	case *addBookmarks:
		logic.GenerateBookmarks()
	}
}
