import { useStorage } from "@vueuse/core";

export const setClientStorage = function (value) {
    if (!value) { 
        useStorage('client',JSON.stringify({}));
    }
    useStorage('client',JSON.stringify(value));
    
}
export const updateclientStorage = function (value) {
    const client = useStorage('client');
    client.value = JSON.stringify(value);
}
export const getClientStorage = function(){
    return JSON.parse(useStorage('client').value);
}