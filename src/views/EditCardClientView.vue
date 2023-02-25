<template>
    <div class="container">
        <label for="basic-url" class="form-label fs-3">Editar seu cartão</label>
        <div class="row">
            <div class="col-sm-2">
                <label for="basic-url" class="form-label">Bandeira</label>
                <div class="input-group">
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Escolha...</option>
                        <option selected>Visa</option>
                        <option selected>MasterCard</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-7">
                <label for="basic-url" class="form-label">Numero do cartão</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-3">
                <label for="basic-url" class="form-label">Validade</label>
                <div class="input-group">
                    <input type="date" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-9">
                <label for="basic-url" class="form-label">Nome <label class="form-text">(Informar como impresso no
                        cartão)</label></label>
                <div class="input-group">
                    <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-3">
                <label for="basic-url" class="form-label">Codigo de segurança</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-between p-3">
            <router-link to="/" type="button" class="btn btn-outline-warning">Salvar</router-link>
        </div>

    </div>
</template>
<script>
export default {
    name: "EditCardClientView"
}
</script>
<style></style>