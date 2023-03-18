<template>
  <form class="container" action="" v-on:submit.prevent="checkForm">
    <div id="divNome" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Escolha como você quer que te chamemos</label>
      <div class="form-text">O nome que você escolher será será exibido para todas as pessoas que interagirem com você
        no LesBooks.</div>
      <div class="row mt-3">
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Nome</label>
          <div class="input-group">
            <input type="text" class="form-control" id="name" name="name" v-model="client.name" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Sobrenome</label>
          <div class="input-group">
            <input type="text" class="form-control" id="lastName" name="lastName" v-model="client.lastName" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
    </div>

    <div id="divEmail" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Digite seu e-mail</label>
      <div class="form-text">Certifique-se de que você tenha acesso a ele.</div>
      <div class="col-sm">
        <div class="input-group">
          <input type="email" class="form-control" id="email" name="email" v-model="client.email" aria-describedby="basic-addon3">
        </div>
      </div>
    </div>

    <div id="divSenha" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Digite sua senha</label>
      <div class="form-text">Ela deve conter ao menos 8 caracteres.</div>
      <div class="form-text">Incluindo letras, numeros e caracteres especiais.</div>
      <div class="form-text">Não coloque seu nome, sobrenome, e-mail nem caracteres idênticos e consecutivos.</div>
      <div class="row mt-3">
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Senha</label>
          <div class="input-group">
            <input type="password" class="form-control" id="firstPassword" name="firstPassword" v-model="client.firstPassword" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Confirme sua senha</label>
          <div class="input-group">
            <input type="password" class="form-control" id="secondPassword" name="secondPassword" v-model="client.secondPassword" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
    </div>

    <div id="divDadosPessoais" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Diga mais sobre você</label>
      <div class="form-text">Os dados informados no formulário abaixo não serão compartilhados com terceiros</div>
      <div class="row mt-3">
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">CPF</label>
          <div class="input-group">
            <input type="text" class="form-control" id="cpf" name="cpf" v-model="client.cpf" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">Data de nascimento</label>
          <div class="input-group">
            <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth" v-model="client.dateOfBirth" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">Genero</label>
          <div class="input-group">
            <select class="form-select" id="gender" name="gender" v-model="client.gender">
              <option disabled value="">Escolha...</option>
              <option v-for="option in options.genders" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <br>
      <div class="row" id="divContato">
        <label for="basic-url" class="form-label fs-4">Contato</label>
        <div class="form-text">É necessário informar ao menos um número de telefone.</div>
        <div class="row mt-3">
          <div class="col-sm-4">
            <label for="basic-url" class="form-label">Tipo de telefone</label>
            <div class="input-group">
              <select class="form-select" id="typePhone" name="typePhone" v-model="client.typePhone">
              <option disabled value="">Escolha...</option>
                <option v-for="option in options.typesPhone" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-2">
            <label for="basic-url" class="form-label">DDD</label>
            <div class="input-group">
              <input type="text" class="form-control" id="dddLocation" name="dddLocation" v-model="client.dddLocation" aria-describedby="basic-addon3">
            </div>
          </div>
          <div class="col-sm-4">
            <label for="basic-url" class="form-label">Numero</label>
            <div class="input-group">
              <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" v-model="client.phoneNumber" aria-describedby="basic-addon3">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="divEnderecos" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Endereços</label>
      <div class="form-text">Para realizarmos seu cadastro será necessário informar 3 endereços</div>
    </div>

    <div id="divEnderecoResidencial" class="card mt-3 p-2 cardForm p-4">
      <label class="form-text fs-5">Endereço residencial</label>
      <div class="row mt-3">
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">CEP</label>
          <div class="input-group">
            <input type="text" class="form-control" id="homeAddressCepAddress" name="homeAddressCepAddress" v-model="client.homeAddress.cepAddress" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">Tipo de residencia</label>
          <div class="input-group">
            <select class="form-select" id="homeAddressTypeHomeAddress" name="homeAddressTypeHomeAddress" v-model="client.homeAddress.typeHomeAddress">
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
            <select class="form-select" id="homeAddressTypePublicPlaceAddress" name="homeAddressTypePublicPlaceAddress" v-model="client.homeAddress.typePublicPlaceAddress">
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
            <input type="text" class="form-control" id="homeAdressPublicPlaceAddress" name="homePublicPlaceAddress" v-model="client.homeAddress.publicPlaceAddress" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">Numero</label>
          <div class="input-group">
            <input type="text" class="form-control" id="homeAdressNumberAddress" name="homeAdressNumberAddress" v-model="client.homeAddress.numberAddress" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Pais</label>
          <div class="input-group">
            <select class="form-select" id="homeAddressCountryAddress" name="homeAddressCountryAddress" v-model="client.homeAddress.countryAddress">
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
            <select class="form-select" id="homeAddressStateAddress" name="homeAddressStateAddress" v-model="client.homeAddress.stateAddress">
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
            <select class="form-select" id="homeAddressCityAddress" name="homeAddressCityAddress" v-model="client.homeAddress.cityAddress">
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
            <select class="form-select" id="homeAddressNeighborhoodAddress" name="homeAddressNeighborhoodAddress" v-model="client.homeAddress.neighborhoodAddress">
            <option disabled value="">Escolha...</option>
              <option v-for="option in options.neighborhoods" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <label for="basic-url" class="form-label">Observações</label>
            <div class="input-group">
              <input type="text" class="form-control" id="homeAddressObservationAddress" name="homeAddressObservationAddress" v-model="client.homeAddress.observationAddress" aria-describedby="basic-addon3">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="divEnderecoEntrega" class="card mt-3 p-2 cardForm p-4">
      <label class="form-text fs-5">Endereço de entrega</label>    
      <div class="row mt-3">
        <div class="col-sm">
          <label for="basic-url" class="form-label">Identificação <label class="form-text"> (Utilize um nome composto na
              identificação do endereço)</label></label>
          <div class="input-group">
            <input type="text" class="form-control" id="deliveryAddressNameIdentifier" name="deliveryAddressNameIdentifier" v-model="client.deliveryAddress.nameIdentifier" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">CEP</label>
          <div class="input-group">
            <input type="text" class="form-control" id="deliveryAddressCepAddress" name="deliveryAddressCepAddress" v-model="client.deliveryAddress.cepAddress" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">Tipo de residencia</label>
          <div class="input-group">
            <select class="form-select" id="deliveryAddressTypeHomeAddress" name="deliveryAddressTypeHomeAddress" v-model="client.deliveryAddress.typeHomeAddress">
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
            <select class="form-select" id="deliveryAddressTypePublicPlaceAddress" name="deliveryAddressTypePublicPlaceAddress" v-model="client.deliveryAddress.typePublicPlaceAddress">
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
            <input type="text" class="form-control" id="deliveryAdressPublicPlaceAddress" name="deliveryAdressPublicPlaceAddress" v-model="client.deliveryAddress.publicPlaceAddress" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">Numero</label>
          <div class="input-group">
            <input type="text" class="form-control" id="deliveryAdressNumberAddress" name="deliveryAdressNumberAddress" v-model="client.deliveryAddress.numberAddress" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Pais</label>
          <div class="input-group">
            <select class="form-select" id="deliveryAddressCountryAddress" name="deliveryAddressCountryAddress" v-model="client.deliveryAddress.countryAddress">
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
            <select class="form-select" id="deliveryAddressStateAddress" name="deliveryAddressStateAddress" v-model="client.deliveryAddress.stateAddress">
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
            <select class="form-select" id="deliveryAddressCityAddress" name="deliveryAddressCityAddress" v-model="client.deliveryAddress.cityAddress">
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
            <select class="form-select" id="deliveryAddressNeighborhoodAddress" name="deliveryAddressNeighborhoodAddress" v-model="client.deliveryAddress.neighborhoodAddress">
            <option disabled value="">Escolha...</option>
              <option v-for="option in options.neighborhoods" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <label for="basic-url" class="form-label">Observações</label>
            <div class="input-group">
              <input type="text" class="form-control" id="deliveryAddressObservationAddress" name="deliveryAddressObservationAddress" v-model="client.deliveryAddress.observationAddress" aria-describedby="basic-addon3">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="divEnderecoCobranca" class="card mt-3 p-2 cardForm p-4">
      <label class="form-text fs-5">Endereço de cobrança</label>
      <div class="row mt-3">
          <div class="col-sm-2">
            <label for="basic-url" class="form-label">CEP</label>
            <div class="input-group">
              <input type="text" class="form-control" id="billingAddressCepAddress" name="billingAddressCepAddress" v-model="client.billingAddress.cepAddress" aria-describedby="basic-addon3">
            </div>
          </div>
          <div class="col-sm-2">
            <label for="basic-url" class="form-label">Tipo de residencia</label>
            <div class="input-group">
              <select class="form-select" id="billingAddressTypeHomeAddress" name="billingAddressTypeHomeAddress" v-model="client.billingAddress.typeHomeAddress">
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
              <select class="form-select" id="billingAddressTypePublicPlaceAddress" name="billingAddressTypePublicPlaceAddress" v-model="client.billingAddress.typePublicPlaceAddress">
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
              <input type="text" class="form-control" id="billingAdressPublicPlaceAddress" name="billingPublicPlaceAddress" v-model="client.billingAddress.publicPlaceAddress" aria-describedby="basic-addon3">
            </div>
          </div>
          <div class="col-sm-2">
            <label for="basic-url" class="form-label">Numero</label>
            <div class="input-group">
              <input type="text" class="form-control" id="billingAdressNumberAddress" name="billingAdressNumberAddress" v-model="client.billingAddress.numberAddress" aria-describedby="basic-addon3">
            </div>
          </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Pais</label>
          <div class="input-group">
            <select class="form-select" id="billingAddressCountryAddress" name="billingAddressCountryAddress" v-model="client.billingAddress.countryAddress">
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
            <select class="form-select" id="billingAddressStateAddress" name="billingAddressStateAddress" v-model="client.billingAddress.stateAddress">
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
            <select class="form-select" id="billingAddressCityAddress" name="billingAddressCityAddress" v-model="client.billingAddress.cityAddress">
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
            <select class="form-select" id="billingAddressNeighborhoodAddress" name="billingAddressNeighborhoodAddress" v-model="client.billingAddress.neighborhoodAddress">
            <option disabled value="">Escolha...</option>
              <option v-for="option in options.neighborhoods" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <label for="basic-url" class="form-label">Observações</label>
            <div class="input-group">
              <input type="text" class="form-control" id="billingAddressObservationAddress" name="billingAddressObservationAddress" v-model="client.billingAddress.observationAddress" aria-describedby="basic-addon3">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="divCartoes" class="card mt-3 p-2 cardForm p-4">
      <label for="basic-url" class="form-label fs-3">Cartões</label>
      <div class="form-text">(Após a finalização do cadastro é possivel adicionar mais de um cartão,
        basta acessar o seu perfil.)</div>
      <div class="row">
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">Bandeira</label>
          <div class="input-group">
            <select class="form-select" id="creditCardFlagCard" name="creditCardFlagCard" v-model="client.creditCard.flagCard">
            <option disabled value="">Escolha...</option>
              <option v-for="option in options.flags" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-sm-7">
          <label for="basic-url" class="form-label">Numero do cartão</label>
          <div class="input-group">
            <input type="text" class="form-control" id="numberCard" name="numberCard" v-model="client.creditCard.numberCard" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Validade</label>
          <div class="input-group">
            <input type="date" class="form-control" id="validityCard" name="validityCard" v-model="client.creditCard.validityCard" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-9">
          <label for="basic-url" class="form-label">Nome <label class="form-text">(Informar como impresso nocartão)</label></label>
          <div class="input-group">
            <input type="text" class="form-control" id="nameCard" name="nameCard" v-model="client.creditCard.nameCard" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Codigo de segurança</label>
          <div class="input-group">
            <input type="text" class="form-control" id="codeSecurityCard" name="codeSecurityCard" v-model="client.creditCard.codeSecurityCard" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <br>
    </div>

    <div class="row d-flex justify-content-between p-3">
      <button class="btn btn-outline-warning">Finalizar</button>
    </div>

    <!-- <div class="row d-flex justify-content-between p-3">
      <router-link to="/" type="button" class="btn btn-outline-warning" @click="logOfObject">Finalizar</router-link>
    </div> -->
  </form>
