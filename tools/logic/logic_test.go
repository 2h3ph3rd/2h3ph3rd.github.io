package logic

import (
	"fmt"
	"net/http"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGet(t *testing.T) {
	tests := []struct {
		input      string
		statusCode int
		err        error
	}{
		{"https://www.google.com", http.StatusOK, nil},
		{"https://www.google.com/something", http.StatusNotFound, nil},
	}

	for _, test := range tests {
		body, statusCode, err := Get(test.input)
		msg := fmt.Sprintf("Get(%s) =  _, %d, %v; want _, %d, %v", test.input, statusCode, err, test.statusCode, test.err)
		assert.NoError(t, err, msg)
		assert.NotEmpty(t, body, msg)
		assert.Equal(t, test.statusCode, statusCode, msg)
	}
}

func TestExtractDomain(t *testing.T) {
	tests := []struct {
		input    string
		expected string
		err      error
	}{
		{"https://www.google.com", "google.com", nil},
		{"https://www.google.com/", "google.com", nil},
		{"https://www.google.com/search?q=hello", "google.com", nil},
		{"https://www.google.com/search?q=hello&hl=en", "google.com", nil},
		{"https://www.google.com/search?q=hello&hl=en#test", "google.com", nil},
		{"https://example.com/api/users/1?type=guest", "example.com", nil},
	}

	for _, test := range tests {
		actual, err := ExtractDomain(test.input)
		msg := fmt.Sprintf("ExtractDomain(%s) = %s, %s; want %s, %s", test.input, actual, err, test.expected, test.err)
		assert.NoError(t, err, msg)
		assert.Equal(t, test.expected, actual, msg)
	}
}
