import { axiosInstance, apiLesbookOrder } from '../config'

export const getOrders  = () => {
    const request = axiosInstance.get(apiLesbookOrder)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}