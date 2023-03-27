---
id: forensics
title: 🕵️ Forensics
---

# Forensics

## Linux

### System

| Name                          | Path                   |
| ----------------------------- | ---------------------- |
| Hostname                      | `/etc/hostname`        |
| Timezone                      | `/etc/timezone`        |
| Hosts file                    | `/etc/hosts`           |
| OS info                       | `/etc/os-release`      |
| Bash configuration for a user | `/home/<user>/.bashrc` |

### Authentication

| Name               | Path           |
| ------------------ | -------------- |
| Admin users        | `/etc/sudoers` |
| Users information  | `/etc/passwd`  |
| Groups information | `/etc/group`   |

### Logs

| Name                    | Path                         |
| ----------------------- | ---------------------------- |
| Cron jobs               | `/etc/crontab`               |
| Services                | `/etc/init.d`                |
| Bash history for a user | `/home/<user>/.bash_history` |
| Authentication logs     | `/var/log/auth.log`          |
| Vim history             | `/home/<user>/.viminfo`      |
| System logs             | `/var/log/syslog`            |
| Other apps logs         | `/var/log/<service>`         |

Read commands executed with sudo privileges

```
cat /var/log/auth.log | grep COMMAND
```

## Metadata

### PDF

```
pdfinfo <pdf>
```

### Images

Show all metadata

```
exiv2 -pt <image>
```

Edit or update an existing field

```
exiv2 -M'set <field> <value>' <image>
```
