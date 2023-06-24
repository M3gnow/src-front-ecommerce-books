<template>
    <div class="container card mt-3 p-4 cardForm">

        <div class="form-label fs-3">
            <div class="d-flex justify-content-between">
                <div>
                    Lista de Clientes    
                </div>
            </div>
        </div>

        <table class="table table-hover table-dark mt-3">
            <thead>
                <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Data de Nascimento</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Status</th>
                    <th class="text-center" scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cliente in clientes" v-bind:key="cliente.id">
                    <td>{{ cliente.name }}</td>
                    <td>{{ formatPhoneClient(cliente.phone)  }}</td>
                    <td>{{ formatDate(cliente.birth)  }}</td>
                    <td>{{ cliente.user.email  }}</td>
                    <td class="text-center">{{ cliente.active ? 'Ativo' : 'Inativo'  }}</td>
                    <td>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-outline-warning">
                                Detalhe
                            </button>
                            <button type="button" class="btn btn-outline-danger" @click="changeStatus(cliente.id)" :disabled="!cliente.active">
                                Inativar
                            </button>
                            <button type="button" class="btn btn-outline-success" @click="changeStatus(cliente.id)" :disabled="cliente.active">
                                Ativar
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getAllClientes, updateStatusClient } from './../services/modules/clientService'
export default {
    name: 'AdmListClientesView',
    data () {
        const orders = [];
        const clientes = [];

        return { orders, clientes }
    },
    methods: {
        formatDate(dateForFormat) {
            const dateTime = new Date(dateForFormat);
            const day = dateTime.getDate() > 9 ? dateTime.getDate() : `0${dateTime.getDay()}`;
            const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
            const year = dateTime.getFullYear();
        
            const date = `${day}/${mounth}/${year}`

            return date;
        },
        formatPhoneClient(phoneData) {
            return `(${phoneData.ddd}) ${phoneData.phoneNumber}`
        },
        changeStatus(clienteId) {
            updateStatusClient(clienteId)
                .then((data) => {
                    this.getAllClientsNextChangeStatus();
                }).catch((err) => {
                    console.log('error update status');
                })
        },
        getAllClientsNextChangeStatus() {
            getAllClientes()
                .then((result) => {
                    this.clientes = result; 
                }).catch(() => {

                })
        }  

    },
    mounted() {
        getAllClientes()
            .then((result) => {
                this.clientes = result; 
            }).catch(() => {

            })
    }
}
</script>
<style>

</style>