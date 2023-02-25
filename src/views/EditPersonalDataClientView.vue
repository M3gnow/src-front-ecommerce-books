<template>
    <div class="container">
        <label for="basic-url" class="form-label fs-3">Alterar dados pessoais</label>
        <div class="row">
            <div class="col-sm-4">
                <label for="basic-url" class="form-label">CPF</label>
                <div class="input-group">
                    <input type="text" class="form-control" value="482.418.678-09" disabled="true" id="txtCPF"
                        aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-4">
                <label for="basic-url" class="form-label">Data de nascimento</label>
                <div class="input-group">
                    <input type="text" class="form-control" value="05/02/2000" disabled="true" id="txtDtaNascimento"
                        aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-4">
                <label for="basic-url" class="form-label">Genero</label>
                <div class="input-group disabled">
                    <select class="form-select" disabled="true" id="inputGroupSelect01">
                        <option>Escolha...</option>
                        <option value="1">Feminino</option>
                        <option selected value="2">Masculino</option>
                        <option value="3">Não informar</option>
                    </select>
                </div>
            </div>
        </div>
        <br>
        <label for="basic-url" class="form-label">E-mail</label>
        <div class="col-sm">
            <div class="input-group">
                <input type="text" class="form-control" value="andrew.santos@fatec.sp.gov.br" id="txtEmail"
                    aria-describedby="basic-addon3">
            </div>
        </div>
        <br>

        <div class="row" id="divContato">
            <label for="basic-url" class="form-label">Contato</label>
            <div class="form-text">Você pode adicionar mais contatos.</div>
            <div class="col-sm-4">
                <label for="basic-url" class="form-label">Tipo de telefone</label>
                <div class="input-group">
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Escolha...</option>
                        <option value="1">Fixo</option>
                        <option value="2">Celular</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-2">
                <label for="basic-url" class="form-label">DDD</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="txtCPF" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-4">
                <label for="basic-url" class="form-label">Numero</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-outline-warning">Adicionar contato</button>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: "EditPersonalDataClientView"
}

</script>
<style></style>