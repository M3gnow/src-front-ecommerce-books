<template>
    <div class="container">
        <br>
        <div class="form-label fs-3">
            Compras
        </div>
        <div v-for="purchase in clientPurchases">
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
                            <p class="fs-6">Estamos aguardando a confirmação de pagamento da operadora do cartão.</p>
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
        console.log("params",params)
        getClientPurchases(params.client_id)
            .then((result) => {
                const filter = result;
                console.log("result", result)
                this.clientPurchases = this.modelPurchases(filter)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllAddressByClientId', err)
            })


        return {
            clientPurchases,
            params
        }
    },
    methods: {
        modelPurchases: function (allPurchases) {
            const result = allPurchases.map((purchase) => {
                switch (purchase.statusOrder) {
                    case 1:
                        purchase.statusClass = " text-warning"
                        purchase.statusDescription = "Em processamento"
                        break;
                    case 2:
                        purchase.statusClass = "text-success"
                        purchase.statusDescription = "Pagamento aprovado"
                        break;
                    case 3:
                        purchase.statusClass = "text-danger"
                        purchase.statusDescription = "Pagamento reprovado"
                        break;
                    case 4:
                        purchase.statusClass = " text-warning"
                        purchase.statusDescription = "Em transporte"
                        break;
                    case 5:
                        purchase.statusClass = "text-success"
                        purchase.statusDescription = "Entregue"
                        break;
                    case 6:
                        purchase.statusClass = "text-warning"
                        purchase.statusDescription = "Em Troca"
                        break;
                    case 7:
                        purchase.statusClass = "text-success"
                        purchase.statusDescription = "Troca aprovada"
                        break;
                    case 8:
                        purchase.statusClass = "text-success"
                        purchase.statusDescription = "Trocado"
                        break;
                    default:

                }
                return {
                    id: purchase.id,
                    status: purchase.status,
                    statusDescription: purchase.statusDescription,
                    date: purchase.dateOrder,
                    statusClass: purchase.statusClass
                }
            })

            return result;
        }
    }
}

</script>