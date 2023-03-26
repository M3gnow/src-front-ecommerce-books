<template>
     <form class="container" v-on:submit.prevent="checkForm">
        <div id="divDetailData" class="card mt-3 p-2 cardForm p-4">
            <label class="form-label fs-3">Alterar dados pessoais</label>
            <div class="row mt-3">
                <div class="col-sm-12">
                <label for="basic-url" class="form-label">Nome</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="name" name="name" v-model="client.name" aria-describedby="basic-addon3">
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-4">
                    <label for="basic-url" class="form-label">CPF</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="cpf" name="cpf" v-model="client.cpf" aria-describedby="basic-addon3">
                    </div>
                </div>
                <div class="col-sm-4">
                    <label for="basic-url" class="form-label">Data de nascimento</label>
                    <div class="input-group">
                        <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth" v-model="client.dateOfBirth" aria-describedby="basic-addon3">
                    </div>
                </div>
                <div class="col-sm-4">
                    <label for="basic-url" class="form-label">Genero</label>
                    <div class="input-group">
                        <select class="form-select" id="gender" name="gender" v-model="client.gender">
                            <option disabled value="">Escolha...</option>
                            <option v-for="option in options.genders" :value="option.value">
                                {{ option.description }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div id="divContact" class="card mt-3 p-2 cardForm p-4">
            <label class="form-label fs-3">Alterar acesso e contato</label>
            <div class="row mt-3">
                <label for="basic-url" class="form-label">E-mail</label>
                <div class="col-sm">
                    <div class="input-group">
                        <input type="email" class="form-control" id="email" name="email" v-model="client.email" aria-describedby="basic-addon3">
                    </div>
                </div>    
            </div>

            <div class="row  mt-3" id="divContato">
                <label for="basic-url" class="form-label">Contato</label>
                <div class="col-sm-4">
                    <label for="basic-url" class="form-label">Tipo de telefone</label>
                    <div class="input-group">
                    <select class="form-select" id="typePhone" name="typePhone" v-model="client.typePhone">
                        <option disabled value="">Escolha...</option>
                        <option v-for="option in options.typesPhone" :value="option.id">
                        {{ option.description }}
                        </option>
                    </select>
                    </div>
                </div>
                <div class="col-sm-2">
                    <label for="basic-url" class="form-label">DDD</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="dddLocation" name="dddLocation" v-model="client.dddLocation" aria-describedby="basic-addon3">
                    </div>
                </div>
                <div class="col-sm-4">
                    <label for="basic-url" class="form-label">Numero</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" v-model="client.phoneNumber" aria-describedby="basic-addon3">
                    </div>
                </div>
            </div>
        </div>

        <div class="row d-flex justify-content-between p-3">
            <button class="btn btn-outline-warning">Finalizar</button>
        </div>
    </form>
</template>
<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { getClientById } from '../services/modules'
import { useRoute } from 'vue-router'

export default {
    name: "EditPersonalDataClientView",
    data: function() {
        const { params } = useRoute();

        let errors = [];
        const typesPhone = [{
                id: 0,
                description: 'Fixo'
            }, {
                id: 1,
                description: 'Celular'
            }];
        const genders = [{
                value: 'F',
                description: 'Femenino'
            }, {
                value: 'M',
                description: 'Masculino'
            }];
        const options = { typesPhone, genders }
        let client = {}
        
        getClientById(params.client_id)
            .then((result) => {
                this.client = this.modelDetailClient(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })

        return {
            client,
            options,
            errors
        }
    },
    methods: {
        modelDetailClient: function(client) {
            return {
                cpf: client.cpf,
                dateOfBirth: client.birth ? this.formatDate(client.birth): '',
                gender: client.gender,
                email: client.user.email,
                name: client.name,
                phoneNumber: client.phone.phoneNumber,
                dddLocation: client.phone.ddd,
                typePhone: client.phone.typePhone,
            }
        },
        checkForm: function() {
            this.errors = []

            if (!this.client.name || !this.client.cpf 
                || !this.client.dateOfBirth || !this.client.gender
            ) {
                this.errors.push({ message: 'Todos dados pessoais precisam ser preenchidos' })
            }

            if (!this.client.email || !this.client.typePhone 
                || !this.client.dddLocation || !this.client.phoneNumber) {
                this.errors.push({ message: 'Todos contatos e acessos precisam ser preenchidos' })
            }

            this.notify()
        },
        notify: function() {
            this.errors.map((element) => {
                toast(element.message, {
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.BOTTOM_CENTER, 
                })
            })
        },
        formatDate: function(date) {
            const dateOfBirth = new Date(date)
            let day = dateOfBirth.getDate();
            let month = dateOfBirth.getMonth() +1;
            const year = dateOfBirth.getFullYear();

            if (day < 10) {
                day = `0${day}`
            }

            if (month < 10) {
                month = `0${month}`
            }

            
            return [year, month, day].join('-');
        }
    },
}

</script>
<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

</style>