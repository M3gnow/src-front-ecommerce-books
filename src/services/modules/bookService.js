import { axiosInstance, apiMockAllBooks } from './../config'

export const getAllBooks = () => {
    const request = axiosInstance.get(apiMockAllBooks)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getBook = (id) => {
    const request = axiosInstance.get(`${apiMockAllBooks}/${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const updateStatusBook = (id, data) => {
    const request = axiosInstance.post(`${apiMockAllBooks}/${id}/status`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const entryStokBookId = (id, data) => {
    const request = axiosInstance.post(`${apiMockAllBooks}/${id}/stock`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}