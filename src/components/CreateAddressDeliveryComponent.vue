<template>
    <div>
        <div>
            <h5>Adicione um endereço para entrega</h5>
        </div>

        <div class="card cardCreateForm p-5 mt-3">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-5">
                        <label for="basic-url" class="form-label"><b>CEP</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="08582-640" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12 d-flex justify-content-between mt-4">
                    <div class="col-md-5">
                        <label for="basic-url" class="form-label"><b>Estado</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="São Paulo" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>

                    <div class="col-md-5 me-4">
                        <label for="basic-url" class="form-label"><b>Cidade</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="Itaquaquecetuba" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-4">
                    <div class="col-md-5">
                        <label for="basic-url" class="form-label"><b>Bairro</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="Jardim Tropical" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>
                

                <div class="col-md-12 d-flex justify-content-between mt-4">
                    <div class="col-md-5">
                        <label for="basic-url" class="form-label"><b>Rua/Avenida</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="Rua Quitandinha" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>

                    <div class="col-md-5">
                        <label for="basic-url" class="form-label"><b>Número</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="84" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-4">
                    <div class="col-md-5">
                        <label for="basic-url" class="form-label"><b>Complemento</b></label>
                        <div class="input-group inputSize">
                            <input type="text" class="form-control inputColor" value="08582-640" disabled="true" id="txtCPF"
                                aria-describedby="basic-addon3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>

export default {
    name: "CreateAddressDeliveryComponent",
    components: {
    }
}
</script>

<style>

.cardCreateForm {
    min-height: 550px;
}

.inputSize {
    min-height: 50px;
}

.inputColor {
    background-color: white !important;
}
</style>