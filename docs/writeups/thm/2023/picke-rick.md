# Pickle Rick

<Image src="https://i.imgur.com/o9pyhyU.jpg" width="128" />

> What is the first ingredient that Rick needs?

mr. meeseek hair

> What is the second ingredient in Rick’s potion?

1 jerry tear

> What is the last and final ingredient?

fleeb juice

## Walkthrough

### First ingredient

By opening the given link we can find a simple homepage without any external links.

<Image src="/images/writeups/thm/2023/pickle-rick/home.png" />

If we look to the source we can find a comment with a username, but at the moment we don't know where to use it.

<Image src="/images/writeups/thm/2023/pickle-rick/source.png" />

There is nothing else to check, so we can try to enumerate the website with gobuster.

```bash
gobuster dir -u URL -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,css,js -eq
```

<Image src="/images/writeups/thm/2023/pickle-rick/gobuster.png" />

The login page under `/login.php` could be a point of attack but we are still missing the password.

Inside the `robots.txt` file there is a strange word that could be a password.

```
Username: R1ckRul3s
Password: Wubbalubbadubdub
```

If we try these credentials we can login.

<Image src="/images/writeups/thm/2023/pickle-rick/login.png" />

The page allows to execute commands inside the server using the form.
We need to print the file `Sup3rS3cretPickl3Ingred.txt` to get the first ingredient.
However, commands like cat, head and tail are blocked.

<Image src="/images/writeups/thm/2023/pickle-rick/blocked.png" />

By searching online for alternatives to cat, we can find `less` that works.
The output will tell the first ingredient.

### Second ingredient

Inside the file `clue.txt` there is a hint to obtain the second ingredient.

```
Look around the file system for the other ingredient.
```

<Image src="/images/writeups/thm/2023/pickle-rick/clue.png" />

Explore the file system to get the second ingredient inside the home of `rick` user.

Be careful that there is a space in the name of the file, so it is important to escape it like `\ `.

```bash
less /home/rick/second\ ingredients
```

<Image src="/images/writeups/thm/2023/pickle-rick/second.png" />

### Third ingredient

The third ingredient could be inside the root folder. As we are not root, we need to escalate privileges.

By looking with `sudo -l` we see that it is possible to run directly commands as root.

```
sudo less /root/3rd.txt
```

<Image src="/images/writeups/thm/2023/pickle-rick/root.png" />
