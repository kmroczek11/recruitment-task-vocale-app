// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/router'
import { i18n } from '@/i18n'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')