package resource

import (
	"strings"

	"2h3ph3rd.github.io/tools/common"
)

// checkDuplicate checks if the new bookmark already exists in the bookmarks slice.
//
// If it exists, it returns the index of the bookmark otherwise it returns -1
func checkDuplicate(resources Resources, new string) int {
	newDomain := common.GetDomain(new)

	if newDomain == "github.com" {
		return checkDuplicateGithub(resources, new)
	}

	for i, b := range resources {
		if common.GetDomain(b.URL) == newDomain {
			return i
		}
	}

	return -1
}

// checkDuplicateGithub checks if the new resource already exists in the bookmarks slice.
// It works only for Github links by checking username and repository name.
func checkDuplicateGithub(resources Resources, new string) int {
	for i, b := range resources {
		// Check only for Github links
		if common.GetDomain(b.URL) != "github.com" {
			continue
		}

		newSplit := strings.Split(new, "/")
		bSplit := strings.Split(b.URL, "/")

		// Avoid out of range errors
		if len(newSplit) < 4 || len(bSplit) < 4 {
			continue
		}

		if newSplit[2] == bSplit[2] && newSplit[3] == bSplit[3] {
			return i
		}
	}
	return -1
}
