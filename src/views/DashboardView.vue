<template>
  <div class="container">
    <Line v-if="rendered" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar, Line } from 'vue-chartjs'
import { getDashboard } from '../services/modules'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, Colors ,CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { useRoute } from 'vue-router'
ChartJS.register(PointElement, LineElement, Title, Tooltip, Legend,Colors, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar, Line },
  data() {
    let mesAnoInicio = '';
    let mesAnoFinal = '';
    let erro = '';
    const { params } = useRoute();
    const colorPalette = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    let chartData = null;
    return {
      params,
      rendered: false,
      chartData,
      chartOptions: {
        responsive: true

      }
    }

  },
  mounted(){
    this.Buscar();
  },
  methods: {
    getRandomColor: function () {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    Buscar : function() {
      getDashboard({
      "init": `${this.params.initMounth}/${this.params.initYear}`,
      "end": `${this.params.endMounth}/${this.params.endYear}`
    })
      .then((result) => {

        this.chartData = {
          labels: result.labels,
          datasets: result.datasets
        }
        this.rendered = true;
      })
      .catch((err) => {
        console.log('Falha na consulta getDashboard', err)
      })
    }
  }
}
</script>