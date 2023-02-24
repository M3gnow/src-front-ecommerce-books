<template>
  <div id="navbar">
    <router-link to="/">
        <img src="" id="logo">
    </router-link>

    <router-link to="/"> Home </router-link>
    <router-link to="/pedidos"> Pedidos </router-link>
    <router-link to="/products/detail"> Detalhe do Produto </router-link>
    
  </div>
</template>

<script>
export default {
    name: "NavBarComponent"

}
</script>

<style scoped>

</style>
