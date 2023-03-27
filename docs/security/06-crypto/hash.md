---
id: hash
title: Hash
---

# hash

## Hashid

hashid is a python package that allows to recognise a given hash.

```
python3 -m pip install hashid
hashid <hash>
```

<p align="center">
    <img src={require("./assets/hashid.jpg").default}></img><br />
</p>

## hashcat

Find the correct mode for the hash algorithm

<p align="center">
    <img src={require("./assets/hashcat-modes.jpg").default}></img><br />
</p>

```sh
# on kali linux /usr/share/wordlists/rockyou.txt
hashcat -m 0 bdc87b9c894da5168059e00ebffb9077 path/to/wordlists/rockyou.txt
```

<p align="center">
    <img src={require("./assets/hashcat.jpg").default}></img><br />
</p>
