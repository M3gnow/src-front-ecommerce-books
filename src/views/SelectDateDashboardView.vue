<template>
  <div class="container">
    <div id="divPassword" class="card mt-3 p-2 cardForm p-4">
      <div>
        <label for="mesAnoInicio">Mês/Ano de inicio:</label>
        <input type="text" class="form-control" id="mesAnoInicio" v-model="mesAnoInicio">
      </div>
      <div>
        <label for="mesAnoFinal">Mês/Ano de final:</label>
        <input type="text" class="form-control" id="mesAnoFinal" v-model="mesAnoFinal">
      </div>
      <p v-if="erro" class="error">{{ erro }}</p>
      <div class="row d-flex justify-content-between p-3">
        <button class="btn btn-outline-warning" v-bind:disabled="erro != ''" v-on:click="Buscar(mesAnoInicio,mesAnoFinal,1)"> <i class="bi bi-tag"></i> Buscar por categoria</button>
        <button class="btn btn-outline-warning" v-bind:disabled="erro != ''" v-on:click="Buscar(mesAnoInicio,mesAnoFinal,1)"><i class="bi bi-book"></i> Buscar por produto</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute,useRouter } from 'vue-router'
export default {
  
  name: 'SelectDateDashboard',
  data() {
    let mesAnoInicio = '';
    let mesAnoFinal = '';
    let type = '';
    let erro = '';
    let router = useRouter()
    return {
      mesAnoInicio,
      mesAnoFinal,
      erro,
      router
    }
    
  },
  methods: {
    Buscar: function (initDate,endDate,type) {
      const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
      if (!regex.test(initDate)) {
        alert(initDate + ' não é um formato inválido. Utilize o formato MM/AAAA.')
      }
      if (!regex.test(endDate)) {
        alert(endDate + ' não é um formato inválido. Utilize o formato MM/AAAA.')
      }
      this.router.push(`/dashboard/${initDate}/${endDate}/${type}`);
    }
  }
}
</script>