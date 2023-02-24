import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons'



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router, bootstrap).mount('#app')

library.add(faUser)