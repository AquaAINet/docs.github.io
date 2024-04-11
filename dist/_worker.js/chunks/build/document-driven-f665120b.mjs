import{u as e,a as t,b as a,c as s,P as n,d as o,e as r,l as u,f as l,_ as i,L as d,g as m}from"./server.mjs";import p from"./ContentRenderer-7bcaad80.mjs";import v from"./DocumentDrivenEmpty-e7fcdb87.mjs";import c from"./DocumentDrivenNotFound-b773ef52.mjs";import{d as y,z as f,A as b,I as j,D as P,u as _,C as h,N as g,O as k,l as C,i as D,c as L,b as S,h as x,n as B,a1 as R,a2 as A,p as N}from"../routes/renderer.mjs";import"../runtime.mjs";import"./ContentRendererMarkdown-c22b6bc7.mjs";import"./ButtonLink-890a02df.mjs";import"./MDCSlot-b6f8d3a7.mjs";import"./ssrSlot-5d5c6395.mjs";const O=y({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,t){const a=await u[e.name]().then((e=>e.default||e));return()=>x(a,e.layoutProps,t.slots)}}),w=y({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const a=m(),s=D(n),d=s===o()?r():s,p=L((()=>{var t,a;return null!=(a=null!=(t=_(e.name))?t:d.meta.layout)?a:"default"})),v=S();t.expose({layoutRef:v});const c=a.deferHydration();return()=>{var a;const s=p.value&&p.value in u,n=null!=(a=d.meta.layoutTransition)?a:l;return i(A,s&&n,{default:()=>x(R,{suspensible:!0,onResolve:()=>{B(c)}},{default:()=>x(T,{layoutProps:b(t.attrs,{ref:v}),key:p.value,name:p.value,shouldProvide:!e.name,hasTransition:!!n},t.slots)})}).default()}}}),T=y({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,t){const a=e.name;return e.shouldProvide&&N(d,{isCurrent:e=>{var t;return a===(null!=(t=e.meta.layout)?t:"default")}}),()=>{var s,n;return!a||"string"==typeof a&&!(a in u)?null==(n=(s=t.slots).default)?void 0:n.call(s):x(O,{key:a,layoutProps:e.layoutProps,name:a},t.slots)}}}),H=y({__name:"document-driven",__ssrInlineRender:!0,setup(n){const{contentHead:o}=e().public.content,{page:r,layout:u}=t();if(!r.value){a().res.statusCode=404}return o&&s(r),(e,t,a,s)=>{const n=w,o=p,l=v,i=c;t(`<div${f(b({class:"document-driven-page"},s))}>`),t(j(n,{name:_(u)||"default"},{default:P(((e,t,a,s)=>{if(!t)return[_(r)?(g(),k(o,{key:_(r)._id,value:_(r)},{empty:P((({value:e})=>[h(l,{value:e},null,8,["value"])])),_:1},8,["value"])):(g(),k(i,{key:1}))];_(r)?t(j(o,{key:_(r)._id,value:_(r)},{empty:P((({value:e},t,a,s)=>{if(!t)return[h(l,{value:e},null,8,["value"])];t(j(l,{value:e},null,a,s))})),_:1},a,s)):t(j(i,null,null,a,s))})),_:1},a)),t("</div>")}}}),I=H.setup;H.setup=(e,t)=>{const a=C();return(a.modules||(a.modules=new Set)).add("node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue"),I?I(e,t):void 0};export{H as default};
//# sourceMappingURL=document-driven-f665120b.mjs.map
