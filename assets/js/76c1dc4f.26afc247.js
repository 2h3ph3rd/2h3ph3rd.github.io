"use strict";(self.webpackChunk_2_h_3_ph_3rd_github_io=self.webpackChunk_2_h_3_ph_3rd_github_io||[]).push([[2007],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,f=p["".concat(l,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o="Binary exploitation",c={unversionedId:"security/binary/index",id:"security/binary/index",title:"Binary exploitation",description:"Quick reference",source:"@site/docs/security/04-binary/index.md",sourceDirName:"security/04-binary",slug:"/security/binary/",permalink:"/docs/security/binary/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/04-binary/index.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udd12 Privilege escalation",permalink:"/docs/security/privilege-escalation/"},next:{title:"Pwntools",permalink:"/docs/security/binary/pwntools"}},l={},s=[{value:"Quick reference",id:"quick-reference",level:3},{value:"Build a binary for a challenge",id:"build-a-binary-for-a-challenge",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-exploitation"},"Binary exploitation"),(0,a.kt)("h3",{id:"quick-reference"},"Quick reference"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is very approximative!")),(0,a.kt)("p",null,"Be aware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sometimes, you could need more than one technique."),(0,a.kt)("li",{parentName:"ul"},"There are a lot of other constraints to consider, look also in each specific section and in mitigations.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:r(1946).Z})),(0,a.kt)("h3",{id:"build-a-binary-for-a-challenge"},"Build a binary for a challenge"),(0,a.kt)("p",null,"No ASLR (globally!)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bash -c 'echo 0 > /proc/sys/kernel/randomize_va_space'\n")),(0,a.kt)("p",null,"No stack protection, executable stack, no pie."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gcc -fno-stack-protector -no-pie -z execstack main.c\n")))}d.isMDXComponent=!0},1946:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/binary-0b57fd164277986d4ea6d80c2aa08d41.jpg"}}]);