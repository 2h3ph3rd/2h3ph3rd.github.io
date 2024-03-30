"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[3233],{57065:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(74848),s=r(28453);const i={},c="\ud83d\udd01 Reverse",a={id:"security/binary/reverse",title:"\ud83d\udd01 Reverse",description:"Reverse challenges usually require to find a hidden flag inside a binary.",source:"@site/docs/security/04-binary/04-reverse.md",sourceDirName:"security/04-binary",slug:"/security/binary/reverse",permalink:"/docs/security/binary/reverse",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/04-binary/04-reverse.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udcad Analysis",permalink:"/docs/security/binary/analysis"},next:{title:"\ud83e\uded7 Shellcode",permalink:"/docs/security/binary/shellcode"}},o={},l=[{value:"Useful commands",id:"useful-commands",level:2},{value:"Ptrace",id:"ptrace",level:2},{value:"LD_PRELOAD trick",id:"ld_preload-trick",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-reverse",children:"\ud83d\udd01 Reverse"}),"\n",(0,t.jsx)(n.p,{children:"Reverse challenges usually require to find a hidden flag inside a binary."}),"\n",(0,t.jsx)(n.p,{children:"The flag could be dinamically generated using complex calculations or there could be something that avoid debugging like a ptrace."}),"\n",(0,t.jsx)(n.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ltrace"})," and ",(0,t.jsx)(n.code,{children:"strace"})," can help when the flag is passed as parameter to a library function."]}),"\n",(0,t.jsx)(n.p,{children:"Tools like xxd, Bless or Ghex can be used to patch the binary."}),"\n",(0,t.jsx)(n.h2,{id:"ptrace",children:"Ptrace"}),"\n",(0,t.jsxs)(n.p,{children:["One of the main countermeasure to reverse engineering is the function ",(0,t.jsx)(n.code,{children:"ptrace"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Each process can be traced by only one other process at a time."}),"\n",(0,t.jsxs)(n.p,{children:["This means that if a process uses ",(0,t.jsx)(n.code,{children:"ptrace"})," on itself it can avoid to be debugged by others."]}),"\n",(0,t.jsx)(n.p,{children:"One of the easier way to remove this problem, it is to path the ptrace call with nop instruction."}),"\n",(0,t.jsx)(n.h2,{id:"ld_preload-trick",children:"LD_PRELOAD trick"}),"\n",(0,t.jsx)(n.p,{children:"Using this trick you can change a library function to do what you want."}),"\n",(0,t.jsxs)(n.p,{children:["For example, you could rewrite the ",(0,t.jsx)(n.code,{children:"strcmp"})," function to print out the parameters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",metastring:'title="inject.c"',children:'#include <string.h>\n\nint strcmp(const char *s1, const char *s2)\n{\n  printf("strcmp: %s %s\\n", s1, s2);\n  return 0;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcc -shared -fPIC -o inject.so inject.c\nLD_PRELOAD=$PWD/inject.so ./binary_to_execute\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);