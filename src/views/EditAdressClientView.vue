<template>
	<div class="container">
		<label for="basic-url" class="form-label fs-3">Editar endereço</label>
		<div id="divEnderecoEntrega">
			<div class="row">
				<div class="col-sm">
					<label for="basic-url" class="form-label">Identificação <label class="form-text"> (Utilize um nome
							composto na
							identificação do endereço)</label></label>
					<div class="input-group">
						<input type="email" class="form-control" id="txtEmail" aria-describedby="basic-addon3">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<label for="basic-url" class="form-label">CEP</label>
					<div class="input-group">
						<input type="text" class="form-control" id="txtCep" aria-describedby="basic-addon3">
					</div>
				</div>
				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Tipo de residencia</label>
					<div class="input-group">
						<select class="form-select" id="slctTipoLogradouro">
							<option selected>Escolha...</option>
							<option value="1">Casa</option>
							<option value="2">Apartamento</option>
						</select>
					</div>
				</div>
				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Tipo de logradouro</label>
					<div class="input-group">
						<select class="form-select" id="slctTipoLogradouro">
							<option selected>Escolha...</option>
							<option value="1">Rua</option>
							<option value="2">Avenida</option>
							<option value="3">Estrada</option>
							<option value="3">Marginal</option>
						</select>
					</div>
				</div>
				<div class="col-sm-4">
					<label for="basic-url" class="form-label">Logradouro</label>
					<div class="input-group">
						<input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
					</div>
				</div>
				<div class="col-sm-2">
					<label for="basic-url" class="form-label">Numero</label>
					<div class="input-group">
						<input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Pais</label>
					<div class="input-group">
						<select class="form-select" id="inputGroupSelect01">
							<option selected>Escolha...</option>
						</select>
					</div>
				</div>
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Estado</label>
					<div class="input-group">
						<select class="form-select" id="inputGroupSelect01">
							<option selected>Escolha...</option>
						</select>
					</div>
				</div>
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Cidade</label>
					<div class="input-group">
						<select class="form-select" id="inputGroupSelect01">
							<option selected>Escolha...</option>
						</select>
					</div>
				</div>
				<div class="col-sm-3">
					<label for="basic-url" class="form-label">Bairro</label>
					<div class="input-group">
						<select class="form-select" id="inputGroupSelect01">
							<option selected>Escolha...</option>
						</select>
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
export default {
	name: "EditAdressClientView"
}
</script>
 
<style></style>