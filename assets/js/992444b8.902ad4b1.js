"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[9473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Web",o={unversionedId:"security/web/index",id:"security/web/index",title:"Web",description:"Analyzing a web application",source:"@site/docs/security/05-web/index.md",sourceDirName:"security/05-web",slug:"/security/web/",permalink:"/docs/security/web/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/05-web/index.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udcbe Heap exploitation",permalink:"/docs/security/binary/heap-exploitation"},next:{title:"\ud83d\udcc1 File inclusion",permalink:"/docs/security/web/file-inclusion"}},s={},p=[{value:"Analyzing a web application",id:"analyzing-a-web-application",level:2},{value:"Browser tools",id:"browser-tools",level:3},{value:"Common public files",id:"common-public-files",level:3},{value:"Additional headers",id:"additional-headers",level:3},{value:"Google dorking",id:"google-dorking",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web"},"Web"),(0,r.kt)("h2",{id:"analyzing-a-web-application"},"Analyzing a web application"),(0,r.kt)("p",null,"There are different ways to analyze a web application. Sometimes, you could even have access to the source code but in general, at least the client side is available. You can use tools like your browser to inspect it."),(0,r.kt)("h3",{id:"browser-tools"},"Browser tools"),(0,r.kt)("p",null,"Using the browser it is possible to inspect everything on client side: HTML code, stylesheets, cookies, local storage, Javascript files, public assets, etc."),(0,r.kt)("p",null,"Some of the most common functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View source: look to the source code of a web page."),(0,r.kt)("li",{parentName:"ul"},"Inspector: inspect elements inside the pages and make changes to them."),(0,r.kt)("li",{parentName:"ul"},"Debugger: inspect and add breakpoint to JS code."),(0,r.kt)("li",{parentName:"ul"},"Network: see all the network requests made."),(0,r.kt)("li",{parentName:"ul"},"Storage: look to local storage and cookies used by the page.")),(0,r.kt)("h3",{id:"common-public-files"},"Common public files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"robots.txt")),(0,r.kt)("p",null,"It is a file used by a website to define which page a search engine should track and which should not. Sometimes, sensitive paths are placed here to keep them from being tracked."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sitemap.xml")),(0,r.kt)("p",null,"It is a list of all the pages that a website wants to be tracked on a search engine"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"favicon.ico")),(0,r.kt)("p",null,"It is the tab icon used for the website. By default, frameworks have their own logo that can be used to recognize them."),(0,r.kt)("h3",{id:"additional-headers"},"Additional headers"),(0,r.kt)("p",null,"It is possible to look to the headers returned by a web server to find possible useful information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -v https://website.com\n")),(0,r.kt)("h3",{id:"google-dorking"},"Google dorking"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"site:website.com"),(0,r.kt)("td",{parentName:"tr",align:null},"filter results by specific website")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inurl:id"),(0,r.kt)("td",{parentName:"tr",align:null},"filters results by word in the URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filetype:pdf"),(0,r.kt)("td",{parentName:"tr",align:null},"filters results by file extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intitle:login"),(0,r.kt)("td",{parentName:"tr",align:null},"filters results by word in title")))),(0,r.kt)("p",null,"Special characters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"site:","*",".website.com"),(0,r.kt)("td",{parentName:"tr",align:null},"any possible alphanumeric strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-site:website.com"),(0,r.kt)("td",{parentName:"tr",align:null},"used before an operator to obtain a not")))))}d.isMDXComponent=!0}}]);