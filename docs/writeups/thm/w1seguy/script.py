from pwn import remote

conn = remote("10.10.226.191", 1337)

conn.recvuntil(b"flag 1: ")

# The given flag is encrypted and encoded in hex
flag1_encoded = conn.recvline().decode().strip()

# First we decode the flag from hex
flag1_decoded = bytes.fromhex(flag1_encoded).decode()

# Find the key by exploiting known characters in the flag
key = ""
key += chr(ord(flag1_decoded[0]) ^ ord("T"))
key += chr(ord(flag1_decoded[1]) ^ ord("H"))
key += chr(ord(flag1_decoded[2]) ^ ord("M"))
key += chr(ord(flag1_decoded[3]) ^ ord("{"))
key += chr(ord(flag1_decoded[-1]) ^ ord("}"))

# Decrypt the flag with the key found
flag1 = ""
for j, f in enumerate(flag1_decoded):
    flag1 += chr(ord(f) ^ ord(key[j % 5]))

print(f"Flag 1: {flag1}...")

# Send the correct key to get the second flag
conn.sendlineafter(b"What is the encryption key? ", key.encode())
conn.recvuntil(b"flag 2: ")
flag2 = conn.recvline().decode().strip()

print(f"Flag 2: {flag2}...")

conn.close()
