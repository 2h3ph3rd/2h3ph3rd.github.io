package resources

import (
	"fmt"
	"log"
	"strconv"
	"time"

	"2h3ph3rd.github.io/tools/common"
	"github.com/gocolly/colly/v2"
)

type Resource struct {
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

// AddData adds the data to the resource
func (r *Resource) AddData() {
	log.Printf("Creating new bookmark for %s\n", r.URL)

	if err := r.AddFavicon(); err != nil {
		log.Fatal(err)
	}

	if err := r.AddMetaTagsData(); err != nil {
		log.Fatal(err)
	}

	r.CreatedAt = strconv.FormatInt(time.Now().UnixMilli(), 10)

	// If the bookmark doesn't have an image, add a random gradient
	if r.Image == "" {
		r.Image = "/images/gradients/" + common.GetRandomGradient()
	}
}

// AddFavicon adds the favicon to the resource using Google's favicon service
func (r *Resource) AddFavicon() error {
	if r.URL == "" {
		return common.ErrEmptyURL
	}

	domain := common.GetDomain(r.URL)
	r.Favicon = fmt.Sprintf("https://www.google.com/s2/favicons?domain=%s", domain)
	return nil
}

// AddMetaTagsData adds the meta tags data to the resource
func (r *Resource) AddMetaTagsData() error {
	if r.URL == "" {
		return common.ErrEmptyURL
	}

	c := colly.NewCollector()

	c.OnHTML("meta", func(e *colly.HTMLElement) {
		switch e.Attr("property") {
		case "og:description":
			r.Description = e.Attr("content")
		case "og:image":
			r.Image = e.Attr("content")
			log.Println(r.Image)
			// If the image is a relative path, add the domain to it
			if r.Image[0] == "/"[0] {
				r.Image = r.URL + r.Image
			}
		case "og:title":
			r.Title = e.Attr("content")
		case "og:site_name":
			r.Site = e.Attr("content")
		}

		switch e.Attr("name") {
		case "description":
			r.Description = e.Attr("content")
		case "twitter:description", "og:description":
			r.Description = e.Attr("content")
		case "twitter:image", "twitter:image:src", "og:image":
			r.Image = e.Attr("content")
			// If the image is a relative path, add the domain to it
			if r.Image[0] == "/"[0] {
				r.Image = r.URL + r.Image
			}
		case "twitter:title", "og:title":
			r.Title = e.Attr("content")
		case "twitter:site", "og:site_name":
			r.Site = e.Attr("content")
		}
	})

	c.OnRequest(func(*colly.Request) {
		log.Println("Visiting the website...")
	})

	c.OnScraped(func(*colly.Response) {
		log.Println("Finished the crawling!")
		if r.Image != "" && !common.CheckResponseOK(r.Image) {
			log.Println(r.Image)
			r.Image = ""
		}
	})

	c.Visit(r.URL)
	c.Wait()
	return nil
}
