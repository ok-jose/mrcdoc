/**
 * Created by jose on 2017/4/9.
 */
import axios from 'axios'
import config from './request'

export default {
  getRecycleFile () {
    return axios.get(config.baseUrl + 'recycle').then((response) => {
      return response.data
    })
  }
}
