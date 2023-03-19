import { axiosInstance, apiLesbookClient } from '../config'

export const createClient = (client) => axiosInstance.post(`${apiLesbookClient}`, client, {})
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))