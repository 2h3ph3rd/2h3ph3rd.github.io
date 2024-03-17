"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[8633],{21290:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(74848),n=i(28453);const r={},o="\ud83c\udf10 Web",l={id:"security/web/index",title:"\ud83c\udf10 Web",description:"Analyzing a web application",source:"@site/docs/security/05-web/index.md",sourceDirName:"security/05-web",slug:"/security/web/",permalink:"/docs/security/web/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/05-web/index.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udcda Heap",permalink:"/docs/security/binary/heap-exploitation"},next:{title:"\ud83d\udd24 Enumeration",permalink:"/docs/security/web/enumeration"}},c={},d=[{value:"Analyzing a web application",id:"analyzing-a-web-application",level:2},{value:"Browser tools",id:"browser-tools",level:3},{value:"Common public files",id:"common-public-files",level:3},{value:"Additional headers",id:"additional-headers",level:3},{value:"Google dorking",id:"google-dorking",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-web",children:"\ud83c\udf10 Web"}),"\n",(0,s.jsx)(t.h2,{id:"analyzing-a-web-application",children:"Analyzing a web application"}),"\n",(0,s.jsx)(t.p,{children:"There are different ways to analyze a web application. Sometimes, you could even have access to the source code but in general, at least the client side is available. You can use tools like your browser to inspect it."}),"\n",(0,s.jsx)(t.h3,{id:"browser-tools",children:"Browser tools"}),"\n",(0,s.jsx)(t.p,{children:"Using the browser it is possible to inspect everything on client side: HTML code, stylesheets, cookies, local storage, Javascript files, public assets, etc."}),"\n",(0,s.jsx)(t.p,{children:"Some of the most common functions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"View source: look to the source code of a web page."}),"\n",(0,s.jsx)(t.li,{children:"Inspector: inspect elements inside the pages and make changes to them."}),"\n",(0,s.jsx)(t.li,{children:"Debugger: inspect and add breakpoint to JS code."}),"\n",(0,s.jsx)(t.li,{children:"Network: see all the network requests made."}),"\n",(0,s.jsx)(t.li,{children:"Storage: look to local storage and cookies used by the page."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"common-public-files",children:"Common public files"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"robots.txt"})}),"\n",(0,s.jsx)(t.p,{children:"It is a file used by a website to define which page a search engine should track and which should not. Sometimes, sensitive paths are placed here to keep them from being tracked."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"sitemap.xml"})}),"\n",(0,s.jsx)(t.p,{children:"It is a list of all the pages that a website wants to be tracked on a search engine"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"favicon.ico"})}),"\n",(0,s.jsx)(t.p,{children:"It is the tab icon used for the website. By default, frameworks have their own logo that can be used to recognize them."}),"\n",(0,s.jsx)(t.h3,{id:"additional-headers",children:"Additional headers"}),"\n",(0,s.jsx)(t.p,{children:"It is possible to look to the headers returned by a web server to find possible useful information."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -v https://website.com\n"})}),"\n",(0,s.jsx)(t.h3,{id:"google-dorking",children:"Google dorking"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Example"}),(0,s.jsx)(t.th,{children:"Meaning"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["site",":website",".com"]}),(0,s.jsx)(t.td,{children:"filter results by specific website"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["inurl",":id"]}),(0,s.jsx)(t.td,{children:"filters results by word in the URL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["filetype",":pdf"]}),(0,s.jsx)(t.td,{children:"filters results by file extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["intitle",":login"]}),(0,s.jsx)(t.td,{children:"filters results by word in title"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Special characters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Character"}),(0,s.jsx)(t.th,{children:"Example"}),(0,s.jsx)(t.th,{children:"Meaning"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"site:*.website.com"}),(0,s.jsx)(t.td,{children:"any possible alphanumeric strings"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"-"}),(0,s.jsxs)(t.td,{children:["-site",":website",".com"]}),(0,s.jsx)(t.td,{children:"used before an operator to obtain a not"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);