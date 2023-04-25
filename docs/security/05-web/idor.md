# 🖇️ IDOR

IDOR stands for Insecure Direct Object Reference and is a type of vulnerability based on unathorized resource access.

For example, if you can retrieve your profile by going to `/user/1000` you could try to change the id with other numbers like `/user/1001`.
We have an IDOR if it is possible to access other profiles without authorization.

IDORs attacks are not always evident:

- data could be encoded with base64 or hashed with MD5 or SHA-1
- a parameter could be hidden
- a server request could have a vulnerable body or param

A good way to check for an IDOR vulnerability is to create two accounts and see if using one of them you can access the other's private data.
