package common

import (
	"net/http"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGet(t *testing.T) {
	tests := []struct {
		name       string
		input      string
		statusCode int
		err        error
	}{
		{"Valid url", "https://www.google.com", http.StatusOK, nil},
		{"Not found", "https://www.google.com/something", http.StatusNotFound, nil},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			body, statusCode, err := Get(test.input)
			assert.NoError(t, err)
			assert.NotEmpty(t, body)
			assert.Equal(t, test.statusCode, statusCode)
		})
	}
}

func TestExtractDomain(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{"Simple url", "https://www.google.com", "google.com"},
		{"Additional slash", "https://www.google.com/", "google.com"},
		{"Query param", "https://www.google.com/search?q=hello", "google.com"},
		{"Multiple query params", "https://www.google.com/search?q=hello&hl=en", "google.com"},
		{"Anchor", "https://www.google.com/search?q=hello&hl=en#test", "google.com"},
		{"Complex path", "https://example.com/api/users/1?type=guest", "example.com"},
		{"Multiple subdomains", "https://sub1.sub2.sub3.example.com/api/users/1?type=guest", "sub1.sub2.sub3.example.com"},
		{"Bad url", "not an url", ""},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			actual := GetDomain(test.input)
			assert.Equal(t, test.expected, actual)
		})
	}
}
