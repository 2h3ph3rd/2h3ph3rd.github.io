package feed

import (
	"encoding/xml"
	"regexp"

	"2h3ph3rd.github.io/tools/common"
)

const FeedURL = "https://medium.com/feed/@2h3ph3rd"
const PageURL = "https://2h3ph3rd.medium.com"

type Feed struct {
	Channel Channel `xml:"channel" json:"channel"`
}

type Channel struct {
	Title       string `xml:"title" json:"title"`
	Description string `xml:"description" json:"description"`
	Link        string `xml:"link" json:"link"`
	Image       string `xml:"image" json:"image"`
	Items       []Item `xml:"item" json:"items"`
}

type Item struct {
	Title       string   `xml:"title" json:"title"`
	Link        string   `xml:"link" json:"link"`
	PubDate     string   `xml:"pubDate" json:"pubDate"`
	Creator     string   `xml:"creator" json:"creator"`
	Category    []string `xml:"category" json:"categories"`
	Guid        string   `xml:"guid" json:"guid"`
	Description string   `xml:"encoded" json:"description"`
}

// Generate
func Generate() error {
	feed, err := getFeed()
	if err != nil {
		return err
	}

	feed.Clean()

	common.WriteJson("./static/data/feed.json", feed)
	common.WriteJsonPretty("./static/data/feed_pretty.json", feed)
	return nil
}

// Clean removes tags from the content
func (f *Feed) Clean() {
	re := regexp.MustCompile(`<[^>]*>`)
	for i := range f.Channel.Items {
		content := f.Channel.Items[i].Description
		content = re.ReplaceAllString(content, "")
		f.Channel.Items[i].Description = content
	}
}

// getFeed gets the feed from Medium blog
func getFeed() (feed Feed, err error) {
	// Get the feed
	result, status, err := common.Get(FeedURL)
	if status != 200 || err != nil {
		return feed, err
	}

	// Parse the feed
	if err := xml.Unmarshal(result, &feed); err != nil {
		return feed, err
	}

	return feed, err
}
