package logic

import (
	"io"
	"net/http"
	"net/url"
	"strings"
)

const DataFolder = "../../static/data"

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
