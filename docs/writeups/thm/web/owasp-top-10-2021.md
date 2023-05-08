# OWASP Top 10 - 2021

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/3b2f3af8e836785fe698356264efbb55.png" width="128px" />

## Task 1 - Introduction

> Read the above.

No answer needed

## Task 2 - Accessing Machines

> Connect to our network or deploy the AttackBox.

No answer needed

## Task 3 - 1. Broken Access Control

> Read and understand what broken access control is.

No answer needed

## Task 4 - Broken Access Control (IDOR Challenge)

> Read and understand how IDOR works.

No answer needed

> Deploy the machine and go to URL - Login with the username noot and the password test1234.

No answer needed

> Look at other users' notes. What is the flag?

flag{fivefourthree}

There is an IDOR vuln in the note id. New notes start from 3. It is possible to read also note 1 and note 2.

## Task 5 - 2. Cryptographic Failures

> Read the introduction to Cryptographic Failures and deploy the machine.

No answer needed

## Task 6 - Cryptographic Failures (Supporting Material 1)

> Read and understand the supporting material on SQLite Databases.

No answer needed

## Task 7 - Cryptographic Failures (Supporting Material 2)

> Read the supporting material about cracking hashes.

No answer needed

## Task 8 - Cryptographic Failures (Challenge)

> What is the name of the mentioned directory?

/assets

By looking to the image in the homepage it is possible to identify a path traversal vulnerability over the `/assets` path.

<Image src={require("./assets/owasp-top-10-2021/assets.png").default} />

> Navigate to the directory you found in question one. What file stands out as being likely to contain sensitive data?

webapp.db

Inside the `/assets` folder there is a sqlite db that can be downloaded.

> Use the supporting material to access the sensitive data. What is the password hash of the admin user?

6eea9b7ef19179a06954edd0f6c05ceb

To get the password of the admin user it is enough to open the database using sqlite3 cli tool.

Be careful, the password hash is in the third column not the first.

```bash
sqlite3 webapp.db
.tables
PRAGMA table_info(users);
SELECT * from users;
```

<Image src={require("./assets/owasp-top-10-2021/sqlite.png").default} />

> Crack the hash.
> What is the admin's plaintext password?

qwertyuiop

To decrypt the hash it is possible to use [https://crackstation.net/](https://crackstation.net/).

<Image src={require("./assets/owasp-top-10-2021/crackstation.png").default} />

> Log in as the admin. What is the flag?

THM{Yzc2YjdkMjE5N2VjMzNhOTE3NjdiMjdl}

<Image src={require("./assets/owasp-top-10-2021/admin.png").default} />

## Task 9 - 3. Injection

> I've understood Injection attacks.

No answer needed

## Task 10 - 3.1. Command Injection

> What strange text file is in the website's root directory?

drpepper.txt

Run `$(ls)` to show the files.

<Image src={require("./assets/owasp-top-10-2021/ls.png").default} />

> How many non-root/non-service/non-daemon users are there?

0

Run `$(id)` to show user information for the current user. The users required must have id greater than 1000.

<Image src={require("./assets/owasp-top-10-2021/id.png").default} />

> What user is this app running as?

apache

Run `$(whoami)` to find who is running the app.

<Image src={require("./assets/owasp-top-10-2021/whoami.png").default} />

> What is the user's shell set as?

/sbin/nologin

Run `$(cat /etc/passwd | grep apache)` to find the shell as the last part of the line.

<Image src={require("./assets/owasp-top-10-2021/shell.png").default} />

> What version of Alpine Linux is running?

3.16.0

Run `$(cat /etc/alpine-release)` to find the version of Alpine that the app is running.

<Image src={require("./assets/owasp-top-10-2021/version.png").default} />
