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

// CheckResponseOK checks if the given URL returns an OK response.
func CheckResponseOK(url string) bool {
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

// GetRandomGradient returns an url to a random gradient.
func GetRandomGradient() string {
	// Read the available gradients
	entries, err := os.ReadDir("./static/images/gradients")
	if err != nil {
		log.Fatal(err)
	}

	// Generate random number between 0 and len(entries)
	i := rand.Int() % (len(entries))

	// Return the name of the gradient
	return entries[i].Name()
}
