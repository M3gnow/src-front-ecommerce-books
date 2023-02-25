<template>
  <div class="container">
    <div id="divNome">
      <label for="basic-url" class="form-label fs-3">Escolha como você quer que te chamemos</label>
      <div class="form-text">O nome que você escolher será será exibido para todas as pessoas que interagirem com você
        no LesBooks.</div>
      <div class="row">
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Nome</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtNome" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Sobrenome</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtSobrenome" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <br>
      <hr>
    </div>
    <div id="divEmail">
      <label for="basic-url" class="form-label fs-3">Digite seu e-mail</label>
      <div class="form-text">Certifique-se de que você tenha acesso a ele.</div>
      <div class="col-sm">
        <div class="input-group">
          <input type="email" class="form-control" id="txtEmail" aria-describedby="basic-addon3">
        </div>
      </div>
      <br>
      <hr>
    </div>
    <div id="divSenha">
      <label for="basic-url" class="form-label">Digite sua senha</label>
      <div class="form-text">Ela deve conter ao menos 8 caracteres.</div>
      <div class="form-text">Incluindo letras, numeros e caracteres especiais.</div>
      <div class="form-text">Não coloque seu nome, sobrenome, e-mail nem caracteres idênticos e consecutivos.</div>
      <div class="row">
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Senha</label>
          <div class="input-group">
            <input type="password" class="form-control" id="txtSenha" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-6">
          <label for="basic-url" class="form-label">Confirme sua senha</label>
          <div class="input-group">
            <input type="password" class="form-control" id="txtConfirmaSenha" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <br>
      <hr>
    </div>
    <div id="divDadosPessoais">
      <label for="basic-url" class="form-label fs-3">Diga mais sobre você</label>
      <div class="form-text">Os dados informados no formulário abaixo não serão compartilhados com terceiros</div>
      <div class="row">
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">CPF</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtCPF" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">Data de nascimento</label>
          <div class="input-group">
            <input type="date" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">Genero</label>
          <div class="input-group">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Escolha...</option>
              <option value="1">Feminino</option>
              <option value="2">Masculino</option>
              <option value="3">Não informar</option>
            </select>
          </div>
        </div>
      </div>

      <br>
      <div class="row" id="divContato">
        <label for="basic-url" class="form-label">Contato</label>
        <div class="form-text">É necessário informar ao menos um número de telefone.</div>
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">Tipo de telefone</label>
          <div class="input-group">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Escolha...</option>
              <option value="1">Fixo</option>
              <option value="2">Celular</option>
            </select>
          </div>
        </div>
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">DDD</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtCPF" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-4">
          <label for="basic-url" class="form-label">Numero</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <br>
      <hr>
    </div>
    <div id="divEnderecos">
      <label for="basic-url" class="form-label fs-3">Endereços</label>
      <div class="form-text">Para realizarmos seu cadastro será necessário informar 3 endereços:</div>
      <br>
      <label for="basic-url" class="form-label">Endereço residencial</label>
      <div id="divEnderecoResidencial">
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
      <hr>
      <label for="basic-url" class="form-label">Endereço de entrega
        <Label class="form-text">(Após a finalização do cadastro é possivel adicionar mais de um endereço de entrega,
          basta acessar o seu perfil.)</label>
      </label>
      <div id="divEnderecoEntrega">
        <div class="row">
          <div class="col-sm">
            <label for="basic-url" class="form-label">Identificação <label class="form-text"> (Utilize um nome composto na
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
      <hr>
      <label for="basic-url" class="form-label">Endereço de cobrança
        <Label class="form-text">(Após a finalização do cadastro é possivel adicionar mais de um endereço de cobrança,
          basta acessar o seu perfil.)</label>
      </label>
      <div id="divEnderecoCobranca">
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
      <br>
      <hr>
    </div>
    <div id="divCartoes">
      <label for="basic-url" class="form-label fs-3">Cartões</label>
      <div class="form-text">(Após a finalização do cadastro é possivel adicionar mais de um cartão,
        basta acessar o seu perfil.)</div>
      <div class="row">
        <div class="col-sm-2">
          <label for="basic-url" class="form-label">Bandeira</label>
          <div class="input-group">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Escolha...</option>
              <option selected>Visa</option>
              <option selected>MasterCard</option>
            </select>
          </div>
        </div>
        <div class="col-sm-7">
          <label for="basic-url" class="form-label">Numero do cartão</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Validade</label>
          <div class="input-group">
            <input type="date" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-9">
          <label for="basic-url" class="form-label">Nome <label class="form-text">(Informar como impresso no
              cartão)</label></label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col-sm-3">
          <label for="basic-url" class="form-label">Codigo de segurança</label>
          <div class="input-group">
            <input type="text" class="form-control" id="txtDtaNascimento" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
      <br>
    </div>
    <div class="row d-flex justify-content-between p-3">
      <router-link to="/" type="button" class="btn btn-outline-warning">Finalizar</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "CreateClientComponent"
}
</script>

<style></style>