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
                                            <button class="btn btn-outline-warning">Editar</button>
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
                                            <button class="btn btn-outline-warning">Editar</button>
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
export default {
    name: "AdressesClientView",
    data: function () {
        const homeAddress = [{
            cepAddress: '08577-130',
            publicPlaceAddress: 'Rua monte alto',
            numberAddress: '343',
            stateAddress: 'São Paulo',
            cityAddress: 'Itaquaquecetuba',
        }]

        const deliveryAddress = [{
                nameIdentifier: 'Entrega principal',
                cepAddress: '08577-130',
                publicPlaceAddress: 'Rua monte alto',
                numberAddress: '343',
                stateAddress: 'São Paulo',
                cityAddress: 'Itaquaquecetuba',
            },
            {
                nameIdentifier: 'Entrega casa nova',
                cepAddress: '08577-130',
                publicPlaceAddress: 'Rua monte alto',
                numberAddress: '343',
                stateAddress: 'São Paulo',
                cityAddress: 'Itaquaquecetuba',
            },
            {
                nameIdentifier: 'Entrega loja',
                cepAddress: '08577-130',
                publicPlaceAddress: 'Rua monte alto',
                numberAddress: '343',
                stateAddress: 'São Paulo',
                cityAddress: 'Itaquaquecetuba',
        }]
        
        const billingAddress = [{
            cepAddress: '08577-130',
            publicPlaceAddress: 'Rua monte alto',
            numberAddress: '343',
            stateAddress: 'São Paulo',
            cityAddress: 'Itaquaquecetuba',
        }]

        return {
            homeAddress,
            deliveryAddress,
            billingAddress
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