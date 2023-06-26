import './assets/main.css'
import './assets/reset.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VXETable)
app.use(VueSweetalert2);

app.mount('#app')
