import App from './App.vue'
import { createApp } from 'vue'
import { useModules } from 'virtual:modules'

import 'uno.css'
import './styles/main.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

useModules(app)

app.mount('#app')
