# Clocky

A writeup for the room [Clocky](https://tryhackme.com/room/clocky) on TryHackMe.

> Time is an illusion.

<Image src={require("./logo.webp").default} height="256" />

### What is flag 1?

Starting with a nmap scan:

```sh
nmap -sS TARGET_IP
```

<Image src={require("./1-1-nmap.webp").default} />

We can look for more details:

```sh
nmap -A -p 80,8000,8080 TARGET_IP
```

<Image src={require("./1-2-nmap-details.webp").default} />

While trying to connect to both port 80 and 8000 returns a forbidden error, the website on port 8080 is directly accessible.

<Image src={require("./1-3-website.webp").default} />

There is nothing to do in this homepage, neither in the code.

We can try to scan with gobuster for interesting subpaths.

```sh
gobuster dir -e -u http://TARGET_IP -w /usr/share/wordlists/dirb/common.txt
```

<Image src={require("./1-4-gobuster-1.webp").default} />

```sh
gobuster dir -e -u http://TARGET_IP:8000 -w /usr/share/wordlists/dirb/common.txt
```

<Image src={require("./1-5-gobuster-2.webp").default} />

```sh
gobuster dir -e -u http://TARGET_IP:8080 -w /usr/share/wordlists/dirb/common.txt
```

<Image src={require("./1-6-gobuster-3.webp").default} />

Inside the robots.txt file under port 8000 we can find the first flag.

<Image src={require("./1-7-robots.webp").default} />

### What is flag 2?

A robots.txt file is used to tell web crawlers which pages or files the crawler can or can't request from your site.

Because of this, if something is blocked in the robots.txt file, it is usually interesting.

We can try to scan again with gobuster but this time searching for sql, zip, and baq files.

```sh
gobuster dir -e -u http://TARGET_IP:8000 -w /usr/share/wordlists/dirb/big.txt -x zip,sql,baq
```

<Image src={require("./2-1-gobuster-files.webp").default} />

Inside the the file index.zip we can find the second flag and a file called app.py.

<Image src={require("./2-2-index-zip.webp").default} />

### What is flag 3?

Inside the file app.py we can see the code of a Python Flask application.

Looking to the endpoints we can understand that the application is the one running on port 8080.

After doing some tests, the code seems old.

For example, if we try to access http://TARGET_IT:8080/password_reset?token=something we can see that we receive a wrong token response.

This is different from the code in the app.py file.

<Image src={require("./3-1-password-reset.webp").default} />
