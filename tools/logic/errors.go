package logic

import "errors"

var (
	// ErrEmptyURL is returned when the URL is empty.
	ErrEmptyURL = errors.New("URL is empty")
)
