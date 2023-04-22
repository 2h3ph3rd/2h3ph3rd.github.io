package logic

import (
	"fmt"

	"github.com/gocolly/colly/v2"
)

type Bookmark struct {
	URL       string    `json:"url" yaml:"url"`
	Tags      []string  `json:"tags,omitempty" yaml:"tags"`
	OpenGraph OpenGraph `json:"open_graph,omitempty"`
	Twitter   Twitter   `json:"twitter,omitempty"`
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

func NewBookmark(url string, tags []string) Bookmark {
	fmt.Printf("Creating new bookmark for %s\n", url)

	c := colly.NewCollector()

	b := Bookmark{
		URL:  url,
		Tags: tags,
	}

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

	c.Visit(url)

	c.Wait()

	return b
}
