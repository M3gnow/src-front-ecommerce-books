<template>
    <div class="container d-flex mt-2 mb-5">
        <div class="col-md-8 me-3">
          <div>
            <h5>
              Finalize sua compra
            </h5>
          </div>

          <div class="card mt-3">
            <div class="p-4 col-md-12">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <div class="ms-3">
                    <i class="bi bi-geo-alt iconGeo "></i>
                  </div>

                  <div class="d-flex flexwrap row ms-5">
                    <label for="">Rua Quitandinha 84</label>
                    <label for="">Itaquaquecetuba, São Paulo - CEP 08582640</label>
                    <label for="">Thiago Henrique de Araujo - 11984661480</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card mt-3">
            <div class="p-4 col-md-12">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <div class="ms-3 ">
                    <img class="imgItem" src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
                  </div>

                  <div class="d-flex flexwrap row ms-5">
                    <label for=""><b>Harry Potter e a Pedra Filosofal</b></label>
                    <label for="">Quantidade: 6</label>
                    <label for="">R$100,00 cada</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-3">
            <div class="p-4 col-md-12">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <div class="ms-3 ">
                    <img class="imgItem" src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
                  </div>

                  <div class="d-flex flexwrap row ms-5">
                    <label for=""><b>Harry Potter e a Pedra Filosofal</b></label>
                    <label for="">Quantidade: 6</label>
                    <label for="">R$100,00 cada</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-3">
            <div class="p-4 col-md-12">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <div class="ms-3 ">
                    <img class="imgItem" src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
                  </div>

                  <div class="d-flex flexwrap row ms-5">
                    <label for=""><b>Harry Potter e a Pedra Filosofal</b></label>
                    <label for="">Quantidade: 12</label>
                    <label for="">R$100,00 cada</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-3 p-3">
            <div class="d-flex">
              <i class="bi bi-trophy ms-5"></i>
              <label class="ms-3" for="">Benefício Lesbooks Pontos</label>  
            </div>
          </div>

          <div class="col-md-12 d-flex justify-content-end mt-3">
              <router-link to="/"> 
                  <div class="btn btn-primary">
                      Finalizar
                  </div>
              </router-link>
          </div>
        </div>
        
        <ResumePurchaseComponent />
    </div>


</template>

<script>
import ResumePurchaseComponent from '../components/ResumePurchaseComponent.vue'

export default {
    name: "PurchaseVerify",
    components: {
        ResumePurchaseComponent
    }
}
</script>

<style>

.imgItem {
    border-radius: 50% !important;
    width: 90px;
    height: 90px;
}

</style>