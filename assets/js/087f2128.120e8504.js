"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const o={},i="\ud83d\udd28 SSRF",a={unversionedId:"security/web/ssrf",id:"security/web/ssrf",title:"\ud83d\udd28 SSRF",description:"Server Side Request Forgery (SSRF) is a type of vulnerability that allows a malicious user to have the server execute a custom request.",source:"@site/docs/security/05-web/ssrf.md",sourceDirName:"security/05-web",slug:"/security/web/ssrf",permalink:"/docs/security/web/ssrf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/05-web/ssrf.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udc89 SQLi",permalink:"/docs/security/web/sql-injection"},next:{title:"\ud83d\udcac XSS",permalink:"/docs/security/web/xss"}},c={},u=[{value:"Custom requests",id:"custom-requests",level:3}],l={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-ssrf"},"\ud83d\udd28 SSRF"),(0,s.kt)("p",null,"Server Side Request Forgery (SSRF) is a type of vulnerability that allows a malicious user to have the server execute a custom request."),(0,s.kt)("h3",{id:"custom-requests"},"Custom requests"),(0,s.kt)("p",null,"If you can specify the domain using a query param, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"&x=")," to remove the base url."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"http://website.com/items?server=api.website.com/users?id=123&x=\n\nhttp://api.website.com/users?id=123&x=website.com/items\n")))}f.isMDXComponent=!0}}]);