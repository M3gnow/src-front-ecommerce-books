import { axiosInstance, apiMockPurchases } from '../config'

export const getClientPurchases  = (id) => {
    const request = axiosInstance.get(apiMockPurchases)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}
