# 🔎 Scanning

Basic fast scanning:

```bash
nmap -sS HOST
```

Advanced scannning on specific ports:

```bash
nmap --script-default -p PORTS -sV HOST
```

### Stealth

```bash
nmap -sA --disable-arp-ping -T 1 -n HOST
```

### Using a specific DNS service on the host

```bash
nmap -source-port DNS_PORT HOST
```
