import { green } from 'kolorist'
import { basename, extname } from 'path'
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

// 该模块运行在 node 中，请不要在 client 中引入
export const modules = [
	{
		title: 'vue-router',
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
		async install() {}
	},
	{
		title: 'vueuse',
		async install() {}
	},
	{
		title: 'windicss',
		async install() {}
	},
	{
		title: 'vue-request',
		async install() {}
	},
	{
		title: 'unocss',
		async install() {}
	}
]
