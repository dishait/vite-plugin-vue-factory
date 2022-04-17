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
	let child_process = null
	const building = createSingleChildProcessScope(signal => {
		if (child_process) {
			child_process.stdout.unpipe(process.stdout)
		}
		const command = 'pnpm -C src/client run build'
		child_process = exec(command, { signal })
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
