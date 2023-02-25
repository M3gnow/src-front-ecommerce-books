<template>
    <div class="container">
        <label for="basic-url" class="form-label fs-3">Troca de senha</label>
        <div class="form-label">Digite sua senha atual.</div>
        <div class="col-sm-6">
            <div class="input-group">
                <input type="email" class="form-control" id="txtEmail" aria-describedby="basic-addon3">
            </div>
        </div>
        <br>
        <label for="basic-url" class="form-label">Digite a nova senha</label>
        <div class="form-text">Ela deve conter ao menos 8 caracteres.</div>
        <div class="form-text">Incluindo letras, numeros e caracteres especiais.</div>
        <div class="form-text">Não coloque seu nome, sobrenome, e-mail nem caracteres idênticos e consecutivos.</div>
        <div class="row">
            <div class="col-sm-6">
                <label for="basic-url" class="form-label">Senha</label>
                <div class="input-group">
                    <input type="password" class="form-control" id="txtSenha" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="col-sm-6">
                <label for="basic-url" class="form-label">Confirme sua senha</label>
                <div class="input-group">
                    <input type="password" class="form-control" id="txtConfirmaSenha" aria-describedby="basic-addon3">
                </div>
            </div>
        </div>
        <br>
        <hr>
    </div>
</template>
<script>
export default {
    name: "ChangePasswordView"
}
</script>