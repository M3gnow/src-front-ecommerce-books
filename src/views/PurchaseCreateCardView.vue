<template>
    <div class="container d-flex mt-2 mb-5">
        <div class="col-md-8 me-3">
            <CreateCreditCardComponent />
            <div class="card p-3 mt-2">
                <div class="form-check d-flex">
                    <div class="p-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    </div>

                    <div class="p-3 me-5">
                        <h5>Salvar cartão de crédito</h5>
                    </div>
                </div>
            </div>

            <div class="col-md-12 d-flex justify-content-end mt-3">
                <router-link to="/purchase/verify"> 
                    <div class="btn btn-primary">
                        Continuar
                    </div>
                </router-link>
            </div>
        </div>
        
        <ResumePurchaseComponent />
    </div>


</template>

<script>

import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import CreateCreditCardComponent from '../components/CreateCreditCardComponent.vue'

export default {
    name: "PurchaseCreateCardView",
    components: {
        CreateCreditCardComponent,
        ResumePurchaseComponent
    }
}
</script>

<style>

</style>