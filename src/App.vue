<template>
    <NavBar />

    <router-view/>

    <FooterComponent />  
</template>

<script>
import NavBar from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { getClientById } from '@/services/modules'
import { setClientStorage } from '@/storage/module'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },data: function() {
    return {}
  }
}
</script>

<style>
body {
  background: gainsboro !important;
  position: relative;
  margin: 0;
  min-height: 100%;
  padding-bottom: 10rem;
  box-sizing: inherit;
}
html {
  height: 100%;
  box-sizing: border-box;
}
</style>
