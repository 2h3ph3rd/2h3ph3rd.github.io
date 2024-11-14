# NanoCherryCTF

A writeup for the room [NanoCherryCTF](https://tryhackme.com/r/room/nanocherryctf) on TryHackMe.

> Explore a double-sided site and escalate to root!

<Image src={require("./logo.webp").default} height="256" />

## Gain access to Molly's Dashboard. What is the flag?

We can start by running a nmap scan to see what ports are open.

```sh
nmap -sC TARGET_IP
```

<Image src={require("./1-nmap.webp").default} />

The scan reveals that port 22 and 80 are open. We can visit the site and see what it has to offer.

<Image src={require("./2-home.webp").default} />

The site is only a static page with no login page and most of the links are fake.

There is a video on the page that gives a hint suggesting there is an hidden subdomain.

<Image src={require("./3-home-video.webp").default} />

We can run a gobuster scan to see if there are any hidden directories or subdomains.

Remember to change your hosts file to include the target IP and the domain name before running the scan.

```sh
vi /etc/hosts
```

<Image src={require("./4-hosts.webp").default} />

```sh
gobuster dir -u http://TARGET_IP -w /usr/share/wordlists/dirb/common.txt
gobuster dns -d cherryontop.thm -w /usr/share/wordlists/dirb/common.txt
```

<Image src={require("./5-gobuster-dir.webp").default} />
<Image src={require("./6-gobuster-dns.webp").default} />

Nothing useful is found with the gobuster scans.

Looking better to the website, there is a page accessible from the navbar called `Ice Cream Facts`.

This page is composed only of a form allowing to decide the number of facts to display and your user (only guest is available).

The fact is loaded inside the page based on the int parameter given in the URL.

We can try to use enumerate all possible facts by changing the int parameter in the URL.

This can be done with a simple bash script or with Burp Suite Intruder.

```
http://cherryontop.thm/content.php?facts=1&user=I52WK43U
```

## What is the first part of Chad Cherry's password?

## What is the second part of Chad Cherry's password?

## What is the third part of Chad Cherry's password?

## Put the three parts of Chad Cherry's password together and access his account. What is the flag you obtained?

## What is the root flag?

```

```

```

```
