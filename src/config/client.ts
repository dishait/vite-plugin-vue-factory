export type ExtractArrayItem<T extends unknown[]> =
	T extends (infer R)[] ? R : never

export type Modules = {
	/**
	 * 链接
	 */
	link: string
	/**
	 * 封面
	 */
	cover: string
	/**
	 * 标题
	 */
	title: string
	/**
	 * 描述
	 */
	description: string
}[]

export const modules: Modules = [
	{
		title: 'vue-router',
		cover: '/modules/vue-router.png',
		description: '官方路由',
		link: 'https://router.vuejs.org'
	},
	{
		title: 'pinia',
		cover: '/modules/pinia.svg',
		description: '状态管理',
		link: 'https://pinia.vuejs.org/'
	},
	{
		title: 'vueuse',
		cover: '/modules/vueuse.svg',
		description: '组合式函数库',
		link: 'https://vueuse.org/'
	},
	{
		title: 'windicss',
		cover: '/modules/windicss.svg',
		description: '原子 css 库',
		link: 'https://cn.windicss.org/'
	},
	{
		title: 'vue-request',
		cover: '/modules/vue-request.png',
		description: 'SWR 请求库',
		link: 'https://www.attojs.com/'
	},
	{
		title: 'unocss',
		cover: '/modules/unocss.svg',
		description: '原子 css 库',
		link: 'https://github.com/unocss/unocss'
	}
]
