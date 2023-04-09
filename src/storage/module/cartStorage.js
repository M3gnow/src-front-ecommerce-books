import { useStorage } from "@vueuse/core";


export const setItemToCartStorage = function (value) {
    const cartStorage = useStorage('cart');
    const cart = JSON.parse(cartStorage.value);
    cart.itens.push(value);
    cartStorage.value = JSON.stringify(cart);
}
export const getCartStorage = function () {
    return JSON.parse(useStorage('cart').value);
}
export const initCartStorage = function () {
    const cart = {
        itens : [],
        finalPrice : 0,
        validation: 0
    };
    useStorage('cart',JSON.stringify(cart));
}