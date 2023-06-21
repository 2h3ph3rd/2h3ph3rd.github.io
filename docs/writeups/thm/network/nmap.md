# Nmap

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/95164927092fe0fc3e9f142aea05267a.png" alt="OWASP Juice Shop" width="128" />

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
