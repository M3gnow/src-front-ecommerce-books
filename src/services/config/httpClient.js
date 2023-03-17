import httpCommons from '@meuvivob2cecare/httpclient-commons'

export const axios = httpCommons.axios({
  timeout: config.VUE_APP_API_TIMEOUT,
  rejectUnauthorized: false
})

export const apiLesbook = config.VUE_APP_API_LESBOOK
