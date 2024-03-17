"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[3310],{11369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(74848),o=r(28453);const s={},c="\ud83d\udcc4 FTP",i={id:"security/network/ftp",title:"\ud83d\udcc4 FTP",description:"File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files between a client and server on a computer network.",source:"@site/docs/security/02-network/ftp.md",sourceDirName:"security/02-network",slug:"/security/network/ftp",permalink:"/docs/security/network/ftp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/02-network/ftp.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83c\udde6 DNS",permalink:"/docs/security/network/dns"},next:{title:"\u21a9\ufe0f HTTP",permalink:"/docs/security/network/http"}},a={},l=[{value:"Login brute force",id:"login-brute-force",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-ftp",children:"\ud83d\udcc4 FTP"}),"\n",(0,n.jsx)(t.p,{children:"File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files between a client and server on a computer network."}),"\n",(0,n.jsx)(t.p,{children:"The standard port is 21."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ftp <ip_address>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To login anonymously, use ",(0,n.jsx)(t.code,{children:"anonymous"})," as the username while the password leave it empty."]}),"\n",(0,n.jsx)(t.p,{children:"Two modes of FTP connection are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Active: the client opens a port and the server actively connects to it."}),"\n",(0,n.jsx)(t.li,{children:"Passive: the client connects to a port opened by the server."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"login-brute-force",children:"Login brute force"}),"\n",(0,n.jsx)(t.p,{children:"It is possible to brute force FTP login with Hydra."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"hydra -t 4 -l <USERNAME> -P /usr/share/wordlists/rockyou.txt -vV <HOST> ftp\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);