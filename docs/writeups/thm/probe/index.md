# Probe

A writeup for the room [Probe](https://tryhackme.com/room/probe) on TryHackMe.

> Use your baseline scanning skills to enumerate a secure network.

<Image src={require("./logo.png").default} width="256" />

This room requires an intermediate knowledge of nmap and other scanning tools such as gobuster, nikto, and wpscan.

### What is the version of the Apache server?

We can start by running a scan with nmap to find open ports on the target machine:

```sh
nmap -sS -vv MACHINE_IP
```

<Image src={require("./1-ports.webp").default} />

Apache could be run on port 80, 443, 8000. We can try to grab the banner for all the ports:

```sh
nmap -sV --script=banner -p 80,443,8000 -vv MACHINE_IP
```

<Image src={require("./2-scan.webp").default} />

While on port 80 we have a lighttpd server, on 443 and 8000 we can see Apache and its version.

You can also open the browser and attempt to load the start page; an error page will appear with the version of Apache

<Image src={require("./3-forbidden.webp").default} />

### What is the port number of the FTP service?

In the previous scan, nothing was found about an open port for FTP. We can try to extend the scan to the first 10000 ports:

```sh
nmap -sS -p-10000 -v MACHINE_IP
```

<Image src={require("./4-scan.webp").default} />

By doing a depth scan on port 1338 it is possible to see that is an FTP server:

```sh
nmap -A -p 1338 -vv MACHINE_IP
```

<Image src={require("./5-ftp.webp").default} />

### What is the FQDN for the website hosted using a self-signed certificate and contains critical server information as the homepage?

It can be obtained by doing a depth scan of the server on port 1443.

```sh
nmap -A -p 1443 -vv MACHINE_IP
```

<Image src={require("./6-fqdn.webp").default} />

### What is the email address associated with the SSL certificate used to sign the website mentioned in Q3?

It can be found with the previous command near the website url.

<Image src={require("./7-email.webp").default} />

### What is the value of the PHP Extension Build on the server?

By doing a depth scan on the open ports, it is possible to see that on port 1443 there is a phpinfo page:

<Image src={require("./8-website.webp").default} />

To find the answer, all you need to do is visit the website on port 1443 with a browser and look for the version of the PHP Extension Build:

<Image src={require("./9-php-info.webp").default} />

### What is the banner for the FTP service?

It is enough to connect to the FTP server by specifying the correct port found earlier:

```sh
ftp MACHINE_IP 1338
```

<Image src={require("./10-ftp-connection.webp").default} />

### What software is used for managing the database on the server?

On port 9007 we can see that there is WordPress running.

```sh
nmap -A -p 9007 -vv MACHINE_IP
```

We can try to use gobuster to scan for possible public files:

```sh
gobuster dir -u https://MACHINE_IP:9007 -w /usr/share/wordlists/dirb/big.txt -k
```

Be careful to use -k to disable any check on the SSL certificate.

The solution can be found among the gobuster results.

<Image src={require("./11-php-my-admin.webp").default} />

### What is the Content Management System (CMS) hosted on the server?

It was found in the previous answers, it the service running on port 9007.

<Image src={require("./12-cms.webp").default} />

To simplify interactions with the WordPress site and avoid problems caused by redirects, it is better to update the host file:

```sh
vi /etc/hosts
```

By adding this line:

```sh
MACHINE_IP dev.probe.thm myblog.thm
```

### What is the version number of the CMS hosted on the server?

It can be seen in the output of the previous nmap command.

<Image src={require("./13-version.webp").default} />

### What is the username for the admin panel of the CMS?

It can be found by using wpscan and enumerating users.

<Image src={require("./14-username.webp").default} />

### During vulnerability scanning, OSVDB-3092 detects a file that may be used to identify the blogging site software. What is the name of the file?

Scan the WordPress site using nikto to find the solution.

If you are using the Attackbox provided by TryHackMe, you may require an updated version of nikto. Refer to the official documentation to run the most recent version.

<Image src={require("./15-nikto.webp").default} />

### What is the name of the software being used on the standard HTTP port?

It is enough to do a depth scan with nmap on port 80.

<Image src={require("./16-http.webp").default} />

### What is the flag value associated with the web page hosted on port 8000?

The homepage is empty, it is possible to try with gobuster to search for subdirectories:

```sh
gobuster dir -u http://MACHINE_IP:8000/ -w /usr/share/wordlists/dirb/big.txt
```

<Image src={require("./17-gobuster.webp").default} />

