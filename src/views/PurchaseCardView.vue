<template>
    <div class="container mt-3">
        <div class="card p-3 col-md-12">
            <h5>Forma de Pagamento</h5>
        </div>

        <div class="d-flex justify-content-between mt-3">
            <div class="col-md-8 pe-2">
                <div class="col-md-12">
                    <div class="card p-4">
                        <div>
                            <h5>Digite um cupom promocionais ou de troca</h5>
                        </div>

                        <div class="d-flex justify-content-between mt-2">
                            <div class="col-md-6">
                                <div class="input-group inputSize">
                                    <input type="text" class="form-control inputColor" v-model="coupon" aria-describedby="basic-addon3">
                                </div>
                            </div>

                            <div class="col-md-3 mt-2">
                                <div class="btn btn-outline-primary" @click="$event => aplyCoupon()">
                                    Aplicar Cupom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card p-3 mt-3">
                    <h5>Como você prefere pagar?</h5>
                </div>

                <div class="card mt-3" v-for="card in cards" v-bind:key="card.id">
                    <div class="p-4 col-md-12">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="p-4">
                                <input class="form-check-input" type="checkbox" v-model="card.isChecked">
                            </div>

                            <div class="ms-3">
                                <i class="bi bi-credit-card iconCard"></i>
                            </div>

                            <div class="d-flex flexwrap ms-5">
                                <label for="">{{ card.flag }}</label>
                                <label for="">Final {{ card.number }}</label>
                            </div>

                            <div>
                                <div class="d-flex ms-5">
                                    <label for="basic-url" class="form-label me-3">Valor à pagar neste cartão</label>
                                    <div class="input-group">
                                        <input class="text-center" type="number" v-model="card.value" v-bind:disabled="!card.isChecked">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card col-md-4">
                <div class="card-title">
                    <div class="ms-4 mt-5">
                        <label for=""><b>Resumo da compra</b></label>
                    </div>
                    <hr class="ms-4 me-4">
                </div>
                <div class="card-body">
                    <div>
                        <div>
                            <div class="ms-4 d-flex justify-content-between me-4">
                                <div>
                                    <label for="">Produtos ({{ cart.totalQuantity }})</label>
                                </div>
                                <div>
                                    <label for="">R${{ cart.finalPrice }}</label>
                                </div>
                            </div>

                            <hr class="ms-4 me-4">
                        </div>

                        <div>
                            <div class="ms-4 d-flex justify-content-between me-4">
                                <div>
                                    <label class="fs-6">
                                        <b>
                                            Endereço
                                        </b>
                                    </label>
                                </div>
                                <div>
                                    <label class="form-text">
                                        <b>{{ address.identification }}</b>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div class="ms-4 mt-1 d-flex justify-content-between me-4">
                                    <label class="form-text"> {{ address.street }}</label>
                                
                                    <label class="form-text">N° {{ address.number }}</label>
                                </div>
                            </div>

                            <div>
                                <div class="ms-4 mt-1 d-flex justify-content-between me-4">
                                    <label class="form-text"> {{ address.city }} - {{ address.state }}</label>
                                    <label class="form-text">CEP {{ address.zipCode }}</label>
                                </div>
                            </div>

                            <div class="ms-4 mt-2 d-flex justify-content-between me-4">
                                <div>
                                    <label for="">
                                        <b>
                                            Frete
                                        </b>
                                    </label>
                                </div>
                                <div>
                                    <label class="form-text text-warning"> R$ {{ 25 }}</label>
                                </div>
                            </div>

                            <hr class="ms-4 me-4">
                        </div>

                        <div v-if="coupons.length">
                            <div class="ms-4 d-flex justify-content-between me-4">
                                <div>
                                    <label class="fs-6">Cupons aplicados</label>
                                </div>
                            </div>

                            <div class="ms-4 mt-4 d-flex justify-content-between me-4" v-for="item in coupons" v-bind:key="item.id">
                                <div>
                                    <label class="text-danger" for="">{{ item.description }}</label>
                                </div>
                                <div>
                                    <label class="text-danger" for="">R$ {{ item.value }}</label>
                                </div>
                            </div>
                            

                            <hr class="ms-4 me-4">
                        </div>
                    </div>
                    
                    <div class="ms-4 mt-4 d-flex justify-content-between me-4">
                        <div>
                            <label class="text-success" for=""><b>Total</b></label>
                        </div>
                        <div>
                            <label class="text-success" for=""><b>R${{ parseFloat(finalPrice).toFixed(2) }}</b></label>
                        </div>
                    </div>

                    <div class="mt-5 ms-4 mt-4" v-if="finalPrice <= 0">
                        <div>
                            <label class="text-success" for=""><b>Fique tranquilo</b></label>
                        </div>
                        
                        <div class="d-flex jusitfy-content-between">
                            <div>
                                <label class="text-success" for="">Será gerado um cupom com o valor restante</label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between mt-4 me-4">
                            <div>
                                <label class="text-success" for="">Novo Cupom</label>
                            </div>

                            <div>
                                <label class="text-success" for="">TROCA{{ parseInt((finalPrice * -1)) }}</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container d-flex justify-content-end mt-2" >
        <h6 v-bind:class="labelStatusClass">{{  labelCheckPayment }}</h6>
    </div>

    <div class="container d-flex justify-content-between mt-3 mb-2">
        <div class="mt-2">
            <router-link to="/purchase/card">
                <div class="btn btn-light">
                    Adicionar cartão
                </div>
            </router-link>
        </div>

        <div class="mt-2">
            <button v-on:click="setPaymentToCart()" class="btn btn-primary">
                Continuar
            </button>
        </div>
    </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import PurchaseCouponComponent from '../components/PurchaseCouponComponent.vue'
