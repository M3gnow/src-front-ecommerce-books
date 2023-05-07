<template>
    <div class="container d-flex mt-2">
        <div class="col-md-8 me-3">
            <div>
                <h5>Como você prefere pagar?</h5>
            </div>

            <div class="card mt-4" v-for="card in cards">
                <div class="p-4 col-md-12">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <div class="p-4">
                                <input class="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1"
                                    v-model="card.isChecked" @change="handleCheckboxChange(card)" aria-label="...">
                            </div>

                            <div class="ms-3">
                                <i class="bi bi-credit-card iconCard"></i>
                            </div>

                            <div class="d-flex flexwrap row ms-5">
                                <label for="">{{ card.flag }}</label>
                                <label for="">Final {{ card.number }}</label>
                                
                            </div>

                            <div>
                                <div class="d-flex flexwrap row ms-5">
                                    <label for="basic-url" class="form-label">Valor pago nesse cartão: </label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="deliveryAdressNumberAddress"
                                            name="deliveryAdressNumberAddress"
                                            aria-describedby="basic-addon3" v-bind:disabled="!card.isChecked">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-12 d-flex justify-content-end mt-3">
                <router-link to="/purchase/card">
                    <div class="btn btn-light">
                        Adicionar cartão
                    </div>
                </router-link>
            </div>

            <PurchaseCouponComponent />
        </div>

        <ResumePurchaseComponent :key="componentKey" />
    </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import PurchaseCouponComponent from '../components/PurchaseCouponComponent.vue'
import { getAllCardsByClientId } from '@/services/modules'
import { getClientStorage } from '@/storage/module'
import { AddCouponToCartStorage } from '@/storage/module'
export default {
    name: "PurchaseCardView",
    components: {
        ResumePurchaseComponent,
        PurchaseCouponComponent
    },
    data: function () {
        let client = getClientStorage();
        let cards = [];
        getAllCardsByClientId(client.id)
            .then((result) => {
                this.cards = this.modelCreditCard(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })
        return {
            componentKey: 0,
            cards
        }
    },
    methods: {
        forceRerenderCart: function () {
            console.log('passou');
            this.componentKey += 1;
        },
        modelCreditCard: function (allCards) {
            const result = allCards.map((card) => {
                return {
                    id: card.id,
                    flag: card.flag.description,
                    number: card.number.slice(card.number.length - 4),
                    validity: '15/02',
                    name: card.name,
                    principal: card.principal,
                    isChecked: false
                }
            });

            return result;
        },
        handleCheckboxChange(item) {
            if (item.isChecked) {
                console.log(`${item.number} is checked.`);
            } else {
                console.log(`${item.number} is unchecked.`);
            }
        }
    }
}
</script>

<style>
.iconCard {
    font-size: 50px;
}
</style>