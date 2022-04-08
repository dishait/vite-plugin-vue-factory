import sirv from 'sirv'
import { resolve } from 'path'
import type { Plugin } from 'vite'
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
			}
		}
	]
}

export default usePlugin
