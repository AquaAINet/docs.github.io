import e from"./ButtonLink-890a02df.mjs";import s from"./Terminal-948cdef0.mjs";import a from"./VideoPlayer-c4ae1337.mjs";import{s as t}from"./ssrSlot-5d5c6395.mjs";import{h as o}from"./server.mjs";import{l as r,d as c,z as n,A as d,I as i,D as l,J as p,U as u,R as m,M as v,E as x}from"../routes/renderer.mjs";import"./MDCSlot-b6f8d3a7.mjs";import"../runtime.mjs";import"./index-7617649b.mjs";import"./NuxtImg-6dc0a077.mjs";const f=c({__name:"BlockHero",__ssrInlineRender:!0,props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup:o=>(r,c,f,b)=>{const y=e,$=s,j=a;c(`<section${n(d({class:"block-hero"},b))} data-v-56a0be1c><div class="layout" data-v-56a0be1c><div class="content" data-v-56a0be1c>`),r.$slots.announce?(c('<p class="announce" data-v-56a0be1c>'),t(r.$slots,"announce",{unwrap:"p"},null,c,f),c("</p>")):c("\x3c!----\x3e"),c('<h1 class="title" data-v-56a0be1c>'),t(r.$slots,"title",{unwrap:"p"},(()=>{c(" Hero Title ")}),c,f),c('</h1><p class="description" data-v-56a0be1c>'),t(r.$slots,"description",{unwrap:"p"},(()=>{c(" Hero default description. ")}),c,f),c("</p>"),r.$slots.extra?(c('<div class="extra" data-v-56a0be1c>'),t(r.$slots,"extra",{unwrap:"p"},null,c,f),c("</div>")):c("\x3c!----\x3e"),c('<div class="actions" data-v-56a0be1c>'),r.$slots.actions?t(r.$slots,"actions",{unwrap:"p"},null,c,f):(c("\x3c!--[--\x3e"),o.cta?c(i(y,{class:"cta",bold:"",size:"medium",href:o.cta[1]},{default:l(((e,s,a,t)=>{if(!s)return[u(m(o.cta[0]),1)];s(`${p(o.cta[0])}`)})),_:1},f)):c("\x3c!----\x3e"),o.secondary?c(`<a${v("href",o.secondary[1])} class="secondary" data-v-56a0be1c>${p(o.secondary[0])}</a>`):c("\x3c!----\x3e"),c("\x3c!--]--\x3e")),c('</div></div><div class="support" data-v-56a0be1c>'),x(r.$slots,"support",{},(()=>{o.snippet?c(i($,{content:o.snippet},null,f)):o.video?c(i(j,{src:o.video},null,f)):c("\x3c!----\x3e")}),c,f),c("</div></div></section>")}}),b=f.setup;f.setup=(e,s)=>{const a=r();return(a.modules||(a.modules=new Set)).add("node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue"),b?b(e,s):void 0};const y=o(f,[["__scopeId","data-v-56a0be1c"]]);export{y as default};
//# sourceMappingURL=BlockHero-cfe4c5fb.mjs.map
