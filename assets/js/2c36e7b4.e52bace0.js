"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[2759],{2713:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(74848),r=t(28453);const o={},c="\ud83d\udc1a SSH",i={id:"security/network/ssh",title:"\ud83d\udc1a SSH",description:"Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.",source:"@site/docs/security/02-network/ssh.md",sourceDirName:"security/02-network",slug:"/security/network/ssh",permalink:"/docs/security/network/ssh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/02-network/ssh.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udc83 SMB",permalink:"/docs/security/network/smb"},next:{title:"\ud83d\udcde Telnet",permalink:"/docs/security/network/telnet"}},a={},l=[{value:"Keys",id:"keys",level:2},{value:"Commands",id:"commands",level:2},{value:"Generate a key pair",id:"generate-a-key-pair",level:3},{value:"Connect to a remote host",id:"connect-to-a-remote-host",level:3},{value:"Copy a file to a remote host",id:"copy-a-file-to-a-remote-host",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"-ssh",children:"\ud83d\udc1a SSH"}),"\n",(0,n.jsx)(s.p,{children:"Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network."}),"\n",(0,n.jsx)(s.p,{children:"Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH."}),"\n",(0,n.jsx)(s.h2,{id:"keys",children:"Keys"}),"\n",(0,n.jsxs)(s.p,{children:["On Linux systems, SSH keys are usually stored in ",(0,n.jsx)(s.code,{children:"~/.ssh/"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The private key is stored in ",(0,n.jsx)(s.code,{children:"~/.ssh/id_rsa"})," and the public key in ",(0,n.jsx)(s.code,{children:"~/.ssh/id_rsa.pub"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"commands",children:"Commands"}),"\n",(0,n.jsx)(s.h3,{id:"generate-a-key-pair",children:"Generate a key pair"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'ssh-keygen -t rsa -b 4096 -C "<email>"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"connect-to-a-remote-host",children:"Connect to a remote host"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"ssh <user>@<host>\n"})}),"\n",(0,n.jsx)(s.h3,{id:"copy-a-file-to-a-remote-host",children:"Copy a file to a remote host"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"scp <file> <user>@<host>:<path>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var n=t(96540);const r={},o=n.createContext(r);function c(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);