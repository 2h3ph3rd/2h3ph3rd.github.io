"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[6518],{71367:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(74848),c=s(28453);const i={},a="Nmap",r={id:"security/network/scanning/nmap",title:"Nmap",description:"Start with a fast scan to check for open ports and than run a full scan only on them.",source:"@site/docs/security/02-network/1-scanning/1-nmap.md",sourceDirName:"security/02-network/1-scanning",slug:"/security/network/scanning/nmap",permalink:"/docs/security/network/scanning/nmap",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/02-network/1-scanning/1-nmap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"securitySidebar",previous:{title:"About",permalink:"/docs/security/"},next:{title:"Cheatsheet",permalink:"/docs/security/network/scanning/cheatsheet"}},o={},l=[{value:"TCP scan",id:"tcp-scan",level:3},{value:"SYN scan",id:"syn-scan",level:3},{value:"Other types of scan",id:"other-types-of-scan",level:3},{value:"Ports result",id:"ports-result",level:3},{value:"Stealth",id:"stealth",level:3},{value:"Using a specific DNS service on the host",id:"using-a-specific-dns-service-on-the-host",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components},{Image:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nmap",children:"Nmap"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Start with a fast scan to check for open ports and than run a full scan only on them."})}),"\n",(0,t.jsx)(n.p,{children:"Fast scan, requires priviliges:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -sS <HOST>\nnmap -sS 10.10.1.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Advanced scannning on specific ports:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -p <PORTS> -A <HOST>\nnmap -p 22,80,443 -A 10.10.1.1\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Usually, it is better to run nmap with verbose output to see what is happening by adding the ",(0,t.jsx)(n.code,{children:"-v"})," or ",(0,t.jsx)(n.code,{children:"-vv"})," flag to the command."]})}),"\n",(0,t.jsx)(n.p,{children:"By default, nmap scans the first 1000 ports."}),"\n",(0,t.jsxs)(n.p,{children:["To scan all the 65535 ports use the ",(0,t.jsx)(n.code,{children:"-p-"})," flag.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -sS -p- <HOST>\nnmap -sS -p- 10.10.1.1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tcp-scan",children:"TCP scan"}),"\n",(0,t.jsx)(n.p,{children:"TCP scan is the default scan type when nmap is run without priviliges."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -sT <HOST>\nnmap -sT 10.10.1.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is slower than the SYN scan but it is more reliable."}),"\n",(0,t.jsx)(n.p,{children:"Each port is checked through a complete three-way handshake."}),"\n",(0,t.jsx)(s,{src:"/images/security/network/tcp-scan.drawio.png"}),"\n",(0,t.jsx)(n.h3,{id:"syn-scan",children:"SYN scan"}),"\n",(0,t.jsx)(n.p,{children:"SYN scan is the default scan type when nmap is run with priviliges."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -sS <HOST>\nnmap -sS 10.10.1.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is faster than TCP scan because it does not complete the three-way handshake."}),"\n",(0,t.jsx)(n.p,{children:"Each port is checked by sending a SYN packet and waiting for a SYN/ACK response."}),"\n",(0,t.jsx)(n.p,{children:"Half way handshake is based on the fact that the host will respond with a SYN/ACK packet only if the port is open."}),"\n",(0,t.jsx)(n.p,{children:"nmap will respond with a RST packet to close the connection."}),"\n",(0,t.jsx)(s,{src:"/images/security/network/syn-scan.drawio.png"}),"\n",(0,t.jsx)(n.h3,{id:"other-types-of-scan",children:"Other types of scan"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-sF"})," - FIN scan - Send a FIN packet to close the connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-sX"})," - XMAS scan - Send a FIN, URG and PUSH packet to close the connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-sN"})," - NULL scan - Send an empty packet to close the connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-sA"})," - ACK scan - Send an ACK packet to check if the port is filtered or not."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-sU"})," - UDP scan - Send a UDP packet to check if the port is open or not."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ports-result",children:"Ports result"}),"\n",(0,t.jsx)(n.p,{children:"There are three possible results for a port:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"open"})," - The port is open and accepting connections."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"closed"})," - The port is closed and not accepting connections."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filtered"})," - The port is not responding to Nmap's probes, maybe a firewall is blocking it."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"stealth",children:"Stealth"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -sA --disable-arp-ping -T 1 -n <HOST>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-a-specific-dns-service-on-the-host",children:"Using a specific DNS service on the host"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -source-port DNS_PORT <HOST>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const c={},i=t.createContext(c);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);