<template>
    <div class="container">
        <form class="container" v-on:submit.prevent="checkForm">
            <div id="divDetailData" class="card mt-3 p-2 cardForm p-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <label class="form-label fs-3">Atualizar Status</label>
                    </div>
                </div>
            </div>

            <div class="card mt-2 p-3 cardForm">
                <div class="d-flex justify-content-between">
                    <div>
                        <label class="form-label fs-3">Status</label>
                    </div>

                    <div>
                        <label class="form-label fs-3">{{ labelActivation }}</label>
                    </div>
                </div>                

                <div class="d-flex justify-content-between mt-4 flex-wrap">
                    <div class="col-md-12">
                        <label for="basic-url" class="form-label">Livro</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="title" name="title" v-model="book.title" aria-describedby="basic-addon3" disabled>
                        </div>
                    </div>

                    <div class="col-md-12 mt-3">
                        <label for="basic-url" class="form-label">{{ labelCategoryActivation }}</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Categoria" id="category" name="category" v-model="status.categoryStatusReasonDescription" aria-describedby="basic-addon3">
                        </div>
                    </div>

                    <div class="col-md-12 mt-3">
                        <label for="basic-url" class="form-label">{{ labelReasonActivation }}</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Motivo" id="reason" name="reason" v-model="status.manageStatusReasonDescription" aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row d-flex justify-content-between p-3">
                <button class="btn btn-outline-warning" @click="changeStatus(book.id, status)">
                    Finalizar
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { getBook, updateStatusBook } from "../services/modules/bookService"
import { useRoute } from 'vue-router'

export default {
    data() {
        const { params } = useRoute();
        const book = {}
        const status = {}
        const labelActivation = '';
        const labelCategoryActivation = '';
        const labelReasonActivation = '';

        return { params, book, status, labelActivation, labelCategoryActivation, labelReasonActivation }
    },
    methods: {
        changeStatus(bookId, statusData) {
            updateStatusBook(bookId, statusData)
                .then((data) => {
                    this.getAllBooksNextChangeStatus();
                }).catch((err) => {
                    console.log('error update status');
                })
        },
        getAllBooksNextChangeStatus() {
            getBook(this.params.book_id)
                .then((result) => {
                    this.books = result; 
                    this.status = {};
                    this.labelActivation = result.active ? 'Ativo': 'Inativo';
                    this.labelCategoryActivation = result.active ? 'Categoria de Inativação': 'Categoria de Ativação';
                    this.labelReasonActivation = result.active ? 'Motivo de Inativação': 'Motivo de Ativação';
                }).catch(() => {

                })
        }
    },
    mounted() {
        getBook(this.params.book_id)
            .then((result) => {
                this.book = result;
                this.labelActivation = result.active ? 'Ativo': 'Inativo';
                this.labelCategoryActivation = result.active ? 'Categoria de Inativação': 'Categoria de Ativação';
                this.labelReasonActivation = result.active ? 'Motivo de Inativação': 'Motivo de Ativação';
            }).catch(() => console.log('error getbook'))
    },
}
</script>

<style>

</style>