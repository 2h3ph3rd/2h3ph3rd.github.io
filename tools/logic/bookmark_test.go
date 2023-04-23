package logic

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAddFavicon(t *testing.T) {
	tests := []struct {
		input    string
		expected string
		err      error
	}{
		{"", "", ErrEmptyURL},
		{"https://google.com", "google.com", nil},
	}

	for _, test := range tests {
		bookmark := Bookmark{URL: test.input}
		err := bookmark.AddFavicon()

		assert.Contains(t, test.expected, bookmark.Favicon)
		if test.err != nil {
			assert.EqualError(t, err, test.err.Error())
		} else {
			assert.NoError(t, err)
		}
	}
}

func TestAddMetaTagsData(t *testing.T) {
	tests := []struct {
		input    string
		expected string
		err      error
	}{
		{"", "", ErrEmptyURL},
	}

	for _, test := range tests {
		bookmark := Bookmark{URL: test.input}
		err := bookmark.AddMetaTagsData()

		assert.Contains(t, test.expected, bookmark.Favicon)
		if test.err != nil {
			assert.EqualError(t, err, test.err.Error())
		} else {
			assert.NoError(t, err)
		}
	}
}
