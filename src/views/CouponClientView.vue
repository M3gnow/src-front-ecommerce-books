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
            <div class="card-body d-flex">
                <div v-for="promotion in coupons.promotions">
                    <div class="card p-2 m-3">
                        {{ promotion }}
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
            <div class="card-body d-flex">
                <div v-for="replacement in coupons.replacements">
                    <div class="card p-2 m-3">
                        {{ replacement }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SrcFrontEcommerceBooksCouponClientView',

    data() {
        const coupons = {
            promotions: ['PROMOCIONAL10', 'PROMOCIONAL30', 'PROMOCIONAL10', 'PROMOCIONAL30'],
            replacements: ['TROCA10', 'TROCA30']
        }

        return {
            coupons
        };
    },

    mounted() {
        
    },

    methods: {
        
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