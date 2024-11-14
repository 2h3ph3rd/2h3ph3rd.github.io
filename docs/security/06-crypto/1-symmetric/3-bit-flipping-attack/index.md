# Bit Flipping Attack

:::note
This attack can be applied to any symmetric cipher in CBC mode whenever you know the plaintext and can modify the corresponding ciphertext.
:::

In a bit-flipping attack, the attacker modifies the ciphertext by causing a predictable change in the plaintext.

This type of attack is most powerful when the attacker knows the format of the plaintext and can therefore alter some information in it.

Since in CBC, the decryption is done by indexing the decrypted block against the previous ciphertext block, this allows the attacker to modify the ciphertext to achieve a specific result.

Of course, doing it this way a single block will not be successfully decrypted due to the modification of the ciphertext, but in the next block there would be instead what the attacker wants.

In a nutshell, if we know the plaintext and we can modify the corresponding ciphertext, we can do something like this:

```
z = y ^ ord('b') ^ ord('a')
```

Where y is the byte of the previous encrypted block, b is the byte of the target plaintext block, and a is the new character that we want.

The final value z is the value of the byte that will be replaced in the encrypted block.

<Image src={require("./bit-flipping-attack.png").default} width="600" />