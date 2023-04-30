package main

import (
	"flag"

	"2h3ph3rd.github.io/tools/blog"
	"2h3ph3rd.github.io/tools/resources"
)

func main() {
	generateResources := flag.Bool("resources", false, "Generate resources from the given urls")
	generateBlog := flag.Bool("blog", false, "Generate blog posts from medium feed")

	flag.Parse()

	switch {
	case *generateResources:
		resources.Generate()
	case *generateBlog:
		blog.Generate()
	}
}
