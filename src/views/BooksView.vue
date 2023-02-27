<template>
    <div class="container">
        <div class="form-label fs-3">
            Livros
        </div>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="form-label col-sm-9">
                        Código limpo: Habilidades práticas do Agile Software
                    </div>
                    <div class="form-switch form-check-reverse col-sm-2">
                        <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckReverse">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Ativo</label>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-label">
                            Cod.: 1
                        </div>
                        <div class="form-text">
                            ISBN: 8576082675
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-label">
                            Autor:
                        </div>
                        <div class="form-text">
                            Categórias: ...
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="form-label">
                            Edição: 1
                        </div>
                        <div class="form-text">
                            Paginas: 425
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
                    <div class="form-label col-sm-9">
                        Álbum Capa Dura Copa Do Mundo Qatar 2022
                    </div>
                    <div class="form-switch form-check-reverse col-sm-2">
                        <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckReverse">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Ativo</label>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-label">
                            Cod.: 2
                        </div>
                        <div class="form-text">
                            ISBN: ...
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-label">
                            Autor:
                        </div>
                        <div class="form-text">
                            Categórias: ...
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="form-label">
                            Edição: 1
                        </div>
                        <div class="form-text">
                            Paginas: 80
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <RouterLink class="btn btn-outline-warning" to="/cliente/cartoes/editar">Editar</RouterLink>
                    </div>
                </div>
            </div>
        </div>
   </div>
 </template>
 
 <script>
 export default {
    name: "BooksView"
 }
 </script>
 
 <style>
 
 </style>