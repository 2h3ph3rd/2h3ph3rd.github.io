package scraper

import (
	"log"

	"2h3ph3rd.github.io/tools/common"
	"github.com/gocolly/colly"
)

type Metadata struct {
	Title       string `json:"title,omitempty"`
	Description string `json:"description,omitempty"`
	Image       string `json:"image,omitempty"`
}

// Scrape returns the metadata of the given URL
func Scrape(url string) (Metadata, error) {
	m := Metadata{}

	if url == "" {
		return m, common.ErrEmptyURL
	}

	c := colly.NewCollector()

	c.OnHTML("meta", func(e *colly.HTMLElement) {
		switch e.Attr("property") {
		case "og:description":
			m.Description = e.Attr("content")
		case "og:image":
			m.Image = e.Attr("content")
			// If the image is a relative path, add the domain to it
			if m.Image[0] == "/"[0] {
				m.Image = url + m.Image
			}
		case "og:title":
			m.Title = e.Attr("content")
		}

		switch e.Attr("name") {
		case "description":
			m.Description = e.Attr("content")
		case "twitter:description", "og:description":
			m.Description = e.Attr("content")
		case "twitter:image", "twitter:image:src", "og:image":
			m.Image = e.Attr("content")
			// If the image is a relative path, add the domain to it
			if m.Image[0] == "/"[0] {
				m.Image = url + m.Image
			}
		case "twitter:title", "og:title":
			m.Title = e.Attr("content")
		}
	})

	c.OnRequest(func(*colly.Request) {
		log.Println("Visiting the website...")
	})

	c.OnScraped(func(*colly.Response) {
		log.Println("Finished the crawling!")
		if m.Image != "" && !common.CheckResponseOK(m.Image) {
			m.Image = ""
		}
	})

	c.Visit(url)
	c.Wait()
	return m, nil
}
