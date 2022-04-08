import sirv from 'sirv'
import { resolve } from 'path'
import type { Plugin } from 'vite'
import { toJson } from './shared/base'
import Modules from 'vite-plugin-use-modules'
import { createPluginName } from './shared/create'

interface Options {}

const useName = createPluginName(false)

const usePlugin = (
	options?: Partial<Options>
): Plugin[] => {
	return [
		Modules(),
		{
			name: useName('vue-factory'),
			configureServer({ middlewares }) {
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
			}
		}
	]
}

export default usePlugin
