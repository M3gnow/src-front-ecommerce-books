import { axiosInstance, apiLesbookPurchasesClientId, apiLesbookOrder } from '../config'

export const getClientPurchases  = (id) => {
    const request = axiosInstance.get(`${apiLesbookPurchasesClientId}/${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getPurchaseById = (id) => {
    const request = axiosInstance.get(`${apiLesbookOrder}/${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}