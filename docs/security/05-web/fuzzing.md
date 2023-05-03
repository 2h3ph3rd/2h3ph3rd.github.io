# 🔤 Fuzzing

Web fuzzing allows to enumerate:

- domains
- subdomains
- directories
- files

## Wordlists

### SecLists

SecLists is a collection of lists for enumeration.

[https://github.com/danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)

### Common lists

Domains and subdomains

```bash
# domains, subdomain, files, and directories
/usr/share/wordlists/dirb/*
/usr/share/wordlists/dirb/small.txt
/usr/share/wordlists/dirb/common.txt
/usr/share/wordlists/dirb/big.txt

# files and directories
/usr/share/wordlists/dirbuster/*
/usr/share/wordlists/dirbuster/directory-list-2.3-small.txt
/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt

# virtual hosts
/usr/share/wordlists/SecLists/Discovery/DNS/namelist.txt

# usernames
/usr/share/wordlists/SecLists/Usernames/Names/names.txt

# passwords
/usr/share/wordlists/SecLists/Passwords/Common-Credentials/10-million-password-list-top-100.txt
```

## OSINT Tools

OSINT tools use public information like Google results or DNS queries to find domains and subdomains.

### Sublist3r

Sublist3r is a python tool designed to enumerate subdomains using OSINT.

[https://github.com/aboul3la/Sublist3r](https://github.com/aboul3la/Sublist3r)

```
./sublist3r.py -d website.com
```

### dnsrecon

dnsrecon is a tool for DNS bruteforce to find subdomains.

[https://github.com/darkoperator/dnsrecon](https://github.com/darkoperator/dnsrecon)

```
dnsrecon -t brt -d website.com
```

## Brute force tools

Brute force tools can enumerate almost everything using a given wordlist. All the entries inside the wordlist are checked one after the other. This process requires a lot of time, a stable connection, and also the possibility to make all the requests needed.

The choice of the wordlist is fundamental, a big list could return more results but it requires more time than a shorter one.

### ffuf

ffuf is a tool used for domain enumeration using brute force. It is very fast and written in Go.

It is the most straightforward to use. It is enough to put the string `FUZZ` where you want to enumerate.

Use `W1` and `W2` when you want to use multiple wordlists.

In general the syntax is very similar to curl, especially in how requests are defined.

Useful flags

| flag | example       | meaning                                 |
| ---- | ------------- | --------------------------------------- |
| -mr  | -mr "success" | filter results based on response body   |
| -fc  | -fc 200       | filter results based on response status |

[https://github.com/ffuf/ffuf](https://github.com/ffuf/ffuf)

```bash
# Enumerate directories and files
ffuf -w <WORDLIST> -u <TARGET>/FUZZ

# Enumerate virtual hosts
ffuf -w  -H "Host: FUZZ.<TARGET>" -u <TARGET> -fs <FILTER_SIZE>

# Enumerate usernames using a login form
ffuf -w <WORDLIST> -X POST -d "username=FUZZ&password=x" -H "Content-Type: application/x-www-form-urlencoded" -u <TARGET> -mr "bad password"

# Enumerate username and password using a login form
ffuf -w <WORDLIST_1>:W1,<WORDLIST_2>:W2 -X POST -d "username=W1&password=W2" -H "Content-Type: application/x-www-form-urlencoded" -u <TARGET> -mr "bad password"

# Store results as wordlist
ffuf -w <WORDLIST> -u <TARGET>/FUZZ -s > wordlist.txt
```

### gobuster

Gobuster is a tool used for domain enumeration using brute force.

[https://github.com/OJ/gobuster](https://github.com/OJ/gobuster)

Enumerate directories and files

```bash
gobuster dir -e -u <TARGET> -w <WORDLIST> -q
```

`-u` target

`-w` wordlist

`-e` print the full url instead of only the relative path

Enumerate subdomains

```bash
gobuster dns -d <TARGET> -t 100 -w <WORDLIST> --wildcard
```

`-d` dns server

`-w` wordlist

### dirb

dirb is a tool used for domain enumeration using brute force. It is a little old.

[https://dirb.sourceforge.net/](https://dirb.sourceforge.net/)

```bash
dirb <TARGET> <WORDLIST>
```
