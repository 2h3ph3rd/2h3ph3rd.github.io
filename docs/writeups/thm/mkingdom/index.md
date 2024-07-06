# mKingdom

A writeup for the room [mKingdom](https://tryhackme.com/r/room/mkingdom) on TryHackMe.

> Beginner-friendly box inspired by a certain mustache man.

<!-- <Image src={require("./logo.webp").default} height="256" /> -->

## What is user.txt?

### Scanning with nmap

The first step is to scan the target with nmap:

```sh
nmap -sS TARGET_IP
```

```sh
gobuster dir -w /usr/share/wordlists/dirb/big.txt -u http://10.10.250.210:85
```

admin password

/var/www/html/app/castle/application/config

https://vulners.com/hackerone/H1:768322

## What is root.txt?
