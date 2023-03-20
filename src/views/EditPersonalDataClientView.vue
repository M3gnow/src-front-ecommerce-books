<template>
    <div class="container">
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
                            <option v-for="option in options.genders" :value="option">
                                {{ option }}
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
                        <option v-for="option in options.typesPhone" :value="option">
                        {{ option }}
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
    </div>
</template>
<script>
import { getClientById } from '../services/modules'

export default {
    name: "EditPersonalDataClientView",
    data: function() {
        const typesPhone = ['Celular', 'Fixo'];
        const genders = [ 'Femenino', 'Masculino', 'Prefiro não informar'];
        const options = { typesPhone, genders }
        let client = {}
        
        getClientById(1)
            .then((result) => {
                this.client = this.modelDetailClient(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })

        return {
            client,
            options
        }
    },
    methods: {
        modelDetailClient: function(client) {
            return {
                cpf: client.cpf,
                dateOfBirth: client.birth || '2000-05-02',
                gender: client.gender === 'M' ? 'Masculino' : 'Femenino',
                email: client.user.email,
                name: client.name,
                phoneNumber: client.phone.phoneNumber,
                dddLocation: client.phone.ddd,
                typePhone: this.options.typesPhone[client.phone.typePhone],
            }
        }
    },
}

</script>
<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

</style>