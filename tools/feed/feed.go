package feed

import (
	"encoding/json"

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
	Title    string   `xml:"title" json:"title"`
	Link     string   `xml:"link" json:"link"`
	PubDate  string   `xml:"pubDate" json:"pubDate"`
	Creator  string   `xml:"creator" json:"creator"`
	Category []string `xml:"category" json:"categories"`
	Guid     string   `xml:"guid" json:"guid"`
	Content  string   `xml:"encoded" json:"encoded"`
}

// Generate
func Generate() error {
	// Get the feed
	result, status, err := common.Get(FeedURL)
	if status != 200 || err != nil {
		return err
	}

	// Parse the feed
	feed := Feed{}
	if err := json.Unmarshal(result, &feed); err != nil {
		return err
	}

	common.WriteJson("./static/data/blog.json", feed)
	common.WriteJsonPretty("./static/data/blog_pretty.json", feed)
	return nil
}
