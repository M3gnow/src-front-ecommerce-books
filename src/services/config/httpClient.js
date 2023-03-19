import axios from 'axios';
import config from './enviroment'

// const config = (() => {
//   return {
//       NODE_ENV: 'production',
//       VUE_APP_API_TIMEOUT: '180000',
//       VUE_APP_API_LESBOOK: 'http://127.0.0.1:7260',
//       VUE_APP_API_LESBOOK_CLIENT: 'http://127.0.0.1:7260/client',
//       MOCK_APP_API_LESKBOOK_CARD_FLAG: 'https://run.mocky.io/v3/1f79cab0-e264-47e7-9cf3-7f1e0815ac64'
//   }
// })();

export const axiosInstance = axios.create({
  timeout: 18000
})

export const apiLesbook = config.VUE_APP_API_LESBOOK
export const apiLesbookClient = config.VUE_APP_API_LESBOOK_CLIENT
export const apiLesbookCardFlagMock = config.MOCK_APP_API_LESKBOOK_CARD_FLAG