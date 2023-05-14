<template>
  <div class="carousel container">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <router-link to="/products/detail/1">
            <img
              src="https://elements-cover-images-0.imgix.net/c94a5083-a3f9-45b8-96cb-93ef064125e5?auto=compress%2Cformat&fit=max&w=900&s=aaa46b71f6fb11e19f42f408f5c2dfa5"
              class="d-block w-100 img-carousel" alt="1">
          </router-link>
        </div>

        <div class="carousel-item">
          <router-link to="/products/detail/2">
            <img
              src="https://elements-cover-images-0.imgix.net/42a52283-dbd6-43d5-b44b-87201fee3ea5?auto=compress%2Cformat&fit=max&w=900&s=608a60acf7b35dab1dba2d2e2c43d82a"
              class="d-block w-100 img-carousel" alt="2">
          </router-link>
        </div>

        <div class="carousel-item">
          <router-link to="/products/detail/3">
            <img src="https://cdn.shopify.com/s/files/1/2427/5135/products/LivroSobreoSono01_1000x1000.jpg?v=1650857827"
              class="d-block w-100 img-carousel" alt="3">
          </router-link>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="container d-flex justify-content-between mt-3 p-3">
    <div v-for="book in books" class="card border-warning  text-bg-light" style="width: 18rem;">
      <img src="https://m.media-amazon.com/images/I/91y1jCIfhSL.jpg" class="img-fluid rounded-start card-img-top"
        alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">{{ book.synopsis }}</p>
      </div>
      <div class="d-flex p-3">
        <a href="#" class="btn btn-outline-warning btn-lg col-md-12" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
          v-on:click="AddToCart(book), forceRerenderCart()">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          Adicionar ao Carrinho
        </a>
      </div>

      <div class="d-flex justify-content-between p-3 pt-0">
        <router-link :to="{ path: `/products/${book.id}/detail` }" href="#"
          class="btn btn-outline-info btn-lg">Detalhes</router-link>
        <router-link to="/purchase" v-on:click="AddToCart(book)">
          <div class="btn btn-outline-success btn-lg">
            Comprar
          </div>
        </router-link>
      </div>
    </div>






    <!-- Menu Right Cart Shopping -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Meu carrinho
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <Cart :key="componentKey" />
      </div>
    </div>

  </div>
</template>

<script>
import { setClientStorage, initCartStorage, setItemToCartStorage, getCartStorage,SetExpirationCart } from '@/storage/module'
import Cart from '../components/CartComponent.vue'
import { getClientById, getAllBooks, setLockBook } from '../services/modules'

export default {
  name: 'HomeView',
  components: {
    Cart
  },
  data: function () {
    let client
    getClientById(5)
      .then((result) => {
        const { id, name, ranking } = result
        this.client = result;
        if (!id) {
          throw 'ERROR CLIENT ID';
        }
        setClientStorage(result);

      })
      .catch((err) => {
        console.log('Falha na consulta getClientById', err);
      });
    let books = [];
    getAllBooks()
      .then((result) => {
        this.books = this.modelBooks(result);
      })
      .catch((err) => {
        console.log('Falha na consulta getClientById', err);
      });
    return {
      client,
      books,
      componentKey: 0,
    }
  },
  methods: {
    modelBooks: function (books) {
      const result = books.map(
        (book) => {
          return {
            id: book.id,
            title: book.title,
            synopsis: book.synopsis,
            quantity: 1,
            price: 100
          }
        }
      );
      return result;
    },
    AddToCart: async function (book) {
      console.log(this.client)
      setLockBook(this.client.id,book.id)
        .then((result) => {
          setItemToCartStorage(book);
          SetExpirationCart(result);
        })
        .catch((err) => {
          alert('Não há livros em estoque no momento.')
          
        })
    },
    forceRerenderCart: function () {
      this.componentKey += 1;
    }
  }
}
</script>

<style scoped>
.carouselExampleAutoplaying {
  width: 100% !important;
}

.carousel-inner {
  display: flex;
  align-content: center;
}

.img-carousel {
  height: 550px !important;
}

.card-img-top {
  height: 350px !important;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
}
</style>