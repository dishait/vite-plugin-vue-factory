import sirv from 'sirv'
import { resolve } from 'path'
import { green } from 'kolorist'
import type { Plugin, ResolvedConfig } from 'vite'
import { toJson } from './shared/base'
import Modules from 'vite-plugin-use-modules'
import { createPluginName } from './shared/create'

interface Options {}

const useName = createPluginName(false)

let config: ResolvedConfig

const usePlugin = (
	options?: Partial<Options>
): Plugin[] => {
	return [
		Modules(),
		{
			name: useName('vue-factory'),
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

				middlewares.use('/__factory_api', (req, res) => {
					res.write(toJson({ bar: 2 }))
					res.end()
				})

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
	]
}

export default usePlugin
