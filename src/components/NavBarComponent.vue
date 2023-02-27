<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <router-link to="/" class="navbar-brand">LesBooks</router-link>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar produtos, autores e muito mais" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Pesquisar</button>
      </form>
    </div>

    <div class="container d-flex justify-content-end ">
      <router-link class="p-2 nav-link active" type="button" to="/cliente/cadastro">
        Crie sua conta
      </router-link>
      <div class="dropdown">
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
          <li><router-link class="dropdown-item" href="#" to="/">Cupons</router-link></li>
          <li><router-link class="dropdown-item" href="#" to="/cliente/perfil">Meu Perfil</router-link></li>
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
      <router-link class="p-2 nav-link active" type="button" to="/compras">
        Compras
      </router-link>
      <div class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
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
            <Cart/>
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
  }
}
</script>

<style scoped>
.navbar {
  background-color: #fff159;
}
</style>
