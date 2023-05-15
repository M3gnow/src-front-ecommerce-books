<template>
    <div class="container">
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

        <div class="col-md-12 d-flex justify-content-end mt-3">
                <button v-on:click="createCard(creditCard)">
                    <div class="btn btn-primary">
                        Salvar
                    </div>
                </button>
            </div>
    </div>
</template>

<script>

import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import CreateCreditCardComponent from '../components/CreateCreditCardComponent.vue'
import { getAllCardFlags, createCardByClientId } from '../services/modules'
import { getClientStorage } from '@/storage/module';
import { useRouter } from 'vue-router';
export default {
    name: "PurchaseCreateCardView",
    components: {
        CreateCreditCardComponent,
        ResumePurchaseComponent
    },
    data: function() {
        

        let errors = [];
        const flags = [];
        const options = { flags }
        let creditCard = {
            id: '',
            flagCard: '',
            numberCard: '',
            validityCard: '',
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
            const router = useRouter();

        return { creditCard, options, errors, router}
    },
    methods:{
        createCard: function(card){
            const clientId = getClientStorage().id;
            const data = this.modelCreateToCard(clientId, card)
            createCardByClientId(data)
                .then((result) => {
                    alert('Sucesso cadastro de cartão');
                    
                    this.router.push('/purchase/payments');
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
                principal: false,
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

</style>