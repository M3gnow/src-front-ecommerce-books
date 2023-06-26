<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-sm-8">
        <div v-for="item in clientPurchases.items" class="alert alert-secondary" role="alert" v-bind:key="item.id">
          <div class="row">
            <div class="col-sm-10">
              <label class="fs-6 text-center">{{ item.book.title }}</label>
              <p class="form-text">{{ item.quantity }} unidades - R${{ parseFloat(item.totalValue).toFixed(2) }}</p>
            </div>
            <div class="col-sm-1">
              <img src="../assets/img/livro1.jpeg" class="d-block w-100 h-100" style="width: 100px; height: 200px;"
                alt="...">
            </div>
          </div>
        </div>
        <div class="row p-3">
          <div class="card">
            <div class="card-body">
              <div class="col-sm">
                <label class="fs-4 text-center" v-bind:class="labelStatusClass">{{ labelStatusDescription }}
                </label>

                <p class="fs-5 fw-semibold mt-2">Aguardando confirmação do pagamento.</p>
                <p class="fs-6">{{ labelDescription }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row p-3" v-show="statusOrder == 5">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action disabled text-reset fs-5">
              Ajuda com a compra
            </a>
            <button class="list-group-item list-group-item-action" v-on:click="updateStatus(6, orderId)">Trocar compra completa</button>
            <RouterLink :to="{ path: `/client/${ clientID }/purchases/${ orderId }/replace` }" class="list-group-item list-group-item-action">Trocar itens da compra</RouterLink>
          </div>
        </div>

      </div>
      <div class="col-sm-4">
        <label class="fs-5 ">Detalhe da compra</label>
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
import { getPurchaseById,updateStatusOrder } from '../services/modules'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: "DetailPurchaseView",
  data: function () {
    let clientPurchases = {};
    const { params } = useRoute()
    let totalQuantity = 0;
    let identificationAddress = '';
    let labelAdress = '';
    let labelStatusClass;
    let labelStatusDescription;
    let statusOrder;
    const orderId = params.purchase_id;
    const clientID = params.client_id;
    let labelDescription;

    return {
      clientPurchases,
      totalQuantity,
      identificationAddress,
      labelAdress,
      labelStatusClass,
      labelStatusDescription,
      orderId,
      clientID,
      statusOrder,
      params,
      labelDescription
    };
  },
  methods: {
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
        case 6:
          return "text-warning"
        case 7:
          return "text-success"
        case 8:
          return "text-success"
        default:
      }
    },
    updateStatus(statusId, orderId) {
      const data = {
        OrderId: orderId,
        statusId,
        admId: 0
      };

      updateStatusOrder(data)
        .then((result) => {
          console.log('Request with sucess {updateStatusOrder}', JSON.stringify(result));
          this.getData(this.params.purchase_id);
        })
        .catch((err) => {
          console.log('Request with faild {updateStatusOrder}', err);
        })
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
        case 6:
          return "Em troca"
        case 7:
          return "Troca aprovada"
        case 8:
          return "Trocado"
        default:
      }
    },
    getLabelDescription: function(statusOrderId) {
        switch (statusOrderId) {
            case 1:
                return "Estamos aguardando a confirmação de pagamento da operadora do cartão."
            case 2:
                return "Quase lá. Estamos aguardando processo de embalagem para enviar seus produtos"
            case 3:
                return "Infelizmente não houve confirmação de pagamento da operadora do cartão."
            case 4:
                return "Quase lá. Seu produto já está a caminho"
            case 5:
                return "Show! Esperamos que seu produto tenha chegado em perfeito estado. Caso necessario pode trocar seu(s) produto(s)"
            case 6:
                return "Estamos avaliando o processo de troca, aguardando autorização"
            case 7:
                return "O processo de troca foi autorizado, agora é somente nos enviar os itens solicitados"
            case 8:
                return "Perfeito, troca concluida, foi gerado um cupom de troca na sua conta"
            default:
        }
    },
    getData(orderId) {
      getPurchaseById(orderId)
        .then((result) => {
          this.clientPurchases = result;
          this.totalQuantity = result.items.reduce((aculumador, item) => aculumador + item.quantity, 0);
          this.identificationAddress = result.adress.identification;
          this.labelAdress = `${result.adress.street},  ${result.adress.number} -  ${result.adress.state} -  ${result.adress.city}`;
          this.statusOrder = result.statusOrder;
          this.labelStatusClass = this.getStatusClass(this.statusOrder)
          this.labelStatusDescription = this.getStatusDescription(this.statusOrder)
          this.labelDescription = this.getLabelDescription(this.statusOrder)

        })
        .catch((err) => {
          console.log('Falha na consulta getPurchaseById', err)
        })
    }
  },
  mounted() {
    this.getData(this.params.purchase_id);
  }
}
</script>

<style></style>