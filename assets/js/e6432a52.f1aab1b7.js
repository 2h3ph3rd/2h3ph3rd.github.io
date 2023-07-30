"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[6864],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=n.createContext({}),i=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(h.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,h=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),u=r,m=p["".concat(h,".").concat(u)]||p[u]||d[u]||s;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var o={};for(var h in t)hasOwnProperty.call(t,h)&&(o[h]=t[h]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const s={},l="#\ufe0f\u20e3 Hash",o={unversionedId:"security/crypto/hash",id:"security/crypto/hash",title:"#\ufe0f\u20e3 Hash",description:"\ufe0f\u20e3 Hash",source:"@site/docs/security/06-crypto/3-hash.md",sourceDirName:"security/06-crypto",slug:"/security/crypto/hash",permalink:"/docs/security/crypto/hash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/06-crypto/3-hash.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udd0f Asymmetric ciphers",permalink:"/docs/security/crypto/asymmetric"},next:{title:"\ud83d\udcc8 Elliptic curves",permalink:"/docs/security/crypto/elliptic-curves"}},h={},i=[{value:"What is a Hash?",id:"what-is-a-hash",level:2},{value:"Common Hash Algorithms",id:"common-hash-algorithms",level:2},{value:"Generate Hashes",id:"generate-hashes",level:2},{value:"Tools for hash identification",id:"tools-for-hash-identification",level:2},{value:"Hashid",id:"hashid",level:2},{value:"Hash-identifier",id:"hash-identifier",level:2},{value:"John the Ripper",id:"john-the-ripper",level:2},{value:"Shadow files",id:"shadow-files",level:3},{value:"Single Crack Mode",id:"single-crack-mode",level:3},{value:"Custom Rules",id:"custom-rules",level:3},{value:"zip2john",id:"zip2john",level:3},{value:"rar2john",id:"rar2john",level:3},{value:"ssh2john",id:"ssh2john",level:3},{value:"hashcat",id:"hashcat",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f\u20e3-hash"},"#\ufe0f\u20e3 Hash"),(0,r.kt)("h2",{id:"what-is-a-hash"},"What is a Hash?"),(0,r.kt)("p",null,"A hash is a one-way function that takes an input and produces an output."),(0,r.kt)("p",null,"The input can be of any length but the output is always of a fixed length."),(0,r.kt)("p",null,"The output is called a hash or a digest and it is always the same for the same input."),(0,r.kt)("p",null,"Hashes are used to verify the integrity of data or to store passwords."),(0,r.kt)("h2",{id:"common-hash-algorithms"},"Common Hash Algorithms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("th",{parentName:"tr",align:null},"Length (byte)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MD5"),(0,r.kt)("td",{parentName:"tr",align:null},"128 (32)"),(0,r.kt)("td",{parentName:"tr",align:null},"5d41402abc4b2a76b9719d911017c592")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA1"),(0,r.kt)("td",{parentName:"tr",align:null},"160 (20)"),(0,r.kt)("td",{parentName:"tr",align:null},"aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA256"),(0,r.kt)("td",{parentName:"tr",align:null},"256 (32)"),(0,r.kt)("td",{parentName:"tr",align:null},"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA512"),(0,r.kt)("td",{parentName:"tr",align:null},"512 (64)"),(0,r.kt)("td",{parentName:"tr",align:null},"9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043")))),(0,r.kt)("h2",{id:"generate-hashes"},"Generate Hashes"),(0,r.kt)("p",null,"In Linux you can use the following commands to generate hashes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo -n "hello" | md5sum\necho -n "hello" | sha1sum\n')),(0,r.kt)("h2",{id:"tools-for-hash-identification"},"Tools for hash identification"),(0,r.kt)("h2",{id:"hashid"},"Hashid"),(0,r.kt)("p",null,"hashid is a python package that allows to recognise a given hash."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/psypanda/hashID"},"https://github.com/psypanda/hashID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install hashid\nhashid [hash]\n")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(2617).Z}),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"hash-identifier"},"Hash-identifier"),(0,r.kt)("p",null,"Hash-identifier is a tool that allows to recognise a given hash."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/blackploit/hash-identifier"},"https://github.com/blackploit/hash-identifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/blackploit/hash-identifier/master/hash-id.py\npython3 hash-id.py\n")),(0,r.kt)("p",null,"Insert the hash and press enter."),(0,r.kt)("h2",{id:"john-the-ripper"},"John the Ripper"),(0,r.kt)("p",null,"John the Ripper is a password cracking tool that can be used to crack password hashes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 5d41402abc4b2a76b9719d911017c592 > hash.txt\njohn --wordlist=/usr/share/wordlists/rockyou.txt --format=raw-md5 hash.txt\n")),(0,r.kt)("p",null,"Prepend ",(0,r.kt)("inlineCode",{parentName:"p"},"raw-")," to the format to use the raw hash meaning that the hash is not salted."),(0,r.kt)("h3",{id:"shadow-files"},"Shadow files"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/shadow")," hashes use ",(0,r.kt)("inlineCode",{parentName:"p"},"--format=sha512crypt")," and the unshadow command to extract the hashes from the shadow file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unshadow /etc/passwd /etc/shadow > hashes.txt\njohn --wordlist=/usr/share/wordlists/rockyou.txt --format=sha512crypt hashes.txt\n")),(0,r.kt)("h3",{id:"single-crack-mode"},"Single Crack Mode"),(0,r.kt)("p",null,"John the Ripper has a single crack mode that allows to crack a single hash."),(0,r.kt)("p",null,"Passwords are generated following mangling rules based on some heuristics and a given username."),(0,r.kt)("p",null,"Also Gecos fields (the ones in the shadow file) can be used to generate passwords."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo root:5d41402abc4b2a76b9719d911017c592 > hash.txt\njohn --single --format=raw-md5 hash.txt\n")),(0,r.kt)("p",null,"Remember to prepend the username in the hash file."),(0,r.kt)("h3",{id:"custom-rules"},"Custom Rules"),(0,r.kt)("p",null,"John the Ripper has a custom rules engine that allows to generate passwords following some rules."),(0,r.kt)("p",null,"Common rules are stored in the john configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/john/john.conf"),"."),(0,r.kt)("p",null,"Rules can be defined als in a file and used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rules")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"john --wordlist=/usr/share/wordlists/rockyou.txt --format=raw-md5 --rules=Jumbo hash.txt\n")),(0,r.kt)("h3",{id:"zip2john"},"zip2john"),(0,r.kt)("p",null,"zip2john is a tool that allows to extract the hash from a zip file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zip2john file.zip > hash.txt\njohn --wordlist=/usr/share/wordlists/rockyou.txt hash.txt\n")),(0,r.kt)("h3",{id:"rar2john"},"rar2john"),(0,r.kt)("p",null,"rar2john is a tool that allows to extract the hash from a rar file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rar2john file.rar > hash.txt\njohn --wordlist=/usr/share/wordlists/rockyou.txt hash.txt\n")),(0,r.kt)("h3",{id:"ssh2john"},"ssh2john"),(0,r.kt)("p",null,"ssh2john is a tool that allows to extract the hash from a ssh private key."),(0,r.kt)("p",null,"It is a python script that is usually installed with the Jumbo version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/john/ssh2john.py id_rsa > hash.txt\njohn --wordlist=/usr/share/wordlists/rockyou.txt hash.txt\n")),(0,r.kt)("h2",{id:"hashcat"},"hashcat"),(0,r.kt)("p",null,"Find the correct mode for the hash algorithm"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(4312).Z}),(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hashcat -m 0 [hash] /usr/share/wordlists/rockyou.txt\n")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(5401).Z}),(0,r.kt)("br",null)))}d.isMDXComponent=!0},4312:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hashcat-modes-785da78df07e43fb034af7ffc8f37496.jpg"},5401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hashcat-fda55c3dc19e589ec0428b552de5b947.jpg"},2617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hashid-3e0bde3977a7e16241bd3019d33c9b3d.jpg"}}]);