</template>


<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: "CreateClientComponent",
  data: function() {
    console.log('MEGNOW START')
    const genders = [ 'Femenino', 'Masculino', 'Prefiro não informar'];
    const errors = [];
    const typesPhone = ['Fixo', 'Celular'];
    const flags = ['MasterCard', 'Visa', 'Elo'];
    const typesHome = ['Casa', 'Apartamento', 'Chalé'];
    const typesPublicPlace = ['Rua', 'Estrada', 'Avenida'];
    const countries = ['Brasil', 'Argentina', 'Peru'];
    const cities = ['Itaquaquecetuba', 'São Miguel', 'Itaim Paulista'];
    const states = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];
    const neighborhoods = ['Jardim Tropical', 'Vila Maria Rosa', 'Jardim Paineira'];
    
    const options = { typesPhone, genders, flags, typesHome, typesPublicPlace, countries, cities, states, neighborhoods };

    const address = {
      cepAddress: '',
      typeHomeAddress: '',
      typePublicPlaceAddress: '',
      publicPlaceAddress: '',
      numberAddress: '',
      countryAddress: '',
      stateAddress: '',
      cityAddress: '',
      neighborhoodAddress: '',
      observationAddress: ''
    }
    const deliveryAddress = {
      ...address,
      nameIdentifier: ''
    }
    const billingAddress = {
      ...address,
    }
    const homeAddress = {
      ...address,
    }
    const creditCard = {
      flagCard: '',
      numberCard: '',
      validityCard: '',
      nameCard: '',
      codeSecurityCard: ''
    }
    const client = {
      name: '',
      lastName: '',
      email: '',
      firstPassword: '',
      secondPassword: '',
      cpf: '',
      dateOfBirth: '',
      gender: '',
      selectedGender: [],
      phoneNumber: '',
      dddLocation: '',
      typePhone: '',
      deliveryAddress,
      billingAddress,
      homeAddress,
      creditCard,
      selectedGender: ''
    }

    return { client, options, errors: [] }
  },
  methods: {
    logOfObject: function() {
      console.log('CLIENT VALUES', JSON.stringify(this.client))
    },
    checkForm: function() {
      this.errors = []

      if (!this.client.name || !this.client.lastName) {
        this.errors.push({ message: 'Nome e Sobrenome precisam ser preenchidos' })
      }

      if (!this.client.email) {
        this.errors.push({ message: 'Email precisa ser preenchido' })
      }

      if (!this.client.firstPassword || !this.client.secondPassword) {
        this.errors.push({ message: 'Seu cadastro precisa de uma senha valida e confirmada' })
      }

      if (!this.client.cpf || !this.client.dateOfBirth 
        || !this.client.gender || !this.client.typePhone 
        || !this.client.dddLocation || !this.client.phoneNumber) {
        this.errors.push({ message: 'Precisamos que diga mais sobre você' })
      }

      if (!this.client.homeAddress.cepAddress || !this.client.homeAddress.typeHomeAddress 
        || !this.client.homeAddress.typePublicPlaceAddress || !this.client.homeAddress.publicPlaceAddress 
        || !this.client.homeAddress.numberAddress || !this.client.homeAddress.countryAddress 
        || !this.client.homeAddress.stateAddress || !this.client.homeAddress.cityAddress 
        || !this.client.homeAddress.neighborhoodAddress
      ) {
        this.errors.push({ message: 'Resta informações pendentes no endereço residencial' })
      }

      if (!this.client.deliveryAddress.nameIdentifier || !this.client.deliveryAddress.cepAddress 
        || !this.client.deliveryAddress.typeHomeAddress || !this.client.deliveryAddress.typePublicPlaceAddress
        || !this.client.deliveryAddress.publicPlaceAddress || !this.client.deliveryAddress.numberAddress
        || !this.client.deliveryAddress.countryAddress || !this.client.deliveryAddress.stateAddress
        || !this.client.deliveryAddress.cityAddress || !this.client.deliveryAddress.neighborhoodAddress
      ) {
        this.errors.push({ message: 'Resta informações pendentes no endereço de entrega' })
      }

      if (!this.client.billingAddress.cepAddress || !this.client.billingAddress.typeHomeAddress 
        || !this.client.billingAddress.typePublicPlaceAddress || !this.client.billingAddress.publicPlaceAddress 
        || !this.client.billingAddress.numberAddress || !this.client.billingAddress.countryAddress 
        || !this.client.billingAddress.stateAddress || !this.client.billingAddress.cityAddress 
        || !this.client.billingAddress.neighborhoodAddress
      ) {
        this.errors.push({ message: 'Resta informações pendentes no endereço de cobrança' })
      }

      if (!this.client.creditCard.flagCard || !this.client.creditCard.numberCard 
        || !this.client.creditCard.validityCard || !this.client.creditCard.nameCard 
        || !this.client.creditCard.codeSecurityCard
      ) {
        this.errors.push({ message: 'Resta informações pendentes do seu cartão' })
      }

      this.notify()
    },
    notify: function() {
      this.errors.map((element) => {
        toast(element.message, {
          transition: toast.TRANSITIONS.FLIP,
          position: toast.POSITION.BOTTOM_CENTER, 
        })
      })
    }
  },
}
</script>

<style>

.cardForm {
  background-color: lightgoldenrodyellow !important
}

</style>