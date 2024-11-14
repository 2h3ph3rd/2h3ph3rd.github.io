# #️⃣ Hash

## What is a Hash?

A hash is a one-way function that takes an input and produces an output.

The input can be of any length but the output is always of a fixed length.

The output is called a hash or a digest and it is always the same for the same input.

Hashes are used to verify the integrity of data or to store passwords.

## Common Hash Algorithms

| Algorithm | Length (byte) | Example                                                                                                                          |
| --------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| MD5       | 128 (32)      | 5d41402abc4b2a76b9719d911017c592                                                                                                 |
| SHA1      | 160 (20)      | aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d                                                                                         |
| SHA256    | 256 (32)      | 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824                                                                 |
| SHA512    | 512 (64)      | 9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043 |

## Generate Hashes

In Linux you can use the following commands to generate hashes:

```bash
echo -n "hello" | md5sum
echo -n "hello" | sha1sum
```

## Tools for hash identification

## Hashid

hashid is a python package that allows to recognise a given hash.

[https://github.com/psypanda/hashID](https://github.com/psypanda/hashID)

```bash
python3 -m pip install hashid
hashid [hash]
```

<p align="center">
    <img src={require("./assets/hashid.jpg").default}></img><br />
</p>

## Hash-identifier

Hash-identifier is a tool that allows to recognise a given hash.

[https://github.com/blackploit/hash-identifier](https://github.com/blackploit/hash-identifier)

```bash
wget https://raw.githubusercontent.com/blackploit/hash-identifier/master/hash-id.py
python3 hash-id.py
```

Insert the hash and press enter.

## John the Ripper

John the Ripper is a password cracking tool that can be used to crack password hashes.

```bash
echo 5d41402abc4b2a76b9719d911017c592 > hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt --format=raw-md5 hash.txt
```

Prepend `raw-` to the format to use the raw hash meaning that the hash is not salted.

### Shadow files

For `/etc/shadow` hashes use `--format=sha512crypt` and the unshadow command to extract the hashes from the shadow file.

```bash
unshadow /etc/passwd /etc/shadow > hashes.txt
john --wordlist=/usr/share/wordlists/rockyou.txt --format=sha512crypt hashes.txt
```

### Single Crack Mode

John the Ripper has a single crack mode that allows to crack a single hash.

Passwords are generated following mangling rules based on some heuristics and a given username.

Also Gecos fields (the ones in the shadow file) can be used to generate passwords.

```bash
echo root:5d41402abc4b2a76b9719d911017c592 > hash.txt
john --single --format=raw-md5 hash.txt
```

Remember to prepend the username in the hash file.

### Custom Rules

John the Ripper has a custom rules engine that allows to generate passwords following some rules.

Common rules are stored in the john configuration file `/etc/john/john.conf`.

Rules can be defined als in a file and used with the `--rules` option.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt --format=raw-md5 --rules=Jumbo hash.txt
```

### zip2john

zip2john is a tool that allows to extract the hash from a zip file.

```bash
zip2john file.zip > hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### rar2john

rar2john is a tool that allows to extract the hash from a rar file.

```bash
rar2john file.rar > hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### ssh2john

ssh2john is a tool that allows to extract the hash from a ssh private key.

It is a python script that is usually installed with the Jumbo version.

```bash
/john/ssh2john.py id_rsa > hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## hashcat

Find the correct mode for the hash algorithm

<p align="center">
    <img src={require("./assets/hashcat-modes.jpg").default}></img><br />
</p>

```bash
hashcat -m 0 [hash] /usr/share/wordlists/rockyou.txt
```

<p align="center">
    <img src={require("./assets/hashcat.jpg").default}></img><br />
</p>
