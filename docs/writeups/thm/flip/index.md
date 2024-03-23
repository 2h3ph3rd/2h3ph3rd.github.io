# Flip

A writeup for the room [Flip](https://tryhackme.com/room/flip) on TryHackMe.

> Hey, do a flip!

<Image src={require("./logo.png").default} height="256" />

The room requires knowledge of bit flipping attacks on cryptographic algorithms such as AES and the CBC mode of operation.

## Footprinting

The source code is provided and you can see that it is written in Python.

The application is a socket server listening on port 1337 that can be interacted with tools such as netcat.

The only thing that can be noticed is that the application is built around the AES implementation using CBC mode with block size 16.

Whenever we try to log in with fake credentials, we get a valid ciphertext that can be used to reconstruct the relative plaintext. Next, we are asked to enter a new ciphertext that will be used for authentication.

Since we have a known plaintext attack with AES CBC, the application is vulnerable to bit flipping.

<Image src={require("./1-app.webp").default} />

## Flag

### Bit flipping attack

In the CBC mode of operation, decryption is done by indexing the previous ciphertext block with the current decrypted one.

This means that if we know the plaintext, as in this case, and can enter a custom ciphertext, we can do something similar:

```
z = y ^ ord('b') ^ ord('a')
```

Where y is the previous byte, b is the current plaintext, and a is the one we want.

The final value z is the value to replace the byte to get the final result.

<Image src={require("./2-cbc.webp").default} url="" />

### Building the correct payload

To obtain the flag the final ciphertext must contain:

```
'admin&password=sUp3rPaSs1'
```

We can try to login directly with the password, but of course, it will not work.

<Image src={require("./3-silly-attempt.webp").default} />

Message format:

```
access_username=username&password=password
```

The exploit must send letters that take into account the block size as the username, while as the password it will send the following string:

```
'bdmin&password=sUp3rPaSs1'
```

The flip will be done over the initial b to obtain the correct final string.

The message that will be sent:

```
access_username=AAAAAA&password=bdmin&password=sUp3rPaSs1AAAAAAAxxxxxxxxxxxxxxxx
```

We can rewrite it considering the block size:

```
access_username=
AAAAAA&password=
bdmin&password=s
Up3rPaSs1AAAAAAA
xxxxxxxxxxxxxxxx
```

The ‘b’ of admin is in the first byte of the respective block.

The final x characters are equal tot he byte \x04 as for PKCS#7 standard.

The flip is done over the ‘b’ in the third line of the message following this formula:

```
z = y ^ ord('b') ^ ord('a')
```

Where y is the ciphertex byte in that position, while z is the new value for it.

### The final exploit

I create a Gist with a Python script to exploit the vulnerability of this room:

<Gist id="45f564621dc19f1a6f71f3ab1b61c433" />