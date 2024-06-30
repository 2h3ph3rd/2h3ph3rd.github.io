"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[8581],{76485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const r={},o="Compiled",a={id:"writeups/thm/compiled/index",title:"Compiled",description:"A writeup for the room Compiled on TryHackMe.",source:"@site/docs/writeups/thm/compiled/index.md",sourceDirName:"writeups/thm/compiled",slug:"/writeups/thm/compiled/",permalink:"/docs/writeups/thm/compiled/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/compiled/index.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Clocky",permalink:"/docs/writeups/thm/clocky/"},next:{title:"Crylo",permalink:"/docs/writeups/thm/crylo/"}},c={},d=[{value:"Analyzing the binary",id:"analyzing-the-binary",level:3},{value:"Testing format strings",id:"testing-format-strings",level:3},{value:"Finding the password",id:"finding-the-password",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Image:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Image",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"compiled",children:"Compiled"}),"\n",(0,i.jsxs)(t.p,{children:["A writeup for the room ",(0,i.jsx)(t.a,{href:"https://tryhackme.com/room/compiled",children:"Compiled"})," on TryHackMe."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Strings can only help you so far."}),"\n"]}),"\n",(0,i.jsx)(r,{src:n(56605).A,height:"256"}),"\n",(0,i.jsx)(t.h3,{id:"analyzing-the-binary",children:"Analyzing the binary"}),"\n",(0,i.jsx)(t.p,{children:"Only a binary is provided, which means that the flag must be inside the file."}),"\n",(0,i.jsx)(t.p,{children:'This type of challenge is called a "reverse engineering" challenge, where the goal is to understand how the binary works and extract the flag from it.'}),"\n",(0,i.jsx)(t.p,{children:"Analyzing it with the file command, we can see that it is a ELF 64-bit."}),"\n",(0,i.jsx)(r,{src:n(32810).A}),"\n",(0,i.jsx)(t.p,{children:"Now we can try to decompile the code with a tool like Ghidra."}),"\n",(0,i.jsx)(r,{src:n(37600).A}),"\n",(0,i.jsx)(t.p,{children:"As you can see from the decompiled code, the application simply prints out the password string and then runs a scanf with DoYouEven%sCTFas the format string."}),"\n",(0,i.jsx)(t.h3,{id:"testing-format-strings",children:"Testing format strings"}),"\n",(0,i.jsx)(t.p,{children:"The format string is particular, it is better to do some testing to understand how it works."}),"\n",(0,i.jsx)(t.p,{children:"We can create a new file called main.c with the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'#include <stdio.h>\n\n\nint main() {\n char s[30];\n scanf("test%swhatever", s);\n printf("s: %s\\n", s);\n return 0;\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Then we can compile it with gcc and run it."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"gcc main.c\n./a.out\n"})}),"\n",(0,i.jsx)(t.p,{children:"Running some tests, we will see that the test string must be entered and whatever is entered after that is put into the variable s."}),"\n",(0,i.jsx)(r,{src:n(82762).A}),"\n",(0,i.jsx)(t.h3,{id:"finding-the-password",children:"Finding the password"}),"\n",(0,i.jsx)(t.p,{children:"We can look again at the main binary function. Given what we learned in the previous point, we need to include at least DoYouEven in order to add something to the input string."}),"\n",(0,i.jsx)(t.p,{children:"Now, what should we enter next?"}),"\n",(0,i.jsx)(t.p,{children:"If you look at the code after scanf, there are two strcmp:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The first one is misleading: it returns a bad message whether the given input is __dso_handle."}),"\n",(0,i.jsx)(t.li,{children:"The second strcmp is the password: the input must be equal to the string _init to show the success message."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Thus, the final password consists of the first part of the format string REDACTED followed by _init"})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},32810:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1-file-dff896106e8d05e2c35f62ef6de3e739.webp"},37600:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2-ghidra-3cd181128c7e1f08ac17fffc6e036f7b.webp"},82762:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3-format-strings-27c54480164ae15327260d6e68bbad44.webp"},56605:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/logo-60267a050efc5d8d96d2f80352f73629.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);