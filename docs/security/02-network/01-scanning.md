# 🔎 Scanning

## Nmap

Fast scan, requires sudo priviliges:

```bash
nmap -sS <HOST>
nmap -sS 10.10.1.1
```

Advanced scannning on specific ports:

```bash
nmap --script-default -p <PORTS> -sV <HOST>
nmap --script-default -p 22,80,443 -sV 10.10.1.1
```

:::tip
Start with a fast scan to check for open ports and than run a full scan only on them.
:::

### TCP scan

TCP scan is the default scan type when nmap is run without sudo priviliges.

```bash
nmap -sT <HOST>
nmap -sT 10.10.1.1
```

It is slower than the SYN scan but it is more reliable.

Each port is checked through a complete three-way handshake.

<Image src="/images/security/network/tcp-scan.drawio.png" />

### SYN scan

SYN scan is the default scan type when nmap is run with sudo priviliges.

```bash
nmap -sS <HOST>
nmap -sS 10.10.1.1
```

It is faster than TCP scan because it does not complete the three-way handshake.

Each port is checked by sending a SYN packet and waiting for a SYN/ACK response.

Half way handshake is based on the fact that the host will respond with a SYN/ACK packet only if the port is open.

nmap will respond with a RST packet to close the connection.

<Image src="/images/security/network/syn-scan.drawio.png" />

### Other types of scan

- `FIN` - Send a FIN packet to close the connection.
- `XMAS` - Send a FIN, URG and PUSH packet to close the connection.
- `NULL` - Send an empty packet to close the connection.
- `ACK` - Send an ACK packet to check if the port is filtered or not.
- `UDP` - Send a UDP packet to check if the port is open or not.

### Ports result

There are three possible results for a port:

- `open` - The port is open and accepting connections.
- `closed` - The port is closed and not accepting connections.
- `filtered` - The port is not responding to Nmap's probes, maybe a firewall is blocking it.

### Stealth

```bash
nmap -sA --disable-arp-ping -T 1 -n <HOST>
```

### Using a specific DNS service on the host

```bash
nmap -source-port DNS_PORT <HOST>
```
