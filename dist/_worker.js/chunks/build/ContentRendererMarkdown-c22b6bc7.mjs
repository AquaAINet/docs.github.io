import{R as e,P as t,S as n,T as o,G as r}from"../runtime.mjs";import{i as a}from"./server.mjs";import{l as u,d as s,c as l,I as d,A as i,u as c,f as p,_ as m,h as f,y as v,a4 as y,a5 as b}from"../routes/renderer.mjs";const g=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],h="default",_=/^@|^v-on:/,j=/^:|^v-bind:/,x=/^v-model/,C=["select","textarea","input"],k=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map((e=>[e,`prose-${e}`]))),O=s({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})}},async setup(e){var t,n,o,r,a,u,s,d;const i=null==(o=null==(n=null==(t=p())?void 0:t.appContext)?void 0:n.app)?void 0:o.$nuxt,c=(null==i?void 0:i.$route)||(null==i?void 0:i._route),{mdc:f}=(null==(r=null==i?void 0:i.$config)?void 0:r.public)||{},v={...(null==(a=null==f?void 0:f.components)?void 0:a.prose)&&!1!==e.prose?k:{},...(null==(u=null==f?void 0:f.components)?void 0:u.map)||{},...m((null==(d=null==(s=e.data)?void 0:s.mdc)?void 0:d.components)||{}),...e.components},y=l((()=>{var t;const n=((null==(t=e.body)?void 0:t.children)||[]).map((e=>e.tag||e.type)).filter((e=>!g.includes(e)));return Array.from(new Set(n)).sort().join(".")}));return await async function(e,t){if(!e)return;const n=Array.from(new Set(loadComponents(e,t)));function loadComponents(e,t){const n=e.tag;if("text"===e.type||"binding"===n||"comment"===e.type)return[];const o=findMappedTag(e,t.tags),r=[];"root"===e.type||g.includes(o)||r.push(o);for(const n of e.children||[])r.push(...loadComponents(n,t));return r}await Promise.all(n.map((async e=>{if((null==e?void 0:e.render)||(null==e?void 0:e.ssrRender)||(null==e?void 0:e.__ssrInlineRender))return;const t=resolveVueComponent(e);(null==t?void 0:t.__asyncLoader)&&!t.__asyncResolved&&await t.__asyncLoader()})))}(e.body,{tags:v}),{tags:v,contentKey:y,route:c}},render(e){var t,n,o;const{tags:r,tag:a,body:u,data:s,contentKey:l,route:d}=e;if(!u)return null;const i={...s,tags:r,$route:d},c=!1!==a?resolveVueComponent(a||(null==(t=i.component)?void 0:t.name)||i.component||"div"):void 0,p=renderSlots(u,f,i,i);return c?f(c,{...null==(n=i.component)?void 0:n.props,...this.$attrs,key:l},p):null==(o=p.default)?void 0:o.call(p)}});function renderNode(e,t,r,a={}){if("text"===e.type)return t(y,e.value);if("comment"===e.type)return t(b,null,e.value);const u=e.tag,s=findMappedTag(e,r.tags);if("binding"===e.tag)return function(e,t,n,o={}){var r,a,u;const s={...o,$document:n,$doc:n},l=/\.|\[(\d+)\]/,d=null==(a=e.props)?void 0:a.value.trim().split(l).filter(Boolean),i=d.reduce(((e,t)=>{if(e&&t in e)return"function"==typeof e[t]?e[t]():e[t]}),s),c=null==(u=e.props)?void 0:u.defaultValue;return t(y,null!=(r=null!=i?i:c)?r:"")}(e,t,r,a);const l=resolveVueComponent(s);"object"==typeof l&&(l.tag=u);const d=function(e,t){const{tag:r="",props:a={}}=e;return Object.keys(a).reduce((function(e,u){if("__ignoreMap"===u)return e;const s=a[u];if(x.test(u)&&!C.includes(r))return function(e,t,n,o){const number=e=>+e,trim=e=>e.trim(),noop=e=>e,r=e.replace(x,"").split(".").filter((e=>e)).reduce(((e,t)=>(e[t]=!0,e)),{}),a="value",u=r.lazy?"change":"input",s=r.number?number:r.trim?trim:noop;return n[a]=evalInContext(t,o),n.on=n.on||{},n.on[u]=e=>o[t]=s(e),n}(u,s,e,t);if("v-bind"===u)return function(e,t,n,o){const r=evalInContext(t,o);return n=Object.assign(n,r),n}(0,s,e,t);if(_.test(u))return function(e,t,n,o){return e=e.replace(_,""),n.on=n.on||{},n.on[e]=()=>evalInContext(t,o),n}(u,s,e,t);if(j.test(u))return function(e,t,n,o){return e=e.replace(j,""),n[e]=evalInContext(t,o),n}(u,s,e,t);const{attribute:l}=n(o,u);return Array.isArray(s)&&s.every((e=>"string"==typeof e))?(e[l]=s.join(" "),e):(e[l]=s,e)}),{})}(e,r);return t(l,d,renderSlots(e,t,r,{...a,...d}))}function renderSlots(e,t,n,o){const r=(e.children||[]).reduce(((e,t)=>{if(!function(e){return"template"===e.tag}(t))return e[h].push(t),e;const n=function(e){let t="";for(const n of Object.keys(e.props||{}))if(n.startsWith("#")||n.startsWith("v-slot:")){t=n.split(/[:#]/,2)[1];break}return t||h}(t);return e[n]=e[n]||[],"element"===t.type&&e[n].push(...t.children||[]),e}),{[h]:[]}),a=Object.entries(r).reduce(((e,[r,a])=>a.length?(e[r]=()=>function(e){const t=[];for(const n of e){const e=t[t.length-1];n.type===y&&(null==e?void 0:e.type)===y?e.children=e.children+n.children:t.push(n)}return t}(a.map((e=>renderNode(e,t,n,o)))),e):e),{});return a}const resolveVueComponent=t=>{if(!g.includes(t)&&!(null==t?void 0:t.render)&&!(null==t?void 0:t.ssrRender)){const n=v(e(t),!1);if("object"==typeof n)return n}return t};function evalInContext(e,t){const n=e.split(".").reduce(((e,t)=>"object"==typeof e?e[t]:void 0),t);return void 0===n?r(e):n}function findMappedTag(n,o){var r;const a=n.tag;return a&&void 0===(null==(r=n.props)?void 0:r.__ignoreMap)&&(o[a]||o[e(a)]||o[t(n.tag)])||a}const w=O.setup;O.setup=(e,t)=>{const n=u();return(n.modules||(n.modules=new Set)).add("node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue"),w?w(e,t):void 0};const R=s({__name:"ContentRendererMarkdown",__ssrInlineRender:!0,props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(e){const t=e,n=a().isEnabled(),o=l((()=>{let e=t.value.body||t.value;return t.excerpt&&t.value.excerpt&&(e=t.value.excerpt),e})),r=l((()=>{const{body:e,excerpt:n,...o}=t.value;return{...o,...t.data}})),u=l((()=>({...t.components,...r.value._components||{}})));return(t,a,s,l)=>{a(d(O,i({body:o.value,data:r.value,tag:e.tag,components:u.value,"data-content-id":c(n)?e.value._id:void 0},l),null,s))}}}),S=R.setup;R.setup=(e,t)=>{const n=u();return(n.modules||(n.modules=new Set)).add("node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue"),S?S(e,t):void 0};export{R as default};
//# sourceMappingURL=ContentRendererMarkdown-c22b6bc7.mjs.map
