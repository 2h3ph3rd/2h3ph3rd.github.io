# Pickle Rick

A writeup for the room [Pickle Rick](https://tryhackme.com/room/picklerick) on TryHackMe.

> A Rick and Morty CTF. Help turn Rick back into a human!

<Image src={require("./logo.jpeg").default} width="256" />

## First ingredient

By opening the given link we can find a simple homepage without any external links.

<Image src={require("./home.png").default} />

If we look to the source we can find a comment with a username, but at the moment we don't know where to use it.

<Image src={require("./source.png").default} />

There is nothing else to check, so we can try to enumerate the website with gobuster.

```bash
gobuster dir -u URL -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,css,js -eq
```

<Image src={require("./gobuster.png").default} />

The login page under `/login.php` could be a point of attack but we are still missing the password.

Inside the `robots.txt` file there is a strange word that could be a password.

```
Username: R1ckRul3s
Password: Wubbalubbadubdub
```

If we try these credentials we can login.

<Image src={require("./login.png").default} />

The page allows to execute commands inside the server using the form.
We need to print the file `Sup3rS3cretPickl3Ingred.txt` to get the first ingredient.
However, commands like cat, head and tail are blocked.

<Image src={require("./blocked.png").default} />

By searching online for alternatives to cat, we can find `less` that works.
The output will tell the first ingredient.

## Second ingredient

Inside the file `clue.txt` there is a hint to obtain the second ingredient.

```
Look around the file system for the other ingredient.
```

<Image src={require("./clue.png").default} />

Explore the file system to get the second ingredient inside the home of `rick` user.

Be careful that there is a space in the name of the file, so it is important to escape it like `\ `.

```bash
less /home/rick/second\ ingredients
```

<Image src={require("./second.png").default} />

## Third ingredient

The third ingredient could be inside the root folder. As we are not root, we need to escalate privileges.

By looking with `sudo -l` we see that it is possible to run directly commands as root.

```
sudo less /root/3rd.txt
```

<Image src={require("./root.png").default} />
