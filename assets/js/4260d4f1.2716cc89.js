"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[2941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),p=i,b=c["".concat(u,".").concat(p)]||c[p]||m[p]||o;return r?n.createElement(b,a(a({ref:t},d),{},{components:r})):n.createElement(b,a({ref:t},d))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={id:"domain-enumeration",title:"Domains"},a="Domains enumeration",s={unversionedId:"security/enumeration/domain-enumeration",id:"security/enumeration/domain-enumeration",title:"Domains",description:"Wordlists",source:"@site/docs/security/02-enumeration/01-domain-enumeration.md",sourceDirName:"security/02-enumeration",slug:"/security/enumeration/domain-enumeration",permalink:"/docs/security/enumeration/domain-enumeration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/02-enumeration/01-domain-enumeration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"domain-enumeration",title:"Domains"},sidebar:"securitySidebar",previous:{title:"\ud83d\uddc3\ufe0f Enumeration",permalink:"/docs/security/enumeration/"},next:{title:"Databases",permalink:"/docs/security/enumeration/database-enumeration"}},u={},l=[{value:"Wordlists",id:"wordlists",level:2},{value:"gobuster",id:"gobuster",level:2},{value:"Subdirectories",id:"subdirectories",level:3},{value:"Subdomains",id:"subdomains",level:3}],d={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"domains-enumeration"},"Domains enumeration"),(0,i.kt)("h2",{id:"wordlists"},"Wordlists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/share/wordlists/dirb/*\n/usr/share/wordlists/dirb/small.txt\n/usr/share/wordlists/dirb/common.txt\n/usr/share/wordlists/dirb/big.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/share/wordlists/dirbuster/*\n/usr/share/wordlists/dirbuster/directory-list-2.3-small.txt\n/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n")),(0,i.kt)("h2",{id:"gobuster"},"gobuster"),(0,i.kt)("h3",{id:"subdirectories"},"Subdirectories"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gobuster dir -e -u <TARGET> -w <WORDLIST> -q\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-u")," target"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-w")," wordlist"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-e")," print the full url instead of only the relative path"),(0,i.kt)("h3",{id:"subdomains"},"Subdomains"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gobuster dns -d <TARGET> -t 100 -w <WORDLIST> --wildcard\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-d")," dns server"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-w")," wordlist"))}m.isMDXComponent=!0}}]);