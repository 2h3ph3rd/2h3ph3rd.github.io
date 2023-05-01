package blog

import (
	"encoding/json"
	"os"
)

func Generate() error {
	feed, err := GetFromFeed()
	if err != nil {
		return err
	}

	// Convert to json
	data, err := json.Marshal(feed)
	if err != nil {
		return err
	}

	if err := os.WriteFile("./static/data/blog.json", data, 0644); err != nil {
		return err
	}

	// Convert to json
	data, err = json.MarshalIndent(feed, "", "  ")
	if err != nil {
		return err
	}

	if err := os.WriteFile("./static/data/blog_pretty.json", data, 0644); err != nil {
		return err
	}

	return nil
}
