import { green } from 'kolorist'
import MagicString from 'magic-string'
import { readPackageSync } from 'read-pkg'
import { installPackage } from '@antfu/install-pkg'
import {
	readFile,
	outputFile,
	writeFile,
	pathExistsSync
} from 'fs-extra'

const isTs = pathExistsSync('tsconfig.json')

const generateModulePath = (path: string) => {
	const ext = isTs ? '.ts' : '.js'
	return path.replace(/\.(ts|js)$/, '') + ext
}

const useContent = (ts: string, js: string) => {
	return isTs ? ts : js
}

const logSuccess = (title: string) => {
	return console.log(
		`\n 🍃 Factory: ${green(`${title} install success`)}`
	)
}

const setupVitePlugin = async (i: string, p: string) => {
	const path = generateModulePath('vite.config')
	const viteConfig = await readFile(path)
	const s = new MagicString(viteConfig.toString())
	s.prepend(i + '\n')
	s.replace(/(?<=plugins)([\w\W]*?)(?=])/, `$1, ${p}`)
	await writeFile(path, s.toString())
	return
}

const appendLeft = async (path: string, i: string) => {
	const viteConfig = await readFile(path)
	const s = new MagicString(viteConfig.toString())
	s.prepend(i + '\n')
	await writeFile(path, s.toString())
	return
}

const isPackageExists = (name: string) => {
	const packgaeInfo = readPackageSync()
	return Boolean(
		packgaeInfo?.['dependencies']?.[name] ||
			packgaeInfo?.['devDependencies']?.[name]
	)
}

// 该模块运行在 node 中，请不要在 client 中引入
export const modules = [
	{
		title: 'vue-router',
		async checkInstalled() {
			return isPackageExists('vue-router')
		},
		async install() {
			await installPackage('vue-router')

			const path = 'src/modules/router'

			const ts = `import type { App } from "vue"
			
import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
	routes: [],
	history: createWebHistory(),
})

export default (app: App) => app.use(router)`

			const js = `import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
	routes: [],
	history: createWebHistory(),
})

export default app => app.use(router)`

			await outputFile(
				generateModulePath(path),
				useContent(ts, js)
			)

			logSuccess('vue-router')
		}
	},
	{
		title: 'pinia',
		async checkInstalled() {
			return isPackageExists('pinia')
		},
		async install() {
			await installPackage('pinia')

			const path = 'src/modules/pinia'

			const ts = `import type { App } from "vue"

import { createPinia } from "pinia"

export default (app: App) => app.use(createPinia())`

			const js = `import { createPinia } from "pinia"
			
			export default app => app.use(createPinia())`

			await outputFile(
				generateModulePath(path),
				useContent(ts, js)
			)

			logSuccess('vue-router')
		}
	},
	{
		title: 'vueuse',
		async checkInstalled() {
			return isPackageExists('@vueuse/core')
		},
		async install() {
			await installPackage('@vueuse/core')
			logSuccess('vueuse')
		}
	},
	{
		title: 'windicss',
		async checkInstalled() {
			return (
				isPackageExists('windicss') &&
				isPackageExists('vite-plugin-windicss')
			)
		},
		async install() {
			await installPackage([
				'windicss',
				'vite-plugin-windicss'
			])

			const main = generateModulePath('src/main.ts')
			appendLeft(main, `import "virtual:windi.css"`)

			await setupVitePlugin(
				'import Windicss from "vite-plugin-windicss"',
				'Windicss()'
			)
		}
	},
	{
		title: 'vue-request',
		async checkInstalled() {
			return isPackageExists('vue-request')
		},
		async install() {
			await installPackage('vue-request')
			logSuccess('vue-request')
		}
	},
	{
		title: 'unocss',
		async checkInstalled() {
			return isPackageExists('unocss')
		},
		async install() {}
	}
]
