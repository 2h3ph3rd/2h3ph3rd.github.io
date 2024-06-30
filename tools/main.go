package main

import (
	"flag"
	"log"

	"2h3ph3rd.github.io/tools/commands"
	"2h3ph3rd.github.io/tools/feed"
	"2h3ph3rd.github.io/tools/resource"
)

func main() {
	generateResources := flag.Bool("resources", false, "Generate resources from the given urls")
	generateBlog := flag.Bool("feed", false, "Generate blog feed from medium rss feed")
	convert := flag.Bool("convert", false, "Convert images in docs folder to avif format")

	flag.Parse()

	switch {
	case *generateResources:
		if err := resource.Generate(); err != nil {
			log.Fatal(err)
		}
	case *generateBlog:
		if err := feed.Generate(); err != nil {
			log.Fatal(err)
		}
	case *convert:
		if err := commands.Convert(); err != nil {
			log.Fatal(err)
		}
	default:
		log.Fatal("No command specified, use --help for more information")
	}
}
