import { axiosInstance, apiLesbookOrder,apiLesBookStock, apiLesbookOrderReplacement } from '../config'

export const getOrders  = () => {
    const request = axiosInstance.get(apiLesbookOrder)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const setLockBook = (clientId,BookId,quantity) => {
    const request = axiosInstance.post(`${apiLesBookStock}/lock`,{
        "idBooks": BookId,
        "quantity": quantity,
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
export const getDashboard = (data) => {
    console.log("data",data);
    const request = axiosInstance.post("https://localhost:7260/api/order/dashboard",data)
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

export const createOrderReplacement = (data) => {
    const request = axiosInstance.post(apiLesbookOrderReplacement, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}