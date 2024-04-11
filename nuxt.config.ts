import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  extends: '@nuxt-themes/docus'
})
