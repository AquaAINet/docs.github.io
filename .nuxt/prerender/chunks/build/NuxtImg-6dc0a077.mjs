import { defineComponent, computed, h, useSSRContext } from 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/vue/index.mjs';
import { g as useRuntimeConfig } from './server.mjs';
import { withBase } from 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/destr/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/klona/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/h3/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/nanoid/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/scule/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@vueuse/integrations/useFuse.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@vueuse/integrations/useFocusTrap.mjs';
import '../runtime.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/shiki/dist/core.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unified/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-character/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/slugify/slugify.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-parse/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-rehype/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/hast-util-to-string/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/github-slugger/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/detab/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-emoji/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-gfm/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-external-links/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-raw/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    src: {
      type: [String, Object],
      default: null
    }
  },
  setup(props) {
    const srcWithBase = (src) => {
      if (src && src.startsWith("/") && !src.startsWith("//")) {
        return withBase(src, useRuntimeConfig().app.baseURL);
      }
      return src;
    };
    const imgSrc = computed(() => {
      let src = props.src;
      try {
        src = JSON.parse(src);
      } catch (e) {
        src = props.src;
      }
      if (typeof src === "string") {
        return srcWithBase(props.src);
      }
      return {
        light: srcWithBase(src.light),
        dark: srcWithBase(src.dark)
      };
    });
    return {
      imgSrc
    };
  },
  render({ imgSrc }) {
    if (typeof imgSrc === "string") {
      return h("img", { src: imgSrc, ...this.$attrs });
    }
    const nodes = [];
    if (imgSrc.light) {
      nodes.push(h("img", { src: imgSrc.light, class: ["dark-img"], ...this.$attrs }));
    }
    if (imgSrc.dark) {
      nodes.push(h("img", { src: imgSrc.dark, class: ["light-img"], ...this.$attrs }));
    }
    return nodes;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=NuxtImg-6dc0a077.mjs.map
