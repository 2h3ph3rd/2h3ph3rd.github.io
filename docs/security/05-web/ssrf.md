# 🔨 SSRF

Server Side Request Forgery (SSRF) is a type of vulnerability that allows a malicious user to have the server execute a custom request.

### Custom requests

If you can specify the domain using a query param, you can use `&x=` to remove the base url.

```
http://website.com/items?server=api.website.com/users?id=123&x=

http://api.website.com/users?id=123&x=website.com/items
```
