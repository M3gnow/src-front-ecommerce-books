import { axiosInstance, apiLesbookCard, apiLesbookCardFlagMock, apiLesbookCardsMock, apiLesbookCardByIdMock } from './../config'

export const getAllCardFlags = () => {
    const request = axiosInstance.get(apiLesbookCardFlagMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getAllCardsByClientId = (id) => {
    const request = axiosInstance.get(apiLesbookCardsMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getCardById = (id) => {
    const request = axiosInstance.get(apiLesbookCardByIdMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const createCardByClientId = (data) => {
    const request = axiosInstance.post(apiLesbookCard, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const changeCardById = (data) => {
    const request = axiosInstance.put(apiLesbookCard, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}
