package common

import (
	"io"
	"log"
	"math/rand"
	"net/http"
	"net/url"
	"os"
	"strings"
)

// Get returns the body of a GET request to the given URL.
func Get(url string) (body []byte, statusCode int, err error) {
	if url == "" {
		return body, statusCode, ErrEmptyURL
	}

	resp, err := http.Get(url)
	if err != nil {
		return body, statusCode, err
	}
	defer resp.Body.Close()

	body, err = io.ReadAll(resp.Body)
	if err != nil {
		return body, statusCode, err
	}

	return body, resp.StatusCode, err
}

// ExtractDomain extracts the domain from a URL.
func ExtractDomain(input string) (string, error) {
	u, err := url.Parse(input)
	if err != nil {
		return "", err
	}

	hostname := strings.TrimPrefix(u.Hostname(), "www.")

	return hostname, nil
}

// CheckImage checks if the given URL is a valid image.
func CheckImage(url string) bool {
	if url == "" {
		return false
	}

	resp, err := http.Get(url)
	if err != nil {
		return false
	}
	defer resp.Body.Close()

	return resp.StatusCode == http.StatusOK
}

// GetRandomGradient returns a random gradient from the list of gradients.
func GetRandomGradient() string {
	entries, err := os.ReadDir("./static/images/gradients")
	if err != nil {
		log.Fatal(err)
	}

	n := rand.Int() % (len(entries) - 2)

	return entries[n+2].Name()
}
