import { axiosInstance, apiLesbookAddress } from './../config'

export const getAllAddressByClientId = (clientId) => {
    const request = axiosInstance.get(`${apiLesbookAddress}/all/${clientId}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getAddressById = (addressId) => {
    const request = axiosInstance.get(`${apiLesbookAddress}/${addressId}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const createAddressByClientId = (data) => {
    const request = axiosInstance.post(apiLesbookAddress, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const changeAddressById = (data) => {
    const request = axiosInstance.put(apiLesbookAddress, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}
