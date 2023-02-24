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
      <router-link  class="p-2 nav-link active" type="button" to="">
        <font-awesome-icon icon="fa-solid fa-user" />
        Andrew
      </router-link>
      <router-link  class="nav-link active" type="button" to="/pedidos">
        Compras
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
