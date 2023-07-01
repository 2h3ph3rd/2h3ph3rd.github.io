package resource

import (
	"fmt"
	"log"
	"strconv"
	"time"

	"2h3ph3rd.github.io/tools/common"
	"2h3ph3rd.github.io/tools/scraper"
)

// addData adds the data to the resource
func (r *Resource) addData() {
	log.Printf("Creating new bookmark for %s\n", r.URL)

	if err := r.addFavicon(); err != nil {
		log.Fatal(err)
	}

	if err := r.addMetadata(); err != nil {
		log.Fatal(err)
	}

	r.CreatedAt = strconv.FormatInt(time.Now().UnixMilli(), 10)

	// If the bookmark doesn't have an image, add a random gradient
	if r.Image == "" {
		r.Image = "/images/gradients/" + common.GetRandomGradient()
	}
}

// addFavicon adds the favicon to the resource using Google's favicon service
func (r *Resource) addFavicon() error {
	if r.URL == "" {
		return common.ErrEmptyURL
	}

	domain := common.GetDomain(r.URL)
	r.Favicon = fmt.Sprintf("https://www.google.com/s2/favicons?domain=%s", domain)
	return nil
}

// addMetadata adds the meta tags data to the resource
func (r *Resource) addMetadata() error {
	var err error
	r.Metadata, err = scraper.Scrape(r.URL)
	if err != nil {
		return err
	}
	return nil
}
