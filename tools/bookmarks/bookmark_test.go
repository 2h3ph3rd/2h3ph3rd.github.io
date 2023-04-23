package bookmarks

import (
	"testing"

	"2h3ph3rd.github.io/tools/common"
	"github.com/stretchr/testify/assert"
)

func TestAddFavicon(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
		err      error
	}{
		{"Valid url", "https://google.com", "google.com", nil},
		{"Empty url", "", "", common.ErrEmptyURL},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			bookmark := Bookmark{URL: test.input}
			err := bookmark.AddFavicon()

			assert.Contains(t, test.expected, bookmark.Favicon)
			if test.err != nil {
				assert.EqualError(t, err, test.err.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}

func TestAddMetaTagsData(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
		err      error
	}{
		{"Empty url", "", "", common.ErrEmptyURL},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			bookmark := Bookmark{URL: test.input}
			err := bookmark.AddMetaTagsData()

			assert.Contains(t, test.expected, bookmark.Favicon)
			if test.err != nil {
				assert.EqualError(t, err, test.err.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}
