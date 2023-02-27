<template>
    <div class="container ">
        <div>
            <h5>Adicione um novo cartão</h5>
        </div>

        <div class="card cardCreateForm p-5 mt-3 col-md-8">
            <div class="d-flex">
                <div class="col-md-7">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <label for="basic-url" class="form-label"><b>Número de cartão</b></label>
                            <div class="input-group inputSize">
                                <input type="text" class="form-control inputColor" value="08582-640" disabled="true" id="txtCPF"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4">
                        <div class="col-md-6">
                            <label for="basic-url" class="form-label"><b>Nome completo</b></label>
                            <div class="input-group inputSize">
                                <input type="text" class="form-control inputColor" value="São Paulo" disabled="true" id="txtCPF"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4">
                        <div class="col-md-6 me-4">
                            <label for="basic-url" class="form-label"><b>Data de vencimento</b></label>
                            <div class="input-group inputSize">
                                <input type="text" class="form-control inputColor" value="Itaquaquecetuba" disabled="true" id="txtCPF"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4">
                        <div class="col-md-6">
                            <label for="basic-url" class="form-label"><b>Códogio de segurança</b></label>
                            <div class="input-group inputSize">
                                <input type="text" class="form-control inputColor" value="Jardim Tropical" disabled="true" id="txtCPF"
                                    aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 pe-5 pt-5 mt-5">
                    <div class="card card-credit">
                        <!-- <i class="bi bi-credit-card-2-front iconCreditCard"></i> -->
                        <div class="p-3">
                            <i class="bi bi-credit-card-2-front-fill iconCreditCard"></i>
                        </div>

                        <div>
                            <label for="" class="ms-3">**** **** **** ****</label>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <div>
                                <label for="" class="ms-3">NOME E SOBRENOME</label>
                            </div>

                            <div>
                                <label for="" class="me-3">MM/AA</label>
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

}
</script>

<style>

.card-credit {
    width: 300px;
    height: 180px;
}

.iconCreditCard {
    font-size: 50px;
}
</style>