<template>
    <div class="bg-body">
        <div class="container">
            <br>
            <div class=" bg-light text-center">
                <div class="fs-1">Andrew Oliveira</div>
                <div class="fs-2">1 Lesbook pontos.</div>
            </div>
            <br>
            <div class="">
                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/cliente/editar" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Meus dados</label>
                        <div class="form-text">Gerencie seus dados pessoais.</div>
                    </router-link>
                </div>
                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/cliente/senha" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Segurança</label>
                        <div class="form-text">Altere sua senha.</div>
                    </router-link>
                </div>
                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/cliente/cartoes" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Meus cartões</label>
                        <div class="form-text">Gerencie seus cartões.</div>
                    </router-link>
                </div>
                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/cliente/enderecos" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Meus endereços</label>
                        <div class="form-text">Altere seus endereços ou adicione outros.</div>
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
</style>