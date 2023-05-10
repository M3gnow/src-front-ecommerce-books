<template>
  <div class="container">
    <div class="mt-5">
        <h2>Lista de Pedidos</h2>
    </div>

    <div class="d-flex justify-content-end">
        <div class="d-flex justify-content-around col-md-6">
            <button type="button" class="btn btn-warning">Compras</button>
            <button type="button" class="btn btn-warning">Trocas</button>
        </div>
    </div>

    <table class="table table-hover table-dark mt-3">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Cliente</th>
            <th scope="col">Status</th>
            <th scope="col">Data</th>
            <th scope="col">Total</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" v-bind:key="order.id">
                <th scope="row">{{ order.id }}</th>
                <td>{{ order.clientName }}</td>
                <td v-bind:class="order.labelStatusClass">{{ order.labelStatusDescription }}</td>
                <td>{{ order.date  }}</td>
                <td>{{ order.total  }}</td>
                <td>
                    <button type="button" class="btn btn-warning">Detalhes</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>


<!-- <label class="fs-4 text-center" v-bind:class="labelStatusClass">{{ labelStatusDescription }} -->
<script>
import { getOrders } from '../services/modules'

export default {
    
    data: function() {
        let orders = [];

        getOrders()
            .then((data) =>{
                this.orders = this.formatOrderFromTable(data)
                console.log('data,', this.orders)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })

        

        return { orders }
    },
    methods: {
        formatOrderFromTable(ordersData) {
            return ordersData.map((order) => {

                return { 
                    id: order.id || 0,
                    date: order.dateOrder || '',
                    total: order.totalValue || '',
                    clientName: order.client.name || '',
                    labelStatusClass: this.getStatusClass(order.statusOrder),
                    labelStatusDescription: this.getStatusDescription(order.statusOrder),
                }
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
                    return " text-warning"
                case 5:
                    return "text-success"
                default:
            }
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
                default:
            }
        }
    }
}
</script>

<style>

</style>