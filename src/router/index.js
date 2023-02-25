import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '../views/PedidosView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import CreateClientView from '../views/CreateClientView'
import ProfileClientView from '../views/ProfileClientView'
import AdressesClientView from '../views/AdressesClientView'
import EditAdressClientView from '../views/EditAdressClientView'
import CardsClientView from '../views/CardsClientView'
import EditCardClientView from '../views/EditCardClientView'
import ChangePasswordView from '../views/ChangePasswordView'
import EditPersonalDataClientView from '../views/EditPersonalDataClientView'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: PedidosView
    },
    {
      path: '/purchase',
      name: 'Pedidos',
      component: PedidosView
    },
    {
      path: '/products/detail',
      name: 'DetailProduct',
      component: DetailProductView
    },
    {
      path: '/cliente/cadastro',
      name: 'Cliente',
      component: CreateClientView
    },
    {
      path: '/cliente/perfil',
      name: 'ClienteProfile',
      component: ProfileClientView
    },
    {
      path: '/cliente/enderecos',
      name: 'ClientAdresses',
      component: AdressesClientView
    },
    {
      path: '/cliente/enderecos/editar',
      name: 'EditClientAdress',
      component: EditAdressClientView
    },
    {
      path: '/cliente/cartoes',
      name: 'ClientCards',
      component: CardsClientView
    },
    {
      path: '/cliente/cartoes/editar',
      name: 'ClientCards',
      component: EditCardClientView
    }
    ,
    {
      path: '/cliente/senha',
      name: 'ClientPassword',
      component:ChangePasswordView
    },
    {
      path: '/cliente/editar',
      name: 'ClientPersonalData',
      component:EditPersonalDataClientView
    }
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
