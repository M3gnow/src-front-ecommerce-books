import { axiosInstance, apiLesbookAddressMock, apiLesbookAddressByIdMock } from './../config'

export const getAllAddress = () => {
    const request = axiosInstance.get(apiLesbookAddressMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getAddressById = (id) => {
    const request = axiosInstance.get(apiLesbookAddressByIdMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}