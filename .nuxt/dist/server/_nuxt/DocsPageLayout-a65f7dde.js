import { h as useContent, p as useDocus, b as useRoute, s as useState, t as __nuxt_component_0$1, o as __nuxt_component_0$2, _ as _export_sfc } from "../server.mjs";
import __nuxt_component_1 from "./DocsAside-3d9d5d7e.js";
import __nuxt_component_2 from "./Alert-3dd92133.js";
import __nuxt_component_1$1 from "./ProseCodeInline-717bc325.js";
import __nuxt_component_4 from "./DocsPageBottom-32fb3073.js";
import __nuxt_component_5 from "./DocsPrevNext-00b6f72e.js";
import __nuxt_component_7 from "./DocsToc-2ade1f30.js";
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, renderSlot, Fragment, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
import "./MDCSlot-b6f8d3a7.js";
import "./ssrSlot-5d5c6395.js";
import "./EditOnLink-6d4bec13.js";
import "./ProseA-46d71287.js";
import "./DocsTocLinks-f81acaaa.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsPageLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const { config, tree } = useDocus();
    const route = useRoute();
    const fallbackValue = (value, fallback = true) => {
      var _a;
      if (typeof ((_a = page.value) == null ? void 0 : _a[value]) !== "undefined") {
        return page.value[value];
      }
      return fallback;
    };
    const hasBody = computed(() => {
      var _a, _b, _c;
      return !page.value || ((_c = (_b = (_a = page.value) == null ? void 0 : _a.body) == null ? void 0 : _b.children) == null ? void 0 : _c.length) > 0;
    });
    const hasToc = computed(() => {
      var _a, _b, _c, _d, _e;
      return ((_a = page.value) == null ? void 0 : _a.toc) !== false && ((_e = (_d = (_c = (_b = page.value) == null ? void 0 : _b.body) == null ? void 0 : _c.toc) == null ? void 0 : _d.links) == null ? void 0 : _e.length) >= 2;
    });
    const hasAside = computed(() => {
      var _a, _b, _c, _d, _e;
      return ((_a = page.value) == null ? void 0 : _a.aside) !== false && (((_b = tree.value) == null ? void 0 : _b.length) > 1 || ((_e = (_d = (_c = tree.value) == null ? void 0 : _c[0]) == null ? void 0 : _d.children) == null ? void 0 : _e.length));
    });
    const bottom = computed(() => fallbackValue("bottom", true));
    const isOpen = ref(false);
    const asideNav = ref(null);
    const getParentPath = () => route.path.split("/").slice(0, 2).join("/");
    useState("asideScroll", () => {
      var _a;
      return {
        parentPath: getParentPath(),
        scrollTop: ((_a = asideNav.value) == null ? void 0 : _a.scrollTop) || 0
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Container = __nuxt_component_0$1;
      const _component_DocsAside = __nuxt_component_1;
      const _component_Alert = __nuxt_component_2;
      const _component_ProseCodeInline = __nuxt_component_1$1;
      const _component_DocsPageBottom = __nuxt_component_4;
      const _component_DocsPrevNext = __nuxt_component_5;
      const _component_Icon = __nuxt_component_0$2;
      const _component_DocsToc = __nuxt_component_7;
      _push(ssrRenderComponent(_component_Container, mergeProps({
        fluid: (_b = (_a = unref(config)) == null ? void 0 : _a.main) == null ? void 0 : _b.fluid,
        padded: (_d = (_c = unref(config)) == null ? void 0 : _c.main) == null ? void 0 : _d.padded,
        class: ["docs-page-content", {
          fluid: (_f = (_e = unref(config)) == null ? void 0 : _e.main) == null ? void 0 : _f.fluid,
          "has-toc": unref(hasToc),
          "has-aside": unref(hasAside)
        }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(hasAside)) {
              _push2(`<aside class="aside-nav" data-v-73d798d2${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DocsAside, { class: "app-aside" }, null, _parent2, _scopeId));
              _push2(`</aside>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<article class="page-body" data-v-73d798d2${_scopeId}>`);
            if (unref(hasBody)) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_component_Alert, { type: "info" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Start writing in `);
                    _push3(ssrRenderComponent(_component_ProseCodeInline, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`content/${ssrInterpolate(unref(page)._file)}`);
                        } else {
                          return [
                            createTextVNode("content/" + toDisplayString(unref(page)._file), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` to see this page taking shape. `);
                  } else {
                    return [
                      createTextVNode(" Start writing in "),
                      createVNode(_component_ProseCodeInline, null, {
                        default: withCtx(() => [
                          createTextVNode("content/" + toDisplayString(unref(page)._file), 1)
                        ]),
                        _: 1
                      }),
                      createTextVNode(" to see this page taking shape. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            if (unref(hasBody) && unref(page) && unref(bottom)) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_DocsPageBottom, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DocsPrevNext, null, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
            if (unref(hasToc)) {
              _push2(`<div class="toc" data-v-73d798d2${_scopeId}><div class="toc-wrapper" data-v-73d798d2${_scopeId}><button data-v-73d798d2${_scopeId}><span class="title" data-v-73d798d2${_scopeId}>Table of Contents</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons-outline:chevron-right",
                class: ["icon", [unref(isOpen) && "rotate"]]
              }, null, _parent2, _scopeId));
              _push2(`</button><div class="${ssrRenderClass([[unref(isOpen) && "opened"], "docs-toc-wrapper"])}" data-v-73d798d2${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DocsToc, {
                onMove: ($event) => isOpen.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(hasAside) ? (openBlock(), createBlock("aside", {
                key: 0,
                ref_key: "asideNav",
                ref: asideNav,
                class: "aside-nav"
              }, [
                createVNode(_component_DocsAside, { class: "app-aside" })
              ], 512)) : createCommentVNode("", true),
              createVNode("article", { class: "page-body" }, [
                unref(hasBody) ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createBlock(_component_Alert, {
                  key: 1,
                  type: "info"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Start writing in "),
                    createVNode(_component_ProseCodeInline, null, {
                      default: withCtx(() => [
                        createTextVNode("content/" + toDisplayString(unref(page)._file), 1)
                      ]),
                      _: 1
                    }),
                    createTextVNode(" to see this page taking shape. ")
                  ]),
                  _: 1
                })),
                unref(hasBody) && unref(page) && unref(bottom) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode(_component_DocsPageBottom),
                  createVNode(_component_DocsPrevNext)
                ], 64)) : createCommentVNode("", true)
              ]),
              unref(hasToc) ? (openBlock(), createBlock("div", {
                key: 1,
                class: "toc"
              }, [
                createVNode("div", { class: "toc-wrapper" }, [
                  createVNode("button", {
                    onClick: ($event) => isOpen.value = !unref(isOpen)
                  }, [
                    createVNode("span", { class: "title" }, "Table of Contents"),
                    createVNode(_component_Icon, {
                      name: "heroicons-outline:chevron-right",
                      class: ["icon", [unref(isOpen) && "rotate"]]
                    }, null, 8, ["class"])
                  ], 8, ["onClick"]),
                  createVNode("div", {
                    class: ["docs-toc-wrapper", [unref(isOpen) && "opened"]]
                  }, [
                    createVNode(_component_DocsToc, {
                      onMove: ($event) => isOpen.value = false
                    }, null, 8, ["onMove"])
                  ], 2)
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const DocsPageLayout_vue_vue_type_style_index_0_scoped_73d798d2_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73d798d2"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=DocsPageLayout-a65f7dde.js.map
