# 🔎 Scanning

```bash
nmap -sS <host>
```

### Stealth

```
nmap -sA --disable-arp-ping -T 1 -n <host>
```

### Using a specific DNS service on the host

```javascript
nmap -source-port <dns_port> <host>
```
