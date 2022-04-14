import type { Plugin } from 'vite'
import Factory from './plugins/factory'
import Modules from 'vite-plugin-use-modules'

interface Options {}

const usePlugin = (
	options?: Partial<Options>
): Plugin[] => {
	return [Modules(), Factory()]
}

export default usePlugin
