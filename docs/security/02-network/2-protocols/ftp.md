# FTP (21)

File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files between a client and server on a computer network.

The standard port is 21.

```bash
ftp <ip_address>
```

To login anonymously, use `anonymous` as the username while the password leave it empty.

Two modes of FTP connection are:

- Active: the client opens a port and the server actively connects to it.
- Passive: the client connects to a port opened by the server.

## Login brute force

It is possible to brute force FTP login with Hydra.

```bash
hydra -t 4 -l <USERNAME> -P /usr/share/wordlists/rockyou.txt -vV <HOST> ftp
```
