package bookmarks

import (
	"fmt"
	"log"
	"net/http"

	"2h3ph3rd.github.io/tools/common"
	"github.com/gocolly/colly/v2"
)

type Bookmark struct {
	URL       string    `json:"url" yaml:"url"`
	Category  string    `json:"category" yaml:"category"`
	Tags      []string  `json:"tags,omitempty" yaml:"tags"`
	OpenGraph OpenGraph `json:"open_graph,omitempty"`
	Twitter   Twitter   `json:"twitter,omitempty"`
	Favicon   string    `json:"favicon,omitempty"`
}

type OpenGraph struct {
	Title       string `json:"title,omitempty"`
	SiteName    string `json:"site_name,omitempty"`
	Description string `json:"description,omitempty"`
	Image       string `json:"image,omitempty"`
}

type Twitter struct {
	Title       string `json:"title,omitempty"`
	Site        string `json:"site,omitempty"`
	Description string `json:"description,omitempty"`
	Image       string `json:"image,omitempty"`
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

	_, statusCode, err := common.Get(b.Favicon)
	if err != nil {
		return err
	} else if statusCode != http.StatusOK {
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
			b.OpenGraph.Description = e.Attr("content")
		case "og:image":
			b.OpenGraph.Image = e.Attr("content")
		case "og:title":
			b.OpenGraph.Title = e.Attr("content")
		case "og:site_name":
			b.OpenGraph.SiteName = e.Attr("content")
		case "twitter:description":
			b.Twitter.Description = e.Attr("content")
		case "twitter:image":
			b.Twitter.Image = e.Attr("content")
		case "twitter:title":
			b.Twitter.Title = e.Attr("content")
		case "twitter:site":
			b.Twitter.Site = e.Attr("content")
		}
	})

	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL)
	})

	c.OnScraped(func(r *colly.Response) {
		fmt.Println("Finished", r.Request.URL)
	})

	c.Visit(b.URL)

	c.Wait()

	return nil
}
