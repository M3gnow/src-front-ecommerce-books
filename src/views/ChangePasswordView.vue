<template>
  <div class="container">
    <div id="divPassword" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Troca de senha</label>
      <div class="form-label">Digite sua senha atual.</div>
      <div class="col-sm-6">
        <div class="input-group">
          <input
            type="password"
            class="form-control"
            id="actualPassword"
            name="actualPassword"
            v-model="client.actualPassword"
            aria-describedby="basic-addon3"
          />
        </div>
      </div>
    </div>

    <div id="divNewPassword" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Digite a nova senha</label>
      <div class="p-3">
        <div class="form-text">Ela deve conter ao menos 8 caracteres.</div>
        <div class="form-text">Incluindo letras, numeros e caracteres especiais.</div>
        <div class="form-text">
          Não coloque seu nome, sobrenome, e-mail nem caracteres idênticos e consecutivos.
        </div>
      </div>

      <div class="row mt-1">
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Senha</label>
          <div class="input-group">
            <input
              type="password"
              class="form-control"
              id="firstNewPassword"
              name="firstNewPassword"
              v-model="client.firstNewPassword"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Confirme sua senha</label>
          <div class="input-group">
            <input
              type="password"
              class="form-control"
              id="secondNewPassword"
              name="secondNewPassword"
              v-model="client.secondNewPassword"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChangePasswordView",
  data: function () {
    const client = {
      actualPassword: "",
      firstNewPassword: "",
      secondNewPassword: "",
    };

    return {
      client,
    };
  },
};
</script>

<style>
    
.cardForm {
    background-color: lightgoldenrodyellow !important
}

</style>
