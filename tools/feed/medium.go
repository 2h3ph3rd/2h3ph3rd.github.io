package feed

import (
	"encoding/xml"
	"regexp"

	"2h3ph3rd.github.io/tools/common"
)

type MediumFeed struct {
	Channel MediumChannel `xml:"channel" json:"channel"`
}

type MediumChannel struct {
	Title       string       `xml:"title" json:"title"`
	Description string       `xml:"description" json:"description"`
	Link        string       `xml:"link" json:"link"`
	Image       string       `xml:"image" json:"image"`
	Items       []MediumItem `xml:"item" json:"items"`
}

type MediumItem struct {
	Title       string   `xml:"title" json:"title"`
	Link        string   `xml:"link" json:"link"`
	PubDate     string   `xml:"pubDate" json:"pubDate"`
	Creator     string   `xml:"creator" json:"creator"`
	Category    []string `xml:"category" json:"categories"`
	Guid        string   `xml:"guid" json:"guid"`
	Description string   `xml:"encoded" json:"description"`
}

// clean removes tags from the description
func (f *MediumFeed) clean() {
	re := regexp.MustCompile(`<[^>]*>`)

	for i := range f.Channel.Items {
		f.Channel.Items[i].Description = re.ReplaceAllString(f.Channel.Items[i].Description, "")
	}
}

// getMediumFeed gets the feed from Medium blog
func getMediumFeed() (feed MediumFeed, err error) {
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
