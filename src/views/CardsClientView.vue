<template>
    <div class="container">
        <br>
        <div class="form-label fs-3">
            Cartões
        </div>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="form-label col-sm-4">
                        Terminando em 1345
                    </div>
                    <div class="form-switch form-check-reverse col-sm-7">
                        <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckReverse">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Principal</label>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-11">
                        <div class="form-label">
                            Visa
                        </div>
                        <div class="form-text">
                            Vencimento em 11/30
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <RouterLink class="btn btn-outline-warning" to="/cliente/cartoes/editar">Editar</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="form-label col-sm-4">
                        Terminando em 1702
                    </div>
                    <div class="form-switch form-check-reverse col-sm-7">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Principal</label>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-11">
                        <div class="form-label">
                            Mastercard
                        </div>
                        <div class="form-text">
                            Vencimento em 02/28
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <button class="btn btn-outline-warning">Editar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardsClientView"
}
</script>
<style></style>