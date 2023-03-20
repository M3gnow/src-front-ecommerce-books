<template>
  <form class="container" v-on:submit.prevent="checkForm">
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

    <div class="row d-flex justify-content-between p-3">
      <button class="btn btn-outline-warning">Finalizar</button>
    </div>
  </form>
</template>
<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: "ChangePasswordView",
  data: function () {
    let errors = [];
    const client = {
      actualPassword: "",
      firstNewPassword: "",
      secondNewPassword: "",
    };

    return { client, errors };
  },
  methods: {
    checkForm: function() {
      this.errors = []

			if (!this.client.actualPassword || !this.client.firstNewPassword || !this.client.secondNewPassword) {
				this.errors.push({ message: 'Resta informações pendentes' })
			}

      if (!this.validatePassword(this.client.actualPassword)) {
        this.errors.push({ message: 'Senha atual no padrão incorreto' })
      }

      if (!this.validatePassword(this.client.firstNewPassword)) {
        this.errors.push({ message: 'Nova senha no padrão incorreto' })
      }

      if (!this.validatePassword(this.client.secondNewPassword)) {
        this.errors.push({ message: 'Confirmação de senha no padrão incorreto' })
      }

      if (!this.checkBothPasswords(this.client)) {
        this.errors.push({ message: 'Nova senha e confirmação não são iguais' })
      }

      this.notify()
    },
		notify: function() {
      this.errors.map((element) => {
          toast(element.message, {
          transition: toast.TRANSITIONS.FLIP,
          position: toast.POSITION.BOTTOM_CENTER, 
          })
      })
    },
    checkBothPasswords(client) {
        if (client.firstNewPassword === client.secondNewPassword) {
            return true;
        }

        return false;
    },
    validatePassword(password) {
        const regexValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

        if (regexValidate.test(password)) {
            return true;
        }

        return false;
    },
  }
};
</script>

<style>
    
.cardForm {
    background-color: lightgoldenrodyellow !important
}

</style>
