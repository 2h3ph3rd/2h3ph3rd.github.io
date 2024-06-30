# Publisher

A writeup for the room [Publisher](https://tryhackme.com/r/room/publisher) on TryHackMe.

> Test your enumeration skills on this boot-to-root machine.

<Image src={require("./logo.avif").default} height="256" />

## What is the user flag?

### Scanning with Nmap

We can start by scanning the target with Nmap:

```sh
nmap -sS TARGET_IP
```

The scan reveals two open ports: 22 (SSH) and 80 (HTTP).

<Image src={require("./1-1-nmap.avif").default} height="256" />

### Enumerating the web server with gobuster

### Exploiting vulnerabilities with SPIP

### Connecting with SSH and obtaining the user flag

## What is the root flag?

### Analyzing with LinPEAS
