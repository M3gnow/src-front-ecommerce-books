<template>

    <div class="container d-flex mt-2 mb-5">
        <div class="col-md-8 me-3">
            <CreateAddressDeliveryComponentVue />

            <div class="card p-3 mt-2">
                <div class="form-check d-flex">
                    <div class="p-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    </div>

                    <div class="p-3 me-5">
                        <h5>Salvar endereço de entrega</h5>
                    </div>
                </div>
            </div>

            <div class="col-md-12 d-flex justify-content-end mt-3">
                <router-link to="/purchase/payments"> 
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
import CreateAddressDeliveryComponentVue from '@/components/CreateAddressDeliveryComponent.vue'
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'

export default {
    name: "PurchaseCreateAddress",
    components: {
        CreateAddressDeliveryComponentVue,
        ResumePurchaseComponent
    }
}
</script>

<style>

</style>