"use strict";(self.webpackChunk_2h3ph3rd_github_io=self.webpackChunk_2h3ph3rd_github_io||[]).push([[4999],{10646:(e,t,n)=>{n.d(t,{H:()=>l});var r=n(82933);function l(e,t){var n=e.append("foreignObject").attr("width","100000"),l=n.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}r.AV(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return n.attr("width",a.width).attr("height",a.height),n}},82933:(e,t,n)=>{n.d(t,{AV:()=>c,De:()=>o,c$:()=>p,gh:()=>a,nh:()=>d});var r=n(34963),l=n(89610);function o(e,t){return!!e.children(t).length}function a(e){return s(e.v)+":"+s(e.w)+":"+s(e.name)}var i=/:/g;function s(e){return e?String(e).replace(i,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.A(n)){var o=n.transition;if(l.A(o))return o(e)}return e}},75937:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(72453),l=n(74886);const o=(e,t)=>r.A.lang.round(l.A.parse(e)[t])},54999:(e,t,n)=>{n.d(t,{diagram:()=>a});var r=n(20015),l=n(689),o=n(29880);n(26312),n(697),n(21176),n(14075),n(74353),n(16750),n(42838);const a={parser:r.p,db:r.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),r.f.clear(),r.f.setGen("gen-2")}}},689:(e,t,n)=>{n.d(t,{a:()=>h,f:()=>w});var r=n(697),l=n(26312),o=n(29880),a=n(58077),i=n(10646),s=n(75937),c=n(25582);const d={},p=function(e,t,n,r,l,a){const s=r.select(`[id="${n}"]`);Object.keys(e).forEach((function(n){const r=e[n];let c="default";r.classes.length>0&&(c=r.classes.join(" ")),c+=" flowchart-label";const d=(0,o.k)(r.styles);let p,b=void 0!==r.text?r.text:r.id;if(o.l.info("vertex",r,r.labelType),"markdown"===r.labelType)o.l.info("vertex",r,r.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,i.H)(s,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(o.e.lineBreakRegex);for(const n of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}p=e}let w=0,h="";switch(r.type){case"round":w=5,h="rect";break;case"square":case"group":default:h="rect";break;case"diamond":h="question";break;case"hexagon":h="hexagon";break;case"odd":case"odd_right":h="rect_left_inv_arrow";break;case"lean_right":h="lean_right";break;case"lean_left":h="lean_left";break;case"trapezoid":h="trapezoid";break;case"inv_trapezoid":h="inv_trapezoid";break;case"circle":h="circle";break;case"ellipse":h="ellipse";break;case"stadium":h="stadium";break;case"subroutine":h="subroutine";break;case"cylinder":h="cylinder";break;case"doublecircle":h="doublecircle"}t.setNode(r.id,{labelStyle:d.labelStyle,shape:h,labelText:b,labelType:r.labelType,rx:w,ry:w,class:c,style:d.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:a.db.getTooltip(r.id)||"",domId:a.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:d.labelStyle,labelType:r.labelType,shape:h,labelText:b,rx:w,ry:w,class:c,style:d.style,id:r.id,domId:a.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,o.c)().flowchart.padding})}))},b=function(e,t,n){o.l.info("abc78 edges = ",e);let r,a,i=0,s={};if(void 0!==e.defaultStyle){const t=(0,o.k)(e.defaultStyle);r=t.style,a=t.labelStyle}e.forEach((function(n){i++;const c="L-"+n.start+"-"+n.end;void 0===s[c]?(s[c]=0,o.l.info("abc78 new entry",c,s[c])):(s[c]++,o.l.info("abc78 new entry",c,s[c]));let p=c+"-"+s[c];o.l.info("abc78 new link id to be used is",c,p,s[c]);const b="LS-"+n.start,w="LE-"+n.end,h={style:"",labelStyle:""};switch(h.minlen=n.length||1,"arrow_open"===n.type?h.arrowhead="none":h.arrowhead="normal",h.arrowTypeStart="arrow_open",h.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":h.arrowTypeStart="arrow_cross";case"arrow_cross":h.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":h.arrowTypeStart="arrow_point";case"arrow_point":h.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":h.arrowTypeStart="arrow_circle";case"arrow_circle":h.arrowTypeEnd="arrow_circle"}let f="",u="";switch(n.stroke){case"normal":f="fill:none;",void 0!==r&&(f=r),void 0!==a&&(u=a),h.thickness="normal",h.pattern="solid";break;case"dotted":h.thickness="normal",h.pattern="dotted",h.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":h.thickness="thick",h.pattern="solid",h.style="stroke-width: 3.5px;fill:none;";break;case"invisible":h.thickness="invisible",h.pattern="solid",h.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=(0,o.k)(n.style);f=e.style,u=e.labelStyle}h.style=h.style+=f,h.labelStyle=h.labelStyle+=u,void 0!==n.interpolate?h.curve=(0,o.n)(n.interpolate,l.lUB):void 0!==e.defaultInterpolate?h.curve=(0,o.n)(e.defaultInterpolate,l.lUB):h.curve=(0,o.n)(d.curve,l.lUB),void 0===n.text?void 0!==n.style&&(h.arrowheadStyle="fill: #333"):(h.arrowheadStyle="fill: #333",h.labelpos="c"),h.labelType=n.labelType,h.label=n.text.replace(o.e.lineBreakRegex,"\n"),void 0===n.style&&(h.style=h.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),h.labelStyle=h.labelStyle.replace("color:","fill:"),h.id=p,h.classes="flowchart-link "+b+" "+w,t.setEdge(n.start,n.end,h,i)}))},w={setConf:function(e){const t=Object.keys(e);for(const n of t)d[n]=e[n]},addVertices:p,addEdges:b,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,i){o.l.info("Drawing flowchart");let s=i.db.getDirection();void 0===s&&(s="TD");const{securityLevel:c,flowchart:d}=(0,o.c)(),w=d.nodeSpacing||50,h=d.rankSpacing||50;let f;"sandbox"===c&&(f=(0,l.Ltv)("#i"+t));const u="sandbox"===c?(0,l.Ltv)(f.nodes()[0].contentDocument.body):(0,l.Ltv)("body"),g="sandbox"===c?f.nodes()[0].contentDocument:document,y=new r.T({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:w,ranksep:h,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let k;const x=i.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let r=x.length-1;r>=0;r--)k=x[r],o.l.info("Subgraph - ",k),i.db.addVertex(k.id,{text:k.title,type:k.labelType},"group",void 0,k.classes,k.dir);const v=i.db.getVertices(),m=i.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){k=x[S],(0,l.Ubm)("cluster").append("text");for(let e=0;e<k.nodes.length;e++)o.l.info("Setting up subgraphs",k.nodes[e],k.id),y.setParent(k.nodes[e],k.id)}p(v,y,t,u,g,i),b(m,y);const T=u.select(`[id="${t}"]`),_=u.select("#"+t+" g");if(await(0,a.r)(_,y,["point","circle","cross"],"flowchart",t),o.u.insertTitle(T,"flowchartTitleText",d.titleTopMargin,i.db.getDiagramTitle()),(0,o.o)(y,T,d.diagramPadding,d.useMaxWidth),i.db.indexNodes("subGraph"+S),!d.htmlLabels){const e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=g.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(v).forEach((function(e){const n=v[e];if(n.link){const r=(0,l.Ltv)("#"+t+' [id="'+e+'"]');if(r){const e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===c?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),l=r.select(".label-container");l&&t.append((function(){return l.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},h=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=s.A,r=n(e,"r"),l=n(e,"g"),o=n(e,"b");return c.A(r,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);