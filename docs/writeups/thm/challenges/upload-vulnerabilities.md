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

<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/source.png" />

> Overwrite the image. What is the flag you receive?

THM{OTBiODQ3YmNjYWZhM2UyMmYzZDNiZjI5}

Upload a file with name `mountains.jpg`.

## Task 5 - Remote Code Execution

> Run a Gobuster scan on the website using the syntax from the screenshot above. What directory looks like it might be used for uploads?

/resources

Run this command to find the directory:

```bash
gobuster dir -u http://shell.uploadvulns.thm -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

> What's the flag in the /var/www/ directory of the server?

THM{YWFhY2U3ZGI4N2QxNmQzZjk0YjgzZDZk}

Upload a file with name `shell.php` and content [https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php](https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php).

Remember to change IP and port inside the file, and to start a listener with `nc -lvnp PORT`.

To check your IP you can use:

```bash
ifconfig
```

## Task 6 - Filtering

> What is the traditionally predominant server-side scripting language?

PHP

> When validating by file extension, what would you call a list of accepted extensions (whereby the server rejects any extension not in the list)?

Whitelist

> [Research] What MIME type would you expect to see when uploading a CSV file?

text/csv

## Task 7 - Bypassing Client-Side Filtering

> What is the flag in /var/www/?

THM{NDllZDQxNjJjOTE0YWNhZGY3YjljNmE2}

With Burp remove the line containing the script ~client-side-filter.js`.
Upload the code for the reverse shell as before.

<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/gobuster-1.png" />

<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/burp.png" />

## Task 8 - Bypassing Server-Side Filtering: File Extensions

> What is the flag in /var/www/?

THM{MGEyYzJiYmI3ODIyM2FlNTNkNjZjYjFl}

Run Gobuster to find the directories `privacy` and `assets`.

Try to upload a simple file and see where it is stored. You will find that it is stored in `privacy` with a randomized name.

Now, you can upload the reverse shell code as before, but you will need to change the extension to `.php5`.

```bash
gobuster dir -u http://annex.uploadvulns.thm -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/gobuster-2.png" />
<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/privacy-folder.png" />

## Task 9 - Bypassing Server-Side Filtering: Magic Numbers

> Grab the flag from /var/www/

THM{MWY5ZGU4NzE0ZDlhNjE1NGM4ZThjZDJh}

Using hexedit to add at the beggining the magic number for GIF files: `47 49 46 38 37 61`.

In this case, uploaded files are stored under `graphics` directory.

There isn't anymore active the directory indexing so you will have to put the complete url like `http://magic.uploadvulns.thm/graphics/script.php`.

```bash
gobuster dir -u http://magic.uploadvulns.thm -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/gobuster-3.png" />

## Task 10 - Example Methodology

> Read the example methodology

No answer needed

## Task 11 - Challenge

> Hack the machine and grab the flag from /var/www/

THM{NzRlYTUwNTIzODMwMWZhMzBiY2JlZWU2}

First, enumerate the directories using Gobuster.

```bash
gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://jewel.uploadvulns.thm
```

We can find the directories: assets, content, modules, and admin.

The `admin` endpoint allows to run modules, `assets` contains static files, and `content` contains the files uploaded.

Only jpg files are allowed to be uploaded.
The filename is randomized using three capital letters like `XAD.jpg`.

Once you have upload a file, to find it you need to enumerate using the given list.

```bash
gobuster dir -w ./list.txt -x .jpg -u http://jewel.uploadvulns.thm/content
```

<Image src="/images/writeups/thm/challenges/upload-vulnerabilities/random-file-names.png" />

By looking inside a response from the server, you can see that there is the header "X-Powered-By: Express".

We need a nodejs reverse shell. You can find one here:

[https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md#nodejs](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md#nodejs)

Once the file is uploaded and the name is found, you can run the script by going in the `admin` endpoint.
There is written that modules are run from the `/modules` directory.
It is enough to insert something like `../content/AAA.jpg` where AAA is the name of the file.

Remember to start a listener with `nc -lvnp PORT`.

## Task 12 - Conclusion

> Room completed, and hosts file reverted!

No answer needed
