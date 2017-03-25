/**
 * Created by lg282 on 2017/3/21.
 */
import Vue from 'vue'
import config from './request'

export default {
  userLogin (username, password) {
    Vue.axios.post(config.baseUrl + 'login', {
      username: username,
      password: password
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getFiles () {
    Vue.axios.get(config.baseUrl + 'desk').then((response) => {
      console.log(response)
    })
  }
}
