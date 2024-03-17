"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[1340],{35705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(74848),s=t(28453);const r={},c="Pickle Rick",o={id:"writeups/thm/pickle-rick/index",title:"Pickle Rick",description:"A writeup for the room Pickle Rick on TryHackMe.",source:"@site/docs/writeups/thm/pickle-rick/index.md",sourceDirName:"writeups/thm/pickle-rick",slug:"/writeups/thm/pickle-rick/",permalink:"/docs/writeups/thm/pickle-rick/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/pickle-rick/index.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Flip",permalink:"/docs/writeups/thm/flip/"},next:{title:"Probe",permalink:"/docs/writeups/thm/probe/"}},d={},a=[{value:"Walkthrough",id:"walkthrough",level:2},{value:"First ingredient",id:"first-ingredient",level:3},{value:"Second ingredient",id:"second-ingredient",level:3},{value:"Third ingredient",id:"third-ingredient",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Image:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pickle-rick",children:"Pickle Rick"}),"\n",(0,i.jsxs)(n.p,{children:["A writeup for the room ",(0,i.jsx)(n.a,{href:"https://tryhackme.com/room/picklerick",children:"Pickle Rick"})," on TryHackMe."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A Rick and Morty CTF. Help turn Rick back into a human!"}),"\n"]}),"\n",(0,i.jsx)(r,{src:"https://i.imgur.com/o9pyhyU.jpg",width:"256"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"What is the first ingredient that Rick needs?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"mr. meeseek hair"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"What is the second ingredient in Rick\u2019s potion?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"1 jerry tear"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"What is the last and final ingredient?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"fleeb juice"}),"\n",(0,i.jsx)(n.h2,{id:"walkthrough",children:"Walkthrough"}),"\n",(0,i.jsx)(n.h3,{id:"first-ingredient",children:"First ingredient"}),"\n",(0,i.jsx)(n.p,{children:"By opening the given link we can find a simple homepage without any external links."}),"\n",(0,i.jsx)(r,{src:t(29129).A}),"\n",(0,i.jsx)(n.p,{children:"If we look to the source we can find a comment with a username, but at the moment we don't know where to use it."}),"\n",(0,i.jsx)(r,{src:t(58203).A}),"\n",(0,i.jsx)(n.p,{children:"There is nothing else to check, so we can try to enumerate the website with gobuster."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gobuster dir -u URL -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,css,js -eq\n"})}),"\n",(0,i.jsx)(r,{src:t(94809).A}),"\n",(0,i.jsxs)(n.p,{children:["The login page under ",(0,i.jsx)(n.code,{children:"/login.php"})," could be a point of attack but we are still missing the password."]}),"\n",(0,i.jsxs)(n.p,{children:["Inside the ",(0,i.jsx)(n.code,{children:"robots.txt"})," file there is a strange word that could be a password."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Username: R1ckRul3s\nPassword: Wubbalubbadubdub\n"})}),"\n",(0,i.jsx)(n.p,{children:"If we try these credentials we can login."}),"\n",(0,i.jsx)(r,{src:t(49069).A}),"\n",(0,i.jsxs)(n.p,{children:["The page allows to execute commands inside the server using the form.\nWe need to print the file ",(0,i.jsx)(n.code,{children:"Sup3rS3cretPickl3Ingred.txt"})," to get the first ingredient.\nHowever, commands like cat, head and tail are blocked."]}),"\n",(0,i.jsx)(r,{src:t(37578).A}),"\n",(0,i.jsxs)(n.p,{children:["By searching online for alternatives to cat, we can find ",(0,i.jsx)(n.code,{children:"less"})," that works.\nThe output will tell the first ingredient."]}),"\n",(0,i.jsx)(n.h3,{id:"second-ingredient",children:"Second ingredient"}),"\n",(0,i.jsxs)(n.p,{children:["Inside the file ",(0,i.jsx)(n.code,{children:"clue.txt"})," there is a hint to obtain the second ingredient."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Look around the file system for the other ingredient.\n"})}),"\n",(0,i.jsx)(r,{src:t(57435).A}),"\n",(0,i.jsxs)(n.p,{children:["Explore the file system to get the second ingredient inside the home of ",(0,i.jsx)(n.code,{children:"rick"})," user."]}),"\n",(0,i.jsxs)(n.p,{children:["Be careful that there is a space in the name of the file, so it is important to escape it like ",(0,i.jsx)(n.code,{children:"\\ "}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"less /home/rick/second\\ ingredients\n"})}),"\n",(0,i.jsx)(r,{src:t(14052).A}),"\n",(0,i.jsx)(n.h3,{id:"third-ingredient",children:"Third ingredient"}),"\n",(0,i.jsx)(n.p,{children:"The third ingredient could be inside the root folder. As we are not root, we need to escalate privileges."}),"\n",(0,i.jsxs)(n.p,{children:["By looking with ",(0,i.jsx)(n.code,{children:"sudo -l"})," we see that it is possible to run directly commands as root."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo less /root/3rd.txt\n"})}),"\n",(0,i.jsx)(r,{src:t(29220).A})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},37578:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/blocked-2fc12ae574c80efde4b80937281bb9e0.png"},57435:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/clue-ace830234229a22d9ea5da285ef1b1e1.png"},94809:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gobuster-b9a057eff85bc910bca4e2ffc4a26acb.png"},29129:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/home-44986cef9106f185aa5aaa6e61c2187d.png"},49069:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/login-90fa5652cbaf0f6bf852c9bc3a3de483.png"},29220:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/root-606ec0bd098e05017abf372cded9b8d6.png"},14052:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/second-891c9992fbb92c96e6d9cf0845244293.png"},58203:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/source-6e31107bb4de58b2ed904424a22aa458.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);