# Common algorithms

:::warning
Work in progress
:::

## AES and symmetric ciphers

The Advanced Encryption Standard (AES) is one of the most widely used encryption algorithms. Developed in 1998, it is still a de facto standard by the U.S. government and many other organizations around the world.

TLS, the cryptographic protocol used by HTTPS for example, can work with this algorithm, showing how important and popular it still is.

AES is a symmetric cipher, which means that a single key is used for both encryption and decryption. 

It is also a block cipher, which means that the data is divided into blocks of fixed size, and then each block (128 bits) is encrypted according to a specific procedure.

With support for key sizes of 128, 192, and 256 bits, AES provides varying levels of security, with larger key sizes providing better protection against unauthorized access and decryption attempts.
