"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[5361],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,h=p["".concat(s,".").concat(d)]||p[d]||k[d]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5158:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={},i="OWASP Juice Shop",l={unversionedId:"writeups/thm/web/owasp-juice-shop",id:"writeups/thm/web/owasp-juice-shop",title:"OWASP Juice Shop",description:"Task 1 - Open for business!",source:"@site/docs/writeups/thm/web/owasp-juice-shop.md",sourceDirName:"writeups/thm/web",slug:"/writeups/thm/web/owasp-juice-shop",permalink:"/docs/writeups/thm/web/owasp-juice-shop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/web/owasp-juice-shop.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Nmap",permalink:"/docs/writeups/thm/network/nmap"},next:{title:"OWASP Top 10 - 2021",permalink:"/docs/writeups/thm/web/owasp-top-10-2021"}},s={},u=[{value:"Task 1 - Open for business!",id:"task-1---open-for-business",level:2},{value:"Task 2 - Let&#39;s go on an adventure!",id:"task-2---lets-go-on-an-adventure",level:2},{value:"Task 3 - Inject the juice",id:"task-3---inject-the-juice",level:2},{value:"Task 4 - Who broke my lock?!",id:"task-4---who-broke-my-lock",level:2},{value:"Task 5 - AH! Don&#39;t look!",id:"task-5---ah-dont-look",level:2},{value:"Task 6 - Who&#39;s flying this thing?",id:"task-6---whos-flying-this-thing",level:2},{value:"Task 7 - Where did that come from?",id:"task-7---where-did-that-come-from",level:2},{value:"Task 8 - Exploration!",id:"task-8---exploration",level:2}],c=(p="Image",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const k={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"owasp-juice-shop"},"OWASP Juice Shop"),(0,a.kt)(c,{src:"https://tryhackme-images.s3.amazonaws.com/room-icons/9a0c0a661ba218c0f9d533c8f41d8dd5.png",alt:"OWASP Juice Shop",width:"128",mdxType:"Image"}),(0,a.kt)("h2",{id:"task-1---open-for-business"},"Task 1 - Open for business!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Deploy the VM attached to this task to get started! You can access this machine by using your browser-based machine, or if you're connected through OpenVPN.")),(0,a.kt)("p",null,"No answer needed"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the machine has loaded, access it by copying and pasting its IP into your browser; if you're using the browser-based machine, paste the machines IP into a browser on that machine.")),(0,a.kt)("p",null,"No answer needed"),(0,a.kt)("h2",{id:"task-2---lets-go-on-an-adventure"},"Task 2 - Let's go on an adventure!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #1: What's the Administrator's email address?")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"mailto:admin@juice-sh.op"},"admin@juice-sh.op")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #2: What parameter is used for searching?")),(0,a.kt)("p",null,"q"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #3: What show does Jim reference in his review?")),(0,a.kt)("p",null,"Star Trek"),(0,a.kt)("h2",{id:"task-3---inject-the-juice"},"Task 3 - Inject the juice"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #1: Log into the administrator account!")),(0,a.kt)("p",null,"32a5e0f21372bcc1000a6088b93b458e41f0e02a"),(0,a.kt)("p",null,"Login with email ",(0,a.kt)("inlineCode",{parentName:"p"},"' or 1=1--")," and password ",(0,a.kt)("inlineCode",{parentName:"p"},"password")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #2: Log into the Bender account!")),(0,a.kt)("p",null,"fb364762a3c102b2db932069c0e6b78e738d4066"),(0,a.kt)("p",null,"Login with email ",(0,a.kt)("inlineCode",{parentName:"p"},"bender@juice-sh.op'--")," and password ",(0,a.kt)("inlineCode",{parentName:"p"},"password")),(0,a.kt)("h2",{id:"task-4---who-broke-my-lock"},"Task 4 - Who broke my lock?!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #1: Bruteforce the Administrator account's password!")),(0,a.kt)("p",null,"c2110d06dc6f81c67cd8099ff0ba601241f1ac0e"),(0,a.kt)("p",null,"Use Burp Intruder with the list given to bruteforce the password. The password is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin123"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #2: Reset Jim's password!")),(0,a.kt)("p",null,"094fbc9b48e525150ba97d05b942bbf114987257"),(0,a.kt)("p",null,"The security question for Jim account is ",(0,a.kt)("inlineCode",{parentName:"p"},"our eldest siblings middle name?"),".\nBecause of the previous comment about Star Trek we can try with ",(0,a.kt)("inlineCode",{parentName:"p"},"Samuel"),".\nThis is the name of the only brother of James T. Kirk, the main character of Star Trek."),(0,a.kt)("h2",{id:"task-5---ah-dont-look"},"Task 5 - AH! Don't look!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #1: Access the Confidential Document!")),(0,a.kt)("p",null,"edf9281222395a1c5fee9b89e32175f1ccf50c5b"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"/ftp")," and then look in the homepage."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #2: Log into MC SafeSearch's account!")),(0,a.kt)("p",null,"66bdcffad9e698fd534003fbb3cc7e2b7b55d7f0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #3: Download the Backup file!")),(0,a.kt)("p",null,"bfc1e6b4a16579e85e06fee4c36ff8c02fb13795"),(0,a.kt)("p",null,"Remember to go back to the home page to get the flag."),(0,a.kt)("h2",{id:"task-6---whos-flying-this-thing"},"Task 6 - Who's flying this thing?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #1: Access the administration page!")),(0,a.kt)("p",null,"946a799363226a24822008503f5d1324536629a0"),(0,a.kt)("p",null,"Login as admin and then go to ",(0,a.kt)("inlineCode",{parentName:"p"},"/#/administration"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #2: View another user's shopping basket!")),(0,a.kt)("p",null,"41b997a36cc33fbe4f0ba018474e19ae5ce52121"),(0,a.kt)("p",null,"Use Burp to change the request from ",(0,a.kt)("inlineCode",{parentName:"p"},"/basket/1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/basket/2"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #3: Remove all 5-star reviews!")),(0,a.kt)("p",null,"50c97bcce0b895e446d61c83a21df371ac2266ef"),(0,a.kt)("p",null,"Like in ",(0,a.kt)("inlineCode",{parentName:"p"},"Question #1")," go in the administration page and then remove the five stars review."),(0,a.kt)("h2",{id:"task-7---where-did-that-come-from"},"Task 7 - Where did that come from?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #1: Perform a DOM XSS!")),(0,a.kt)("p",null,"9aaf4bbea5c30d00a1f5bbcfce4db6d4b0efe0bf"),(0,a.kt)("p",null,"Use the exact same payload to get the flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<iframe src="javascript:alert(`xss`)">\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #2: Perform a persistent XSS!")),(0,a.kt)("p",null,"149aa8ce13d7a4a8a931472308e269c94dc5f156"),(0,a.kt)("p",null,"The given header must be added manually in the request. Once sent, it is not possible to redo it until the next login."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Question #3: Perform a reflected XSS!")),(0,a.kt)("p",null,"23cefee1527bde039295b2616eeb29e1edc660a0"),(0,a.kt)("p",null,"Substitute the id of the request with the payload ",(0,a.kt)("inlineCode",{parentName:"p"},'/#/track-result?id=<iframe%20src%3D"javascript:alert(%60xss%60)">'),"."),(0,a.kt)("h2",{id:"task-8---exploration"},"Task 8 - Exploration!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Access the /#/score-board/ page")),(0,a.kt)("p",null,"7efd3174f9dd5baa03a7882027f2824d2f72d86e"))}h.isMDXComponent=!0}}]);