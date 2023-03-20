<template>
	<div class="container">
		<div id="divDetailAddress" class="card mt-3 p-2 cardForm p-4">
			<label for="basic-url" class="form-label fs-3">Editar endereço</label>  
			<div class="row mt-3" v-if="address.nameIdentifier">
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
						<option v-for="option in options.typesHome" :value="option">
							{{ option }}
						</option>
						</select>
					</div>
				</div>

				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Tipo de logradouro</label>
					<div class="input-group">
						<select class="form-select" id="deliveryAddressTypePublicPlaceAddress" name="deliveryAddressTypePublicPlaceAddress" v-model="address.typePublicPlaceAddress">
						<option disabled value="">Escolha...</option>
						<option v-for="option in options.typesPublicPlace" :value="option">
							{{ option }}
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
						<option v-for="option in options.countries" :value="option">
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
						<option v-for="option in options.states" :value="option">
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
						<option v-for="option in options.cities" :value="option">
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
					<input type="text" class="form-control" id="deliveryAddressObservationAddress" name="deliveryAddressObservationAddress" v-model="address.observationAddress" aria-describedby="basic-addon3">
					</div>
				</div>
			</div>
		</div>

		<div class="row d-flex justify-content-between p-3">
			<router-link to="/" type="button" class="btn btn-outline-warning">Salvar</router-link>
		</div>
	</div>
</template>
 
<script>
import { getAddressById } from '../services/modules'

export default {
	name: "EditAdressClientView",
	data: function() {
		const typesHome = ['Casa', 'Apartamento'];
		const typesPublicPlace = ['Rua', 'Avenida', 'Estrada', 'Viela'];
		const countries = ['Brasil'];
		const cities = ['Itaquaquecetuba', 'São Miguel', 'Itaim Paulista'];
		const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
		const neighborhoods = ['Jardim Tropical', 'Vila Maria Rosa', 'Jardim Paineira'];

		const options = { typesHome, typesPublicPlace, countries, cities, states, neighborhoods };
		let address = {};

		getAddressById(1)
            .then((result) => {
				this.address = this.modelDetailAddress(result)
            })
            .catch((err) => {
                console.log('Falha na consulta getAllAddress', err)
            })

		return {
			address,
			options
		}
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
				typeHomeAddress: this.options.typesHome[address.typeResidence],
				typePublicPlaceAddress: this.options.typesPublicPlace[address.typeStreet],
				publicPlaceAddress: address.street,
				numberAddress: address.number,
				countryAddress: 'Brasil',
				stateAddress: address.state,
				cityAddress: address.city,
				neighborhoodAddress: address.neighborhood,
				observationAddress: address.obs
			}
		}
	}
}
</script>
 
<style></style>