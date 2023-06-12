<template>
  <div class="container d-flex justify-content-between">
    <div class="col-md-8 mt-2 pe-2">
      
      <div class="card p-3">
        <h5>Finalize sua compra</h5>

        <div class="d-flex mt-2">
            <i class="bi bi-trophy ms-5"></i>
            <label class="ms-3" for="">Benefício Lesbooks Pontos</label>
          </div>
      </div>

      <div class="card mt-3">
        <div class="p-4">
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <div class="ms-3 imgItem d-flex justify-content-center">
                <i class="bi bi-geo-alt iconGeo"></i>
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

      <div class="card mt-3" v-for="item in cart.itens" v-bind:key="item.id">
        <div class="p-4">
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
    </div>

    <div class="card col-md-4 mt-2">
      <div class="card-title">
          <div class="ms-4 mt-5">
              <label for=""><b>Resumo da compra</b></label>
          </div>
          <hr class="ms-4 me-4">
      </div>
      <div class="card-body">
        <div>
            <div class="mb-5">
                <div class="ms-4 d-flex justify-content-between me-4">
                    <div>
                        <label for="">Produtos ({{ cart.totalQuantity }})</label>
                    </div>
                    <div>
                        <label for="">R${{ cart.finalPrice }}</label>
                    </div>
                </div>

                <hr class="ms-4 me-4">
            </div>

            <div>
                <div class="mb-5">
                  <div class="d-flex justify-content-between me-4 ms-4">
                    <div>
                        <label class="fs-6">
                            <b>
                                Endereço
                            </b>
                        </label>
                    </div>
                    <div>
                        <label class="form-text">
                            <b>{{ address.identification }}</b>
                        </label>
                    </div>
                  </div>

                  <div>
                      <div class="ms-4 mt-1 d-flex justify-content-between me-4">
                          <label class="form-text"> {{ address.street }}</label>
                      
                          <label class="form-text">N° {{ address.number }}</label>
                      </div>
                  </div>

                  <div>
                      <div class="ms-4 mt-1 d-flex justify-content-between me-4">
                          <label class="form-text"> {{ address.city }} - {{ address.state }}</label>
                          <label class="form-text">CEP {{ address.zipCode }}</label>
                      </div>
                  </div>
                  <hr class="ms-4 me-4">
                </div>

                <div class="mb-5">
                  <div class="ms-4 mt-2 d-flex justify-content-between me-4">
                    <div>
                        <label for=""> <b> Frete </b> </label>
                    </div>
                    <div>
                        <label class="form-text text-warning"> R$ {{ 25 }}</label>
                    </div>
                  </div>

                  <hr class="ms-4 me-4">
                </div>
            </div>

            <div v-if="coupons.length">
                <div class="ms-4 d-flex justify-content-between me-4">
                    <div>
                        <label class="fs-6">Cupons aplicados</label>
                    </div>
                </div>

                <div class="ms-4 mt-4 d-flex justify-content-between me-4" v-for="item in coupons" v-bind:key="item.id">
                    <div>
                        <label class="text-danger" for="">{{ item.description }}</label>
                    </div>
                    <div>
                        <label class="text-danger" for="">R$ {{ item.value }}</label>
                    </div>
                </div>

                <hr class="ms-4 me-4">
            </div>
        </div>
          
        <div class="ms-4 mt-4 d-flex justify-content-between me-4">
            <div>
                <label class="text-success" for="">
                    <b>
                        Total
                    </b>
                </label>
            </div>
            <div>
                <label class="text-success" for="">R${{ parseFloat(finalPrice).toFixed(2) }}</label>
            </div>
        </div>

        <div class="mt-5 ms-4 mt-4" v-if="finalPrice <= 0">
          <div>
              <label class="text-success" for=""><b>Fique tranquilo</b></label>
          </div>
          
          <div class="d-flex jusitfy-content-between">
              <div>
                  <label class="text-success" for="">Será gerado um cupom com o valor restante</label>
              </div>
          </div>

          <div class="d-flex justify-content-between mt-4 me-4">
              <div>
                  <label class="text-success" for="">Novo Cupom</label>
              </div>

              <div>
                <label class="text-success" for="">TROCA{{ parseInt((finalPrice * -1)) }}</label>
              </div>
          </div>
        </div>

        <hr class="ms-4 me-4">
      </div>
    </div>
  </div>

  <div class="container d-flex justify-content-end mt-3 mb-3">
    <button class="btn btn-outline-success mt-2" @click="finishOrderPurchase">
      Finalizar Compra
    </button>
  </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import { getCartStorage,getClientStorage, initCartStorage } from '@/storage/module';
import { getAddressById, createOrder } from '@/services/modules';
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: "PurchaseVerify",
  components: {
    ResumePurchaseComponent
  },
  data: function () {
    let cart = getCartStorage();
    let client = getClientStorage();
    let address = {};
    let paymentComplete = false;
    let coupon = '';
    let coupons = [];
    let finalPrice = 0;
    let discount = 0;
    let minValuePaymentInCreditCard = 10;

    coupons = cart.coupons;
    finalPrice = cart.finalPrice
    discount = cart.coupons.reduce((acumulated, current) => acumulated + current.value, 0)
    finalPrice += 25;
    finalPrice -= discount;

    getAddressById(cart.id_delivery_adress)
      .then((result) => {
          this.address = this.modelAddress(result)
      })
      .catch((err) => {
          console.log('Falha na consulta getAddressById', err)
      });

    const modelItens = cart.itens.map((iten) => {
      iten.book_id = iten.id

      return iten;
    });

    const modelPayments = cart.payments.map((payment) => {
      payment.card_id = payment.id

      return payment;
    });

    // criar o objeto JSON de pedido
    const order = {
      adress_delivery_id: cart.id_delivery_adress,
      client_id: client.id,
      itens: modelItens,
      coupons: cart.coupons,
      payments: modelPayments
    };

    return {
        paymentComplete,
        coupon,
        coupons,
        client,
        cart,
        address,
        finalPrice,
        minValuePaymentInCreditCard,
        order
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
    finishOrderPurchase() {
      const promiseCreateOrder = createOrder(this.order);
      
      toast.promise(
        promiseCreateOrder,
        {
          pending: 'Processando compra Promise is pending',
          success: 'Compra finalizada com sucesso 👌',
          error: 'Ocorreu um erro 🤯',
        },
        {
          position: toast.POSITION.BOTTOM_CENTER,
        },
      );
      localStorage.removeItem("cart");

      setTimeout(() => {  
        this.$router.push('/');
      }, 5000)
    }
  }
}
</script>

<style>
.imgItem {
  border-radius: 50% !important;
  width: 90px;
  height: 90px;
  background-color: khaki;
}

.iconGeo {
  font-size: 50px;
}

</style>