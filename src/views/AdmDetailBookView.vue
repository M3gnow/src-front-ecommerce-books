<template>
    <div class="container">
        <form class="container" v-on:submit.prevent="checkForm">
            <div id="divDetailData" class="p-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <label class="form-label fs-3">Detalhe do Livro</label>
                    </div>
                </div>

                <div class="card mt-2 p-3 cardForm">
                    <label class="form-label fs-3">Identificação</label>

                    <div class="d-flex justify-content-between mt-4">
                        <div class="col-md-3">
                            <label for="basic-url" class="form-label">Código</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="id" name="id" v-model="book.id" aria-describedby="basic-addon3" disabled>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <label for="basic-url" class="form-label">ISBN</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="isbn" name="isbn" v-model="book.isbn" aria-describedby="basic-addon3">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="basic-url" class="form-label">Codigo de barras</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="barcode" name="barcode" v-model="book.barcode" aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mt-2 p-3 cardForm">
                    <label class="form-label fs-3">Informações cadastrais</label>

                    <div>
                        <div class="mt-2 d-flex justify-content-between flex-wrap">
                            <div class="col-md-3">
                                <label for="basic-url" class="form-label">Título</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="title" name="title" v-model="book.title" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="basic-url" class="form-label">Edição</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="edition" name="edition" v-model="book.edition" aria-describedby="basic-addon3">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <label for="basic-url" class="form-label">Páginas</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="pageCount" name="pageCount" v-model="book.pageCount" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            
                            <div class="col-md-2">
                                <label for="basic-url" class="form-label">Status</label>
                                <div class="input-group">
                                    {{  book.active ? 'Ativo': 'Inativo' }}
                                </div>
                            </div>
                        </div>

                        <div class="mt-2 d-flex justify-content-between flex-wrap">
                            <div class="col-md-3">
                                <label for="basic-url" class="form-label">Autor</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="author" name="author" v-model="book.author.description" aria-describedby="basic-addon3" disabled>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <label for="basic-url" class="form-label">Editora</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="publisher" name="publisher" v-model="book.publisher.description" aria-describedby="basic-addon3" disabled>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="basic-url" class="form-label">Ano publicação</label>
                                <div class="input-group">
                                    <input type="date" class="form-control" id="publicationYear" name="publicationYear" v-model="book.publicationYear" aria-describedby="basic-addon3">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 mt-2">
                            <label for="basic-url" class="form-label">Sinopse</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="synopsis" name="synopsis" v-model="book.synopsis" aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mt-2 p-3 cardForm">
                    <label class="form-label fs-3">Precificação e Valores</label>

                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="card col-md-12 p-3 mt-2">
                            <label class="form-label fs-3">Grupo de precificação</label>

                            <div class="d-flex justify-content-between">
                                <div class="col-md-5">
                                    <label for="basic-url" class="form-label">
                                        Precificação mínima <b> R$ {{ parseFloat(book.stock.costValue + ((book.stock.costValue/100) * book.pricing.minProfitMargin)).toFixed(2) }} </b>
                                        <p></p>
                                        Taxa de lucro (valor de custo como base): <b>{{ book.pricing.minProfitMargin }} % </b>
                                    </label>
                                </div>

                                <div class="col-md-5">
                                    <label for="basic-url" class="form-label">
                                        Precificação máxima <b> R$ {{ parseFloat(book.stock.costValue + ((book.stock.costValue/100) * book.pricing.maxProfitMargin)).toFixed(2) }} </b>
                                        <p></p>
                                        Taxa de lucro (valor de custo como base): <b>{{ book.pricing.maxProfitMargin }} % </b>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card cardForm col-md-12 p-3 mt-2">
                            <label class="form-label fs-3">Valores</label>

                            <div class="d-flex justify-content-between mt-2">
                                <div class="col-md-4 ">
                                    <label for="basic-url" class="form-label">Valor custo</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="costValue" name="costValue" v-model="book.stock.costValue" aria-describedby="basic-addon3" disabled>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for="basic-url" class="form-label">Quantidade</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="quantity" name="quantity" v-model="book.stock.quantity" aria-describedby="basic-addon3" disabled>
                                    </div>
                                </div>
                            </div>
                            

                            <div class="d-flex justify-content-between mt-3">
                                <div class="col-md-12">
                                    <label for="basic-url" class="form-label"><b>Valor de Venda</b></label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="value" name="value" v-model="book.value" aria-describedby="basic-addon3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mt-2 p-3 cardForm">
                    <label class="form-label fs-3">Dimensões do Livro</label>

                    <div class="d-flex justify-content-between mt-4">
                        <div class="col-md-2">
                            <label for="basic-url" class="form-label">Altura</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="height" name="height" v-model="book.dimension.height" aria-describedby="basic-addon3">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <label for="basic-url" class="form-label">Largura</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="width" name="width" v-model="book.dimension.width" aria-describedby="basic-addon3">
                            </div>
                        </div>
                        
                        <div class="col-md-2">
                            <label for="basic-url" class="form-label">peso</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="weight" name="weight" v-model="book.dimension.weight" aria-describedby="basic-addon3">
                            </div>    
                        </div>

                        <div class="col-md-2">
                            <label for="basic-url" class="form-label">profundidade</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="depth" name="depth" v-model="book.dimension.depth" aria-describedby="basic-addon3">
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between mb-2 container pe-4 ps-4">
                <button type="button" class="btn col-md-3 btn-dark" @click="goToUpdateStatusBookId(book.id)">Alterar Status</button>
                <button type="button" class="btn col-md-3 btn-success" @click="goToAddStockBookById(book.id)">Entrada Estoque</button>
                <button type="button" class="btn col-md-3 btn-warning" @click="changeBook(book.id, book)">Salvar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { getBook, updateBook } from "../services/modules/bookService"
