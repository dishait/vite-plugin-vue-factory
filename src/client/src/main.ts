import App from './App.vue'
import { createApp } from 'vue'
import { useModules } from 'virtual:modules'
import { useGlobalApi } from 'virtual:global-api'

import 'uno.css'
import './styles/main.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

useModules(app)

useGlobalApi(app)

app.mount('#app')
