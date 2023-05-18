import { axiosInstance, apiLesbookOrder,apiLesBookStock } from '../config'

export const getOrders  = () => {
    const request = axiosInstance.get(apiLesbookOrder)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const setLockBook = (clientId,BookId) => {
    const request = axiosInstance.post(`${apiLesBookStock}/lock`,{
        "idBooks": BookId,
        "quantity": 1,
        "idClient": clientId
      })
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getDeliveryPrice = (zipcode) => {
    const request = axiosInstance.get(`${apiLesBookStock}/lock`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const updateStatusOrder = (data) => {
    const request = axiosInstance.patch(apiLesbookOrder, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const createOrder = (data) => {
    const request = axiosInstance.post(apiLesbookOrder, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}