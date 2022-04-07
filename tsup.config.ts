import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	minify: true,
	outDir: 'node',
	splitting: true,
	format: ['cjs', 'esm'],
	entry: ['src/node/index.ts']
})