import { useRoute } from 'vue-router'

export default {
    data() {
        const { params } = useRoute();
        const book = {
            author: {

            },
            publisher: {

            },
            stock: {

            },
            dimension: {

            },
            pricing: {

            },
            activationStatusReason: {

            }
        };

        return { book, params }
    },
    mounted() {
        getBook(this.params.book_id)
            .then((result) => {
                result.publicationYear = this.formatDate(result.publicationYear);
                this.book = result;
            }).catch(() => console.log('error getbook'))
    },
    methods: {
        goToUpdateStatusBookId(bookId) {
            this.$router.push(`/adm/books/${bookId}/status`);
        },
        goToAddStockBookById(bookId) {
            this.$router.push(`/adm/books/${bookId}/stock`);   
        },
        changeBook(bookId, bookData) {
            updateBook(bookId, bookData)
                .then((data) => {
                    alert('Atualização com sucesso')
                    this.$router.push('/adm/books')
                }).catch((e) => {
                    alert('Alguma informação invalida, ocorreu um erro!')
                })
        },
        formatDate: function(date) {
            const dateOfBirth = new Date(date)
            let day = dateOfBirth.getDate();
            let month = dateOfBirth.getMonth() +1;
            const year = dateOfBirth.getFullYear();

            if (day < 10) {
                day = `0${day}`
            }

            if (month < 10) {
                month = `0${month}`
            }

            return [year, month, day].join('-');
        },
        modelBookUpdate(book) {
            return {
                "isbn": book.isbn,
                "barcode": book.barcode,
                "title": book.title,
                "edition": book.edition,
                "pageCount": parseInt(book.pageCount),
                "active": true,
                "synopsis": "string",
                "value": 0,
                "dimension": {
                    "height": 0,
                    "width": 0,
                    "weight": 0,
                    "depth": 0
                },
                "publicationYear": "2023-06-26T02:14:19.970Z"
            }
        }
    }
}
</script>

<style>

</style>