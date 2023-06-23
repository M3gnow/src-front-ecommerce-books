<template>
    <div class="container card mt-3 p-4 cardForm">

        <div class="form-label fs-3">
            <div class="d-flex justify-content-between">
                <div>
                    Lista de Clientes    
                </div>

                <!-- <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-warning m-1">Compras</button>
                    <button type="button" class="btn btn-warning m-1">Trocas</button>
                </div> -->
            </div>
        </div>

        <table class="table table-hover table-dark mt-3">
            <thead>
                <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Gênero</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Data de Nascimento</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cliente in clientes" v-bind:key="cliente.id">
                    <td>{{ cliente.name }}</td>
                    <td>{{ cliente.gender === 'M' ? 'Homem' : 'Mulher' }}</td>
                    <td>{{ formatPhoneClient(cliente.phone)  }}</td>
                    <td>{{ formatDate(cliente.birth)  }}</td>
                    <td>{{ cliente.user.email  }}</td>
                    <td>
                        <RouterLink class="btn btn-danger" :to="{ path: `/adm/orders/{{ cliente.id }}` }">Inativar</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getAllClientes } from './../services/modules/clientService'
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
            const day = dateTime.getDay() > 9 ? dateTime.getDay() : `0${dateTime.getDay()}`;
            const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
            const year = dateTime.getFullYear();
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes() <= 9 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

            const date = `${day}/${mounth}/${year} - ${hours}:${minutes}`

            return date;
        },
        formatPhoneClient(phoneData) {
            return `(${phoneData.ddd}) ${phoneData.phoneNumber}`
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