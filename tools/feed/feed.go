package feed

import (
	"2h3ph3rd.github.io/tools/common"
	"2h3ph3rd.github.io/tools/scraper"
)

const FeedURL = "https://medium.com/feed/@2h3ph3rd"
const PageURL = "https://2h3ph3rd.medium.com"

type Feed []Article

type Article struct {
	URL string `json:"url"`
	scraper.Metadata
}

// Generate
func Generate() error {
	mediumFeed, err := getMediumFeed()
	if err != nil {
		return err
	}

	mediumFeed.clean()

	feed, err := NewFeedFromMediumFeed(mediumFeed)
	if err != nil {
		return err
	}

	common.WriteJson("./static/data/feed.json", feed)
	common.WriteJsonPretty("./static/data/feed_pretty.json", feed)
	return nil
}

func NewFeedFromMediumFeed(mediumFeed MediumFeed) (Feed, error) {
	f := Feed{}
	for _, item := range mediumFeed.Channel.Items {
		metadata, err := scraper.Scrape(item.Link)
		if err != nil {
			return f, err
		}

		article := Article{
			URL:      item.Link,
			Metadata: metadata,
		}

		f = append(f, article)
	}

	return f, nil
}
