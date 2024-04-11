import{D as t,u as e,i as n,g as r,E as i,F as a,G as s,H as o,I as l,J as c,K as u,M as g}from"./server.mjs";import{V as d,W as f,X as p,z as h,R as m,j as y}from"../runtime.mjs";import"../routes/renderer.mjs";function createMatch(t={}){const e=function(t,e={}){return{$match:(e,n)=>t(e,n),$eq:(t,e)=>e instanceof RegExp?e.test(t):t===e,$ne:(t,e)=>e instanceof RegExp?!e.test(t):t!==e,$not:(e,n)=>!t(e,n),$and:(e,n)=>(s(n,"$and requires an array as condition"),n.every((n=>t(e,n)))),$or:(e,n)=>(s(n,"$or requires an array as condition"),n.some((n=>t(e,n)))),$in:(e,n)=>o(n).some((n=>Array.isArray(e)?t(e,{$contains:n}):t(e,n))),$contains:(t,e)=>(t=Array.isArray(t)?t:String(t),o(e).every((e=>t.includes(e)))),$icontains:(t,e)=>{if("string"!=typeof e)throw new TypeError("$icontains requires a string, use $contains instead");return t=String(t).toLocaleLowerCase(),o(e).every((e=>t.includes(e.toLocaleLowerCase())))},$containsAny:(t,e)=>(s(e,"$containsAny requires an array as condition"),t=Array.isArray(t)?t:String(t),e.some((e=>t.includes(e)))),$exists:(t,e)=>e?void 0!==t:void 0===t,$type:(t,e)=>typeof t===String(e),$regex:(t,e)=>{if(!(e instanceof RegExp)){const t=String(e).match(/\/(.*)\/([dgimsuy]*)$/);e=t?new RegExp(t[1],t[2]||""):new RegExp(e)}return e.test(String(t||""))},$lt:(t,e)=>t<e,$lte:(t,e)=>t<=e,$gt:(t,e)=>t>e,$gte:(t,e)=>t>=e,...e||{}}}(match,t.operators);function match(t,n){return"object"!=typeof n||n instanceof RegExp?e.$eq(t,n):Object.keys(n||{}).every((r=>{const i=n[r];if(r.startsWith("$")&&e[r]){const n=e[r];return"function"==typeof n&&n(t,i)}return match(a(t,r),i)}))}return match}function createPipelineFetcher(t){const e=createMatch(),n=[(t,n)=>{const r=t.result.filter((t=>o(n.where).every((n=>e(t,n)))));return{...t,result:r,total:r.length}},(t,e)=>o(e.sort).forEach((e=>l(t.result,e))),function(t,n,r){var i;if(n.surround){let a=((t,{query:n,before:r,after:i})=>{const a="string"==typeof n?{_path:n}:n,s=t.findIndex((t=>e(t,a)));r=null!=r?r:1,i=null!=i?i:1;const o=new Array(r+i).fill(null,0);return-1===s?o:o.map(((e,n)=>t[s-r+n+Number(n>=r)]||null))})(1===(null==(i=t.result)?void 0:i.length)?r:t.result,n.surround);a=c(u(n.without))(a),a=c(g(n.only))(a),t.surround=a}return t}],r=[(t,e)=>{if(e.skip)return{...t,result:t.result.slice(e.skip),skip:e.skip}},(t,e)=>{if(e.limit)return{...t,result:t.result.slice(0,e.limit),limit:e.limit}},function(t,e,n){var r,i,a;if(e.dirConfig){const s=(null==(r=t.result[0])?void 0:r._path)||(null==(a=null==(i=e.where)?void 0:i.find((t=>t._path)))?void 0:a._path);if("string"==typeof s){const e=n.find((t=>t._path===y(s,"_dir")));e&&(t.dirConfig={_path:e._path,...u(["_"])(e)})}}return t},(t,e)=>({...t,result:c(u(e.without))(t.result)}),(t,e)=>({...t,result:c(g(e.only))(t.result)})];return async e=>{const a=await t(),s=e.params(),o={result:a,limit:0,skip:0,total:a.length},l=n.reduce(((t,e)=>e(t,s,a)||t),o);if(s.count)return{result:l.result.length};const c=r.reduce(((t,e)=>e(t,s,a)||t),l);return s.first?{...i(["skip","limit","total"])(c),result:c.result[0]}:c}}function createPipelineFetcherLegacy(t){const e=createPipelineFetcher(t);return async t=>{var n;t.params().first&&t.withDirConfig();const r=t.params(),i=await e(t);return r.surround?null==i?void 0:i.surround:((null==i?void 0:i.dirConfig)&&(i.result={_path:null==(n=i.dirConfig)?void 0:n._path,...i.result,_dir:i.dirConfig}),null==i?void 0:i.result)}}const generateTitle=t=>t.split(/[\s-]/g).map(m).join(" ");function createNav(t,n){const{navigation:r}=e().public.content;if(!1===r)return[];const pickNavigationFields=t=>{return{...(n=["title",...r.fields],t=>(t=t||{},n&&n.length?n.filter((e=>void 0!==t[e])).reduce(((e,n)=>Object.assign(e,{[n]:t[n]})),{}):t))(t),...(e=null==t?void 0:t.navigation,"[object Object]"===Object.prototype.toString.call(e)?t.navigation:{})};var e,n};return sortAndClear(t.sort(((t,e)=>t._path.localeCompare(e._path))).reduce(((t,e)=>{const r=e._path.substring(1).split("/"),i=e._id.split(":").slice(1),a=!!i[i.length-1].match(/([1-9][0-9]*\.)?index.md/g),getNavItem=t=>({title:t.title,_path:t._path,_file:t._file,children:[],...pickNavigationFields(t),...t._draft?{_draft:!0}:{}}),s=getNavItem(e);if(a){const r=n[s._path];if(void 0!==(null==r?void 0:r.navigation)&&!(null==r?void 0:r.navigation))return t;if("/"!==e._path){const t=getNavItem(e);s.children.push(t)}Object.assign(s,pickNavigationFields(r))}if(1===r.length)return t.push(s),t;return r.slice(0,-1).reduce(((t,i,a)=>{const s="/"+r.slice(0,a+1).join("/"),o=n[s];if(void 0!==(null==o?void 0:o.navigation)&&!o.navigation)return[];let l=t.find((t=>t._path===s));return l||(l={title:generateTitle(i),_path:s,_file:e._file,children:[],...pickNavigationFields(o)},t.push(l)),l.children}),t).push(s),t}),[]))}const v=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function sortAndClear(t){var e;t.forEach((t=>{t._file=t._file.split(".").slice(0,-1).join(".")}));const n=t.sort(((t,e)=>v.compare(t._file,e._file)));for(const t of n)(null==(e=t.children)?void 0:e.length)?sortAndClear(t.children):delete t.children,delete t._file;return t}const withContentBase=t=>h(t,e().public.content.api.baseURL),_=d(f({driver:p()}),"@content");function createDB(e){async function getItems(){const t=new Set(await e.getKeys("cache:")),r=n().getPreviewToken();if(r){const n=await e.getItem(`${r}$`).then((t=>t||{}));if(Array.isArray(n.ignoreSources)){const e=n.ignoreSources.map((t=>`cache:${t.trim()}:`));for(const n of t)e.some((t=>n.startsWith(t)))&&t.delete(n)}const i=await e.getKeys(`${r}:`),a=await Promise.all(i.map((t=>e.getItem(t))));for(const e of a)t.delete(`cache:${e._id}`),e.__deleted||t.add(`${r}:${e._id}`)}return await Promise.all(Array.from(t).map((t=>e.getItem(t))))}return{storage:e,fetch:createPipelineFetcherLegacy(getItems),query:e=>t(createPipelineFetcherLegacy(getItems),{initialParams:e,legacy:!0})}}let $=null,w=null;async function useContentDatabase(){return w?await w:$||(w=async function(){const t=r(),{content:n}=e().public,i=createDB(_),a=await i.storage.getItem("integrity");if(n.integrity!==+(a||0)){const{contents:t,navigation:e}=await $fetch(withContentBase(n.integrity?`cache.${n.integrity}.json`:"cache.json"));await Promise.all(t.map((t=>i.storage.setItem(`cache:${t._id}`,t)))),await i.storage.setItem("navigation",e),await i.storage.setItem("integrity",n.integrity)}return await t.callHook("content:storage",i.storage),i}(),$=await w),$}async function generateNavigation(t){const e=await useContentDatabase();if(!n().getPreviewToken()&&0===Object.keys(t||{}).length)return e.storage.getItem("navigation");return createNav(await e.query(t).where({_partial:!1,navigation:{$ne:!1}}).find(),(await e.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce(((t,e)=>{var n;"dir"===(null==(n=e.title)?void 0:n.toLowerCase())&&(e.title=void 0);return t[e._path.split("/").slice(0,-1).join("/")||"/"]={...e,...e.body},t}),{}))}export{_ as contentStorage,createDB,generateNavigation,useContentDatabase};
//# sourceMappingURL=client-db-62547f95.mjs.map
