import { useStorage } from "@vueuse/core";


export const setItemToCartStorage = function (value) {
    const cartStorage = useStorage('cart');
    const cart = JSON.parse(cartStorage.value);
    const index = cart.itens.findIndex((item) => item.id === value.id);
    if(index === -1){
        cart.itens.push(value);
        cartStorage.value = JSON.stringify(cart);
    }else{
        AddUnitToItemCartStorage(value);
    }
    UpdateFinalPriceCartStorage();
}
export const getCartStorage = function () {
    UpdateFinalPriceCartStorage();
    return JSON.parse(useStorage('cart').value);
}
export const initCartStorage = function () {
    const cart = {
        itens : [],
        totalQuantity: 0,
        finalPrice : 0,
        validation: 0,
        id_delivery_adress: 0,
        payments: [],
        coupons: [],
        discount: 0
    };

    console.log('method = initCartStorage', cart);
    useStorage('cart',JSON.stringify(cart));
}
export const AddUnitToItemCartStorage = function(value){
    const cartStorage = useStorage('cart');
    const cart = JSON.parse(cartStorage.value);
    const index = cart.itens.findIndex((item) => item.id === value.id);
    cart.itens[index].quantity++;
    cartStorage.value = JSON.stringify(cart);
}
export const RemoveUnitToItemCartStorage = function(value){
    const cartStorage = useStorage('cart');
    const cart = JSON.parse(cartStorage.value);
    const index = cart.itens.findIndex((item) => item.id === value.id);
    cart.itens[index].quantity--;
    cartStorage.value = JSON.stringify(cart);

    console.log('method = RemoveUnitToItemCartStorage', cart);
}

export const UpdateFinalPriceCartStorage = function(){
    const cartStorage = useStorage('cart');
    if (JSON.parse(cartStorage.value) !== undefined) {
        let cart = JSON.parse(cartStorage.value) || {};
        cart.finalPrice = 0;
        cart.totalQuantity = 0;
        cart.itens.forEach((item) =>
            {
            cart.finalPrice += item.quantity * item.price,
            cart.totalQuantity += item.quantity
            }
        )
        console.log('method = UpdateFinalPriceCartStorage', cart);
        cartStorage.value = JSON.stringify(cart);

        console.log('method = UpdateFinalPriceCartStorage', cart);
    }
}

export const setAdressDeliveryToCartStorage = function(value){
    const cartStorage = useStorage('cart');
    let cart = JSON.parse(cartStorage.value);
    cart.id_delivery_adress = value;
    cartStorage.value = JSON.stringify(cart);

    console.log('method = setAdressDeliveryToCartStorage', cart);
}

export const AddPaymentToCartStorage =  function(value){
    const cartStorage = useStorage('cart');
    let cart = JSON.parse(cartStorage.value);
    cart.payments.push(value);
    cartStorage.value = JSON.stringify(cart);

    console.log('method = AddPaymentToCartStorage', cart);
}

export const AddCouponToCartStorage = function(value){
    const cartStorage = useStorage('cart');
    let cart = JSON.parse(cartStorage.value);
    cart.coupons.push(value);
    cart.discount += value.value;
    cartStorage.value = JSON.stringify(cart);

    console.log('method = AddCouponToCartStorage', cart);
}
export const RemoveCouponFromCartStorage = function(value){
    const cartStorage = useStorage('cart');
    let cart = JSON.parse(cartStorage.value);
    cart.coupons = array.filter(function(objeto) {
        return objeto.description != value.description;
      });
    cartStorage.value = JSON.stringify(cart);

    console.log('method = RemoveCouponFromCartStorage', cart);
}

export const AddPaymentsToCartStorage = function(payments){
    console.log('payment storage', payments);

    const cartStorage = useStorage('cart');

    let cart = JSON.parse(cartStorage.value);

    payments.forEach((payment) => {
        console.log('MEGNOW', payment);
        cart.payments.push(payment);
    });

    cartStorage.value = JSON.stringify(cart);

    console.log('method = AddPaymentsToCartStorage', cart);
}
export const ClearCartStorage =  function(){
    const cart = {
        itens : [],
        totalQuantity: 0,
        finalPrice : 0,
        validation: 0,
        id_delivery_adress: 0,
        payments: [],
        coupons: [],
        discount: 0
    };
    const cartStorage = useStorage('cart');
    cartStorage.value = JSON.stringify(cart);
}