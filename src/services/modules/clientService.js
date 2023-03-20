import { axiosInstance, apiLesbookClientMock, apiLesbookClientPassword, apiLesbookClient } from '../config'

export const createClient = (client) => axiosInstance.post(`${apiLesbookClient}`, client)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))

export const getClientById = (id) => axiosInstance.get(`${apiLesbookClientMock}`)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))

export const changePasswordByClientId = (data) =>
    axiosInstance.post(`${apiLesbookClientPassword}`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))