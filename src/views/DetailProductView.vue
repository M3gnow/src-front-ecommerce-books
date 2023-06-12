<template>
    <div class="container">
        <div class="d-flex justify-content-between m-3">
            <div class="card col-md-4 m-1 mt-2" v-if="true">
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

            <div class="d-flex col-md-8">
                <div class="m-1 card border mt-2">
                    <div class="card-body">
                        <div class="mt-3">
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
                            <div>
                                Edição:
                            </div>
                            <div>
                                {{ book.edition }}
                            </div>
                        </div>

                        <div class="row">
                            <div>
                                Paginas:
                            </div>
                            <div>
                                {{ book.pageCount }}
                            </div>
                        </div>

                        <div class="row">
                            <div>
                                Ano de publicação:
                            </div>
                            <div>
                                {{ book.publicationYear }}
                            </div>
                        </div>

                        <div class="row">
                            <div>
                                Editora:
                            </div>
                            <div>
                                {{ book.publisher.description }}
                            </div>
                        </div>

                        <div class="row">
                            <div>
                                Autor:
                            </div>
                            <div>
                                {{ book.author.description }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m-1 card mt-2">
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
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-3 d-flex justify-content-center mb-3">
            <a href="/" class="btn btn-outline-warning btn-lg m-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" v-on:click="AddToCart(book)">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                Adicionar ao Carrinho
            </a>
            <router-link to="/purchase" v-on:click="AddToCart(book)">
                <div class="btn btn-outline-success btn-lg m-1">
                    Comprar
                </div>
            </router-link>
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
                console.log('Falha na consulta getBook', err)
            })

        return { text: 'Ticta', textMegnow: '', zipcode, deliveryPrice, book,client }
    },
    methods: {
        getAdress(zipcode) {
            getDeliveryPrice(zipcode)
                .then((result) => {
                    this.deliveryPrice = result;

                    console.log('this.deliveryPrice', this.deliveryPrice);
                })
                .catch((err) => {
                    console.log('Falha na consulta getDeliveryPrice', err)
                })
        },
        AddToCart: async function (book) {
            setLockBook(this.client.id, book.id,1)
                .then((result) => {
                    const bookModel = this.modelBook(book);
                    setItemToCartStorage(bookModel);
                })
                .catch((err) => {
                    alert('Não há livros em estoque no momento.')
                })
        },
        modelBook: function (book) {
            return {
                id: book.id,
                title: book.title,
                synopsis: book.synopsis,
                quantity: 1,
                price: book.value
            }
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
