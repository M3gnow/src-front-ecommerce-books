<template>
    <div class="container">
      <div class="row mt-5">
        <div>
          <h3>Detalhe da {{labelTypeOrder}}</h3>
        </div>
        
        <div class="col-sm-8 mt-2">
          <div v-for="item in clientPurchases.items" class="alert alert-secondary" role="alert" v-bind:key="item.id">
            <div class="row">
              <div class="col-sm-10">
                <label class="fs-6 text-center">{{ item.book.title }}</label>
                <p class="form-text">{{ item.quantity}} unidades - R${{ parseFloat(item.totalValue).toFixed(2) }}</p>
              </div>
              <div class="col-sm-1">
                <img src="../assets/img/livro1.jpeg" class="d-block w-100 h-100" style="width: 100px; height: 200px;" alt="...">
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

          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-success m-1" v-bind:disabled="approved_delivered" @click="$event => updateStatus(4, clientPurchases.id)">
              Autorizar Envio
            </button>
            <button type="button" class="btn btn-warning m-1" v-bind:disabled="confirmed_delivered" @click="$event => updateStatus(5, clientPurchases.id)">
              Confirmar entrega
            </button>
            <button type="button" class="btn btn-danger m-1" v-bind:disabled="approved_replacement" @click="$event => updateStatus(7, clientPurchases.id)">
              Autorizar Troca
            </button>
            <button type="button" class="btn btn-warning m-1" v-bind:disabled="confirmed_replacement" @click="$event => updateStatus(8, clientPurchases.id)">
              Confirmar recebimento
            </button>
          </div>
        </div>

        <div class="col-sm-4">
          <label class="fs-5 ">Detalhe do pedido</label>
          <p>
            <label class="form-text">
              {{ clientPurchases.dateOrder}} 
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
                <div class="form-text">{{ this.getLabelCardWithNumber(payment) }}</div>
                <div class="form-text">{{ this.getLabelValuePayment(payment)}}</div>
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

    <div class="container">
      <hr>
      <div class="m-1 mt-4">
        <h3>Histórico da {{labelTypeOrder}}</h3>
      </div>

      <div v-for="history of historyOrderStatus" v-bind:key="history.id" class="m-1 col-md-8">
        <div class="d-flex justify-content-between mt-5">
          <div class="circulo d-flex align-items-center justify-content-center">
            # {{ history.id }}
          </div>
          
          <label for="" class="d-flex align-items-center justify-content-center">{{ history.status }}</label>

          <label for="" class="d-flex align-items-center justify-content-center">{{ history.dateUpdate }}</label>
        </div>
      </div>
    </div>
</template>
  
<script>
  import { getPurchaseById, updateStatusOrder } from '../services/modules'
  import { useRoute } from 'vue-router'
  
  export default {
    name: "AdminDetailOrderView",
    data: function() {
      let clientPurchases = {};
      const { params } = useRoute()
      let totalQuantity = 0;
      let identificationAddress = '';
      let labelAdress = '';
      let labelStatusClass;
      let labelStatusDescription;
      let labelTypeOrder;
      let approved_delivered = false;
      let confirmed_delivered = false;
      let approved_replacement = false;
      let confirmed_replacement = false;
      let historyOrderStatus = [];
      let labelDescription;
      
      this.loadingGetOrderById(params.order_id);
  
      return {
        clientPurchases,
        totalQuantity,
        identificationAddress,
        labelAdress,
        labelStatusClass,
        labelStatusDescription,
        labelTypeOrder,
        approved_delivered,
        confirmed_delivered,
        approved_replacement,
        confirmed_replacement,
        historyOrderStatus
      };
    },
    methods: {
      loadingGetOrderById(orderId) {
        getPurchaseById(orderId)
        .then((result) => {
            console.log(result);
            
            this.clientPurchases = result;
            this.historyOrderStatus = this.getFieldsHistory(result.history);
            this.totalQuantity = result.items.reduce((aculumador, item) => aculumador + item.quantity, 0);
            this.identificationAddress = result.adress.identification;
            this.labelAdress = `${result.adress.street},  ${result.adress.number} -  ${result.adress.state} -  ${result.adress.city}`;
            
            this.labelStatusClass = this.getStatusClass(result.statusOrder)
            this.labelStatusDescription = this.getStatusDescription(result.statusOrder)
            this.labelTypeOrder = result.type === 2 ? 'compra': 'troca';
            this.labelDescription = this.getLabelDescription(result.statusOrder)
        })
        .catch((err) => {
            console.log('Falha na consulta getAllAddressByClientId', err)
        })
      },
      getStatusClass: function(statusOrderId) {
        switch (statusOrderId) {
          case 1:
            return "text-warning"
          case 2:
            return "text-success"
          case 3:
            return "text-danger"
          case 4:
            return "text-warning"
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
        console.log('paarams,', statusId, orderId);
        const data = {
          OrderId: orderId,
          statusId,
          admId: 0
        };

        updateStatusOrder(data)
          .then((result) => {
            this.loadingGetOrderById(orderId)
            console.log('Request with sucess {updateStatusOrder}', JSON.stringify(result));
          })
          .catch((err) => {
            console.log('Request with faild {updateStatusOrder}', err);
          })
      },
      getStatusDescription: function(statusOrderId, isDescriptionHistory = false) {
        this.setAllStatusOrderFalse();

        console.log(isDescriptionHistory);
        switch (statusOrderId) {
          case 1:
            return "Em processamento"
          case 2:
            if (!isDescriptionHistory) this.approved_delivered = false;
            return "Pagamento aprovado"
          case 3:
            return "Pagamento reprovado"
          case 4:
            if (!isDescriptionHistory) this.confirmed_delivered = false;
            return "Em transporte"
          case 5:
            return "Entregue"
          case 6:
            if (!isDescriptionHistory) this.approved_replacement = false;
            return "Em troca"
          case 7:
            if (!isDescriptionHistory) this.confirmed_replacement = false;
            return "Troca Aprovada"
          case 8:
            return "Trocado"
          default:
        }
      },
      setAllStatusOrderFalse() {
        this.approved_delivered = true;
        this.confirmed_delivered = true;
        this.approved_replacement = true;
        this.confirmed_replacement = true;
      },
      getLabelCardWithNumber: function(payment) {
        return `${payment.card.flag.description} **** ${payment.card.number.slice(payment.card.number.length - 4)}`;
      },
      getLabelValuePayment: function(payment) {
        return `à vista R$ ${payment.value}`
      },
      getFieldsHistory(history) {
        let identity = 1;
        return history.sort((a, b) => a.idStatus - b.idStatus).map((item) => {
          const hisotry =  {
            'id': identity,
            'status': this.getStatusDescription(item.idStatus, true),
            'dateUpdate': item.dateUpdate,
            'idStatus':item.idStatus
          }
          
          identity++
          return hisotry;
        })
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
    }
  }
</script>
  
<style>
.circulo {
    background: khaki;
    border-radius: 25%;
    width: 50px;
    height: 50px;
}

</style>