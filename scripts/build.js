const {
	debounce,
	createSingleChildProcessScope
} = require('./shared/base')
const { watch } = require('chokidar')
const { exec } = require('child_process')

const BuildClientWithWatching = () => {
	const targets = [
		'src/client/src',
		'src/client/vite.config.ts'
	]
	const watcher = watch(targets)
	const building = createSingleChildProcessScope(signal => {
		const command = 'pnpm -C src/client run build'
		const child_process = exec(command, { signal })
		child_process.stdout.pipe(process.stdout)
	})

	watcher.on('all', debounce(building))
}

const BuildNodeWithWatching = () => {
	const command = 'tsup --watch'
	const child_process = exec(command)
	child_process.stdout.pipe(process.stdout)
}

BuildClientWithWatching()

BuildNodeWithWatching()
