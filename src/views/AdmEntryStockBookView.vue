<template>
    <div class="container">
        <form class="container" v-on:submit.prevent="checkForm">
            <div id="divDetailData" class="card mt-3 p-2 cardForm p-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <label class="form-label fs-3">Entrada de Estoque</label>
                    </div>
                </div>
            </div>

            <div class="card mt-2 p-3 cardForm">
                <label class="form-label fs-3">Identificação</label>

                <div class="d-flex justify-content-between mt-4">
                    <div class="col-md-3">
                        <label for="basic-url" class="form-label">Livro</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="title" name="title" v-model="book.title" aria-describedby="basic-addon3" disabled>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label for="basic-url" class="form-label">Quantidade</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Quantidade" id="quantidade" name="quantidade" v-model="stock.quantity" aria-describedby="basic-addon3">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="basic-url" class="form-label">Valor de Custo</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Valor de Custo" id="costValue" name="costValue" v-model="stock.costValue" aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row d-flex justify-content-between p-3">
                <button class="btn btn-outline-warning" @click="entryStock(book.id, stock)">Finalizar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { getBook, entryStokBookId } from "../services/modules/bookService"
import { useRoute } from 'vue-router'
export default {
    data() {
        const { params } = useRoute();
        const book = {};
        const stock = {
            quantity: 0,
            costValue: 0,
        };


        return { params, book, stock }
    },
    methods: {
        entryStock(bookId, stockData) {
            entryStokBookId(bookId, stockData)
                .then(() => {
                    this.$router.push('/adm/books/');
                }).catch(() => {});
        }
    },
    mounted() {
        getBook(this.params.book_id)
            .then((result) => {
                this.book = result;
            }).catch(() => console.log('error getbook'))
    },
}
</script>

<style>

</style>