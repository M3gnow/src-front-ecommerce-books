<template :key="componentKey">
    <div class="card border-success mb-3 p-2" v-for="item in cart.itens" v-bind:key="item.id">
        <div class="card-header bg-transparent border-success">{{ item.title }}</div>

        <div class="card-body text-success">
            <div class="d-flex">
                <div class="col-md-3">
                    <img src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
                </div>

                <div class="row detailQuantity p-3">
                    <div class="card-body d-flex justify-content-between">
                        <button class="btn btn-outline-success" :disabled="item.quantity < 1">
                            <i class="bi bi-arrow-left-circle-fill sizeButtonsAddAndRemove"
                                v-on:click="RemoveItem(item)"></i>
                        </button>

                        <h4>{{ item.quantity }}</h4>

                        <button class="btn btn-outline-success">
                            <i class="bi bi-arrow-right-circle-fill sizeButtonsAddAndRemove"
                                v-on:click="AddUnit(item)"></i>
                        </button>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <label for="">111 disponiveis</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between card-footer bg-transparent border-success">
            <div>SubTotal</div>
            <div>R$ {{ parseFloat(item.price * item.quantity).toFixed(2) }}</div>
        </div>

    </div>
    <div class="card border-success mb-3 p-2">
        <div class="d-flex justify-content-between card-header bg-transparent border-success">
            <div>Total Final</div>
            <div>R$ {{ parseFloat(cart.itens.reduce((acumulated, current) => acumulated + (current.price * current.quantity), 0)).toFixed(2) }}</div>
        </div>

        <button type="button" class="btn btn-outline-success mt-2" data-bs-dismiss="offcanvas" aria-label="Close" :disabled="cart.itens.length <= 0">
            <!-- Finalizar Compra -->
            <router-link to="/purchase" class="forceHover colorForce">
                Finalizar Compra
            </router-link>
        </button>
    </div>
</template>

<script>
import { initCartStorage, AddUnitToItemCartStorage, RemoveUnitToItemCartStorage, getCartStorage,getClientStorage } from '@/storage/module';
import { ref, onMounted } from 'vue'
import {setLockBook} from '../services/modules'

export default {
    name: "CartComponent",

    data: function () {
        let cart = initCartStorage();
        const client = getClientStorage();
        return {
            cart,
            componentKey: 0,
            client
        }
    },
    methods: {
        AddUnit: function (item) {
            setLockBook(this.client.id, item.id,1)
                .then((result) => {
                    AddUnitToItemCartStorage(item);
                })
                .catch((err) => {
                    alert('Não há livros em estoque no momento.')
                })
            
            this.cart.itens = this.cart.itens.map((dataDOM) => {
                if (dataDOM.id !== item.id) {
                    return dataDOM
                }

                dataDOM.quantity++
                return dataDOM;
            });

            // this.cart = getCartStorage();
            // this.forceRerender();
        },
        RemoveItem: function async (item) {
            setLockBook(this.client.id, item.id,-1)
                .then((result) => {
                    RemoveUnitToItemCartStorage(item);
                })
                .catch((err) => {
                    alert('Falaha ao remover item do carrinho.')
                })
            

            if (item.quantity === 1) {
                this.cart.itens = this.cart.itens.filter((dataDOM) => dataDOM.id != item.id)
            }

            this.cart.itens = this.cart.itens.map((dataDOM) => {
                if (dataDOM.id !== item.id) {
                    return dataDOM
                }

                dataDOM.quantity--
                return dataDOM;
            });

            // this.cart = getCartStorage();
            // this.forceRerender();
        },
        forceRerender() {
            this.componentKey += 1;
        }
    },
    mounted() {
        this.cart = getCartStorage();
    }
}

</script>

<style>
.value {
    display: flex;
    justify-content: end;
    padding-right: 40px;
}

.sizeButtonsAddAndRemove {
    font-size: 18px;
}

.detailQuantity {
    text-align: center;
}

img {
    height: 110px;
    width: 70px;
}

.colorForce {
    color: #198754;
    text-decoration: none !important
}

.forceHover:hover {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
}
</style>