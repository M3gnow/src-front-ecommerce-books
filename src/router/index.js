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
import PurchasesView from '../views/PurchasesView'
import DetailPurchaseView from '../views/DetailPurchaseView'
import AdministratorPanelView from '../views/AdministratorPanelView'
import PurchaseView from '../views/PurchaseView'
import PurchaseAddressView from '../views/PurchaseAddressView'
import PurchaseCreateAddressView from '../views/PurchaseCreateAddressView'
import PurchaseCardView from '../views/PurchaseCardView'
import PurchaseCreateCardView from '../views/PurchaseCreateCardView'
import PurchaseVerifyView from '../views/PurchaseVerifyView'
import CouponClientView from '../views/CouponClientView'

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
      name: 'EditClientCards',
      component: EditCardClientView
    },
    {
      path: '/cliente/senha',
      name: 'ClientPassword',
      component: ChangePasswordView
    },
    {
      path: '/cliente/editar',
      name: 'ClientPersonalData',
      component: EditPersonalDataClientView
    },
    {
      path: '/compras',
      name: 'Purchases',
      component: PurchasesView
    },
    {
      path: '/compras/detalhe',
      name: 'DetailPurchase',
      component: DetailPurchaseView
    },
    {
      path: '/adm',
      name: 'AdminPanel',
      component: AdministratorPanelView
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: PurchaseView
    },
    {
      path: '/purchase/address/delivery',
      name: 'PurchaseCreateAddress',
      component: PurchaseCreateAddressView
    },
    {
      path: '/purchase/address',
      name: 'PurchaseAddress',
      component: PurchaseAddressView
    },
    {
      path: '/purchase/payments',
      name: 'PurchaseCard',
      component: PurchaseCardView
    },
    {
      path: '/purchase/card',
      name: 'PurchaseCreateCard',
      component: PurchaseCreateCardView
    },
    {
      path: '/purchase/verify',
      name: 'PurchaseVerify',
      component: PurchaseVerifyView
    },
    {
      path: '/cliente/coupon',
      name: 'CouponClient',
      component: CouponClientView
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
