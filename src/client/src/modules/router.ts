import routes from '~pages'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	routes,
	history: createWebHistory(import.meta.env.BASE_URL)
})

export default (app: App) => app.use(router)
