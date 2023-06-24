<template>
    <div class="container card mt-3 p-4 cardForm">

        <div class="form-label fs-3">
            <div class="d-flex justify-content-between">
                <div>
                    Lista de Livros    
                </div>
            </div>
        </div>

        <table class="table table-hover table-dark mt-3">
            <thead>
                <tr>
                    <th scope="col">Livro</th>
                    <th scope="col">Author</th>
                    <th scope="col">Data de publicação</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Status</th>
                    <th class="text-center" scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" v-bind:key="book.id">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author.description }}</td>
                    <td>{{ formatDate(book.publicationYear)  }}</td>
                    <td>{{ book.stock.quantity  }}</td>
                    <td class="text-center">{{ book.active ? 'Ativo' : 'Inativo'  }}</td>
                    <td>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-outline-warning">
                                Detalhe
                            </button>
                            <button type="button" class="btn btn-outline-danger" @click="changeStatus(book.id)" :disabled="!book.active">
                                Inativar
                            </button>
                            <button type="button" class="btn btn-outline-success" @click="changeStatus(book.id)" :disabled="book.active">
                                Ativar
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getAllBooks, updateStatusBook } from './../services/modules/bookService'

export default {
    name: 'AdmListBooksView',
    data () {
        const books = [];
        return { books }
    },
    methods: {
        formatDate(dateForFormat) {
            const dateTime = new Date(dateForFormat);
            const day = dateTime.getDay() > 9 ? dateTime.getDay() : `0${dateTime.getDay()}`;
            const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
            const year = dateTime.getFullYear();
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes() <= 9 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

            const date = `${day}/${mounth}/${year}`

            return date;
        },
        changeStatus(bookId) {
            updateStatusBook(bookId)
                .then((data) => {
                    this.getAllBooksNextChangeStatus();
                }).catch((err) => {
                    console.log('error update status');
                })
        },
        getAllBooksNextChangeStatus() {
            getAllBooks()
                .then((result) => {
                    this.books = result; 
                }).catch(() => {

                })
        }  
    },
    mounted() {
        getAllBooks()
            .then((result) => {
                this.books = result; 
            }).catch(() => {

            })
    }
}
</script>
<style>

</style>