import type { Plugin } from 'vite'
import { createPluginName } from './shared/create'

interface Options {}

const useName = createPluginName(false)

const usePlugin = (options?: Partial<Options>): Plugin => {
	return {
		name: useName('vue-factory')
	}
}

export default usePlugin
