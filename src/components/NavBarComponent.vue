<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container mt-2">
      <div class="col-md-2">
        <router-link to="/" class="navbar-brand">LesBooks</router-link>  
      </div>

      <div class="col-md-8">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar produtos, autores e muito mais" aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Pesquisar</button>
        </form>
      </div>
    </div>

    <div class="container d-flex justify-content-end mt-2">
      <div class="m-1">
        <router-link class="p-2 nav-link active" type="button" to="/cliente/cadastro">
          Crie sua conta
        </router-link>
      </div>
      
      <div class="dropdown m-1">
        <router-link class="p-2 nav-link dropdown-toggle" type="button" role="button" to="/" data-bs-toggle="dropdown"
          aria-expanded="false">
          <font-awesome-icon icon="fa-solid fa-user" />
          Andrew
        </router-link>
        <ul class="dropdown-menu">
          <li>
            <div class="dropdown-item disabled text-reset">Olá Andrew!</div>
            <div class="dropdown-item disabled form-text">Você possui 1pts</div>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><router-link class="dropdown-item" href="#" :to="{ path: `/client/${client_id}/profile` }">Meu Perfil</router-link></li>
          <li><router-link class="dropdown-item" href="#" :to="{ path: `/client/${client_id}/coupon` }">Meus Cupons</router-link></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><router-link class="dropdown-item" href="#" to="/adm">Painel de administador</router-link></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><router-link class="dropdown-item" href="#" to="/">Sair</router-link></li>
        </ul>
      </div>

      <div class="m-1">
        <router-link class="p-2 nav-link active" type="button" to="/compras">
          Compras
        </router-link>  
      </div>

      <div class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" v-on:click="forceRerenderCart()">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">24</span>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Meu carrinho 
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <Cart :key="componentKey"/>
        </div>
      </div>
    </div>
  </nav>

  
</template>

<script>
import Cart from './CartComponent.vue'
import { ref } from 'vue';

export default {
  name: 'NavBarComponent',
  components: {
    Cart
  },
  data: function () {
    return {
      componentKey: 0,
      client_id: 1
    }
  },
  methods: {
    forceRerenderCart: function() {
      this.componentKey += 1;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #fff159;
}
</style>
