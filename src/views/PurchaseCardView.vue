<template>
  <div class="container d-flex mt-2">
    <div class="col-md-8 me-3">
        <div>
            <h5>Como você prefere pagar?</h5>
        </div>

        <div class="card mt-4">
            <div class="p-4 col-md-12">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                    <div class="p-4">
                        <input class="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
                    </div>

                    <div class="ms-3">
                        <i class="bi bi-credit-card iconCard"></i>
                    </div>

                    <div class="d-flex flexwrap row ms-5">
                        <label for="">Mastercard</label>
                        <label for="">**** **** **** 0501</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="p-4 col-md-12">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                    <div class="p-4">
                        <input class="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
                    </div>

                    <div class="ms-3">
                        <i class="bi bi-credit-card iconCard"></i>
                    </div>

                    <div class="d-flex flexwrap row ms-5">
                        <label for="">VISA</label>
                        <label for="">**** **** **** 1212</label>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="card mt-3">
            <div class="p-4 col-md-12">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                    <div class="p-4">
                        <input class="form-check-input" type="checkbox" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
                    </div>

                    <div class="ms-3">
                        <i class="bi bi-credit-card iconCard"></i>
                    </div>

                    <div class="d-flex flexwrap row ms-5">
                        <label for="">ELO</label>
                        <label for="">**** **** **** 7411</label>
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

    <ResumePurchaseComponent />
  </div>
</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import PurchaseCouponComponent from '../components/PurchaseCouponComponent.vue'

export default {
    name: "PurchaseCardView",
    components: {
        ResumePurchaseComponent,
      PurchaseCouponComponent
    }
}
</script>

<style>

.iconCard {
  font-size: 50px;
}

</style>