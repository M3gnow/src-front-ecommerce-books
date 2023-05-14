<template>
    <div class="container d-flex mt-2">
        <div class="col-md-8 me-3">
            <div>
                <div>
                    <h5>Adicione cupons promocionais ou de troca</h5>
                </div>

                <div class="col-md-12">
                    <div class="card p-3">

                        <div>
                            <label for="basic-url" class="form-label"><b>Digite seu cupom</b></label>
                        </div>

                        <div class="d-flex justify-content-between mt-2">
                            <div class="col-md-6">
                                <div class="input-group inputSize">
                                    <input type="text" class="form-control inputColor" v-model="coupon"
                                        aria-describedby="basic-addon3">
                                </div>
                            </div>

                            <div class="col-md-3 mt-2">
                                <div class="btn btn-outline-primary" v-on:click="aplyCoupon()">
                                    Aplicar Cupom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mt-2">
                    <div class="card-header">
                        <div class="form-label">
                            Cupons Promocionais
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="card p-2 m-3" v-for="item in coupons">
                                {{ item.description }}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
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
                                            name="deliveryAdressNumberAddress" aria-describedby="basic-addon3"
                                            v-model="card.value" v-bind:disabled="!card.isChecked">
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


            <div class="col-md-12 d-flex justify-content-end mt-3">
                <Button v-on:click="setPaymentToCart()" class="me-3 btn btn-primary">

                    Continuar

                </Button>
            </div>
        </div>

        <div class="card cardResume col-md-4">
            <div class="card-title">
                <div class="ms-4 mt-5">
                    <label for=""><b>Resumo da compra</b></label>
                </div>
                <hr class="ms-4 me-4">

                <div class="ms-4 mt-5 d-flex justify-content-between me-4">
                    <div>
                        <label for="">Produtos ({{ cart.totalQuantity }})</label>
                    </div>
                    <div>
                        <label for="">R${{ cart.finalPrice }}</label>
                    </div>
                </div>
                <div>
                    <hr class="ms-4 me-4">
                    <div class="ms-4 mt-5 d-flex justify-content-between me-4">
                        <div>
                            <label class="fs-6">Endereço</label>
                        </div>
                        <div>
                            <label class="form-text"> {{ address.identification }}</label>

                        </div>
                    </div>
                </div>
                <hr class="ms-4 me-4">
                <div class="ms-4 mt-4 d-flex justify-content-between me-4">
                    <div>
                        <label for="">Total </label>
                    </div>
                    <div>
                        <label for="">R${{ cart.finalPrice }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import PurchaseCouponComponent from '../components/PurchaseCouponComponent.vue'
import { getAllCardsByClientId, getAddressById } from '@/services/modules'
import { getClientStorage, AddPaymentToCartStorage, getCartStorage } from '@/storage/module'
import router from '@/router'
export default {
    name: "PurchaseCardView",
    components: {
        ResumePurchaseComponent,
        PurchaseCouponComponent
    },
    data: function () {
        let client = getClientStorage();
        const cart = getCartStorage();

        let cards = [];
        let paymentComplete = false;
        let coupon;
        let coupons = [];
        let address = {};

        coupons = cart.coupons;
        getAddressById(cart.id_delivery_adress)
            .then((result) => {

                this.address = this.modelAddress(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllAddressByClientId', err)
            });


        getAllCardsByClientId(client.id)
            .then((result) => {
                this.cards = this.modelCreditCard(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientId', err)
            })



        return {
            componentKey: 0,
            cards,
            paymentComplete,
            coupon,
            coupons,
            client,
            cart,
            address
        }
    },
    methods: {
        modelAddress: function (result) {

            return {
                id: result.id,
                identification: result.identification,
                zipCode: result.zipCode,
                street: result.street,
                number: result.number,
                state: result.state,
                city: result.city,
                country: 'Brazil'
            }

        },
        aplyCoupon: function () {
            if (this.coupons.some(function (obj) {
                return obj.description == this.coupon;
            })) {
                return
            }
            getValidationCoupon(this.client.id, this.coupon)
                .then((result) => {
                    this.coupons.push(result);
                    AddCouponToCartStorage(result);
                })
                .catch((err) => {
                    console.log('Falha na consulta getAllCardsByClientId', err)
                })

        },
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
                    isChecked: false,
                    value: 0
                }
            });

            return result;
        },
        handleCheckboxChange(item) {
            if (item.isChecked) {
                AddPaymentToCartStorage(item)
            } else {

            }
        },
        setPaymentToCart() {
            this.$router.push('/purchase/verify');
        }
    }
}
</script>

<style>
.iconCard {
    font-size: 50px;
}
</style>