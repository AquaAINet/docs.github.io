
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/yong/Data/Project-AI/Fashion/Git/docs/docs/app.config.ts"
import cfg1 from "/Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@nuxt-themes/docus/app.config.ts"
import cfg2 from "/Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@nuxt-themes/typography/app.config.ts"
import cfg3 from "/Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@nuxt-themes/elements/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, cfg1, cfg2, cfg3, inlineConfig)
