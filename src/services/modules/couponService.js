import { axiosInstance, apiLesBookCoupon } from '../config'

export const getCouponClient  = (id_client) => {
    const request = axiosInstance.get(`${apiLesBookCoupon}/client/${id_client}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getValidationCoupon = (id_client, description) => {
    const request = axiosInstance.get(`${apiLesBookCoupon}/${id_client}/${description}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}