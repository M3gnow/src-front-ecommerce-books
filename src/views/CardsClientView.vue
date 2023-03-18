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
                    <div class="col-sm-11">
                        <div class="form-label">
                            {{ card.flagCard }}
                        </div>
                        <div class="form-text">
                            Vencimento em {{ card.validityCard }}
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <RouterLink class="btn btn-outline-warning" to="/cliente/cartoes/editar">Editar</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardsClientView",
    data: function() {
        let cards = [{
            flagCard: 'Visa',
            numberCard: '1236 6546 9871 1345',
            validityCard: '11/30',
            nameCard: '-',
            codeSecurityCard: '-',
            isMainCard: true
        },
        {
            flagCard: 'Elo',
            numberCard: '1236 6546 9871 3131',
            validityCard: '12/02',
            nameCard: '-',
            codeSecurityCard: '-',
            isMainCard: false
        },
        {
            flagCard: 'Mastercard',
            numberCard: '1236 6546 9871 1702',
            validityCard: '02/28',
            nameCard: '-',
            codeSecurityCard: '-',
            isMainCard: false
        }];

        cards = cards.map((card) => {
            card.numberCard = card.numberCard.slice(card.numberCard.length - 4)

            return card
        })
        
        return {
            cards
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