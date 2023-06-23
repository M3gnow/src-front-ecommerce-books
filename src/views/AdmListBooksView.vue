<template>
    <div class="container card mt-3 p-4 cardForm">

        <div class="form-label fs-3">
            <div class="d-flex justify-content-between">
                <div>
                    Lista de Livros    
                </div>

                <!-- <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-warning m-1">Compras</button>
                    <button type="button" class="btn btn-warning m-1">Trocas</button>
                </div> -->
            </div>
        </div>

        <table class="table table-hover table-dark mt-3">
            <thead>
                <tr>
                    <th scope="col">Livro</th>
                    <th scope="col">Author</th>
                    <th scope="col">Editora</th>
                    <th scope="col">Data de publicação</th>
                    <th scope="col">Quantidade em Estoque</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" v-bind:key="book.id">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author.description }}</td>
                    <td>{{ book.publisher.description  }}</td>
                    <td>{{ formatDate(book.publicationYear)  }}</td>
                    <td class="text-center">{{ book.stock.quantity  }}</td>
                    <td>
                        <RouterLink class="btn btn-danger" :to="{ path: `/adm/orders/{{ book.id }}` }">Inativar</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getAllBooks } from './../services/modules/bookService'

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