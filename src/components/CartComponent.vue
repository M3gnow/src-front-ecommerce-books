<template>
    <div class="card border-success mb-3 p-2">
        <div class="card-header bg-transparent border-success">Harry Potter e a Pedra Filosofal</div>
        
        <div class="card-body text-success">
            <div class="d-flex">
                <div class="col-md-3">
                    <img src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
                </div>

                <div class="row detailQuantity d-flex justify-content-around">
                    <div class="card mt-2 border border-0" style="width: 10rem;">
                        <div class="card-body d-flex justify-content-around">
                            <button class="btn">
                                <i class="bi bi-arrow-left-circle-fill sizeButtonsAddAndRemove"></i>
                            </button>
                            
                            <h4>12</h4>

                            <button class="btn">
                                <i class="bi bi-arrow-right-circle-fill sizeButtonsAddAndRemove"></i>
                            </button>
                            
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <label for="">111 disponiveis</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between card-footer bg-transparent border-success">
            <div>SubTotal</div>
            <div>R$ 1200</div>
        </div>
        
    </div>

    <div class="card border-success mb-3 p-2">
        <div class="card-header bg-transparent border-success">Harry Potter e a Pedra Filosofal</div>
        
        <div class="card-body text-success">
            <div class="d-flex">
                <div class="col-md-3">
                    <img src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" alt="">
                </div>

                <div class="row detailQuantity d-flex justify-content-around">
                    <div class="card mt-2 border border-0" style="width: 10rem;">
                        <div class="card-body d-flex justify-content-around">
                            <button class="btn">
                                <i class="bi bi-arrow-left-circle-fill sizeButtonsAddAndRemove"></i>
                            </button>
                            
                            <h4>12</h4>

                            <button class="btn">
                                <i class="bi bi-arrow-right-circle-fill sizeButtonsAddAndRemove"></i>
                            </button>
                            
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <label for="">111 disponiveis</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between card-footer bg-transparent border-success">
            <div>SubTotal</div>
            <div>R$ 1200</div>
        </div>
    </div>

    <div class="card border-success mb-3 p-2">
        <div class="d-flex justify-content-between card-header bg-transparent border-success">
            <div>Total Final</div>
            <div>R$ 2400</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartComponent",
}

</script>

<style>

.value {
    display: flex;
    justify-content: end;
    padding-right: 40px;
}

.sizeButtonsAddAndRemove {
    font-size: 18px;
}

.detailQuantity {
    text-align: center;
}

img {
    height: 110px;
    width: 70px;
}

</style>