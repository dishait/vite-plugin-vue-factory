import { installPackage } from '@antfu/install-pkg'
import { green } from 'kolorist'

import { outputFile } from 'fs-extra'

// 该模块运行在 node 中，请不要在 client 中引入
export const modules = [
	{
		title: 'vue-router',
		async install() {
			await installPackage('vue-router')

			await outputFile(
				'src/modules/router.ts',
				`import { createRouter, createWebHistory } from "vue-router"`
			)

			console.log(
				`\n 🍃 Factory: ${green(
					'vue-router install success'
				)}`
			)
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
