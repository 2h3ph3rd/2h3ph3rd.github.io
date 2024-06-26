package common

import (
	"encoding/json"
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

// GetDomain get the domain from a URL.
func GetDomain(address string) string {
	u, err := url.Parse(address)
	if err != nil {
		return ""
	}

	hostname := strings.TrimPrefix(u.Hostname(), "www.")
	return hostname
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

// WriteJson writes a JSON file.
func WriteJson(path string, data interface{}) {
	content, err := json.Marshal(data)
	if err != nil {
		panic(err)
	}

	if err := os.WriteFile(path, content, 0644); err != nil {
		panic(err)
	}
}

// WriteJsonPretty writes a JSON file with indentation.
func WriteJsonPretty(path string, data interface{}) {
	content, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		panic(err)
	}

	if err := os.WriteFile(path, content, 0644); err != nil {
		panic(err)
	}
}

func FileExists(path string) bool {
	_, err := os.Stat(path)
	return !os.IsNotExist(err)
}
