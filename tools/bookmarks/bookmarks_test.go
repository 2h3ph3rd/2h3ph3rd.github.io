package bookmarks

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCheckDuplicate(t *testing.T) {
	bookmarks := []Bookmark{
		{URL: "https://google.com"},
		{URL: "https://duckduckgo.com"},
		{URL: "https://ecosia.org"},
	}

	tests := []struct {
		name     string
		url      string
		expected int
	}{
		{"Present", "https://google.com", 0},
		{"Present", "https://duckduckgo.com", 1},
		{"Present", "https://ecosia.org", 2},
		{"Not present", "https://bing.com", -1},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			actual := CheckDuplicate(bookmarks, test.url)
			assert.Equal(t, test.expected, actual)
		})
	}
}
