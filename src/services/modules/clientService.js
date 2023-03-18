import { axios, apiLesbookClient } from '../config'

export const createClient = (client) => axios.post(`${apiLesbookClient}`, client, {})
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error))