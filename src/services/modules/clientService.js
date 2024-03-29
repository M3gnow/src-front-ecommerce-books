import { axiosInstance, apiLesbookClientPassword, apiLesbookClient } from '../config'

export const createClient = (client) => axiosInstance.post(`${apiLesbookClient}`, client)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))

export const getClientById = (id) => axiosInstance.get(`${apiLesbookClient}/${id}`)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))

export const changePasswordByClientId = (data) =>
    axiosInstance.post(`${apiLesbookClientPassword}`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

export const getAllClientes = () => axiosInstance.get(apiLesbookClient)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))

export const updateStatusClient = (id) =>
    axiosInstance.post(`${apiLesbookClient}/${id}/status`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))