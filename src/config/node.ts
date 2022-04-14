import { green } from 'kolorist'
import { readPackageSync } from 'read-pkg'
import { outputFile, pathExistsSync } from 'fs-extra'
import { installPackage } from '@antfu/install-pkg'

const isTs = pathExistsSync('tsconfig.json')

const generateModule = (path: string) => {
	const ext = isTs ? '.ts' : '.js'
	return path.replace(/\.(.*)$/, '') + ext
}

const useContent = (ts: string, js: string) => {
	return isTs ? ts : js
}

const logSuccess = (title: string) => {
	return console.log(
		`\n 🍃 Factory: ${green(`${title} install success`)}`
	)
}

const isPackageExists = (name: string) => {
	const packgaeInfo = readPackageSync()
	return (
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
				generateModule(path),
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
				generateModule(path),
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
			return isPackageExists('windicss')
		},
		async install() {}
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
