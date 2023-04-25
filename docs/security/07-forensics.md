# 🕵️ Forensics

## Windows

| Path        | Description  |
| ----------- | ------------ |
| C:\boot.ini | Boot options |

## Linux

### System

| Path               | Description                    |
| ------------------ | ------------------------------ |
| /etc/hostname      | Hostname                       |
| /etc/timezone      | Timezone                       |
| /etc/hosts         | Hosts file                     |
| /etc/os-release    | OS info                        |
| /home/USER/.bashrc | Bash configuration for a user  |
| /etc/issue         | Message printed before login   |
| /etc/profile       | System-wide configuration file |
| /proc/version      | Linux kernel version           |

### Authentication

| Path         | Description                             |
| ------------ | --------------------------------------- |
| /etc/sudoers | Admin users                             |
| /etc/passwd  | Users information                       |
| /etc/group   | Groups information                      |
| /etc/shadow  | Password information for system's users |

### Logs

| Path                     | Description                |
| ------------------------ | -------------------------- |
| /var/log/auth.log        | Authentication logs        |
| /var/log/syslog          | System logs                |
| /var/log/SERVICE         | Other apps logs            |
| /var/log/dmessage        | Global system messages     |
| /etc/crontab             | Cron jobs                  |
| /etc/init.d              | Services                   |
| /home/USER/.viminfo      | Vim history                |
| /home/USER/.bash_history | Bash history for a user    |
| /root/.bash_history      | Bash history for root user |
| /var/mail/root           | Emails for root user       |

Read commands executed with sudo privileges

```bash
cat /var/log/auth.log | grep COMMAND
```

## Metadata

### PDF

```bash
pdfinfo <pdf>
```

### Images

Show all metadata

```bash
exiv2 -pt <image>
```

Edit or update an existing field

```bash
exiv2 -M'set <field> <value>' <image>
```
