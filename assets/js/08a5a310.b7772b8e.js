"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[6192],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=r,d=p["".concat(i,".").concat(h)]||p[h]||k[h]||a;return o?n.createElement(d,s(s({ref:t},c),{},{components:o})):n.createElement(d,s({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7103:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={},s="Network services 2",l={unversionedId:"writeups/thm/network/network-services-2",id:"writeups/thm/network/network-services-2",title:"Network services 2",description:"Task 1 - Get Connected",source:"@site/docs/writeups/thm/network/network-services-2.md",sourceDirName:"writeups/thm/network",slug:"/writeups/thm/network/network-services-2",permalink:"/docs/writeups/thm/network/network-services-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/writeups/thm/network/network-services-2.md",tags:[],version:"current",frontMatter:{},sidebar:"writeupsSidebar",previous:{title:"Introductory Networking",permalink:"/docs/writeups/thm/network/introductory-networking"},next:{title:"Network Services",permalink:"/docs/writeups/thm/network/network-services"}},i={},u=[{value:"Task 1 - Get Connected",id:"task-1---get-connected",level:2},{value:"Task 2 - Understanding NFS",id:"task-2---understanding-nfs",level:2},{value:"Task 3 - Enumerating NFS",id:"task-3---enumerating-nfs",level:2},{value:"Task 4 - Exploiting NFS",id:"task-4---exploiting-nfs",level:2}],c=(p="Image",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const k={toc:u},h="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network-services-2"},"Network services 2"),(0,r.kt)(c,{src:"https://tryhackme-images.s3.amazonaws.com/room-icons/5a1f94a2bdee82a5410f42346bd218c8.png",alt:"OWASP Juice Shop",width:"128",mdxType:"Image"}),(0,r.kt)("h2",{id:"task-1---get-connected"},"Task 1 - Get Connected"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ready? Let's get going!")),(0,r.kt)("p",null,"No answer needed"),(0,r.kt)("h2",{id:"task-2---understanding-nfs"},"Task 2 - Understanding NFS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What does NFS stand for?")),(0,r.kt)("p",null,"Network File System"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What process allows an NFS client to interact with a remote directory as though it was a physical device?")),(0,r.kt)("p",null,"mounting"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What does NFS use to represent files and directories on the server?")),(0,r.kt)("p",null,"file handle"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What protocol does NFS use to communicate between the server and client?")),(0,r.kt)("p",null,"RPC"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What two pieces of user data does the NFS server take as parameters for controlling user permissions? Format: parameter 1 / parameter 2")),(0,r.kt)("p",null,"user ID / group ID"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Can a Windows NFS server share files with a Linux client? (Y/N)")),(0,r.kt)("p",null,"Y"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Can a Linux NFS server share files with a MacOS client? (Y/N)")),(0,r.kt)("p",null,"Y"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What is the latest version of NFS? ","[released in 2016, but is still up to date as of 2020]"," This will require external research.")),(0,r.kt)("p",null,"4.2"),(0,r.kt)("h2",{id:"task-3---enumerating-nfs"},"Task 3 - Enumerating NFS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Conduct a thorough port scan scan of your choosing, how many ports are open?")),(0,r.kt)("p",null,"7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nmap -sS -p- <HOST>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Which port contains the service we're looking to enumerate?")),(0,r.kt)("p",null,"2049"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Now, use /usr/sbin/showmount -e ","[IP]"," to list the NFS shares, what is the name of the visible share?")),(0,r.kt)("p",null,"/home"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/sbin/showmount -e <IP>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Change directory to where you mounted the share- what is the name of the folder inside?")),(0,r.kt)("p",null,"cappucino"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Have a look inside this directory, look at the files. Looks like we're inside a user's home directory...")),(0,r.kt)("p",null,"No answer needed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Interesting! Let's do a bit of research now, have a look through the folders. Which of these folders could contain keys that would give us remote access to the server?")),(0,r.kt)("p",null,".ssh"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Which of these keys is most useful to us?")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Can we log into the machine using ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -i <key-file> <username>@<ip>")," ? (Y/N)")),(0,r.kt)("p",null,"Y"),(0,r.kt)("h2",{id:"task-4---exploiting-nfs"},"Task 4 - Exploiting NFS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"First, change directory to the mount point on your machine, where the NFS share should still be mounted, and then into the user's home directory.")),(0,r.kt)("p",null,"No answer needed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Download the bash executable to your Downloads directory. Then use "cp ~/Downloads/bash ." to copy the bash executable to the NFS share. The copied bash shell must be owned by a root user, you can set this using "sudo chown root bash"')),(0,r.kt)("p",null,"No answer needed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Now, we're going to add the SUID bit permission to the bash executable we just copied to the share using \"sudo chmod +","[permission]",' bash". What letter do we use to set the SUID bit set using chmod?')),(0,r.kt)("p",null,"s"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What does the permission set look like?")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Now, SSH into the machine as the user. List the directory to make sure the bash executable is there. Now, the moment of truth. Lets run it with "./bash -p". The -p persists the permissions, so that it can run as root with SUID- as otherwise bash will sometimes drop the permissions.')),(0,r.kt)("p",null,"No answer needed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Great! If all's gone well you should have a shell as root! What's the root flag?")))}d.isMDXComponent=!0}}]);