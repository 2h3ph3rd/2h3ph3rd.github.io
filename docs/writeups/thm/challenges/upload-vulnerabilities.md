# Upload Vulnerabilities

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/5ebaa42422d2cf0aa103b2c77d02e100.png" width="128" />

## Task 1 - Getting Started

> Configure your hosts file for the task, as per the instructions above.

No answer needed

## Task 2 - Introduction

> Read and understand the above information.

No answer needed

## Task 3 - General Methodology

> Read the General Methodology

No answer needed

## Task 4 - Overwriting Existing Files

> What is the name of the image file which can be overwritten?

mountains.jpg

Look to the source code of the page and you will find the name of the background image.

<Image src="/images/writeups/thm/challenges/source.png" />

> Overwrite the image. What is the flag you receive?

THM{OTBiODQ3YmNjYWZhM2UyMmYzZDNiZjI5}

Upload a file with name `mountains.jpg`.

## Task 5 - Remote Code Execution

> Run a Gobuster scan on the website using the syntax from the screenshot above. What directory looks like it might be used for uploads?

```bash
gobuster dir -u http://shell.uploadvulns.thm -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

> What's the flag in the /var/www/ directory of the server?

## Task 6 - Filtering

> What is the traditionally predominant server-side scripting language?

> When validating by file extension, what would you call a list of accepted extensions (whereby the server rejects any extension not in the list)?

> [Research] What MIME type would you expect to see when uploading a CSV file?

## Task 7 - Bypassing Client-Side Filtering

> What is the flag in /var/www/?

## Task 8 - Bypassing Server-Side Filtering: File Extensions

> What is the flag in /var/www/?

## Task 9 - Bypassing Server-Side Filtering: Magic Numbers

> Grab the flag from /var/www/

## Task 10 - Example Methodology

> Read the example methodology

## Task 11 - Challenge

> Hack the machine and grab the flag from /var/www/

## Task 12 - Conclusion

> Room completed, and hosts file reverted!
