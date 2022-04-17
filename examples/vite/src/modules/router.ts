import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	routes: [
		{
			path: '/',
			component: () => import('../pages/home.vue')
		}
	],
	history: createWebHistory()
})

export default (app: App) => app.use(router)
