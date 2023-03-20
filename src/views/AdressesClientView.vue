<template>
    <div class="container card mt-3 p-4 cardForm">
        <br>
        <div class="form-label fs-3">
            Endereços
        </div>
        <div class="card">
            <div class="card-header cardHeader">
                <div class="form-label">
                    Endereço residencial
                </div>
            </div>
            <div class="card-body" v-for="address of homeAddress">
                <div class="row">
                    <div class="col-sm-11">
                        <div class="form-label">
                            {{ address.publicPlaceAddress }}, {{ address.numberAddress }}
                        </div>
                        <div class="form-text">
                            {{ address.cepAddress }} - {{ address.stateAddress }} - {{ address.cityAddress }}
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <RouterLink to="/cliente/enderecos/editar" class="btn btn-outline-warning">Editar</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button cardHeader collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="false" aria-controls="collapseOne">
                            Endereços de entrega
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="card cardForm mt-3" v-for="address of deliveryAddress">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-11">
                                            <div class="form=label">
                                                {{ address.nameIdentifier }}
                                            </div>
                                            <div class="form-text">
                                                {{ address.publicPlaceAddress }}, {{ address.numberAddress }}
                                            </div>
                                            <div class="form-text">
                                                {{ address.cepAddress }} - {{ address.stateAddress }} - {{ address.cityAddress }}
                                            </div>
                                        </div>
                                        <div class="col-sm-1">
                                            <RouterLink to="/cliente/enderecos/editar" class="btn btn-outline-warning">Editar</RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-3">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button cardHeader collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Endereços de cobrança
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="card cardForm mt-3" v-for="address of billingAddress">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-11">
                                            <div class="form-text">
                                                {{ address.publicPlaceAddress }}, {{ address.numberAddress }}
                                            </div>
                                            <div class="form-text">
                                                {{ address.cepAddress }} - {{ address.stateAddress }} - {{ address.cityAddress }}
                                            </div>
                                        </div>
                                        <div class="col-sm-1">
                                            <RouterLink to="/cliente/enderecos/editar" class="btn btn-outline-warning">Editar</RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllAddress } from '../services/modules'

export default {
    name: "AdressesClientView",
    data: function () {
        let homeAddress, deliveryAddress, billingAddress = [];

        getAllAddress(1)
            .then((result) => {
                const homeFilter = result.find((address) => address.typeAdress === 0);
                const deliveryFilter = result.filter((address) => address.typeAdress === 1)
                const billingFilter = result.filter((address) => address.typeAdress === 2)

                this.homeAddress = this.modelAddress([homeFilter])
                this.deliveryAddress = this.modelAddress(deliveryFilter)
                this.billingAddress = this.modelAddress(billingFilter)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllAddress', err)
            })

        return {
            homeAddress,
            deliveryAddress,
            billingAddress
        }
    },
    methods: {
        modelAddress: function(allAddress) {
            const result = allAddress.map((address) => {
                return {
                    id: address.id,
                    nameIdentifier: address.typeAddress === 1 ? address.identification : '',
                    cepAddress: address.zipCode,
                    publicPlaceAddress: address.street,
                    numberAddress: address.number,
                    stateAddress: address.state,
                    cityAddress: address.city,
                    country: 'Brazil'
                }
            })

            return result;
        }
    }
}
</script>
<style>

.cardHeader {
    background-color: wheat !important;
}

.cardForm {
    background-color: lightgoldenrodyellow !important
}

</style>