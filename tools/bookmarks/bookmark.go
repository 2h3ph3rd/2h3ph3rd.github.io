package bookmarks

import (
	"fmt"
	"log"
	"strconv"
	"time"

	"2h3ph3rd.github.io/tools/common"
	"github.com/gocolly/colly/v2"
)

type Bookmark struct {
	URL         string   `json:"url" yaml:"url"`
	Category    string   `json:"category" yaml:"category"`
	Tags        []string `json:"tags,omitempty" yaml:"tags"`
	Title       string   `json:"title,omitempty"`
	Site        string   `json:"site_name,omitempty"`
	Description string   `json:"description,omitempty"`
	Image       string   `json:"image,omitempty"`
	Favicon     string   `json:"favicon,omitempty"`
	CreatedAt   string   `json:"created_at,omitempty"`
}

// NewBookmark creates a new bookmark from the given url and tags
func NewBookmark(url string, category string, tags []string) Bookmark {
	fmt.Printf("Creating new bookmark for %s\n", url)

	b := Bookmark{
		URL:      url,
		Tags:     tags,
		Category: category,
	}

	if err := b.AddFavicon(); err != nil {
		log.Fatal(err)
	}

	if err := b.AddMetaTagsData(); err != nil {
		log.Fatal(err)
	}

	b.CreatedAt = strconv.FormatInt(time.Now().UnixMilli(), 10)

	return b
}

// AddFavicon adds the favicon to the bookmark using Google's favicon service
func (b *Bookmark) AddFavicon() error {
	if b.URL == "" {
		return common.ErrEmptyURL
	}

	domain, err := common.ExtractDomain(b.URL)
	if err != nil {
		return err
	}

	b.Favicon = fmt.Sprintf("https://www.google.com/s2/favicons?domain=%s", domain)

	if !common.CheckImage(b.Favicon) {
		b.Favicon = ""
	}

	return nil
}

// AddMetaTagsData adds the meta tags data to the bookmark
func (b *Bookmark) AddMetaTagsData() error {
	if b.URL == "" {
		return common.ErrEmptyURL
	}

	c := colly.NewCollector()

	c.OnHTML("meta", func(e *colly.HTMLElement) {
		switch e.Attr("property") {
		case "og:description":
			b.Description = e.Attr("content")
		case "og:image":
			b.Image = e.Attr("content")
			// If the image is a relative path, add the domain to it
			if b.Image[0] == "/"[0] {
				b.Image = b.URL + b.Image
			}
		case "og:title":
			b.Title = e.Attr("content")
		case "og:site_name":
			b.Site = e.Attr("content")
		}

		switch e.Attr("name") {
		case "description":
			b.Description = e.Attr("content")
		case "twitter:description":
			b.Description = e.Attr("content")
		case "twitter:image":
			b.Image = e.Attr("content")
		case "twitter:title":
			b.Title = e.Attr("content")
		case "twitter:site":
			b.Site = e.Attr("content")
		}
	})

	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting the website...")
	})

	c.OnScraped(func(r *colly.Response) {
		fmt.Println("Finished the crawling!")
		if !common.CheckImage(b.Image) {
			b.Image = ""
		}

	})

	c.Visit(b.URL)

	c.Wait()

	return nil
}