import { getAllCardsByClientId, getAddressById, getValidationCoupon, getCardById } from '@/services/modules'
import { getClientStorage, AddPaymentsToCartStorage, getCartStorage, AddCouponToCartStorage } from '@/storage/module'
import { useRoute } from 'vue-router'
  
export default {
    name: "PurchaseCardView",
    components: {
        ResumePurchaseComponent,
        PurchaseCouponComponent
    },
    data: function () {
        const { params, query } = useRoute()
        let client = getClientStorage();
        const cart = getCartStorage();
        let promotionalUsed = false;
        let cards = [];
        let paymentComplete = false;
        let coupon = '';
        let coupons = [];
        let address = {};
        let finalPrice = 0;
        let discount = 0;
        let minValuePaymentInCreditCard = 10;
        const labelCheckPayment = "Os valores preenchidos são validos";
        const labelStatusClass = "text-success"

        coupons = cart.coupons;
        finalPrice = cart.finalPrice
        discount = cart.coupons.reduce((acumulated, current) => acumulated + current.value, 0)
        finalPrice += 25;
        finalPrice -= discount;

        getAddressById(cart.id_delivery_adress)
            .then((result) => {
                this.address = this.modelAddress(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAddressById', err)
            });


        getAllCardsByClientId(client.id)
            .then((result) => {
                if (query.temporary_card) {
                    getCardById(this.query.temporary_card)
                        .then((resultTemporaryCard) => {
                            result.push(resultTemporaryCard)

                            this.cards = this.modelCreditCard(result)
                        })
                        .catch((err) => {
                            console.log('Falha na consulta getAllCardsByClientId', err)
                        })
                        
                } else {
                    this.cards = this.modelCreditCard(result)
                }
            })
            .catch((err) => {
                console.log('Falha na consulta getAllCardsByClientIdMegnow', err)
            })

        return {
            componentKey: 0,
            cards,
            paymentComplete,
            coupon,
            coupons,
            client,
            cart,
            address,
            finalPrice,
            minValuePaymentInCreditCard,
            labelCheckPayment,
            labelStatusClass,
            promotionalUsed,
            params,
            query
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
            const existCouponInList = this.coupons.filter((coupon => coupon.description === this.coupon))

            if (!existCouponInList.length) {
                getValidationCoupon(this.client.id, this.coupon)
                    .then((result) => {
                        if(result.typeCoupon == 2 || (result.typeCoupon == 1 && !this.promotionalUsed) )
                        {
                            this.coupons.push(result);
                            AddCouponToCartStorage(result);
                            this.promotionalUsed = result.typeCoupon == 1;
                            this.finalPrice -= result.value
                            this.minValuePaymentInCreditCard = 0;

                            this.cards = this.cards.map((card) => {
                                if (this.finalPrice <= 0) {
                                    card.value = 0;
                                } else {
                                    if (card.isChecked) {
                                        card.value -= result.value;
                                        card.value = parseFloat(card.value).toFixed(2)
                                    }
                                }
                                return card;
                            })
                        }else{
                            alert("Não é possivel utilizar mais de um cupom promocional.");
                        }
                    })
                    .catch((err) => {
                        console.log('Falha na consulta getValidationCoupon', err)
                    })
            } else {
                this.coupon = '';
            }
        },
        modelCreditCard: function (allCards) {
            const result = allCards.map((card) => {
                let item = {};

                item = {
                    id: card.id,
                    flag: card.flag.description,
                    number: card.number.slice(card.number.length - 4),
                    validity: '15/02',
                    name: card.name,
                    principal: card.principal,
                    isChecked: true,
                    value: this.finalPrice > 0 ? parseFloat(this.finalPrice).toFixed(2) : 0,
                }

                if (!item.principal) {
                    item.isChecked = false;
                    item.value = 0;
                }

                return item
            });

            return result;
        },
        setPaymentToCart() {
            const cardsForPayments = [];

            if (this.validateCardForPayment()) {
                this.labelCheckPayment = 'Os valores preenchidos são validos';
                this.labelStatusClass = 'text-success';

                this.cards.forEach((card) => {
                    if (card.id && card.isChecked){
                        cardsForPayments.push(card);
                    }
                });

                const totalPayment = cardsForPayments.reduce((acumulated, current) => acumulated + current.value, 0);

                if (parseFloat(totalPayment).toFixed(2) === parseFloat(this.finalPrice).toFixed(2)) {
                    AddPaymentsToCartStorage(cardsForPayments)
                }

                this.$router.push('/purchase/verify');
                return;
            }
            this.labelCheckPayment = 'Os valores preenchidos são inferiores ao Total';
            this.labelStatusClass = 'text-danger';
        },
        validateCardForPayment() {
            const totalPaymentInCreditCard = this.cards
                .filter((card) => card.isChecked)
                .reduce((acumulated, current) => parseFloat(acumulated)+ parseFloat(current.value), 0);

            if (parseFloat(totalPaymentInCreditCard).toFixed(2) < parseFloat(this.finalPrice).toFixed(2)) {
                return false;
            }

            return true;
        }

    }
}
</script>

<style>
.iconCard {
    font-size: 50px;
}
</style>