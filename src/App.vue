<template>
  <NavBar />
  
  <router-view/>

  <FooterComponent />
</template>

<script>
import NavBar from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { initCartStorage } from './storage/module';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },data: function(){
    initCartStorage();
  }
}
</script>

<style>
body {
  background: gainsboro !important;
}
</style>
