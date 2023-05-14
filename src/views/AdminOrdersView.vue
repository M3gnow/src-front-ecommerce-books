<template>
  <div class="container card mt-3 p-4 cardForm">

    <div class="form-label fs-3">
        <div class="d-flex justify-content-between">
            <div>
                Lista de Pedidos    
            </div>

            <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-warning m-1" @click="getOnlyPurchases">Compras</button>
                <button type="button" class="btn btn-warning m-1" @click="getOnlyReplacement">Trocas</button>
            </div>
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
                    <RouterLink class="btn btn-outline-warning" :to="{ path: `/adm/orders/${ order.id }` }">Detalhes</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
    
  </div>
</template>

<script>
import { getOrders } from '../services/modules'

export default {
    
    data: function() {
        let orders = [];
        let allOrders = [];

        getOrders()
            .then((data) =>{
                console.log('data, wo', data)
                this.orders = this.formatOrderFromTable(data)
                this.allOrders = this.formatOrderFromTable(data)
                console.log('data,', this.orders)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })

        

        return { orders, allOrders }
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
                    type: order.type
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
        },
        getOnlyPurchases() {
            console.log('purchase');
            this.orders = this.allOrders.filter((order) => order.type === 2)
        },
        getOnlyReplacement() {
            console.log('replacement');
            this.orders = this.allOrders.filter((order)=> order.type === 1)
        }
    }
}
</script>

<style>

</style>