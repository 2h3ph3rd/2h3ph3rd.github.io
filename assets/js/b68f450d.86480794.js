"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[5977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const l={},a="Pickle Rick",o={unversionedId:"writeups/thm/challenges/picke-rick",id:"writeups/thm/challenges/picke-rick",title:"Pickle Rick",description:"What is the first ingredient that Rick needs?",source:"@site/docs/writeups/thm/challenges/picke-rick.md",sourceDirName:"writeups/thm/challenges",slug:"/writeups/thm/challenges/picke-rick",permalink:"/docs/writeups/thm/challenges/picke-rick",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/challenges/picke-rick.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Flip",permalink:"/docs/writeups/thm/challenges/flip"},next:{title:'Snapped "Phish"-ing Line',permalink:"/docs/writeups/thm/challenges/snapped-phish-ing-line"}},s={},c=[{value:"Walkthrough",id:"walkthrough",level:2},{value:"First ingredient",id:"first-ingredient",level:3},{value:"Second ingredient",id:"second-ingredient",level:3},{value:"Third ingredient",id:"third-ingredient",level:3}],p=(d="Image",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const u={toc:c},h="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pickle-rick"},"Pickle Rick"),(0,i.kt)(p,{src:"https://i.imgur.com/o9pyhyU.jpg",width:"128",mdxType:"Image"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What is the first ingredient that Rick needs?")),(0,i.kt)("p",null,"mr. meeseek hair"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What is the second ingredient in Rick\u2019s potion?")),(0,i.kt)("p",null,"1 jerry tear"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What is the last and final ingredient?")),(0,i.kt)("p",null,"fleeb juice"),(0,i.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,i.kt)("h3",{id:"first-ingredient"},"First ingredient"),(0,i.kt)("p",null,"By opening the given link we can find a simple homepage without any external links."),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/home.png",mdxType:"Image"}),(0,i.kt)("p",null,"If we look to the source we can find a comment with a username, but at the moment we don't know where to use it."),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/source.png",mdxType:"Image"}),(0,i.kt)("p",null,"There is nothing else to check, so we can try to enumerate the website with gobuster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster dir -u URL -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,css,js -eq\n")),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/gobuster.png",mdxType:"Image"}),(0,i.kt)("p",null,"The login page under ",(0,i.kt)("inlineCode",{parentName:"p"},"/login.php")," could be a point of attack but we are still missing the password."),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"robots.txt")," file there is a strange word that could be a password."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Username: R1ckRul3s\nPassword: Wubbalubbadubdub\n")),(0,i.kt)("p",null,"If we try these credentials we can login."),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/login.png",mdxType:"Image"}),(0,i.kt)("p",null,"The page allows to execute commands inside the server using the form.\nWe need to print the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Sup3rS3cretPickl3Ingred.txt")," to get the first ingredient.\nHowever, commands like cat, head and tail are blocked."),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/blocked.png",mdxType:"Image"}),(0,i.kt)("p",null,"By searching online for alternatives to cat, we can find ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," that works.\nThe output will tell the first ingredient."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"First ingredient: mr. meeseek hair\n")),(0,i.kt)("h3",{id:"second-ingredient"},"Second ingredient"),(0,i.kt)("p",null,"Inside the file ",(0,i.kt)("inlineCode",{parentName:"p"},"clue.txt")," there is a hint to obtain the second ingredient."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Look around the file system for the other ingredient.\n")),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/clue.png",mdxType:"Image"}),(0,i.kt)("p",null,"Explore the file system to get the second ingredient inside the home of ",(0,i.kt)("inlineCode",{parentName:"p"},"rick")," user."),(0,i.kt)("p",null,"Be careful that there is a space in the name of the file, so it is important to escape it like ",(0,i.kt)("inlineCode",{parentName:"p"},"\\ "),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"less /home/rick/second\\ ingredients\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Second ingredient: 1 jerry tear\n")),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/second.png",mdxType:"Image"}),(0,i.kt)("h3",{id:"third-ingredient"},"Third ingredient"),(0,i.kt)("p",null,"The third ingredient could be inside the root folder. As we are not root, we need to escalate privileges."),(0,i.kt)("p",null,"By looking with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo -l")," we see that it is possible to run directly commands as root."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo less /root/3rd.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Third ingredient: fleeb juice\n")),(0,i.kt)(p,{src:"/images/writeups/thm/challenges/pickle-rick/root.png",mdxType:"Image"}))}k.isMDXComponent=!0}}]);