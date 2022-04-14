import sirv from 'sirv'
import { resolve } from 'path'
import { green } from 'kolorist'
import { toJson } from '../shared/base'
import { parseURL, parseQuery } from 'ufo'
import { modules } from '../../config/node'
import type { Plugin, ResolvedConfig } from 'vite'

export default (): Plugin => {
	let config: ResolvedConfig
	return {
		name: 'vite-plugin-vue-factory',
		configResolved(_config) {
			config = _config
		},
		configureServer({ middlewares, httpServer }) {
			const client = resolve(__dirname, '../client')
			middlewares.use(
				'/__factory',
				sirv(client, {
					dev: true,
					single: true
				})
			)
			middlewares.use(
				'/__factory_api',
				async (req, res) => {
					const { search } = parseURL(req.url)
					const title = parseQuery(search).title as string
					const module = modules.find(
						module => module.title === title
					)
					try {
						if (!module) {
							throw new Error(
								'该模块未设置安装流程，请联系作者修复'
							)
						}
						await module.install()
						res.statusCode = 200
						res.write(
							toJson({
								code: 200,
								msg: 'success'
							})
						)
					} catch (error: any) {
						res.statusCode = 500
						res.write(
							toJson({
								code: 500,
								msg: error.message
							})
						)
					} finally {
						res.end()
					}
				}
			)

			httpServer?.once('listening', () => {
				setImmediate(() => {
					const { port, https } = config.server
					const protocol = https ? 'https' : 'http'
					const message = ` 🍃 Factory: ${green(
						`${protocol}://localhost:${port}/__factory/`
					)}\n`
					console.log(message)
				})
			})
		}
	}
}
