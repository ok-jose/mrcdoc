/**
 * Created by jose on 2017/3/28.
 */
import axios from 'axios'
import config from './request'
// eslint-disable-next-line
var TOKEN = Cookies.get('token')
axios.defaults.headers.common['token'] = TOKEN
export default {
  getFiles () {
    return axios.get(config.baseUrl + 'desk').then((response) => {
      console.log(response)
    })
  }
}
