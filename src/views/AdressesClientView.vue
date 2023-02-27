<template>
    <div class="container">
        <br>
        <div class="form-label fs-3">
            Endereços
        </div>
        <div class="card">
            <div class="card-header">
                <div class="form-label">
                    Endereço residencial
                </div>
            </div>
            <div class="card-body">
                <div class="row p-2">
                    <div class="col-sm-11">
                        <div class="form-label">
                            Rua monte alto, 343
                        </div>
                        <div class="form-text">
                            08577-130 - São Paulo - Itaquaquecetuba
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <RouterLink to="/cliente/enderecos/editar" class="btn btn-outline-warning">Editar</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="false" aria-controls="collapseOne">
                        Endereços de entrega
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="card mt-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="form=label">
                                            Entrega principal
                                        </div>
                                        <div class="form-text">
                                            Rua monte alto, 343
                                        </div>
                                        <div class="form-text">
                                            08577-130 - São Paulo - Itaquaquecetuba
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <button class="btn btn-outline-warning">Editar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="form=label">
                                            Entrega casa nova
                                        </div>
                                        <div class="form-text">
                                            Rua monte alto, 343
                                        </div>
                                        <div class="form-text">
                                            08577-130 - São Paulo - Itaquaquecetuba
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <button class="btn btn-outline-warning">Editar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="form=label">
                                            Entrega loja
                                        </div>
                                        <div class="form-text">
                                            Rua monte alto, 343
                                        </div>
                                        <div class="form-text">
                                            08577-130 - São Paulo - Itaquaquecetuba
                                        </div>
                                    </div>
                                    <div class="col-sm-1">
                                        <button class="btn btn-outline-warning">Editar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-end mt-2">
                            <div class="btn btn-outline-success">
                                + Novo endereço
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Endereços de cobrança
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="form-label">
                                            Rua monte alto, 343
                                        </div>
                                        <div class="form-text">
                                            08577-130 - São Paulo - Itaquaquecetuba
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
</template>
<script>
export default {
    name: "AdressesClientView"
}
</script>
<style>

</style>