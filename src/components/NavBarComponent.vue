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

    <div class="container d-flex justify-content-between mt-2">
      <div>
        <div class="form-switch form-check-reverse">
            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckReverse" v-model="setAdm" @change="$event => checkEvent($event)">
            <label class="form-check-label col-md-12" for="flexSwitchCheckReverse">{{ typeUser }}</label>
        </div>
      </div>

      <div class="d-flex mt-3">

        <div class="m-1" v-if="setAdm">
          <router-link class="p-2 nav-link active" type="button" href="#" to="/adm">
            Painel de Administrador
          </router-link>

        </div>

        <div class="m-1" v-if="!setAdm">
          <router-link class="p-2 nav-link active" type="button" to="/cliente/cadastro">
            Crie sua conta
          </router-link>
        </div>
        
        <div class="dropdown m-1" v-if="!setAdm">
          <router-link class="p-2 nav-link dropdown-toggle" type="button" role="button" to="/" data-bs-toggle="dropdown"
            aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-user" />
            Andrew
          </router-link>
          <ul class="dropdown-menu">
            <li>
              <div class="dropdown-item disabled text-reset">
                Olá Andrew!
              </div>
              <div class="dropdown-item disabled form-text">
                Você possui 1pts
              </div>
            </li>

            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <router-link class="dropdown-item" href="#" :to="{ path: `/client/${client_id}/profile` }">
                  Meu Perfil
              </router-link>
            </li>

            <li>
              <router-link class="dropdown-item" href="#" :to="{ path: `/client/${client_id}/coupon` }">
                Meus Cupons
              </router-link>
            </li>

            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <router-link class="dropdown-item" href="#" to="/">
                Sair
              </router-link>
            </li>
          </ul>
        </div>

        <div class="m-1" v-if="!setAdm">
          <router-link class="p-2 nav-link active" type="button" :to="{ path: `/client/${client_id}/purchases`}">
            Compras
          </router-link>  
        </div>

        <div class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" v-on:click="forceRerenderCart()" v-if="!setAdm">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ itensCart }}</span>
        </div>
      </div>

    </div>
  </nav>

  
</template>

<script>
import Cart from './CartComponent.vue'

export default {
  name: 'NavBarComponent',
  components: {
    Cart
  },
  data: function () {
    let setAdm = false;
    let typeUser = 'Cliente'
    let itensCart = 10;
    if (this.setAdm) {
      console.log('setAdm', setAdm);
    }

    return {
      componentKey: 0,
      client_id: 5,
      typeUser,
      setAdm,
      itensCart: itensCart || '',
    }
  },
  methods: {
    forceRerenderCart: function() {
      this.componentKey += 1;
    },
    checkEvent(event) {
      if (this.setAdm) {
        this.typeUser = 'Administrador'
      } else {
        this.typeUser = 'Cliente'
      }

    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #fff159;
}
</style>
