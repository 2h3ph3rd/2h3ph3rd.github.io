"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[8282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="\ud83d\udd87\ufe0f IDOR",c={unversionedId:"security/web/idor",id:"security/web/idor",title:"\ud83d\udd87\ufe0f IDOR",description:"IDOR stands for Insecure Direct Object Reference and is a type of vulnerability based on unathorized resource access.",source:"@site/docs/security/05-web/idor.md",sourceDirName:"security/05-web",slug:"/security/web/idor",permalink:"/docs/security/web/idor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/05-web/idor.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udcc1 File inclusion",permalink:"/docs/security/web/file-inclusion"},next:{title:"\ud83d\udc64 Login brute force",permalink:"/docs/security/web/login-brute-force"}},u={},s=[],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-idor"},"\ud83d\udd87\ufe0f IDOR"),(0,o.kt)("p",null,"IDOR stands for Insecure Direct Object Reference and is a type of vulnerability based on unathorized resource access."),(0,o.kt)("p",null,"For example, if you can retrieve your profile by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/1000")," you could try to change the id with other numbers like ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/1001"),".\nWe have an IDOR if it is possible to access other profiles without authorization."),(0,o.kt)("p",null,"IDORs attacks are not always evident:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"data could be encoded with base64 or hashed with MD5 or SHA-1"),(0,o.kt)("li",{parentName:"ul"},"a parameter could be hidden"),(0,o.kt)("li",{parentName:"ul"},"a server request could have a vulnerable body or param")),(0,o.kt)("p",null,"A good way to check for an IDOR vulnerability is to create two accounts and see if using one of them you can access the other's private data."))}d.isMDXComponent=!0}}]);