import { axiosInstance, apiLesbookOrder } from '../config'

export const getOrders  = () => {
    const request = axiosInstance.get(apiLesbookOrder)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getDeliveryPrice = (zipcode) => {
    const request = axiosInstance.get(`${apiLesbookOrder}/delivery/${zipcode}`)
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