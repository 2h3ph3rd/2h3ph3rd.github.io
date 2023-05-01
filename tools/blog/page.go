package blog

const PageURL = "https://2h3ph3rd.medium.com"

type Post struct {
	Title       string `xml:"title"`
	Description string `xml:"description"`
	Link        string `xml:"link"`
	PubDate     string `xml:"pubDate"`
	Creator     string `xml:"creator"`
	Guid        string `xml:"guid"`
	Content     string `xml:"encoded"`
}

// func GetFromPage() ([]Post, error) {

// }

// // ScrapePage adds the meta tags data to the resource
// func ScrapePage() error {
// 	if r.URL == "" {
// 		return common.ErrEmptyURL
// 	}

// 	c := colly.NewCollector()

// 	c.OnHTML("meta", func(e *colly.HTMLElement) {
// 		switch e.Attr("property") {
// 		case "og:description":
// 			r.Description = e.Attr("content")
// 		case "og:image":
// 			r.Image = e.Attr("content")
// 			log.Println(r.Image)
// 			// If the image is a relative path, add the domain to it
// 			if r.Image[0] == "/"[0] {
// 				r.Image = r.URL + r.Image
// 			}
// 		case "og:title":
// 			r.Title = e.Attr("content")
// 		case "og:site_name":
// 			r.Site = e.Attr("content")
// 		}

// 		switch e.Attr("name") {
// 		case "description":
// 			r.Description = e.Attr("content")
// 		case "twitter:description", "og:description":
// 			r.Description = e.Attr("content")
// 		case "twitter:image", "twitter:image:src", "og:image":
// 			r.Image = e.Attr("content")
// 			// If the image is a relative path, add the domain to it
// 			if r.Image[0] == "/"[0] {
// 				r.Image = r.URL + r.Image
// 			}
// 		case "twitter:title", "og:title":
// 			r.Title = e.Attr("content")
// 		case "twitter:site", "og:site_name":
// 			r.Site = e.Attr("content")
// 		}
// 	})

// 	c.OnRequest(func(*colly.Request) {
// 		fmt.Println("Visiting the website...")
// 	})

// 	c.OnScraped(func(*colly.Response) {
// 		fmt.Println("Finished the crawling!")
// 		if r.Image != "" && !common.CheckResponseOK(r.Image) {
// 			log.Println(r.Image)
// 			r.Image = ""
// 		}
// 	})

// 	c.Visit(r.URL)

// 	c.Wait()

// 	return nil
// }
