import { axiosInstance, apiLesbookCardFlagMock } from './../config'

export const getAllCardFlags = () => {
    console.log('request solictted')

    const request = axiosInstance.get(apiLesbookCardFlagMock)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}