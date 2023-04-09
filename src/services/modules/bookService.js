import { axiosInstance, apiMockAllBooks } from './../config'

export const getAllBooks = () => {
    const request = axiosInstance.get(apiMockAllBooks)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}