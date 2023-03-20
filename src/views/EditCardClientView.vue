<template>
    <div class="container">
        <div id="divCartoes" class="card mt-3 p-2 cardForm p-4">
            <label for="basic-url" class="form-label fs-3">Editar seu cartão</label>

            <div class="row mt-3">
                <div class="col-sm-2">
                <label for="basic-url" class="form-label">Bandeira</label>
                <div class="input-group">
                    <select class="form-select" id="creditCardFlagCard" name="creditCardFlagCard" v-model="creditCard.flagCard">
                    <option disabled value="">Escolha...</option>
                    <option v-for="option in options.flags" :value="option">
                        {{ option }}
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
            <router-link to="/" type="button" class="btn btn-outline-warning">Salvar</router-link>
        </div>
    </div>
</template>
<script>
import { getCardById, getAllCardFlags } from '../services/modules'

export default {
    name: "EditCardClientView",
    data: function() {
        const flags = [];
        const options = { flags }
        let creditCard = { }

        getCardById(1)
            .then(async (result) => {
                await this.loadFlags();

                this.creditCard = this.modelDetailCard(result);
            })
            .catch((err) => {
                console.log('Falha na consulta getCardById', err)
            })


        return { creditCard, options }
    },
    methods: {
        modelDetailCard: function(card) {
            return {
                id: card.id,
                flagCard: card.flag.description,
                numberCard: card.number,
                validityCard: '2028-02-02',
                nameCard: card.name,
                codeSecurityCard: card.securityCode,
                isMainCard: card.principal
            }
        },
        loadFlags: function() {
            getAllCardFlags()
                .then((result) => {
                    this.options.flags = result;
                })
                .catch((err) => {
                    console.log('Falha na consulta getAllCardFlags', err)
                })
        }
            
    }
}
</script>
<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

</style>