<template>
        <div class="bg">
        <div class="container">
            <br>
            <br>
            <div class="">
                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/dashboard" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Dashboard</label>
                    </router-link>
                </div>

                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Livros</label>
                        <div class="form-text">Gerencie os livros.</div>
                    </router-link>
                </div>

                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Cliente</label>
                        <div class="form-text">Gerencie os clientes.</div>
                    </router-link>
                </div>

                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/adm/orders" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Pedidos</label>
                        <div class="form-text">Gerencie pedidos de compra e troca.</div>
                    </router-link>
                </div>

                <div class="row d-flex justify-content-between p-3">
                    <router-link to="/" type="button" class="btn btn-light border text-reset">
                        <label for="basic-url" class="form-label fs-3">Estoque</label>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "AdministratorPanelView"
}
</script>

<style>
.bg{
    background-color: rgba(94, 91, 91, 0.192);
}
</style>