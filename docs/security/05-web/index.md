# Web

## Analyzing a web application

There are different ways to analyze a web application. Sometimes, you could even have access to the source code but in general, at least the client side is available. You can use tools like your browser to inspect it.

### Browser tools

Using the browser it is possible to inspect everything on client side: HTML code, stylesheets, cookies, local storage, Javascript files, public assets, etc.

Some of the most common functions:

- View source: look to the source code of a web page.
- Inspector: inspect elements inside the pages and make changes to them.
- Debugger: inspect and add breakpoint to JS code.
- Network: see all the network requests made.
- Storage: look to local storage and cookies used by the page.

### Common public files

`robots.txt`

It is a file used by a website to define which page a search engine should track and which should not. Sometimes, sensitive paths are placed here to keep them from being tracked.

`sitemap.xml`

It is a list of all the pages that a website wants to be tracked on a search engine

`favicon.ico`

It is the tab icon used for the website. By default, frameworks have their own logo that can be used to recognize them.

### Additional headers

It is possible to look to the headers returned by a web server to find possible useful information.

```
curl -v https://website.com
```

### Google dorking

| Example          | Meaning                            |
| ---------------- | ---------------------------------- |
| site:website.com | filter results by specific website |
| inurl:id         | filters results by word in the URL |
| filetype:pdf     | filters results by file extension  |
| intitle:login    | filters results by word in title   |

Special characters

| Character | Example             | Meaning                                 |
| --------- | ------------------- | --------------------------------------- |
| \*        | site:\*.website.com | any possible alphanumeric strings       |
| -         | -site:website.com   | used before an operator to obtain a not |
