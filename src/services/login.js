/**
 * Created by lg282 on 2017/3/21.
 */
import axios from 'axios'
import config from './request'

export default {
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
  },
  getFiles () {
    axios.get(config.baseUrl + 'desk').then((response) => {
      console.log(response)
    })
  }
}
