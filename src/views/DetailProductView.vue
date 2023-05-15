<template>
    <div class="d-flex justify-content-center m-3">
        <div class="card col-md-9">
            <div class="d-flex justify-content-between m-3">
                <div class="card col-md-4 border border-0">
                    <div class="card-body ">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner card-img">
                                <div class="carousel-item active">
                                    <img class="img-fluid" src="https://m.media-amazon.com/images/I/91y1jCIfhSL.jpg">
                                </div>

                                <button class="carousel-control carousel-control-prev" type="button"
                                    data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control carousel-control-next" type="button"
                                    data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card col-md-4 border border-0 mt-2">
                    <div>
                        <h5 class="card-title">{{ book.title }}</h5>
                    </div>
                    <div class="mt-5">
                        <h1 class="card-title text-success">R$ {{ book.value }}</h1>
                    </div>

                    <div>
                        {{ book.synopsis }}
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-5">
                            Edição:
                        </div>
                        <div class="col-md-7">
                            {{ book.edition }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            Paginas:
                        </div>
                        <div class="col-md-7">
                            {{ book.pageCount }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            Ano de publicação:
                        </div>
                        <div class="col-md-7">
                            {{ book.publicationYear }}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-5">
                            Editora:
                        </div>
                        <div class="col-md-7">
                            {{ book.publisher.description }}
                        </div>
                    </div>

                    <div>
                        <div class="row">
                            <div class="col-md-5">
                                Autor:
                            </div>
                            <div class="col-md-7">
                                {{ book.author.description }}
                            </div>
                        </div>
                    </div>


                </div>

                <div class="card col-md-3">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">Calcular valor do frete</h5>
                        </div>

                        <div class="mt-3">
                            <div class="input-group">
                                <input type="text" class="form-control" id="deliveryAddressCepAddress"
                                    name="deliveryAddressCepAddress" aria-describedby="basic-addon3" v-model="zipcode">
                                <button class="btn btn-outline-warning" v-on:click="getAdress(zipcode)">Calcular</button>
                            </div>
                            <label class="d-flex justify-content-between p-2">
                                <div v-show="deliveryPrice != 0" class="form-text"><b>Frete</b></div>
                                <div v-show="deliveryPrice != 0" class="form-text">R$: {{ deliveryPrice }}</div>
                            </label>
                        </div>

                        <div class="container pt-3 mt-2">
                            <a href="#" class="btn btn-outline-warning btn-lg col-md-12" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                v-on:click="AddToCart(book)">
                                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                Adicionar ao Carrinho
                            </a>
                            <router-link to="/purchase" v-on:click="AddToCart(book)">
                                <div class="btn btn-outline-success btn-lg col-md-12">
                                    Comprar
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDeliveryPrice,setLockBook } from '@/services/modules';
import { getBook } from '@/services/modules';
import { useRoute } from 'vue-router'
import { setItemToCartStorage,getClientStorage } from '@/storage/module';
export default {
    name: 'DetailProductView',
    data: function () {
        let client = getClientStorage();
        const { params } = useRoute();
        let zipcode = "", deliveryPrice = 0, book = {};
        getBook(params.book_id)
            .then((result) => {
                this.book = result;
            })
            .catch((err) => {
                console.log('Falha na consulta getDeliveryPrice', err)
            })
        return { text: 'Ticta', textMegnow: '', zipcode, deliveryPrice, book,client }
    },
    methods: {
        getAdress(zipcode) {
            getDeliveryPrice(zipcode)
                .then((result) => {
                    this.deliveryPrice = result;
                })
                .catch((err) => {
                    console.log('Falha na consulta getDeliveryPrice', err)
                })
        },
        megnowAction() {
            setTimeout(() => {

            })
        },
        AddToCart: async function (book) {
            console.log(this.client)
            setLockBook(this.client.id, book.id)
                .then((result) => {
                    setItemToCartStorage(book);
                    SetExpirationCart(result);
                })
                .catch((err) => {
                    alert('Não há livros em estoque no momento.')
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
