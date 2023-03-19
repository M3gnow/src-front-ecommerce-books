<template>
    <div class="bg">
        <div class="container">
            <br>
            <div class=" bg-light text-center">
                <div class="fs-1">Andrew Oliveira</div>
                <div class="fs-2">1 Lesbook pontos.</div>
            </div>
            <br>
            <div class="d-flex m-5 justify-content-around paddingOptions">
                <div class="">
                    <router-link to="/cliente/editar" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-person-lines-fill fontSizeIcon"></i>
                    </router-link>
                </div>
                <div class="">
                    <router-link to="/cliente/senha" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-shield-lock-fill fontSizeIcon"></i>
                        <!-- <label for="basic-url" class="form-label fs-3">Segurança</label> -->
                        <!-- <div class="form-text">Altere sua senha.</div> -->
                    </router-link>
                </div>
                <div class="">
                    <router-link to="/cliente/cartoes" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-credit-card-2-front-fill fontSizeIcon"></i>
                        <!-- <label for="basic-url" class="form-label fs-3">Meus cartões</label>
                        <div class="form-text">Gerencie seus cartões.</div> -->
                    </router-link>
                </div>
                <div class="">
                    <router-link to="/cliente/enderecos" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-house-gear-fill fontSizeIcon"></i>
                    </router-link>
                </div>

                <div class="iconSize">
                    <router-link to="/cliente/coupon" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-ticket-detailed-fill fontSizeIcon"></i>
                    </router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileClientView"
}
</script>
<style>
.bg{
    background-color: rgba(94, 91, 91, 0.192);
}

.fontSizeIcon {
    font-size: 60px;
}

.paddingOptions {
    padding-bottom: 100px !important
}
</style>