import{O as t}from"./server.mjs";import{d as e,C as o}from"../routes/renderer.mjs";import"../runtime.mjs";const s=Object.freeze({__proto__:null,default:{}}),r=e({props:{context:{type:Object,required:!0}},setup(e){const r=s[e.context.name];if(!r)throw t({statusCode:404,statusMessage:`Island component not found: ${e.context.name}`});return()=>o(r||"span",{...e.context.props,"nuxt-ssr-component-uid":""})}});export{r as default};
//# sourceMappingURL=island-renderer-325ff9dc.mjs.map
