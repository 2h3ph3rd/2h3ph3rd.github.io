package main

import (
	"flag"
	"log"

	"2h3ph3rd.github.io/tools/feed"
	"2h3ph3rd.github.io/tools/resources"
)

func main() {
	generateResources := flag.Bool("resources", false, "Generate resources from the given urls")
	generateBlog := flag.Bool("feed", false, "Generate blog feed from medium rss feed")

	flag.Parse()

	switch {
	case *generateResources:
		if err := resources.Generate(); err != nil {
			log.Fatal(err)
		}
	case *generateBlog:
		if err := feed.Generate(); err != nil {
			log.Fatal(err)
		}
	default:
		log.Fatal("No command specified, use --help for more information")
	}
}
