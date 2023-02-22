import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

createApp(App).use(router, bootstrap).mount('#app')
