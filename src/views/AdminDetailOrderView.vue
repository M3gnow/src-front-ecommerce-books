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

          <div class="card p-3">
            <div class="card-body">
              <div class="col-sm">
                <label class="fs-4 text-center" v-bind:class="labelStatusClass">{{ labelStatusDescription }}
                </label>

                <p class="fs-5 fw-semibold mt-2">{{ titleDescription }}</p>
                <p class="fs-6">{{ labelDescription }}</p>
              </div>
            </div>
          </div>

          <div class="card mt-2" v-if="!statusIsNotChanged">
            <div class="card-header">
              <div class="card-title">
                Ações
              </div>
            </div>

            <div class="card-body">
              <div class="d-flex justify-content-center mt-5" v-if="!orderIsReplacement">
                <div>
                  <button type="button" class="btn btn-success" v-bind:disabled="approved_delivered" @click="$event => updateStatus(4, clientPurchases.id)">
                    Autorizar Envio
                  </button>
                </div>

                <div>
                  <button type="button" class="btn btn-warning" v-bind:disabled="confirmed_delivered" @click="$event => updateStatus(5, clientPurchases.id)">
                    Confirmar entrega
                  </button>
                </div>
              </div>

              <div class="input-group mt-1 mb-1 d-flex justify-content-center" id="colocada" v-if="orderIsReplacement && approved_replacement">
                <div class="m-1">
                  <input class="form-check-input-defect me-1" type="checkbox" v-model="notReentryStock" @change="setReentryStockFalse()">
                  <label class="form-check-input-defect" for="flexRadioDefault2">
                    <b>
                      Produto com defeito
                    </b>
                  </label>
                </div>

                <div class="m-1"> 
                  <input class="form-check-input-defect me-1" type="checkbox" v-model="reentryStock" @change="setNotReentryStockFalse()">
                  <label class="form-check-label" for="flexRadioDefault2">
                    <b>
                      Produto comercializável
                    </b>
                  </label>
                </div>
              </div>

              <div class="d-flex justify-content-center mb-2" v-if="orderIsReplacement">
                <div v-if="confirmed_replacement">
                  <button type="button" class="btn btn-danger m-1" v-bind:disabled="approved_replacement" @click="$event => updateStatus(7, clientPurchases.id)">
                    Autorizar Troca
                  </button>
                </div>

                <div v-if="approved_replacement">
                  <button type="button" class="btn btn-warning m-1" v-bind:disabled="!(notReentryStock || reentryStock)" @click="$event => updateStatus(8, clientPurchases.id)">
                    Confirmar recebimento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card col-sm-4 p-4">
          <div>
            <label class="fs-5 ">Detalhe do pedido</label>
          </div>

          <div id="identityDetailResume">
            <div class="d-flex justify-content-between">
              <div>
                #{{ clientPurchases.id }}
              </div>

              <div>
                {{ formatDate(clientPurchases.dateOrder) }} 
              </div>
            </div>
          
            <div>
              <hr>
            </div>
          </div>

          <div id="productsAgregateDetailResume">
            <div class="d-flex justify-content-between p-2">
              <label class="fs-6">Produtos ({{ totalQuantity }})</label>
              <label class="form-text"> R$ {{ clientPurchases.totalValue }}</label>
            </div>

            <div>
              <hr>
            </div>
          </div>
          
          <div id="freightDetailResume" v-if="!orderIsReplacement">
            <div class="d-flex justify-content-between p-2">
              <label class="fs-6">Frete</label>
              <label class="form-text"> R$ 15.00</label>
            </div>

            <div>
              <hr>
            </div>
          </div>

          <div id="adressDetailResume" v-if="!orderIsReplacement">
            <div class="d-flex justify-content-between p-2">
              <label class="fs-6">Endereço</label>
              <label class="form-text">{{ identificationAddress }}</label>
            </div>

            <div class="d-flex justify-content-end p-2">
              <label class="form-text">
                {{ labelAdress }}
              </label>
            </div>

            <div>
              <hr>
            </div>
          </div>
          
          <div id="paymentDetailResume" v-if="!orderIsReplacement">
            <div>
              <label class="fs-6">Pagamento</label>
            </div>
            
            <div class="p-2">
              <div v-for="payment in clientPurchases.payments" v-bind:key="payment.id">
                <div class="d-flex justify-content-between p-2">
                  <div class="form-text">{{ this.getLabelCardWithNumber(payment) }}</div>
                  <div class="form-text">{{ this.getLabelValuePayment(payment)}}</div>
                </div>
              </div>
            </div>

            <div>
              <hr>
            </div>
          </div>

          <div id="totalOrder">
            <div class="d-flex justify-content-between p-2">
              <label class="fs-5 ">Total</label>
              <label class="form-text">R$ {{ clientPurchases.totalValue }}</label>
            </div>

            <div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container mt-3 mb-2">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Histórico da {{ labelTypeOrder }}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="card cardForm mt-1" v-for="history of historyOrderStatus" v-bind:key="history.id">
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          # {{ history.id }}
                          <label>{{ history.status }}</label>
                          <label>{{ formatDate(history.dateUpdate) }}</label>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
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
      let orderIsReplacement = false;
      let titleDescription = ''
      let orderIsAprrovedReplacement = false;
      let reentryStock = false;
      let notReentryStock = false;
      let statusIsNotChanged = false;
      
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
        historyOrderStatus,
        orderIsReplacement,
        titleDescription,
        orderIsAprrovedReplacement,
        reentryStock,
        notReentryStock,
        statusIsNotChanged
      };
    },
    methods: {
      loadingGetOrderById(orderId) {
        getPurchaseById(orderId)
        .then((result) => {
            this.clientPurchases = result;
            this.historyOrderStatus = this.getFieldsHistory(result.history);
            this.totalQuantity = result.items.reduce((aculumador, item) => aculumador + item.quantity, 0);
            this.identificationAddress = result.adress.identification;
            this.labelAdress = `${result.adress.street},  ${result.adress.number} -  ${result.adress.state} -  ${result.adress.city}`;
            
            this.labelStatusClass = this.getStatusClass(result.statusOrder)
            this.labelStatusDescription = this.getStatusDescription(result.statusOrder)
            this.orderIsReplacement = this.isOrderReplacement(result);
            this.labelTypeOrder = this.orderIsReplacement ? 'troca': 'compra';

            this.labelDescription = this.getLabelDescription(result.statusOrder)
            this.titleDescription = this.getTitleDescription(result.statusOrder)
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
        const data = {
          orderId,
          statusId,
          admId: 0
        };

        if (statusId === 8) {
          if (!this.reentryStock && !this.notReentryStock) {
            throw 'Error not field required this action';
          }

          if (this.reentryStock) {
            data.updateStock = true;
          }

          if (this.notReentryStock) {
            data.updateStock = false;
          }
        }

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

            this.orderIsAprrovedReplacement = true;
            return "Troca Aprovada"
          case 8:
            this.statusIsNotChanged = true;
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
                return "Quase lá. Estamos aguardando processo de embalagem para enviar seus produtos."
            case 3:
                return "Infelizmente não houve confirmação de pagamento da operadora do cartão."
            case 4:
                return "Quase lá. Seu produto já está a caminho."
            case 5:
                return "Show! Esperamos que seu produto tenha chegado em perfeito estado. Caso necessario pode trocar seu(s) produto(s)."
            case 6:
                return "Estamos avaliando o processo de troca, aguardando autorização."
            case 7:
                return "O processo de troca foi autorizado, agora é somente nos enviar os itens solicitados."
            case 8:
                return "Perfeito, troca concluida, foi gerado um cupom de troca na sua conta."
            default:
        }
      },
      getTitleDescription: function(statusOrderId) {
        switch (statusOrderId) {
            case 1:
                return "Aguardando confirmação do pagamento."
            case 2:
                return "Seus pagamentos foram autorizados - Falta Pouco."
            case 3:
                return "Todos os pagamentos foram extornados ou recusados."
            case 4:
                return "Em direção ao destinatário."
            case 5:
                return "Agora é so aproveitar seu novo produto."
            case 6:
                return "Houve algum problema? Não se preocupe iremos lhe ajudar."
            case 7:
                return "Será gerado um cupon no valor total deste pedido na sua conta, ao final do processo."
            case 8:
                return "Aproveite seu novo cupom e confira nosso catálogo."
            default:
        }
      },
      formatDate(dateForFormat) {
          const dateTime = new Date(dateForFormat);
          const day = dateTime.getDay() > 9 ? dateTime.getDay() : `0${dateTime.getDay()}`;
          const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
          const year = dateTime.getFullYear();
          const hours = dateTime.getHours();
          const minutes = dateTime.getMinutes() <= 9 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

          const date = `${day}/${mounth}/${year} - ${hours}:${minutes}`

          return date;
      },
      isOrderReplacement(order) {
        const isReplacement = order.statusOrder === 6
        const isAprovvedReplacement = order.statusOrder === 7
        const isOrderChanged = order.statusOrder === 8

        if (isReplacement || isAprovvedReplacement || isOrderChanged) {
          return true;
        }

        return false;
      },
      setReentryStockFalse() {
        this.reentryStock = false
      },
      setNotReentryStockFalse() {
        this.notReentryStock = false
      }
    }
  }
</script>
  
<style>
.circulo {
    background: khaki;
    /* border-radius: 25%; */
    width: 50px;
    height: 50px;
}

</style>