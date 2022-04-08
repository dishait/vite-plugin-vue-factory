import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Factory from 'vite-plugin-vue-factory'

export default defineConfig({
	plugins: [Vue(), Inspect(), Factory()]
})
