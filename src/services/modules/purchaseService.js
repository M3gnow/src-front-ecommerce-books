import { axiosInstance, apiLesbookPurchasesClientId } from '../config'

export const getClientPurchases  = (id) => {
    const request = axiosInstance.get(`${apiLesbookPurchasesClientId}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}
