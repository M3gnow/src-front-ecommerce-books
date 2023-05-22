<template>
    <div class="container d-flex mt-2 mb-5" v-on:submit.prevent="checkForm">
        <div class="col-md-8 me-3">
            <form class="container" v-on:submit.prevent="checkForm">
                <div id="divDetailAddress" class="card mt-3 p-2 cardForm p-4">
                    <label for="basic-url" class="form-label fs-3">Adicione seu novo endereço</label>
                    <div class="row mt-3">
                        <div class="col-sm">
                            <label for="basic-url" class="form-label">Identificação</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="deliveryAddressNameIdentifier"
                                    name="deliveryAddressNameIdentifier" v-model="address.nameIdentifier"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-8">
                            <label for="basic-url" class="form-label">CEP</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="deliveryAddressCepAddress"
                                    name="deliveryAddressCepAddress" v-model="address.cepAddress"
                                    aria-describedby="basic-addon3">
                                <button class="btn btn-outline-warning" v-on:click="getAdress(address.cepAddress)">Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-6">
                            <label for="basic-url" class="form-label">Tipo de residencia</label>
                            <div class="input-group">
                                <select class="form-select" id="deliveryAddressTypeHomeAddress"
                                    name="deliveryAddressTypeHomeAddress" v-model="address.typeHomeAddress">
                                    <option disabled value="">Escolha...</option>
                                    <option v-for="option in options.typesHome" :value="option.id">
                                        {{ option.description }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <label for="basic-url" class="form-label">Tipo de logradouro</label>
                            <div class="input-group">
                                <select class="form-select" id="deliveryAddressTypePublicPlaceAddress"
                                    name="deliveryAddressTypePublicPlaceAddress" v-model="address.typePublicPlaceAddress">
                                    <option disabled value="">Escolha...</option>
                                    <option v-for="option in options.typesPublicPlace" :value="option.id">
                                        {{ option.description }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">


                        <div class="col-sm-6">
                            <label for="basic-url" class="form-label">Logradouro</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="deliveryAdressPublicPlaceAddress"
                                    name="deliveryAdressPublicPlaceAddress" v-model="address.publicPlaceAddress"
                                    aria-describedby="basic-addon3" disabled="true">
                            </div>
                        </div>

                        <div class="col-sm-2">
                            <label for="basic-url" class="form-label">Numero</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="deliveryAdressNumberAddress"
                                    name="deliveryAdressNumberAddress" v-model="address.numberAddress"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-3">
                            <label for="basic-url" class="form-label">Pais</label>
                            <div class="input-group">
                                <select class="form-select" id="deliveryAddressCountryAddress"
                                    name="deliveryAddressCountryAddress" v-model="address.countryAddress"
                                    disabled="true">
                                    <option disabled value="">Escolha...</option>
                                    <option v-for="option in options.countries" :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <label for="basic-url" class="form-label">Estado</label>
                            <div class="input-group">
                                <select class="form-select" id="deliveryAddressStateAddress"
                                    name="deliveryAddressStateAddress" v-model="address.stateAddress"
                                    disabled="true">
                                    <option disabled value="">Escolha...</option>
                                    <option v-for="option in options.states" :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <label for="basic-url" class="form-label">Cidade</label>
                            <div class="input-group">
                                <select class="form-select" id="deliveryAddressCityAddress"
                                    name="deliveryAddressCityAddress" v-model="address.cityAddress"
                                    disabled="true">
                                    <option disabled value="">Escolha...</option>
                                    <option v-for="option in options.cities" :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>

                        </div>
                        <div class="col-sm-3">
                            <label for="basic-url" class="form-label">Bairro</label>
                            <div class="input-group">
                                <select class="form-select" id="deliveryAddressNeighborhoodAddress"
                                    name="deliveryAddressNeighborhoodAddress" v-model="address.neighborhoodAddress"
                                    disabled="true">
                                    <option disabled value="">Escolha...</option>
                                    <option v-for="option in options.neighborhoods" :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm">
                            <label for="basic-url" class="form-label">Observações</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="deliveryAddressObservationAddress"
                                    name="deliveryAddressObservationAddress" v-model="address.observationAddress"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>


                    <div class="row d-flex justify-content-between p-3">
                        <div class="form-check d-flex">
                            <div class="p-3">
                                <input class="form-check-input" type="checkbox" v-model="salvarEndereco" id="salvarEndereco" >
                            </div>
                            <div class="p-3 me-5">
                                <h5>Salvar endereço de entrega</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div class="col-md-12 d-flex justify-content-end mt-3">
                <router-link to="/purchase/payments" v-on:click="createAddress(address)">
                    <div class="btn btn-primary">
                        Continuar
                    </div>
                </router-link>
            </div>
        </div>

        <ResumePurchaseComponent />
    </div>
</template>

<script>
import CreateAddressDeliveryComponentVue from '@/components/CreateAddressDeliveryComponent.vue'
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'
import { getAddressByCep } from '../services/modules'
import { createAddressByClientId } from '../services/modules'
import { getClientStorage,setAdressDeliveryToCartStorage } from '@/storage/module'

export default {
    name: "PurchaseCreateAddress",
    components: {
        CreateAddressDeliveryComponentVue,
        ResumePurchaseComponent
    },
    data: function () {
        //const { params } = useRoute();
        let errors = [];
        let salvarEndereco = false;
        const typesHome = [{
            id: 0,
            description: 'Casa'
        }, {
            id: 1,
            description: 'Apartamento'
        }];

        const typesPublicPlace = [{
            id: 0,
            description: 'Rua'
        }, {
            id: 1,
            description: 'Avenida'
        }, {
            id: 2,
            description: 'Estrada'
        }, {
            id: 3,
            description: 'Viela'
        }];

        const countries = ['Brasil'];
        const cities = ['Itaquaquecetuba', 'São Miguel', 'Itaim Paulista'];
        const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
        const neighborhoods = ['Jardim Tropical', 'Vila Maria Rosa', 'Jardim Paineira'];

        const options = { typesHome, typesPublicPlace, countries, cities, states, neighborhoods };
        let address = {
            nameIdentifier: '',
            cepAddress: '',
            typeHomeAddress: '',
            typePublicPlaceAddress: '',
            publicPlaceAddress: '',
            numberAddress: '',
            countryAddress: '',
            stateAddress: '',
            cityAddress: '',
            neighborhoodAddress: '',
            observationAddress: '',
            typeAdress: 1
        }

        return { address, options, errors, salvarEndereco }
    },
    methods: {
        modelCreateAddress: function(clientId, address) {
			const modelAddress = {
				id_client: clientId,
				street: address.publicPlaceAddress,
				number: address.numberAddress,
				obs: address.observationAddress || '',
				zipCode: address.cepAddress,
				neighborhood: address.neighborhoodAddress,
				city: address.cityAddress,
				state: address.stateAddress,
				country: address.countryAddress,
				typeAdress: parseInt(address.typeAdress),
				typeResidence: parseInt(address.typeHomeAddress),
				typeStreet: parseInt(address.typePublicPlaceAddress),
                typeAdress: 1
			}

			if (modelAddress.typeAdress === 1) {
				modelAddress.identification = address.nameIdentifier;
			} else {
				modelAddress.identification = ''
			}

			return modelAddress;
        },
        createAddress: function(address){
            let clientId = 0;
            if(salvarEndereco.isChecked){
                clientId = getClientStorage().id;
            }
            const data = this.modelCreateAddress(clientId, address)

            createAddressByClientId(data).then((result) => {
                    const id = result;
                    setAdressDeliveryToCartStorage(id);
                })
                .catch((err) => {
                    console.log('Falha na consulta createAddressByClientId', err)
                })
        },
        getAdress: function (cep) {
            getAddressByCep(cep)
                .then((result) => {
                    this.address = this.modelDetailAddress(result);
                    result.zipCode = cep;
                    return this.address;
                })
                .catch((err) => {
                    console.log('Falha na consulta getAddressByCep', err)
                })
        },
        modelDetailAddress: function (address) {
            const existCity = this.options.cities
                .find((city) => city === address.city)
            const existNeighborhood = this.options.neighborhoods
                .find((neighborhood) => neighborhood === address.neighborhood)

            if (!existNeighborhood) {
                this.options.neighborhoods.push(address.neighborhood);
            }

            if (!existCity) {
                this.options.cityAddress.push(address.city);
            }

            return {
                cepAddress: address.zipCode,
                publicPlaceAddress: address.street,
                countryAddress: 'Brasil',
                stateAddress: address.state,
                cityAddress: address.city,
                neighborhoodAddress: address.neighborhood,
            }
        }

    }
}
</script>

<style></style>