# 💃 SMB

Server Message Block (SMB) is a network protocol that allows users to share files, printers, and other information between computers.

SMB is a client-server interaction, meaning an SMB client requests a file and the SMB server responds to the request.

Samba is an open-source implementation of SMB.

## smbclient

On Linux, SMB is implemented through the `smbclient` command.

Connect to a SMB share:

```bash
smbclient //<IP>/<SHARE>
smbclient //10.10.10.1/share
```

Connect using the `Anonymous` user:

```bash
smbclient //<IP>/<SHARE> -U Anonymous
smbclient //10.10.10.1/share -U Anonymous
```

Common commands:

```bash
ls # List files
get <file> # Download file
```
