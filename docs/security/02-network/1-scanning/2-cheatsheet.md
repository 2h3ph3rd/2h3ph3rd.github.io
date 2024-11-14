# Cheatsheet

| Scan Type              | Command             | Description  |
| ---------------------- | ------------------- | ------------ |
| ARP Scan               | nmap -PR -sn TARGET | same network |
| ICMP Echo Scan         | nmap -PE -sn TARGET | same network |
| ICMP Timestamp Scan    | nmap -PP -sn TARGET | same network |
| ICMP Address Mask Scan | nmap -PM -sn TARGET | same network |
| TCP SYN Ping Scan      | nmap -sn TARGET     |              |
| TCP ACK Ping Scan      | nmap -sn TARGET     |              |
| UDP Ping Scan          | nmap -sn TARGET     |              |
| TCP Connect Scan       | nmap -sT TARGET     |              |
| TCP SYN Scan           | nmap -sS TARGET     |              |
| UDP Scan               | nmap -sU TARGET     |              |

| Option | Description                      |
| ------ | -------------------------------- |
| -n     | no DNS lookup                    |
| -R     | reverse-DNS lookup for all hosts |
| -sn    | host discovery only              |
