<template>
    <div class="container card mt-3 p-4 cardForm">
        <div class="form-label fs-3">
            Meus cupons disponíveis
        </div>

         <div class="card mt-2">
            <div class="card-header cardHeader">
                <div class="form-label">
                    Cupons Promocionais
                </div>
            </div>
            <div class="card-body d-flex flex-wrap">
                <div v-for="promotion in coupons.promotions" v-bind:key="promotion.id">
                    <div class="card p-2 m-3">
                        {{ promotion.description }}
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-2">
            <div class="card-header cardHeader">
                <div class="form-label">
                    Cupons de Troca
                </div>
            </div>
            <div class="card-body d-flex flex-wrap">
                <div v-for="replacement in coupons.replacements" v-bind:key="replacement.id">
                    <div class="card p-2 m-3">
                        {{ replacement.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCouponClient } from '@/services/modules'
import { useRoute } from 'vue-router'

export default {
    name: 'SrcFrontEcommerceBooksCouponClientView',
    data() {
        const { params } = useRoute()
        const coupons = {
            promotions: [],
            replacements: []
        }

        return {
            coupons,
            params
        };
    },

    mounted() {
        this.getCounponsByClientId(this.params.client_id)
    },
    methods: {
        getCounponsByClientId(client_id) {
            getCouponClient(client_id)
                .then((result) => {
                    this.modelCounpons(result);
                })
                .catch((err) => {
                    console.log('Falha na consulta getAllCardsByClientId', err)
                })
        },
        modelCounpons(couponsData) {
            this.coupons.promotions = couponsData.filter((coupon) => coupon.typeCoupon === 1);
            this.coupons.replacements = couponsData.filter((coupon) => coupon.typeCoupon === 2);
        }
    },
};
</script>

<style>

.cardHeader {
    background-color: wheat !important;
}

.cardForm {
    background-color: lightgoldenrodyellow !important
}

</style>