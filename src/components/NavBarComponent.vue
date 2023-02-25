<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <router-link to="/" class="navbar-brand">LesBooks</router-link>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>

    <div class="container d-flex justify-content-end ">
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
          <li><router-link class="dropdown-item" href="#" to="/">Painel de administador</router-link></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><router-link class="dropdown-item" href="#" to="/">Sair</router-link></li>
        </ul>
      </div>
      <router-link class="p-2 nav-link active" type="button" to="/">
        Compras
      </router-link>
      <router-link class="p-2 nav-link active" type="button" to="/">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent"

}
</script>

<style scoped>
.navbar {
  background-color: yellow;
}
</style>
