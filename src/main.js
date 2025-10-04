import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/css/app.css'
import { i18n } from './utils/i18n.js'

const app = createApp(App)

app.use(createPinia()).use(router).use(i18n)

app.mount('#app')

// Preline UI
import('preline/dist/index.js')
