package resource

import (
	"fmt"
	"log"
	"os"

	"gopkg.in/yaml.v3"
)

// getUpdateList returns the list of resources to be updated
func getUpdateList(new Resources, actual Resources) Resources {
	for _, b := range new {
		// Store only new resources
		given := b
		b.addData()

		// Given data have priority over the found ones

		// Overwrite the title
		if given.Title != "" {
			b.Title = given.Title
		}

		// Overwrite the description
		if given.Description != "" {
			b.Description = given.Description
		}

		i := checkDuplicate(actual, b.URL)
		if i == -1 {
			actual = append(actual, b)
		} else {
			log.Println("Bookmark already exists! Data will be overwritten!")
			actual[i] = b
		}

		fmt.Println() // new line between resources
	}

	return actual
}

// readNewResources reads the new bookmarks from the bookmarks.yml file
func readNewResources() Resources {
	var resources Resources

	data, err := os.ReadFile(InputFile)
	if err != nil {
		log.Fatal(err)
	}

	if err := yaml.Unmarshal(data, &resources); err != nil {
		log.Fatal(err)
	}

	return resources
}

// readActualResources reads the actual bookmarks from the bookmarks.json file
func readActualResources() Resources {
	var resources Resources

	data, err := os.ReadFile(OutputFile)
	if os.IsNotExist(err) {
		return resources
	} else if err != nil {
		log.Fatal(err)
	}

	if err := yaml.Unmarshal(data, &resources); err != nil {
		log.Fatal(err)
	}

	return resources
}
