package blog

import (
	"encoding/json"
	"encoding/xml"
	"log"
	"os"

	"2h3ph3rd.github.io/tools/common"
)

type Feed struct {
	Channel Channel `xml:"channel"`
}

type Channel struct {
	Title       string `xml:"title"`
	Description string `xml:"description"`
	Link        string `xml:"link"`
	Image       string `xml:"image"`
	Items       []Item `xml:"item"`
}

type Item struct {
	Title       string   `xml:"title"`
	Description string   `xml:"description"`
	Link        string   `xml:"link"`
	PubDate     string   `xml:"pubDate"`
	Creator     string   `xml:"creator"`
	Category    []string `xml:"category"`
	Guid        string   `xml:"guid"`
	Content     string   `xml:"encoded"`
}

const FeedURL = "https://medium.com/feed/@2h3ph3rd"

func Generate() {
	// Get the feed
	result, status, err := common.Get(FeedURL)
	if status != 200 || err != nil {
		log.Fatalln("Cannot read medium feed", err)
	}

	// Parse the feed
	feed := Feed{}
	if err := xml.Unmarshal(result, &feed); err != nil {
		log.Fatalln("Cannot parse feed", err)
	}

	// Convert to json
	data, err := json.Marshal(feed)
	if err != nil {
		log.Fatalln("Cannot convert feed to json", err)
	}

	if err := os.WriteFile("./static/data/blog.json", data, 0644); err != nil {
		log.Fatalln("Cannot write the blog file", err)
	}

	// Convert to json
	data, err = json.MarshalIndent(feed, "", "  ")
	if err != nil {
		log.Fatalln("Cannot convert feed to json", err)
	}

	if err := os.WriteFile("./static/data/blog_pretty.json", data, 0644); err != nil {
		log.Fatalln("Cannot write the blog file", err)
	}
}
