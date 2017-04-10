/**
 * Created by lg282 on 2017/3/21.
 */
import axios from 'axios'
import config from './request'
// eslint-disable-next-line
var TOKEN = Cookies.get('token')
axios.defaults.headers.common['token'] = TOKEN
export default {
  guide () {
    if (TOKEN !== '') {
      return TOKEN
    }
  },
  userLogin (username, password) {
    return axios.post(config.baseUrl + 'login', {
      username: username,
      password: password
    })
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
