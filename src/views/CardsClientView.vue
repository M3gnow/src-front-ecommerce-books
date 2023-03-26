<template>
    <div class="container card mt-3 p-4 cardForm">
        <div class="form-label fs-3">
            Cartões
        </div>

        <div class="card mt-3" v-for="card of cards">
            <div class="card-header cardHeader">
                <div class="row">
                    <div class="form-label col-sm-4">
                        Terminando em {{ card.numberCard }}
                    </div>
                    <div class="form-switch form-check-reverse col-sm-7">
                        <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckReverse" v-model="card.isMainCard">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Principal</label>
                    </div>
                </div>
            </div>
            <div class="card-body cardBody">
                <div class="row">
                    <div class="col-sm-9">
                        <div class="form-label">
                            {{ card.flagCard }}
                        </div>
                        <div class="form-text">
                            Vencimento em {{ card.validityCard }}
                        </div>
                    </div>
                    <div class="col-sm-1 p-2">
                        <RouterLink class="btn btn-outline-warning" :to="{ path: `/client/${ params.client_id }/cards/${ card.id }` }">Editar</RouterLink>
                    </div>

                    <div class="col-sm-1 p-2">
                        <RouterLink to="/cliente/cartoes/editar" class="btn btn-outline-warning">Excluir</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="row d-flex justify-content-between p-3">
            <router-link to="/client/cards/new" type="button" class="btn btn-warning">Adicionar Cartão</router-link>
        </div>
    </div>
</template>
<script>
import { getAllCardsByClientId } from '../services/modules'
import { useRoute } from 'vue-router'

export default {
    name: "CardsClientView",
    data: function() {
        const { params } = useRoute();
        let cards = [];

        getAllCardsByClientId(params.client_id)
            .then((result) => {
                this.cards = this.modelCreditCard(result);
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })

        return {
            cards,
            params
        }
    },
    methods: {
        modelCreditCard: function(allCards) {
            const result = allCards.map((card) => {
                return {
                    id: card.id,
                    flagCard: card.flag.description,
                    numberCard: card.number.slice(card.number.length - 4),
                    validityCard: '15/02',
                    nameCard: card.name,
                    codeSecurityCard: card.securityCode,
                    isMainCard: card.pricipal
                }
            });

            return result;
        }
    }
}
</script>

<style>

.cardHeader {
    background-color: wheat !important;
}

.cardForm {
    background-color: lightgoldenrodyellow !important
}
</style>