import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Modules from 'vite-plugin-use-modules'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	base: '/__factory/',
	build: {
		emptyOutDir: true,
		outDir: resolve(__dirname, '../../client')
	},
	plugins: [
		Vue(),
		Pages(),
		Unocss(),
		Modules(),
		Components(),
		AutoImport({
			imports: [
				'vue',
				'pinia',
				'vue-router',
				'@vueuse/core'
			]
		})
	]
})
