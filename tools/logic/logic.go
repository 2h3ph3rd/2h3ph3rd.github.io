package logic

import (
	"io"
	"log"
	"net/http"
)

const DataFolder = "../../static/data"

func Get(url string) []byte {
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	return body
}
