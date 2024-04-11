import _Highlight from '/Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"dark":"github-dark","default":"github-light"}}