import { axiosInstance, apiLesbookCard } from './../config'

export const getAllCardFlags = () => {
    const request = axiosInstance.get(`https://localhost:7260/card/flags`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getAllCardsByClientId = (clientId) => {
    const request = axiosInstance.get(`${apiLesbookCard}/all/${clientId}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getCardById = (id) => {
    const request = axiosInstance.get(`${apiLesbookCard}/${id}`)
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
