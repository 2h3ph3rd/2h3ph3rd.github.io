package blog

import (
	"encoding/json"
	"log"

	"2h3ph3rd.github.io/tools/common"
)

const FeedURL = "https://medium.com/feed/@2h3ph3rd"

type Feed struct {
	Channel Channel `xml:"channel" json:"channel"`
}

type Channel struct {
	Title       string `xml:"title" json:"title"`
	Description string `xml:"description" json:"description"`
	Link        string `xml:"link" json:"link"`
	Image       string `xml:"image" json:"image"`
	Items       []Item `xml:"item" json:"item"`
}

type Item struct {
	Title       string   `xml:"title" json:"title"`
	Description string   `xml:"description"xml:"description"`
	Link        string   `xml:"link" json:"link"`
	PubDate     string   `xml:"pubDate" json:"pubDate"`
	Creator     string   `xml:"creator" json:"creator"`
	Category    []string `xml:"category" json:"categories"`
	Guid        string   `xml:"guid" json:"guid"`
	Content     string   `xml:"encoded" json:"encoded"`
}

func GetFromFeed() (feed Feed, err error) {
	// Get the feed
	result, status, err := common.Get(FeedURL)
	if status != 200 || err != nil {
		log.Fatalln("Cannot read medium feed", err)
		return feed, err
	}

	// Parse the feed
	if err := json.Unmarshal(result, &feed); err != nil {
		return feed, err
	}

	return feed, err
}
