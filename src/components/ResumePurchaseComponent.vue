<template>
    <div class="card cardResume col-md-4 minHeightCard">
        <div class="card-title">
            <div class="ms-4 mt-5">
                <label for=""><b>Resumo da compra</b></label>
            </div>
            <hr class="ms-4 me-4">

            <div class="ms-4 mt-5 d-flex justify-content-between me-4">
                <div>
                    <label for="">Produtos ({{ cart.totalQuantity }})</label>
                </div>
                <div>
                    <label for="">R${{ cart.finalPrice }}</label>
                </div>
            </div>

            <div v-show="cart.id_delivery_adress !== 0">
                <hr class="ms-4 me-4">
                <div class="ms-4 mt-5 d-flex justify-content-between me-4">
                    <div>
                        <label class="fs-6">Endereço</label>
                    </div>
                    <div>
                        <label class="form-text"> {{ deliveryAddress.nameIdentifier }}</label>
                    </div>
                </div>
                <div class="ms-4 mt-2 d-flex justify-content-between me-4">
                    <label class="form-text">{{ deliveryAddress.publicPlaceAddress }}, {{ deliveryAddress.numberAddress }} - {{ deliveryAddress.stateAddress }} - {{ deliveryAddress.neighborhoodAddress }}</label>
                </div>
            </div>
            
            <hr class="ms-4 me-4">
            <div class="ms-4 mt-4 d-flex justify-content-between me-4">
                <div>
                    <label for="">Total </label>
                </div>
                <div>
                    <label for="">R${{ cart.finalPrice }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCartStorage } from '@/storage/module';
import { getAddressById } from '@/services/modules';

export default {
    data: function () {
        let cart = getCartStorage();
        let deliveryAddress= {};

        if(cart.id_delivery_address !== 0){
            getAddressById(cart.id_delivery_adress)
                .then((result) => {
                    this.deliveryAddress = this.modelDetailAddress(result)
                })
                .catch((err) => {
                    console.log('Falha na consulta getAddressById', err)
                })
        }

        return {
            cart,
            componentKey: 0,
            deliveryAddress
        }
    },
    methods: {
		modelDetailAddress: function(address) {
			return {
				nameIdentifier: address.identification || '',
				cepAddress: address.zipCode || '',
				typeHomeAddress: address.typeResidence || '',
				typePublicPlaceAddress: address.typeStreet || '',
				publicPlaceAddress: address.street || '',
				numberAddress: address.number || '',
				countryAddress: 'Brasil' || '',
				stateAddress: address.state || '',
				cityAddress: address.city|| '',
				neighborhoodAddress: address.neighborhood|| '',
				observationAddress: address.obs|| '',
				typeAdress: address.typeAdress|| '',
				id: address.id || ''
			}
		}
    }
}
</script>

<style>

.minHeightCard {
    min-height: 400px;
}
</style>