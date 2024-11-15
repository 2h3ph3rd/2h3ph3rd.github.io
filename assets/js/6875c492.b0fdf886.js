"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[4813],{25069:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(26297),n=s(99642),i=s(74848);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(n.A,{permalink:s,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(n.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},10232:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(77735),n=s(24634),i=s(74848);function r(e){let{items:t,component:s=n.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.i,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6809:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(96540);var a=s(34164),n=s(26297),i=s(72733),r=s(55995),l=s(19051),o=s(81090),c=s(97354),d=s(25069),h=s(36467),g=s(10232),u=s(5669),p=s(81969),m=s(74848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,n.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const s=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:s,description:t.description}),(0,m.jsx)(h.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:s,sidebar:a,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(u.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(n.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(g.A,{items:s}),(0,m.jsx)(d.A,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},5669:(e,t,s)=>{s.d(t,{A:()=>u});s(96540);var a=s(34164),n=s(26297),i=s(3352),r=s(74848);function l(){return(0,r.jsx)(n.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(n.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(19051),h=s(47184);function g(e){let{className:t}=e;return(0,r.jsx)(h.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function u(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,{...e})]})}},42415:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(80671),n=s(22897),i=s(74848);const r={...a.A,Gist:n.A,Image:function(e){let{src:t,width:s,height:a,caption:n,source:r}=e;return null==s&&(s="auto"),null==a&&(a="auto"),r&&(r=(0,i.jsx)("p",{children:(0,i.jsxs)("small",{children:["[",(0,i.jsx)("a",{href:r,target:"_blank",children:"source"}),"]"]})})),(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("a",{href:t,target:"_blank",className:"no-link",children:(0,i.jsx)("img",{src:t,width:s,height:a,className:"zoom-effect"})}),n,r]})},Bookmark:function(e){let{url:t,title:s}=e,a=new URL(t),n="https://icons.duckduckgo.com/ip3/"+(a.hostname+(a.port?":"+a.port:""))+".ico";return(0,i.jsx)("a",{href:t,target:"_blank",className:"no-link",children:(0,i.jsx)("div",{className:"card shadow--tl zoom-effect",children:(0,i.jsx)("div",{className:"card__header",children:(0,i.jsxs)("div",{className:"avatar",children:[(0,i.jsx)("img",{className:"avatar__photo",src:n}),(0,i.jsxs)("div",{className:"avatar__intro",children:[(0,i.jsx)("div",{className:"avatar__name",children:s}),(0,i.jsx)("small",{className:"avatar__subtitle",children:t})]})]})})})})}}}}]);