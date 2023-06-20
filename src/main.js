import './assets/main.css'
import './assets/reset.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VXETable)

app.mount('#app')
