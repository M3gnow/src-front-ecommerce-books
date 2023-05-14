<template>
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
</template>

<script>
import CardsClientView from '@/views/CardsClientView.vue';
import ResumePurchaseComponent from './ResumePurchaseComponent.vue'
import { getClientStorage, AddCouponToCartStorage, getCartStorage } from '@/storage/module';
import { getValidationCoupon } from '@/services/modules'
export default {
    name: "PurchaseCoupon",
    components: {
        ResumePurchaseComponent
    },
    data: function () {
        let coupon;
        let coupons = [];
        const client = getClientStorage();
        const cart = getCartStorage();
        coupons = cart.coupons;
        return { coupon, coupons, client }
    },
    methods: {
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

        }
    }
}
</script>

<style></style>