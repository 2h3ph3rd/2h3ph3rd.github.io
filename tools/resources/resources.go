package resources

import (
	"fmt"
	"log"
	"os"

	"2h3ph3rd.github.io/tools/common"
	"gopkg.in/yaml.v3"
)

var InputFile = "./tools/resources.yml"
var OutputFile = common.DataFolder + "/resources.json"

// Generate generates the bookmarks.json file from the bookmarks.yml file in input
func Generate() error {
	log.Println("Generating bookmarks")

	new := ReadNewResources()
	resources := ReadActualResources()

	fmt.Println() // new line before first resource

	for _, b := range new {
		// Store only new resources
		i := CheckDuplicate(resources, b.URL)

		b.AddData()
		if i == -1 {
			resources = append(resources, b)
		} else {
			log.Println("Bookmark already exists! Data will be overwritten!")
			resources[i] = b
		}

		fmt.Println() // new line between resources
	}

	if err := common.WriteJson("./static/data/resources.json", resources); err != nil {
		return err
	}

	if err := common.WriteJsonPretty("./static/data/resources_pretty.json", resources); err != nil {
		return err
	}

	log.Println("Data written to file successfully")
	return nil
}

// ReadNewResources reads the new bookmarks from the bookmarks.yml file
func ReadNewResources() []Resource {
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

// ReadActualResources reads the actual bookmarks from the bookmarks.json file
func ReadActualResources() []Resource {
	var resources []Resource

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

// CheckDuplicate checks if the new bookmark already exists in the bookmarks slice.
//
// If it exists, it returns the index of the bookmark otherwise it returns -1
func CheckDuplicate(resources []Resource, new string) int {
	domain := common.GetDomain(new)

	for i, b := range resources {
		if common.GetDomain(b.URL) == domain {
			return i
		}
	}

	return -1
}
