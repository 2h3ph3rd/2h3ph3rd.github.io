package main

import (
	"flag"

	"2h3ph3rd.github.io/tools/resources"
)

func main() {
	generateResources := flag.Bool("resources", false, "Generate resources from the given urls")

	flag.Parse()

	switch {
	case *generateResources:
		resources.Generate()
	}
}
