import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  nitro: {
		esbuild: {
			options: {
				target: "esnext",
			},
		},
	},
  extends: '@nuxt-themes/docus'
})
