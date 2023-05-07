package blog

import (
	"2h3ph3rd.github.io/tools/common"
)

func Generate() error {
	feed, err := GetFeed()
	if err != nil {
		return err
	}

	common.WriteJson("./static/data/blog.json", feed)
	common.WriteJsonPretty("./static/data/blog_pretty.json", feed)

	return nil
}
