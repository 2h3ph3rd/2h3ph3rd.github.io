"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[7643],{79243:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(96540);var i=a(34164),n=a(5222),r=a(55995),s=a(19051),o=a(97354),l=a(25069),c=a(36467),d=a(10232),g=a(3352),m=a(87659),h=a(74848);function u(e){const t=(0,m.k)(e);return(0,h.jsx)(g.A,{children:(0,h.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.A)(),{blogDescription:i,blogTitle:s,permalink:o}=t,l="/"===o?a:s;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.be,{title:l,description:i}),(0,h.jsx)(c.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:i}=e;return(0,h.jsxs)(o.A,{sidebar:i,children:[(0,h.jsx)(d.A,{items:a}),(0,h.jsx)(l.A,{metadata:t})]})}function f(e){return(0,h.jsxs)(r.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(u,{...e}),(0,h.jsx)(b,{...e})]})}},25069:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var i=a(26297),n=a(99642),r=a(74848);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,r.jsx)(n.A,{permalink:s,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},10232:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var i=a(77735),n=a(24634),r=a(74848);function s(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(i.i,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},87659:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>g});var i=a(88189),n=a(5222),r=a(26463);var s=a(77735);const o=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,n.A)(),{withBaseUrl:a}=(0,i.hH)(),{metadata:{blogDescription:r,blogTitle:s,permalink:d}}=e,g=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:s,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:i,frontMatter:n,metadata:r}=e,{date:s,title:d,description:g,lastUpdatedAt:m}=r,h=i.image??n.image,u=n.keywords??[],p=`${t.url}${r.permalink}`,b=m?o(m):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:g,datePublished:s,...b?{dateModified:b}:{},...l(r.authors),...c(h,a,d),...u?{keywords:u}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,s.e)(),{siteConfig:d}=(0,n.A)(),{withBaseUrl:g}=(0,i.hH)(),{date:m,title:h,description:u,frontMatter:p,lastUpdatedAt:b}=a,f=t.image??p.image,x=p.keywords??[],j=b?o(b):void 0,k=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:h,name:h,description:u,datePublished:m,...j?{dateModified:j}:{},...l(a.authors),...c(f,g,h),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},42415:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var i=a(80671),n=a(22897),r=a(74848);const s={...i.A,Gist:n.A,Image:function(e){let{src:t,width:a,height:i,caption:n,source:s}=e;return null==a&&(a="auto"),null==i&&(i="auto"),s&&(s=(0,r.jsx)("p",{children:(0,r.jsxs)("small",{children:["[",(0,r.jsx)("a",{href:s,target:"_blank",children:"source"}),"]"]})})),(0,r.jsxs)("p",{align:"center",children:[(0,r.jsx)("a",{href:t,target:"_blank",className:"no-link",children:(0,r.jsx)("img",{src:t,width:a,height:i,className:"zoom-effect"})}),n,s]})},Bookmark:function(e){let{url:t,title:a}=e,i=new URL(t),n="https://icons.duckduckgo.com/ip3/"+(i.hostname+(i.port?":"+i.port:""))+".ico";return(0,r.jsx)("a",{href:t,target:"_blank",className:"no-link",children:(0,r.jsx)("div",{className:"card shadow--tl zoom-effect",children:(0,r.jsx)("div",{className:"card__header",children:(0,r.jsxs)("div",{className:"avatar",children:[(0,r.jsx)("img",{className:"avatar__photo",src:n}),(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:a}),(0,r.jsx)("small",{className:"avatar__subtitle",children:t})]})]})})})})}}}}]);