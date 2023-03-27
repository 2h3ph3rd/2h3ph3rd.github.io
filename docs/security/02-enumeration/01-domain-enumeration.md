---
id: domain-enumeration
title: Domains
---

# Domains enumeration

## Wordlists

```
/usr/share/wordlists/dirb/*
/usr/share/wordlists/dirb/small.txt
/usr/share/wordlists/dirb/common.txt
/usr/share/wordlists/dirb/big.txt
```

```
/usr/share/wordlists/dirbuster/*
/usr/share/wordlists/dirbuster/directory-list-2.3-small.txt
/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

## gobuster

### Subdirectories

```
gobuster dir -e -u <TARGET> -w <WORDLIST> -q
```

`-u` target

`-w` wordlist

`-e` print the full url instead of only the relative path

### Subdomains

```
gobuster dns -d <TARGET> -t 100 -w <WORDLIST> --wildcard
```

`-d` dns server

`-w` wordlist
