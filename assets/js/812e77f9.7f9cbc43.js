"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[9725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,h=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={},r="Walking An Application",l={unversionedId:"writeups/thm/web/walking-an-application",id:"writeups/thm/web/walking-an-application",title:"Walking An Application",description:"Task 1 - Walking An Application",source:"@site/docs/writeups/thm/web/walking-an-application.md",sourceDirName:"writeups/thm/web",slug:"/writeups/thm/web/walking-an-application",permalink:"/docs/writeups/thm/web/walking-an-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/web/walking-an-application.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"OWASP Top 10 - 2021",permalink:"/docs/writeups/thm/web/owasp-top-10-2021"},next:{title:"Windows Fundamentals 1",permalink:"/docs/writeups/thm/windows/windows-fundamentals-1"}},p={},s=[{value:"Task 1 - Walking An Application",id:"task-1---walking-an-application",level:2},{value:"Task 2 - Exploring The Website",id:"task-2---exploring-the-website",level:3},{value:"Task 3 - Viewing The Page Source",id:"task-3---viewing-the-page-source",level:3},{value:"Task 4 - Developer Tools - Inspector",id:"task-4---developer-tools---inspector",level:3},{value:"Task 5 - Developer Tools - Debugger",id:"task-5---developer-tools---debugger",level:3},{value:"Task 6 - Developer Tools - Network",id:"task-6---developer-tools---network",level:3}],c=(d="Image",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:s},k="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(k,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"walking-an-application"},"Walking An Application"),(0,o.kt)(c,{src:n(1911).Z,width:"128px",mdxType:"Image"}),(0,o.kt)("h2",{id:"task-1---walking-an-application"},"Task 1 - Walking An Application"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"I confirm that I have deployed the virtual machine and opened the website.")),(0,o.kt)("p",null,"No answer needed."),(0,o.kt)("h3",{id:"task-2---exploring-the-website"},"Task 2 - Exploring The Website"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Read the above.")),(0,o.kt)("p",null,"No answer needed."),(0,o.kt)("h3",{id:"task-3---viewing-the-page-source"},"Task 3 - Viewing The Page Source"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the flag from the HTML comment?")),(0,o.kt)("p",null,"THM{HTML_COMMENTS_ARE_DANGEROUS}"),(0,o.kt)("p",null,"the flag is inside ",(0,o.kt)("inlineCode",{parentName:"p"},"/new-home-beta"),". This path is written in the first comment."),(0,o.kt)(c,{src:n(4566).Z,mdxType:"Image"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the flag from the secret link?")),(0,o.kt)("p",null,"THM{NOT_A_SECRET_ANYMORE}"),(0,o.kt)("p",null,"The flag is inside ",(0,o.kt)("inlineCode",{parentName:"p"},"/secret-page"),". This path is linked by the hidden a."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the directory listing flag?")),(0,o.kt)("p",null,"THM{INVALID_DIRECTORY_PERMISSIONS}"),(0,o.kt)("p",null,"The flag is inside ",(0,o.kt)("inlineCode",{parentName:"p"},"/assets/flag.txt"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the framework flag?")),(0,o.kt)("p",null,"THM{KEEP_YOUR_SOFTWARE_UPDATED}"),(0,o.kt)("p",null,"By looking to the changelog we can see that in the last version a bug was fix about a ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp.zip")," file.\nWe can download and extract the zip to obtain the flag."),(0,o.kt)(c,{src:n(108).Z,mdxType:"Image"}),(0,o.kt)("h3",{id:"task-4---developer-tools---inspector"},"Task 4 - Developer Tools - Inspector"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the flag behind the paywall?")),(0,o.kt)("p",null,"THM{NOT_SO_HIDDEN}"),(0,o.kt)("p",null,"It is enough to open the third article inside the news section and disable the paywall.\nThe flag is behind it. To remove the paywall it is possible to set ",(0,o.kt)("inlineCode",{parentName:"p"},"display: none")," or to delete directly the node."),(0,o.kt)(c,{src:n(2526).Z,mdxType:"Image"}),(0,o.kt)("h3",{id:"task-5---developer-tools---debugger"},"Task 5 - Developer Tools - Debugger"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the flag in the red box?")),(0,o.kt)("p",null,"THM{CATCH_ME_IF_YOU_CAN}"),(0,o.kt)("p",null,"Go in ",(0,o.kt)("inlineCode",{parentName:"p"},"contact")," page and add a breakpoint inside the file ",(0,o.kt)("inlineCode",{parentName:"p"},"flash.min.js")," to the line with ",(0,o.kt)("inlineCode",{parentName:"p"},"flash['remove']();"),".\nWhen reloading the page the flag will be shown."),(0,o.kt)(c,{src:n(6443).Z,mdxType:"Image"}),(0,o.kt)("h3",{id:"task-6---developer-tools---network"},"Task 6 - Developer Tools - Network"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the flag shown on the contact-msg network request?")),(0,o.kt)("p",null,"THM{GOT_AJAX_FLAG}"),(0,o.kt)("p",null,"Open the newtwok tool, go in ",(0,o.kt)("inlineCode",{parentName:"p"},"contact")," page, and send the form.\nYou should see a POST request with the flag inside the response."),(0,o.kt)(c,{src:n(3252).Z,mdxType:"Image"}))}h.isMDXComponent=!0},6443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/debugger-af17a86aef7622b5aed660c0c46a2533.png"},108:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/framework-7d589b88ea02c081cdd955248e479644.png"},1911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/icon-d49b9eb05b7dd3bffe097d5e2a499b23.png"},2526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inspector-17cb90e0cbd69f39f27ea4a97e3a059e.png"},3252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/network-b73f92efb1f15088eaab29817b5fcdce.png"},4566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/source-ca367769e064ab6e6991644ed4176226.png"}}]);