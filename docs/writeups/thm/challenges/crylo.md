# Crylo

Learn about the CryptoJS library and JavaScript-based client-side encryption and decryption.

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/af0e7c2109847033d31d273498657526.png" width="128" />

## Task 1 - Enumeration

> How many ports are open?

Start the machine and scan the ports with nmap.

```bash
nmap -sS -p- -v [IP]
```

<Image src="/images/writeups/thm/challenges/crylo/nmap.png" />

> What is the 403/forbidden web page?

Open the web page in the browser and check the source code.

Other pages return a 404 error.

<Image src="/images/writeups/thm/challenges/crylo/homepage.png" />

Nothing seems to be interesting, so we can try to enumerate the website with gobuster.

It is important to set the `-s` flag to search for at least the 403 status code.

```bash
gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,css,js -q -s "200,403" -u [URL]
```

<Image src="/images/writeups/thm/challenges/crylo/gobuster.png" />

## Task 2 - Injection

> What is the name of the first username?

It is a common name for the default user of a web application.

> What is the password for the above user?

We can try to login with common credentials, but nothing tried works.

<Image src="/images/writeups/thm/challenges/crylo/login.png" />

Looking to the response we can see that the final text cannot be parsed directly.

However, the client understands it perfectly and shows the result.

It is possible to look to the code to find how it works.

<Image src="/images/writeups/thm/challenges/crylo/code-login.png" />

The client decrypts the response using the CryptoJS library.

The response is encrypted using the AES algorithm with the CBC mode and clear text as key and IV.

Using Cyberchef it is possible to convert the response and see its content.

<Image src="/images/writeups/thm/challenges/crylo/decrypt-response.png" />

## Task 3 - Encryption

> Which library is used for encryption and decryption?

> Which JSON parameter was used to validate the pin?

> Which encryption method is used?

## Task 4 - Forbidden Bypass

> What extra header can be used to bypass the page?

> What extra header can be used to bypass the page?

## Task 5 - Exploitation

> What is the name of the vulnerability used to gain system access?

> What is the current system’s username?

> What is the user flag?

> Which user is part of the sudo group?

> What is the password for the above user?

> What is the root flag?
