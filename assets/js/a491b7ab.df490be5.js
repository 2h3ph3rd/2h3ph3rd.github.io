"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[9666],{46074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={},d="\ud83d\udcee Proxy",o={id:"security/web/proxy",title:"\ud83d\udcee Proxy",description:"Burp",source:"@site/docs/security/05-web/proxy.md",sourceDirName:"security/05-web",slug:"/security/web/proxy",permalink:"/docs/security/web/proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/05-web/proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udc64 Login brute force",permalink:"/docs/security/web/login-brute-force"},next:{title:"\ud83c\udfc1 Race conditions",permalink:"/docs/security/web/race-conditions"}},l={},c=[{value:"Burp",id:"burp",level:2},{value:"Main modules",id:"main-modules",level:3},{value:"Intruder",id:"intruder",level:3}];function a(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-proxy",children:"\ud83d\udcee Proxy"}),"\n",(0,r.jsx)(t.h2,{id:"burp",children:"Burp"}),"\n",(0,r.jsx)(t.h3,{id:"main-modules",children:"Main modules"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Proxy: intercept requests and responses that can be analyzed and manipulated."}),"\n",(0,r.jsx)(t.li,{children:"Intruder: automate requests for fuzzing or bruteforcing."}),"\n",(0,r.jsx)(t.li,{children:"Repeater: execute multiple times the same requests with a powerful editor."}),"\n",(0,r.jsx)(t.li,{children:"Sequencer: measure the entropy of token strings."}),"\n",(0,r.jsx)(t.li,{children:"Decoder: encode, decode, or hash data."}),"\n",(0,r.jsx)(t.li,{children:"Comparer: find difference between two requests."}),"\n",(0,r.jsx)(t.li,{children:"Extender: extend Burp features adding plugins from the BApp Store or your disk."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"intruder",children:"Intruder"}),"\n",(0,r.jsx)(t.p,{children:"Four modes of operation:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sniper: given one set of payload, each entry is tested in each position in turn."}),"\n",(0,r.jsx)(t.li,{children:"Battering ram: given one set of payload, each entry is tested in all the positions in the same turn."}),"\n",(0,r.jsx)(t.li,{children:"Pithfork: different payloads for each position, tested all at once."}),"\n",(0,r.jsx)(t.li,{children:"Cluster bomb: different payloads for each entry, all possible combinations are tested."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Considering 3 positions and 100 entries for the payload:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"mode"}),(0,r.jsx)(t.th,{children:"number"}),(0,r.jsx)(t.th,{children:"notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sniper"}),(0,r.jsx)(t.td,{children:"3 * 100"}),(0,r.jsx)(t.td,{children:"test one parameter at a time"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"battering ram"}),(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"same entry in each position"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pithfork"}),(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"different entries in different positions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cluster bomb"}),(0,r.jsx)(t.td,{children:"100 * 100 * 100"}),(0,r.jsx)(t.td,{children:"all possible combinations"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);