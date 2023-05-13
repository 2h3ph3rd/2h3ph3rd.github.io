# OWASP Juice Shop

<Image src="https://tryhackme-images.s3.amazonaws.com/room-icons/9a0c0a661ba218c0f9d533c8f41d8dd5.png" alt="OWASP Juice Shop" width="128" />

## Task 1 - Open for business!

> Deploy the VM attached to this task to get started! You can access this machine by using your browser-based machine, or if you're connected through OpenVPN.

No answer needed

> Once the machine has loaded, access it by copying and pasting its IP into your browser; if you're using the browser-based machine, paste the machines IP into a browser on that machine.

No answer needed

## Task 2 - Let's go on an adventure!

> Question #1: What's the Administrator's email address?

admin@juice-sh.op

> Question #2: What parameter is used for searching?

q

> Question #3: What show does Jim reference in his review?

Star Trek

## Task 3 - Inject the juice

> Question #1: Log into the administrator account!

32a5e0f21372bcc1000a6088b93b458e41f0e02a

Login with email `' or 1=1--` and password `password`

> Question #2: Log into the Bender account!

fb364762a3c102b2db932069c0e6b78e738d4066

Login with email `bender@juice-sh.op'--` and password `password`

## Task 4 - Who broke my lock?!

> Question #1: Bruteforce the Administrator account's password!

c2110d06dc6f81c67cd8099ff0ba601241f1ac0e

Use Burp Intruder with the list given to bruteforce the password. The password is `admin123`.

> Question #2: Reset Jim's password!

094fbc9b48e525150ba97d05b942bbf114987257

The security question for Jim account is `our eldest siblings middle name?`.
Because of the previous comment about Star Trek we can try with `Samuel`.
This is the name of the only brother of James T. Kirk, the main character of Star Trek.

## Task 5 - AH! Don't look!

> Question #1: Access the Confidential Document!

edf9281222395a1c5fee9b89e32175f1ccf50c5b

Go to `/ftp` and then look in the homepage.

> Question #2: Log into MC SafeSearch's account!

66bdcffad9e698fd534003fbb3cc7e2b7b55d7f0

> Question #3: Download the Backup file!

bfc1e6b4a16579e85e06fee4c36ff8c02fb13795

Remember to go back to the home page to get the flag.

## Task 6 - Who's flying this thing?

> Question #1: Access the administration page!

946a799363226a24822008503f5d1324536629a0

Login as admin and then go to `/#/administration`.

> Question #2: View another user's shopping basket!

41b997a36cc33fbe4f0ba018474e19ae5ce52121

Use Burp to change the request from `/basket/1` to `/basket/2`.

> Question #3: Remove all 5-star reviews!

50c97bcce0b895e446d61c83a21df371ac2266ef

Like in `Question #1` go in the administration page and then remove the five stars review.

## Task 7 - Where did that come from?

> Question #1: Perform a DOM XSS!

9aaf4bbea5c30d00a1f5bbcfce4db6d4b0efe0bf

Use the exact same payload to get the flag.

```xml
<iframe src="javascript:alert(`xss`)">
```

> Question #2: Perform a persistent XSS!

149aa8ce13d7a4a8a931472308e269c94dc5f156

The given header must be added manually in the request. Once sent, it is not possible to redo it until the next login.

> Question #3: Perform a reflected XSS!

23cefee1527bde039295b2616eeb29e1edc660a0

Substitute the id of the request with the payload `/#/track-result?id=<iframe%20src%3D"javascript:alert(%60xss%60)">`.

## Task 8 - Exploration!

> Access the /#/score-board/ page

7efd3174f9dd5baa03a7882027f2824d2f72d86e
