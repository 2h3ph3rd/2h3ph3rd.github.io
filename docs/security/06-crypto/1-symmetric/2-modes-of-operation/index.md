# Modes of operation

A block cipher by itself can only work on fixed-length messages. A mode of operation describes how to apply a symmetric cipher to encrypt amounts of data larger than one single block.

## Electronic Codebook (ECB)

The simplest mode of operation is the Electronic Codebook (ECB) mode. It divides the plaintext into blocks and encrypts each block separately. 

This means that the same plaintext block will always encrypt to the same ciphertext block.

This can be a problem if the plaintext has patterns, as they will be visible in the ciphertext.

## Cipher Block Chaining (CBC)

Cipher Block Chaining (CBC) is a block cipher mode where each block is encrypted by combining it with the previous block's ciphertext.

Each plaintext block is XORed with the previous ciphertext block, and the result is then encrypted obtaining the corresponding ciphertext block.

The first block is encrypted by first performing an XOR with the initialization vector (IV), which is usually a random vector that is initialized once and then reused in subsequent encryption and decryption operations.

<Image src={require("./cbc-encryption.png").default} source="https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)" />

During decryption, each block is decrypted and then combined with the previous ciphertext block to obtain the original plaintext.

Note that the XOR is performed after the decryption between the previous ciphertext block and the result of the current decryption. Of course, for the first block, the IV is used instead.

<Image src={require("./cbc-decryption.png").default} source="https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)" />

Cipher Block Chaining (CBC) offers numerous encryption possibilities for the same block, which depend not only on the contents of the current block but also on the previous block. 

However, its main disadvantage is the inability to parallelize the encryption process. Each block is encrypted considering the result of the previous block.

On the other hand, parallelization is possible during decryption, making the process faster at least on this side.

<Bookmark title="Wikipedia - Block cipher mode of operation" url="https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation" />
