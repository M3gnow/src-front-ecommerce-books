<template>
    <div class="container">
        <br>
        <div class="form-label fs-3">
            Compras
        </div>
        <div v-for="purchase in clientPurchases" v-bind:key="purchase.id">
            <div class="card">
                <div class="card-header">
                    {{ purchase.date }}
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-1">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../assets/img/livro1.jpeg" class="d-block w-100 h-100"
                                            style="width: 100px; height: 200px;" alt="...">
                                    </div>

                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <label class="fs-5 text-center" v-bind:class="[purchase.statusClass]">{{ purchase.statusDescription }}</label>
                            <p class="fs-6">{{ purchase.labelDescription }}</p>
                        </div>
                        <div class="col-sm-2">
                            <RouterLink class="btn btn-outline-warning" :to="{ path: `/client/${ params.client_id }/purchases/${ purchase.id }` }" >Ver detalhes</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>
<script>
import { getClientPurchases } from '../services/modules'
import { useRoute } from 'vue-router'
export default {
    name: "PurchasesView",

    data: function () {
        let clientPurchases = []
        const { params } = useRoute()

        getClientPurchases(params.client_id)
            .then((result) => {
                const filter = result;
                this.clientPurchases = this.modelPurchases(filter)
            })
            .catch((err) => {
                console.log('Falha na consulta getClientPurchases', err)
            })


        return {
            clientPurchases,
            params
        }
    },
    methods: {
        modelPurchases: function (allPurchases) {
            const result = allPurchases.map((purchase) => {
                return {
                    id: purchase.id,
                    status: purchase.status,
                    statusDescription: this.getStatusDescription(purchase.statusOrder),
                    date: purchase.dateOrder,
                    statusClass: this.getStatusClass(purchase.statusOrder),
                    labelDescription: this.getLabelDescription(purchase.statusOrder)
                }
            })

            return result;
        },
        getStatusDescription: function(statusOrderId) {
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
                    return "Troca Aprovada"
                case 8:
                    return "Trocado"
                default:
        }
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