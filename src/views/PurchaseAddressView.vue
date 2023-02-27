<template>
  <div class="container d-flex mt-2">
    <div class="col-md-8 me-3">
      <div>
          <h5>Meus endereços</h5>
      </div>

      <div class="card mt-4">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="p-4">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
              </div>

              <div class="ms-3">
                <i class="bi bi-geo-alt iconGeo "></i>
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label for="">Rua Quitandinha 84</label>
                <label for="">Itaquaquecetuba, São Paulo - CEP 08582640</label>
                <label for="">Thiago Henrique de Araujo - 11984661480</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="p-4">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
              </div>

              <div class="ms-3">
                <i class="bi bi-geo-alt iconGeo "></i>
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label for="">Rua Ibitiara 114</label>
                <label for="">Itaquaquecetuba, São Paulo - CEP 04125142</label>
                <label for="">Thiago Henrique de Araujo - 11984661480</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="p-4">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
              </div>
              <div class="ms-3">
                <i class="bi bi-geo-alt iconGeo "></i>
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label for="">Avenida Paulista 1111</label>
                <label for="">São Paulo, São Paulo - CEP 01247842</label>
                <label for="">Thiago Henrique de Araujo - 11984661480</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-start mt-3">
        <router-link to="/purchase/payments" class="me-3"> 
          <div class="btn btn-primary">
            Continuar
          </div>
        </router-link>

        <router-link to="/purchase/address/delivery"> 
          <div class="btn btn-light">
            Adicionar endereço
          </div>
        </router-link>
      </div>
    </div>

    <ResumePurchaseComponent />
  </div>

  
  
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'

export default {
    name: "PurchaseAddressView",
    components: {
      ResumePurchaseComponent
    }
}
</script>

<style>

</style>s