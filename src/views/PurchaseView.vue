<template>

  <div class="container d-flex mt-2">
    <div class="col-md-8 me-3">
      <div>
        <h5>
          Como você quer receber sua compra?
        </h5>
      </div>

      <div class="mt-2">
        <label for="">Endereço</label>
      </div>
      
      <div class="card mt-3">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="ms-3">
                <i class="bi bi-geo-alt iconGeo "></i>
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label for="">Rua Quitandinha 84</label>
                <label for="">Itaquaquecetuba, São Paulo - CEP 08582640</label>
                <label for="">Thiago Henrique de Araujo - 11984661480</label>
              </div>
            </div>

            <div class="w-50 mt-3">
              <router-link to="/purchase/address">
                <button type="button" class="btn btn-outline-info">Editar ou escolher outro</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-end mt-3">
        <router-link to="/purchase/payments">
          <div class="btn btn-primary">
            Continuar
          </div>
        </router-link>
      </div>
    </div>

    <ResumePurchaseComponent />
  </div>

  
  
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import getAllAddressByClientId from '@/services/modules';
export default {
    name: "PurchaseView",
    components: {
      ResumePurchaseComponent
    },
    data: function(){
      return getAllAddressByClientId()
            .then((result) => {
                const homeFilter = result.find((address) => address.typeAdress === 1);

                this.homeAddress = this.modelAddress([homeFilter])
                this.deliveryAddress = this.modelAddress(deliveryFilter)
                this.billingAddress = this.modelAddress(billingFilter)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllAddressByClientId', err)
            })
    }
}
</script>

<style>
.iconGeo {
  font-size: 50px;
}

.cardResume {
  min-height: 550px !important;
}

</style>