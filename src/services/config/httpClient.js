import axios from 'axios';
import config from './enviroment'

export const axiosInstance = axios.create({
  timeout: 18000,
  headers: { 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
  }
})

export const apiLesbook = config.VUE_APP_API_LESBOOK
export const apiLesbookCard = `${config.VUE_APP_API_LESBOOK}/api/card`
export const apiLesbookClientPassword = `${config.VUE_APP_API_LESBOOK}/client/changepassword`
export const apiLesbookClient = config.VUE_APP_API_LESBOOK_CLIENT
export const apiLesbookClientMock = config.VUE_APP_API_LESBOOK_CLIENT_MOCK
export const apiLesbookAddress = `${config.VUE_APP_API_LESBOOK}api/adress`
export const apiLesbookCardFlagMock = config.MOCK_APP_API_LESKBOOK_CARD_FLAG
export const apiLesbookCardsMock = config.MOCK_APP_API_LESKBOOK_CARDS
export const apiLesbookAddressMock = config.MOCK_APP_API_LESKBOOK_ADDRESS
export const apiLesbookCardByIdMock = config.MOCK_APP_API_LESKBOOK_CARD_BY_ID
export const apiLesbookAddressByIdMock = config.MOCK_APP_API_LESKBOOK_DELIVERY_BY_ID
