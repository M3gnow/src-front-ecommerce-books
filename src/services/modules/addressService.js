import { axiosInstance, apiLesbookAddressMock, apiLesbookAddressByIdMock, apiLesbookAddress } from './../config'

export const getAllAddress = () => {
    const request = axiosInstance.get(apiLesbookAddressMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getAddressById = (id) => {
    const request = axiosInstance.get("https://localhost:7260/api/adress/16")
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
