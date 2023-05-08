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
import PurchaseAddressView from '../views/PurchaseAddressView'
import PurchaseCreateAddressView from '../views/PurchaseCreateAddressView'
import PurchaseCardView from '../views/PurchaseCardView'
import PurchaseCreateCardView from '../views/PurchaseCreateCardView'
import PurchaseVerifyView from '../views/PurchaseVerifyView'
import CouponClientView from '../views/CouponClientView'
import NewCardClientView from '../views/NewCardClientView'
import NewAddressClientView from '../views/NewAddressClientView'

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
      path: '/products/:book_id/detail',
      name: 'DetailProduct',
      component: DetailProductView
    },
    {
      path: '/cliente/cadastro',
      name: 'Cliente',
      component: CreateClientView
    },
    {
      path: '/client/:client_id/purchases',
      name: 'Purchases',
      component: PurchasesView
    },
    {
      path: '/client/:client_id/purchases/:purchase_id',
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
      component: PurchaseAddressView
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
      path: '/client/:client_id/cards/new',
      name: 'NewCardClientView',
      component: NewCardClientView
    },
    {
      path: '/client/address/new',
      name: 'NewAddressClient',
      component: NewAddressClientView
    },
    {
      path: '/client/:client_id/profile/',
      name: 'ClienteProfile',
      component: ProfileClientView
    },
    {
      path: '/client/:client_id',
      name: 'ClientPersonalData',
      component: EditPersonalDataClientView
    },
    {
      path: '/client/:client_id/password',
      name: 'ClientPassword',
      component: ChangePasswordView
    },
    {
      path: '/client/:client_id/cards',
      name: 'ClientCards',
      component: CardsClientView
    },
    {
      path: '/client/:client_id/cards/:card_id',
      name: 'EditClientCards',
      component: EditCardClientView
    },
    {
      path: '/client/:client_id/address',
      name: 'ClientAdresses',
      component: AdressesClientView
    },
    {
      path: '/client/:client_id/address/:address_id',
      name: 'EditClientAdress',
      component: EditAdressClientView
    },
    {
      path: '/client/:client_id/coupon',
      name: 'CouponClient',
      component: CouponClientView
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
