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
export default {
    name: "EditCardClientView",
    data: function() {
        const flags = ['MasterCard', 'Visa', 'Elo'];
        const options = { flags }
        const creditCard = {
            flagCard: 'MasterCard',
            numberCard: '1236 6546 9871 1702',
            validityCard: '2028-02-02',
            nameCard: 'THIAGO HENRIQUE DE ARAUJO',
            codeSecurityCard: '009',
            isMainCard: false
        }

        return { creditCard, options }
    }
}
</script>
<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

</style>