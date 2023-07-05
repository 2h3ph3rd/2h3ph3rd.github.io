# 🕸️ Network

## Common ports and services

| Port | Service |
| ---- | ------- |
| 21   | FTP     |
| 22   | SSH     |
| 23   | Telnet  |
| 25   | SMTP    |
| 53   | DNS     |
| 80   | HTTP    |
| 110  | POP3    |
| 139  | SMB     |
| 143  | IMAP    |
| 443  | HTTPS   |
| 445  | SMB     |
| 3389 | RDP     |

## NFS

```
showmount -e <ip_address>
mkdir /mnt/share
mount -t nfs <ip_address>:/<share_name> /mnt/share
```
