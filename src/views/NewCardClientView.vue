<template>
    <form class="container" v-on:submit.prevent="checkForm">
        <div id="divCartoes" class="card mt-3 p-2 cardForm p-4">
            <label for="basic-url" class="form-label fs-3">Adicione seu cartão</label>

            <div class="row mt-3">
                <div class="col-sm-2">
                <label for="basic-url" class="form-label">Bandeira</label>
                <div class="input-group">
                    <select class="form-select" id="creditCardFlagCard" name="creditCardFlagCard" v-model="creditCard.flagCard">
                        <option disabled value="">Escolha...</option>
                        <option v-for="option in options.flags" :value="option.id">
                            {{ option.description }}
                        </option>
                    </select>
                </div>
                </div>
                <div class="col-sm-7">
                <label for="basic-url" class="form-label">Numero do cartão</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="numberCard" name="numberCard" v-model="creditCard.numberCard" aria-describedby="basic-addon3">
                </div>
                </div>
                <div class="col-sm-3">
                <label for="basic-url" class="form-label">Validade</label>
                <div class="input-group">
                    <input type="date" class="form-control" id="validityCard" name="validityCard" v-model="creditCard.validityCard" aria-describedby="basic-addon3">
                </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-9">
                <label for="basic-url" class="form-label">Nome</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="nameCard" name="nameCard" v-model="creditCard.nameCard" aria-describedby="basic-addon3">
                </div>
                </div>
                <div class="col-sm-3">
                <label for="basic-url" class="form-label">Codigo de segurança</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="codeSecurityCard" name="codeSecurityCard" v-model="creditCard.codeSecurityCard" aria-describedby="basic-addon3">
                </div>
                </div>
            </div>
            <br>
        </div>

        <div class="row d-flex justify-content-between p-3">
            <button class="btn btn-outline-warning">Salvar</button>
        </div>
    </form>
</template>
<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { getAllCardFlags, createCardByClientId } from '../services/modules'

export default {
    name: "NewCardClientView",
    data: function() {
        let errors = [];
        const flags = [];
        const options = { flags }
        let creditCard = {
            id: '',
            flagCard: '',
            numberCard: '',
            validityCard: '2028-02-02',
            nameCard: '',
            codeSecurityCard: '',
            isMainCard: ''
        }

        getAllCardFlags()
            .then((result) => {
                this.options.flags = result;
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardFlags', err)
            })


        return { creditCard, options, errors, client:{ id: 11 } }
    },
    methods: {
        checkForm: function() {
            this.errors = []

            if (!this.creditCard.flagCard || !this.creditCard.numberCard 
                || !this.creditCard.validityCard || !this.creditCard.nameCard 
                || !this.creditCard.codeSecurityCard
            ) {
                this.errors.push({ message: 'Resta informações pendentes do seu cartão' })
            }

            if (this.errors.length) {
                this.notify()
            } else {
                this.createToCard(this.client.id, this.creditCard)
                    .then((result) => {
                        console.log('sucess create')
                        //redirect page
                    })
                    .catch((err) => console.log('error create'))
            }
        },
        notify: function() {
            this.errors.map((element) => {
                toast(element.message, {
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.BOTTOM_CENTER, 
                })
            })
        },
        createToCard: function(clientId, card) {
            const data = this.modelCreateToCard(clientId, card)
            createCardByClientId(data)
                .then((result) => {
                    console.log('MEU NOBRE, CADASTREI');
                    alert('Sucesso cadastro de cartão')
                })
                .catch((err) => {
                    alert('Falha cadastro de cartão')
                    console.log('Falha na consulta getAllCardFlags', err)
                })
        },
        modelCreateToCard: function(clientId, card) {
            return {
                id_client: clientId,
                number: card.numberCard,
                name: card.nameCard,
                securityCode: card.codeSecurityCard,
                pricipal: false,
                expiration: card.validityCard,
                flag: {
                    id: card.flagCard,
                    description: ''
                }
            }
        }
    }
}
</script>
<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

</style>