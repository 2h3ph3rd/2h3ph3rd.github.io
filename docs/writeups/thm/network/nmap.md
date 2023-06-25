# Nmap

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/5d653d7a4e8a1a6d98379168cfc30ac0.png" alt="OWASP Juice Shop" width="128" />

## Task 1 - Deploy

> Deploy the attached VM

No answer needed

## Task 2 - Introduction

> What networking constructs are used to direct traffic to the right application on a server?

Ports

> How many of these are available on any network-enabled computer?

65355

> [Research] How many of these are considered "well-known"? (These are the "standard" numbers mentioned in the task)

1024

## Task 3 - Nmap Switches

> What is the first switch listed in the help menu for a 'Syn Scan' (more on this later!)?

-sS

> Which switch would you use for a "UDP scan"?

-sU

> If you wanted to detect which operating system the target is running on, which switch would you use?

-O

> Nmap provides a switch to detect the version of the services running on the target. What is this switch?

-sV

> The default output provided by nmap often does not provide enough information for a pentester. How would you increase the verbosity?

-v

> Verbosity level one is good, but verbosity level two is better! How would you set the verbosity level to two?

-vv

> What switch would you use to save the nmap results in three major formats?

-oA

> What switch would you use to save the nmap results in three major formats?

-oN

> A very useful output format: how would you save results in a "grepable" format?

-oG

> How would you activate this setting?

-a

> How would you set the timing template to level 5?

-T5

> How would you tell nmap to only scan port 80?

-p 80

> How would you tell nmap to scan ports 1000-1500?

-p 1000-1500

> How would you tell nmap to scan all ports?

-p-

> How would you activate a script from the nmap scripting library (lots more on this later!)?

--script

> How would you activate all of the scripts in the "vuln" category?

--script=vuln

## Task 4 - Scan Types - Overview

> Read the Scan Types Introduction.

No answer needed

## Task 5 - Scan Types - TCP Connect Scans

> Which RFC defines the appropriate behaviour for the TCP protocol?

RFC 9293

> If a port is closed, which flag should the server send back to indicate this?

RST

## Task 6 - Scan Types - SYN Scans

> There are two other names for a SYN scan, what are they?

half-open, stealth

> Can Nmap use a SYN scan without Sudo permissions (Y/N)?

N

## Task 7 - Scan Types - UDP Scans

> If a UDP port doesn't respond to an Nmap scan, what will it be marked as?

open|filtered

> When a UDP port is closed, by convention the target should send back a "port unreachable" message. Which protocol would it use to do so?

ICMP

## Task 8 - Scan Types - NULL, FIN and Xmas

> Which of the three shown scan types uses the URG flag?

Xmas

> Why are NULL, FIN and Xmas scans generally used?

firewall evasion

> Which common OS may respond to a NULL, FIN or Xmas scan with a RST for every port?

Microsoft Windows

## Task 9 - Scan Types - ICMP Network Scanning

> How would you perform a ping sweep on the 172.16.x.x network (Netmask: 255.255.0.0) using Nmap? (CIDR notation)

nmap -sn 172.16.0.0/16

## Task 10 - NSE Scripts - Overview

> What language are NSE scripts written in?

Lua

> Which category of scripts would be a very bad idea to run in a production environment?

Intrusive

## Task 11 - NSE Scripts - Working with the NSE

> What optional argument can the ftp-anon.nse script take?

maxlist

[https://nmap.org/nsedoc/scripts/ftp-anon.html](https://nmap.org/nsedoc/scripts/ftp-anon.html)

## Task 12 - NSE Scripts - Searching for Scripts

> What is the filename of the script which determines the underlying OS of the SMB server?

> Read through this script. What does it depend on?

## Task 15 - Conclusion

> Read the conclusion.

No answer needed
