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
                            <input type="text" class="form-control inputColor" value="Ex: TROCA10" disabled="true" aria-describedby="basic-addon3">
                        </div>
                    </div>

                    <div class="col-md-3 mt-2">
                        <div class="btn btn-outline-primary">
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
                    <div class="card p-2 m-3">
                        PROMOCIONAL10
                    </div>

                    <div class="card p-2 m-3">
                        PROMOCIONAL30
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-2">
            <div class="card-header">
                <div class="form-label">
                    Cupons de Troca
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex">
                    <div class="card p-2 m-3">
                        TROCA10
                    </div>

                    <div class="card p-2 m-3">
                        TROCA30
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12 d-flex justify-content-end mt-3">
            <router-link to="/purchase/verify" class="me-3"> 
                <div class="btn btn-primary">
                    Continuar
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import ResumePurchaseComponent from './ResumePurchaseComponent.vue'

export default {
    name: "PurchaseCoupon",
    components: {
      ResumePurchaseComponent
    }
}
</script>

<style>

</style>