<template>
  <div class="container d-flex mt-2 mb-5">
    <div class="col-md-8 me-3">
      <div>
        <h5>
          Finalize sua compra
        </h5>
      </div>

      <div class="card mt-3">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="ms-3">
                <i class="bi bi-geo-alt iconGeo "></i>
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label>{{ address.identification }}</label>
                <label for="">{{ address.street }} - {{ address.number }}</label>
                <label for="">{{ address.city }} - CEP {{ address.zipCode }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-3" v-for="item in cart.itens">
        <div class="p-4 col-md-12">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="ms-3 ">
                <img class="imgItem" src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
              </div>

              <div class="d-flex flexwrap row ms-5">
                <label for=""><b>{{ item.title }}</b></label>
                <label for="">Quantidade: {{ item.quantity }}</label>
                <label for="">R${{ item.price }} cada</label>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="card mt-3 p-3">
        <div class="d-flex">
          <i class="bi bi-trophy ms-5"></i>
          <label class="ms-3" for="">Benefício Lesbooks Pontos</label>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-end mt-3">
        <router-link to="/">
          <div class="btn btn-primary">
            Finalizar
          </div>
        </router-link>
      </div>
    </div>

    <div class="card cardResume col-md-4">
      <div class="card-title">
        <div class="ms-4 mt-5">
          <label for=""><b>Resumo da compra</b></label>
        </div>
        <hr class="ms-4 me-4">

        <div class="ms-4 mt-5 d-flex justify-content-between me-4">
          <div>
            <label for="">Produtos ({{ cart.totalQuantity }})</label>
          </div>
          <div>
            <label for="">R${{ cart.finalPrice }}</label>
          </div>
        </div>
        <div>
          <hr class="ms-4 me-4">
          <div class="ms-4 mt-5 d-flex justify-content-between me-4">
            <div>
              <label class="fs-6">Endereço</label>
            </div>
            <div>
              <label class="form-text"> {{ address.identification }}</label>

            </div>
          </div>
          <div class="ms-4 mt-5 d-flex justify-content-between me-4">
            <label class="form-text">{{ address.street }}, {{ address.number }} - {{ address.state }} - {{
              address.neighborhood }}</label>
          </div>
        </div>
        <hr class="ms-4 me-4">
        <div class="ms-4 mt-4 d-flex justify-content-between me-4">
          <div>
            <label for="">Total </label>
          </div>
          <div>
            <label for="">R${{ cart.finalPrice }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import { getCartStorage, getClientStorage } from '@/storage/module';
import { getAddressById } from '@/services/modules';
export default {
  name: "PurchaseVerify",
  components: {
    ResumePurchaseComponent
  },
  data: function () {
    let cart = getCartStorage();
    let address = {};
    getAddressById(cart.id_delivery_adress)
      .then((result) => {

        this.address = this.modelAddress(result)
      })
      .catch((err) => {
        console.log('Falha na consulta getAllAddressByClientId', err)
      });

    const client = getClientStorage();

    const modelItens = cart.itens.map((iten) => {
      iten.boook_id = iten.id

      return iten;
    })
    const pedido = {
      adress_delivery_id: cart.id_delivery_adress,
      client_id: client.id,
      itens: modelItens,
      coupons: cart.coupons,
      payments: cart.payments
    };
    console.log("pedido", pedido);
    return {
      cart, address
    }
  },
  methods: {
    modelAddress: function (result) {

      return {
        id: result.id,
        identification: result.identification,
        zipCode: result.zipCode,
        street: result.street,
        number: result.number,
        state: result.state,
        city: result.city,
        country: 'Brazil'
      }

    },

  }
}
</script>

<style>
.imgItem {
  border-radius: 50% !important;
  width: 90px;
  height: 90px;
}
</style>