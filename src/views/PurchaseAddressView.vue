<template>
  <div class="container d-flex justify-content-around mt-2">
    <div>
      <div class="card p-3">
        <div>
          <h5>Meus endereços</h5>
        </div>
      </div>

      <div class="card mt-3" v-for="address in deliveryAddress" v-bind:key="address.id">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="p-4">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
                  v-bind:value="address.id" v-model="addressSelected" aria-label="...">
              </div>

              <div class="ms-3">
                <i class="bi bi-geo-alt iconGeo "></i>
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label>{{ address.identification }}</label>
                <label for="">{{ address.street }} - {{ address.number }}</label>
                <label for="">{{ address.city }} - CEP {{ address.zipCode }}</label>
              </div>
              <!-- <div class="d-flex flexwrap row ms-5">
                <label><b>Frete </b></label>
                <label> R$: {{ address.street }},00</label>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-start mt-3">
        <router-link to="/purchase/payments" class="me-3">
          <div class="btn btn-primary" v-on:click="setAdressToCart(), forceRerenderCart()">
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

    <ResumePurchaseComponent :key="myComponent" />
  </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import { getAllAddressByClientId, getDeliveryPrice  } from '@/services/modules';
import { getClientStorage } from '@/storage/module';
import { setAdressDeliveryToCartStorage } from '@/storage/module';
export default {
  name: "PurchaseAddressView",
  components: {
    ResumePurchaseComponent
  },
  data: function () {
    let addressSelected = 0;
    let deliveryAddress = [];
    const client = getClientStorage();
    
    getAllAddressByClientId(client.id)
      .then((result) => {
        const deliveryFilter = result.filter((address) => address.typeAdress === 1)

        this.deliveryAddress = this.modelAddress(deliveryFilter)
      })
      .catch((err) => {
        console.log('Falha na consulta getAllAddressByClientId', err)
      })
    return {
      deliveryAddress,
      addressSelected,
      componentKey: 0,
    }
  },
  methods: {
    forceRerenderCart: function () {
      this.componentKey += 1;
    },
    modelAddress: function (allAddress) {
      const result = allAddress.map((address) => {
        this.addressSelected = address.id;
        return {
          id: address.id,
          identification: address.identification,
          zipCode: address.zipCode,
          street: address.street,
          number: address.number,
          state: address.state,
          city: address.city,
          country: 'Brazil'
        
        }
      })
      return result;
    },
    setAdressToCart: function () {
      setAdressDeliveryToCartStorage(this.addressSelected);
    }
  }
}
</script>

<style></style>s