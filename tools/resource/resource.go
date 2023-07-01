package resource

import (
	"fmt"
	"log"

	"2h3ph3rd.github.io/tools/common"
	"2h3ph3rd.github.io/tools/scraper"
)

type Resources []Resource

type Resource struct {
	URL       string   `json:"url" yaml:"url"`
	Category  string   `json:"category" yaml:"category"`
	Tags      []string `json:"tags,omitempty" yaml:"tags"`
	Favicon   string   `json:"favicon,omitempty"`
	CreatedAt string   `json:"created_at,omitempty"`
	scraper.Metadata
}

var InputFile = "./tools/resources.yml"
var OutputFile = common.DataFolder + "/resources.json"

// Generate generates the new resources.json output file from the resources.yml as input file
func Generate() error {
	log.Println("Generating bookmarks")

	new := readNewResources()
	actual := readActualResources()
	resources := getUpdateList(new, actual)

	fmt.Println() // new line before first resource

	common.WriteJson("./static/data/resources.json", resources)
	common.WriteJsonPretty("./static/data/resources_pretty.json", resources)
	log.Println("Data written to file successfully")
	return nil
}
