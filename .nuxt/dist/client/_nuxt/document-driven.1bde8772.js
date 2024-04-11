import h from"./DocumentDrivenEmpty.4877e080.js";import L from"./ContentRenderer.7f726e23.js";import R from"./DocumentDrivenNotFound.01e82687.js";import{k as g,d as c,G as x,P as C,v as k,H as b,I as B,J as u,r as N,K as y,L as S,M as T,N as l,T as j,O as A,Q as w,S as D,R as E,U as H,m as O,V as $,W as q,b as d,c as I,g as f,w as _,X as v}from"./entry.2f20fb24.js";import"./ContentRendererMarkdown.vue.b6478cd8.js";import"./ButtonLink.1dc14711.js";import"./slot.77458b1c.js";import"./node.676c5e99.js";const M=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(o,n){const e=await y[o.name]().then(t=>t.default||t);return()=>l(e,o.layoutProps,n.slots)}}),V=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(o,n){const e=g(),t=x(C),a=t===k()?b():t,s=B(()=>u(o.name)??a.meta.layout??"default"),r=N();n.expose({layoutRef:r});const m=e.deferHydration();return()=>{const p=s.value&&s.value in y,i=a.meta.layoutTransition??S;return T(j,p&&i,{default:()=>l(D,{suspensible:!0,onResolve:()=>{w(m)}},{default:()=>l(F,{layoutProps:A(n.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!o.name,hasTransition:!!i},n.slots)})}).default()}}}),F=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(o,n){const e=o.name;return o.shouldProvide&&E(H,{isCurrent:t=>e===(t.meta.layout??"default")}),()=>{var t,a;return!e||typeof e=="string"&&!(e in y)?(a=(t=n.slots).default)==null?void 0:a.call(t):l(M,{key:e,layoutProps:o.layoutProps,name:e},n.slots)}}}),G={class:"document-driven-page"},Z=c({__name:"document-driven",setup(o){const{contentHead:n}=O().public.content,{page:e,layout:t}=$();return e.value,n&&q(e),(a,s)=>{const r=h,m=L,p=R,i=V;return d(),I("div",G,[f(i,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(m,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[f(r,{value:P},null,8,["value"])]),_:1},8,["value"])):(d(),v(p,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};
