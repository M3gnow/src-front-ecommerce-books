<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-8">
        <h1>Troca de itens da compra</h1>
        <h3>Selecione os itens e a quantidade que deseja trocar:</h3>
        <div v-for="item in itens" class="alert alert-secondary" role="alert" v-bind:key="item.id">
          <div class="row">
            <div class="col-sm-1">
              <div class="p-4">
                <input class="form-check-input" type="checkbox" v-model="item.isReplace">
              </div>
            </div>
            <div class="col-sm-8">
              <label class="fs-6 text-center">{{ item.title }}</label>
              <p class="form-text">{{ item.quantity }} unidades</p>
            </div>
            <div class="col-sm-1">
              <img src="../assets/img/livro1.jpeg" class="d-block w-100 h-100" style="width: 100px; height: 200px;"
                alt="...">
            </div>
            <div class="col-sm-2">
              <label for="basic-url" class="form-label">Quantidade:</label>
              <div class="input-group">
                <input type="number" class="form-control" id="validityCard" v-bind:disabled="!item.isReplace"
                  v-model="item.replaceQuantity" min="1" max="{{ item.quantity }}" name="validityCard"
                  aria-describedby="basic-addon3">
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3">
          <div class="card">
            <div class="card-body">
              <div class="col-sm">
                <label class="fs-4 text-center" v-bind:class="labelStatusClass">Informações:
                </label>

                <p class="fs-6">Após a solicitação da troca, ela estará sujeita a aprovação.</p>
                <p class="fs-6">Você pode acompanhar o status da sua troca no menu "Compras".</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-between p-3">
          <button class="btn btn-outline-warning" v-on:click="sendReplace()">Trocar</button>
        </div>
      </div>
      <div class="col-sm-4">
        <label class="fs-5 ">Detalhe da compra de origem:</label>
        <p>
          <label class="form-text">
            {{ clientPurchases.dateOrder }}
            <div class="vr"></div>
            #{{ clientPurchases.id }}
          </label>
        </p>

        <hr>
        <div class="d-flex justify-content-between p-2">
          <label class="fs-6">Produtos ({{ totalQuantity }})</label>
          <label class="form-text"> R$ {{ clientPurchases.totalValue }}</label>
        </div>
        <div class="d-flex justify-content-between p-2">
          <label class="fs-6">Frete</label>
          <label class="form-text"> R$ 15.00</label>
        </div>
        <div class="d-flex justify-content-between p-2">
          <label class="fs-6">Endereço</label>
          <label class="form-text">{{ identificationAddress }}</label>
        </div>
        <div class="d-flex justify-content-end p-2">
          <label class="form-text">
            {{ labelAdress }}
          </label>
        </div>
        <hr>
        <label class="fs-6">Pagamento</label>
        <div class="p-2">

          <div v-for="payment in clientPurchases.payments" v-bind:key="payment.id">
            <div class="d-flex justify-content-between p-2">
              <div class="form-text">{{ payment.card.flag.description }} **** {{
                payment.card.number.slice(payment.card.number.length - 4) }}</div>
              <div class="form-text">à vista R$ {{ payment.value }}</div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end p-2">
        </div>
        <hr>
        <div class="d-flex justify-content-between p-2">
          <label class="fs-5 ">Total</label>
          <label class="form-text">R$ {{ clientPurchases.totalValue }}</label>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { getClientStorage } from '@/storage/module';
import { getPurchaseById,createOrderReplacement } from '../services/modules'
import { useRoute,useRouter } from 'vue-router'

export default {
  name: "CreateReplaceView",
  data: function () {
    let clientPurchases = {};
    const { params } = useRoute()
    let totalQuantity = 0;
    let identificationAddress = '';
    let labelAdress = '';
    let labelStatusClass;
    let labelStatusDescription;
    let itens;
    const order_id = params.purchase_id;
    const client_id = getClientStorage().id;
    getPurchaseById(params.purchase_id)
      .then((result) => {
        console.log(result);

        this.clientPurchases = result;
        this.itens = this.modelItens(result.items);
        this.totalQuantity = result.items.reduce((aculumador, item) => aculumador + item.quantity, 0);
        this.identificationAddress = result.adress.identification;
        this.labelAdress = `${result.adress.street},  ${result.adress.number} -  ${result.adress.state} -  ${result.adress.city}`;

        this.labelStatusClass = this.getStatusClass(result.statusOrder)
        this.labelStatusDescription = this.getStatusDescription(result.statusOrder)


      })
      .catch((err) => {
        console.log('Falha na consulta getAllAddressByClientId', err)
      })

    return {
      clientPurchases,
      totalQuantity,
      identificationAddress,
      labelAdress,
      labelStatusClass,
      labelStatusDescription,
      itens,
      client_id,
      order_id
    };
  },
  methods: {
    modelItens: function (itens) {
      return itens.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
          replaceQuantity: item.quantity,
          title: item.book.title,
          totalValu: item.totalValue,
          isReplace: false,
          book: item.book
        }
      })
    },
    getStatusClass: function (statusOrderId) {
      switch (statusOrderId) {
        case 1:
          return "text-warning"
        case 2:
          return "text-success"
        case 3:
          return "text-danger"
        case 4:
          return " text-warning"
        case 5:
          return "text-success"
        default:
      }
    },
    getStatusDescription: function (statusOrderId) {
      switch (statusOrderId) {
        case 1:
          return "Em processamento"
        case 2:
          return "Pagamento aprovado"
        case 3:
          return "Pagamento reprovado"
        case 4:
          return "Em transporte"
        case 5:
          return "Entregue"
        default:
      }
    },
    sendReplace: function () {
      const itensReplace = this.itens.filter((item) =>
        item.isReplace
      ).map((item) => {
        return {
          id: item.id,
          quantity: item.replaceQuantity,
          book: item.book 
        }
      })
      const data = {
        order_Id: this.order_id,
        items: itensReplace
      }
      console.log("itens",itensReplace);
      createOrderReplacement(data)
        .then((result) => {
          useRouter.push(`/client/${this.client_id}/purchases`);
        })
        .catch((err) => {
          console.log('Falha na consulta getAllAddressByClientId', err)
        });
    }
  }
}
</script>

<style></style>