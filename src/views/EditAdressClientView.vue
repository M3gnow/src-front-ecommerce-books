<template>
	<form class="container" v-on:submit.prevent="checkForm">
		<div id="divDetailAddress" class="card mt-3 p-2 cardForm p-4">
			<label for="basic-url" class="form-label fs-3">Editar endereço</label>  
			<div class="row mt-3" v-if="address.typeAdress === 1">
				<div class="col-sm">
					<label for="basic-url" class="form-label">Identificação</label>
					<div class="input-group">
						<input type="text" class="form-control" id="deliveryAddressNameIdentifier" name="deliveryAddressNameIdentifier" v-model="address.nameIdentifier" aria-describedby="basic-addon3">
					</div>
				</div>
			</div>

			<div class="row mt-3">
				<div class="col-sm-2">
					<label for="basic-url" class="form-label">CEP</label>
					<div class="input-group">
						<input type="text" class="form-control" id="deliveryAddressCepAddress" name="deliveryAddressCepAddress" v-model="address.cepAddress" aria-describedby="basic-addon3">
					</div>
				</div>

				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Tipo de residencia</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressTypeHomeAddress" name="deliveryAddressTypeHomeAddress" v-model="address.typeHomeAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.typesHome" :value="option.id" :key="option.id">
							{{ option.description }}
						</option>
						</select>
					</div>
				</div>

				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Tipo de logradouro</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressTypePublicPlaceAddress" name="deliveryAddressTypePublicPlaceAddress" v-model="address.typePublicPlaceAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.typesPublicPlace" :value="option.id" :key="option.id">
							{{ option.description }}
						</option>
						</select>
					</div>
				</div>

				<div class="col-sm-4">
					<label for="basic-url" class="form-label">Logradouro</label>
					<div class="input-group">
						<input type="text" class="form-control" id="deliveryAdressPublicPlaceAddress" name="deliveryAdressPublicPlaceAddress" v-model="address.publicPlaceAddress" aria-describedby="basic-addon3">
					</div>
				</div>

				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Numero</label>
					<div class="input-group">
						<input type="text" class="form-control" id="deliveryAdressNumberAddress" name="deliveryAdressNumberAddress" v-model="address.numberAddress" aria-describedby="basic-addon3">
					</div>
				</div>
			</div>

			<div class="row mt-3">
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Pais</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressCountryAddress" name="deliveryAddressCountryAddress" v-model="address.countryAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.countries" :value="option" :key="option">
							{{ option }}
						</option>
						</select>
					</div>
				</div>
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Estado</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressStateAddress" name="deliveryAddressStateAddress" v-model="address.stateAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.states" :value="option" :key="option">
							{{ option }}
						</option>
						</select>
					</div>
				</div>
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Cidade</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressCityAddress" name="deliveryAddressCityAddress" v-model="address.cityAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.cities" :value="option" :key="option">
							{{ option }}
						</option>
						</select>
					</div>
					
				</div>
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Bairro</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressNeighborhoodAddress" name="deliveryAddressNeighborhoodAddress" v-model="address.neighborhoodAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.neighborhoods" :value="option" :key="option">
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
					<input type="text" class="form-control" id="deliveryAddressObservationAddress" name="deliveryAddressObservationAddress" v-model="address.observationAddress" aria-describedby="basic-addon3">
					</div>
				</div>
			</div>
		</div>

		<div class="row d-flex justify-content-between p-3">
            <button class="btn btn-outline-warning">Salvar</button>
        </div>
	</form>
</template>
 
<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { getAddressById, changeAddressById } from '../services/modules'
import { useRoute } from 'vue-router'

export default {
	name: "EditAdressClientView",
	data: function() {
		const { params } = useRoute();

		let errors = [];
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
		let address = {};

		getAddressById(params.address_id)
            .then((result) => {
				this.address = this.modelDetailAddress(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAddressById', err)
            })

		return { address, options, errors, params }
	},
	methods: {
		modelDetailAddress: function(address) {
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
				nameIdentifier: address.typeAdress === 1 ? address.identification : '',
				cepAddress: address.zipCode,
				typeHomeAddress: address.typeResidence,
				typePublicPlaceAddress: address.typeStreet,
				publicPlaceAddress: address.street,
				numberAddress: address.number,
				countryAddress: 'Brasil',
				stateAddress: address.state,
				cityAddress: address.city,
				neighborhoodAddress: address.neighborhood,
				observationAddress: address.obs,
				typeAdress: address.typeAdress,
				id: address.id
			}
		},
		checkForm: function() {
            this.errors = []
			let isDeliveryExistError = false;

			if (!this.address.cepAddress || !this.address.publicPlaceAddress 
				|| !this.address.numberAddress || !this.address.countryAddress 
				|| !this.address.stateAddress || !this.address.cityAddress 
				|| !this.address.neighborhoodAddress ||
				(!this.address.typeHomeAddress && this.address.typeHomeAddress !== 0) ||
				(!this.address.typePublicPlaceAddress && this.address.typeHomeAddress !== 0)
			) {
				if (this.address.typeAdress === 0) {
					this.errors.push({ message: 'Resta informações pendentes no endereço residencial' })
				}

				if (this.address.typeAdress === 1) {
					isDeliveryExistError = true;
					this.errors.push({ message: 'Resta informações pendentes no endereço de entrega' })
				}

				if (this.address.typeAdress === 2) {
					this.errors.push({ message: 'Resta informações pendentes no endereço de cobrança' })
				}
			}

			if (!this.address.nameIdentifier && this.address.typeAdress === 1 && !isDeliveryExistError) {
				this.errors.push({ message: 'Resta informações pendentes no endereço de entrega' })
			}

            if (this.errors.length) {
                this.notify()
            } else {
				//pending redirect page
                this.changeAddress(this.address)
					.then((result) => console.log('sucess update'))
                    .catch((err) => console.log('error update'))
            }
        },
        changeAddress: function(address) {
            const data = this.modelChangeAddress(address)
			
            changeAddressById(data)
                .then((result) => {
                    alert('Sucesso alteracao de endereço')
                })
                .catch((err) => {
                    alert('Falha alteracao de endereço')
                    console.log('Falha no cadastro changeAddressById', err)
                })
        },
        modelChangeAddress: function(address) {
            const modelAddress = {
				id: address.id,
				street: address.publicPlaceAddress,
				number: address.numberAddress,
				obs: address.observationAddress ? address.observationAddress : '',
				zipCode: address.cepAddress,
				neighborhood: address.neighborhoodAddress,
				city: address.cityAddress,
				state: address.stateAddress,
				country: address.countryAddress,
				typeAdress: address.typeAdress,
				typeResidence: address.typeHomeAddress,
				typeStreet: address.typePublicPlaceAddress
			}

			if (modelAddress.typeAdress === 1) {
				modelAddress.identification = address.nameIdentifier;
			} else {
				modelAddress.identification = ''
			}

			return modelAddress;
        },
		notify: function() {
            this.errors.map((element) => {
                toast(element.message, {
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.BOTTOM_CENTER, 
                })
            })
        },
	}
}
</script>
 
<style></style>