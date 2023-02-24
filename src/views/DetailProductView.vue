<template>
    <div class="d-flex justify-content-center m-3">
        <div class="card col-md-9">
            <div class="d-flex justify-content-between m-3">
                <div class="card col-md-4 border border-0">
                    <div class="card-body ">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner card-img">
                                <div class="carousel-item active">
                                    <img class="img-fluid" src="https://http2.mlstatic.com/D_NQ_NP_952066-MLA52817429289_122022-O.webp" >
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="https://http2.mlstatic.com/D_NQ_NP_968569-MLA52817301513_122022-O.webp" >
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="data:image/jpeg;base64,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" >
                                </div>
                                
                                <button class="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card col-md-4 border border-0 mt-2">
                    <div>
                        <h5 class="card-title">Samsung Galaxy A03 Core Dual SIM 32 GB bronze 2 GB RAM</h5>
                    </div>

                    <div class="mt-5">
                        <h1 class="card-title text-success">R$ 710</h1>
                    </div>

                    <div>
                        Momentos únicos, capturas reais
                        Capture seus melhores momentos e reviva-os sempre que quiser com a câmera traseira de 8 Mpx.
                        Além disso, o dispositivo possui uma câmera frontal de 5 Mpx para que você possa tirar selfies divertidas ou fazer videochamadas.
                        Mais para ver
                        Com sua tela PLS de 6.5", desfrute de cores intensas e maior clareza em todo o seu conteúdo.
                        Momentos únicos, capturas reais
                        Capture seus melhores momentos e reviva-os sempre que quiser com a câmera traseira de 8 Mpx.
                        Além disso, o dispositivo possui uma câmera frontal de 5 Mpx para que você possa tirar selfies divertidas ou fazer videochamadas.
                    </div>
                </div>

                <div class="card col-md-3">
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

img {
    height: 100%;
    width: 75%;
}

.card-img {
    background-color: black;
    text-align: center;
    height: 500px;
}

.carousel-inner {
    align-items: center;
    display: flex;
}
</style>
