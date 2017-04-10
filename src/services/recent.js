/**
 * Created by jose on 2017/4/10.
 */
import axios from 'axios'
import config from './request'

export default {
  getRecentFile () {
    return axios.get(config.baseUrl + 'recent').then((response) => {
      return response.data
    })
  }
}
