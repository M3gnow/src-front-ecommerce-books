<template>
    <div class="d-flex justify-content-center align-items-center bg">
        <div class="d-flex justify-content-center">
            <div class="d-flex justify-content-between p-4">
                <router-link to="/dashboard" type="button" class="btn btn-light border border-warning text-reset p-5">
                    <label for="basic-url" class="form-label fs-3">Dashboard</label>
                    <div class="form-text">Consulta de venda.</div>
                </router-link>
            </div>

            <div class="d-flex justify-content-between p-4">
                <router-link to="/adm/books" type="button" class="btn btn-light border border-warning text-reset p-5">
                    <label for="basic-url" class="form-label fs-3">Livros</label>
                    <div class="form-text">Gerencie os livros</div>
                </router-link>
            </div>

            <div class="d-flex justify-content-between p-4">
                <router-link to="/adm/clientes" type="button" class="btn btn-light border border-warning text-reset p-5">
                    <label for="basic-url" class="form-label fs-3">Clientes</label>
                    <div class="form-text">Gerencie os clientes</div>
                </router-link>
            </div>

            <div class="d-flex justify-content-between p-4">
                <router-link to="/adm/orders" type="button" class="btn btn-light border border-warning text-reset p-5">
                    <label for="basic-url" class="form-label fs-3">Pedidos</label>
                    <div class="form-text">Gerencie pedidos de compra e troca</div>
                </router-link>
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
.bg {
    background-color: rgba(94, 91, 91, 0.192);
    min-height: 600px !important;
}
</style>