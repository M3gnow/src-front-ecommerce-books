<template>
    <form class="container" v-on:submit.prevent="checkForm">
        <div id="divCartoes" class="card mt-3 cardForm">
            <div class="card-header cardHeader">
                <div class="row p-4">
                    <h3 class="col-sm-9">Editar seu cartão</h3>

                    <div class="form-switch form-check-reverse col-sm-2 mt-2" v-if="options.editEnabled">
                        <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckReverse" v-model="creditCard.isMainCard">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Tornar principal</label>
                    </div>
                </div>
            </div>

            <div class="card-body cardBody">
                <div class="row mt-3">
                    <div class="col-sm-2">
                    <label for="basic-url" class="form-label">Bandeira</label>
                    <div class="input-group">
                        <select class="form-select" id="creditCardFlagCard" name="creditCardFlagCard" v-model="creditCard.flagCard">
                            <option disabled value="">Escolha...</option>
                            <option v-for="option in options.flags" :value="option.id" v-bind:key="option.id">
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
            </div>
        </div>

        <div class="row d-flex justify-content-between p-3">
            <button class="btn btn-outline-warning">Salvar</button>
        </div>
    </form>
</template>
<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { getCardById, getAllCardFlags, changeCardById } from '../services/modules'
import { useRoute } from 'vue-router'

export default {
    name: "EditCardClientView",
    data: function() {        
        const { params } = useRoute();
        let errors = [];
        const flags = [];
        let editEnabled = true;
        const options = { flags, editEnabled }
        let creditCard = { }

        getCardById(params.card_id)
            .then(async (result) => {
                await this.loadFlags();

                if (result.principal) {
                    editEnabled = false;
                }

                this.creditCard = this.modelDetailCard(result);
            })
            .catch((err) => {
                console.log('Falha na consulta getCardById', err)
            })


        return { creditCard, options, errors }
    },
    methods: {
        modelDetailCard: function(card) {
            let modelPreviewCard = {
                id: card.id,
                flagCard: card.flag.id,
                numberCard: card.number,
                validityCard: this.formatDate(card.expiration),
                nameCard: card.name,
                codeSecurityCard: card.securityCode,
                isMainCard: card.principal
            }

            return modelPreviewCard

        },
        loadFlags: function() {
            getAllCardFlags()
                .then((result) => {
                    this.options.flags = result;
                })
                .catch((err) => {
                    console.log('Falha na consulta getAllCardFlags', err)
                })
        },
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
                //pending redirect page
                this.changeCard(this.creditCard)
					.then((result) => console.log('sucess update'))
                    .catch((err) => console.log('error update'))
            }
        },
        changeCard: function(card) {
            const data = this.modelChangeCard(card)
            changeCardById(data)
                .then(() => {
                    alert('Sucesso alteracao de cartao')
                })
                .catch((err) => {
                    alert('Falha alteracao de cartao')
                    console.log('Falha no cadastro changeCardById', err)
                })
        },
        modelChangeCard: function(card) {
            return {
                id: card.id,
                number: card.numberCard,
                name: card.nameCard,
                securityCode: card.codeSecurityCard,
                principal: card.isMainCard,
                flag: {
                    id: card.flagCard,
                    description: ''
                },
                expiration: card.validityCard
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
    }
}
</script>
<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

.cardHeader {
    background-color: wheat !important;
}

</style>