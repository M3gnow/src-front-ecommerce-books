import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '../views/PedidosView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: PedidosView
    },
    // { path: '/dashboard', component: Dashboard, meta: { authorization:  false } },
    // { path: '/passengers', component: Passengers, meta: { authorization:  false } },
    // { path: '/schools', component: Schools, meta: { authorization:  false } },
    // { path: '/itinerary', component: Itinerary, meta: { authorization:  false } },
    // { path: '/conductor', component: Conductor, meta: { authorization:  false } },
    // { path: '/responsible', component: Responsible, meta: { authorization:  false } },
    // { path: '/login', component: Login, name: 'login' },
  ]
})

export default router
