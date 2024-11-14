# NFS (2049)

Network File System (NFS) is a distributed file system protocol that allows to share remote directories over a network.

It is commonly used on Unix-like systems, and is available for most operating systems.

It is a client-server system, where the server is responsible for managing the shared directory and authentication.

The client is responsible for mounting the shared directory, and accessing the files within it as if they were local.

## Commands

### List available shares

```bash
showmount -e TARGET_IP
```

### Mount a share

```bash
mkdir /tmp/mount
mount -t nfs TARGET_IP:SHARE_NAME /tmp/mount
```
