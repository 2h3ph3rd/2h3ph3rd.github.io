# Traverse

A writeup for the room [Traverse](https://tryhackme.com/room/traverse) on TryHackMe.

> Challenge your secure coding skills to restore a compromised website

<Image src={require("./logo.png").default} width="256" />

This room is about a compromised website that needs to be restored.

The website is compromised by an attacker that uploaded a web shell and renamed a file used for managing the server.

### What type of encoding is used by the hackers to obfuscate the JavaScript file?

The website on port 80 doesn't have much to offer:

<Image src={require("./homepage.webp").default} />

Even if there isn’t so much to do here, there could be something in the code:

<Image src={require("./source.webp").default} />

There is a custom Javascript file that could be interesting:

<Image src={require("./obfuscated.webp").default} />

The content is obfuscated, but it can be identified as hexadecimal. Indeed, there are only pairs of numbers and letters between A and F and each pair corresponds to an ASCII character.

### What is the flag value after deobfuscating the file?

To deobfuscate the file is enough to use any hex decoder like the one available in [CyberChef](https://gchq.github.io/CyberChef/).

<Image src={require("./cyberchef.webp").default} />

A possible way to see the result is to run the code inside the browser console:

<Image src={require("./script.webp").default} />

### Logging is an important aspect. What is the name of the file containing email dumps?

The previous flag gives a tip on how to continue: directory listing.

Scan for subfolders using ffuf:

```sh
ffuf -w WORDLIST -u URL/FUZZ -s
```

These are the results from the scan:

<Image src={require("./ffuf.webp").default} />

To search for the email logs it makes sense to start from the logs folder:

<Image src={require("./logs.webp").default} />

### The logs folder contains email logs and has a message for the software team lead. What is the name of the directory that Bob has created?

By opening the email_dump.txt file, it is possible to see the following message:

<Image src={require("./email.webp").default} />

In the [SSDLC](https://https://tryhackme.com/room/securesdlc) room on TryHackMe it is explained that the first phase of SSDLC is planning:

<Image src={require("./password.webp").default} />

### What is the key file for opening the directory that Bob has created for Mark?

It is inside the previous email.

### What is the email address for ID 5 using the leaked API endpoint?

To enter the API page use the correct key from the email:

<Image src={require("./api-docs.webp").default} />

The correct URL for the request is:

```
http://MACHINE_IP/api/?customer_id=5
```

<Image src={require("./response.webp").default} />

### What is the ID for the user with admin privileges?

The endpoint is affected by an IDOR vulnerability. It is possible to try all the consecutive numbers starting from one until an admin is found.

<Image src={require("./idor.webp").default} />

### What is the endpoint for logging in as the admin? Mention the last endpoint instead of the URL. For example, if the answer is URL is tryhackme.com/admin — Just write /admin.

It is written in the response of the vulnerable endpoint (previous image).

### The attacker uploaded a web shell and renamed a file used for managing the server. Can you find the name of the web shell that the attacker has uploaded?

It is possible to intercept the request and change the command to use ls using a proxy like Burp.

Once the files and folders are listed, the files uploaded by the attacker are shown:

<Image src={require("./admin-page.webp").default} />

### What is the name of the file renamed by the attacker for managing the web server?

It is one of the files found in the previous point.

### Can you use the file manager to restore the original website by removing the “FINALLY HACKED” message? What is the flag value after restoring the main website?

The original file manager is still accessible under the following link:

```
http://MACHINE_IP/realadmin/renamed_file_manager.php
```

By using the original file manager it is possible to edit the index.php file of the website. After that, the final flag is printed.

<Image src={require("./original-file-manager.webp").default} />
