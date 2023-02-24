<template>
    <div class="d-flex justify-content-center m-3">
        <div class="card detail">
            <div class="container mt-3">
                <h5 class="card-title">Detalhe do Produto</h5>
            </div>


            
            <div class="d-flex justify-content-between m-3" style="width: 75rem;">
                <div class="card" style="width: 45rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">Detalhe do Produto</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style="width: 25rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">Calcular o prazo de entrega</h5>
                        <input type="text" class="form-control" placeholder="Digite seu CEP">
                        <p class="card-text pt-2">Estoque disponível</p>
                        
                        <div class="container pt-3">
                            <div class="row">
                                <a href="#" class="btn btn-outline-success">Comprar agora</a>
                            </div>

                            <div class="row pt-2">
                                <a href="#" class="btn btn-outline-info">Adicionar ao carrinho</a>
                            </div>
                        </div>

                        <p />
                        <label for=""><b>Devolução grátis: </b>Você tem x dias a partir da data de recebimento</label>
                        
                        <p/>
                        <label for=""><b>RankingUp! </b>Você acumula x pontos</label>
                        
                        <p/>
                        <label for=""><b>Qualidade: </b>X periodo de garantia de fábrica</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailProductView',
    data: function() {
        
        return { text: 'Ticta', textMegnow:'' }
    },
    methods: {
        megnowAction() {
            setTimeout(() => {

            })
        },
    }
}
</script>

<style scoped>

.detail {
    height: 600px;
}
</style>