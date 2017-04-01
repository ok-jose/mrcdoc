/**
 * Created by jose on 2017/4/1.
 */
import axios from 'axios'
import config from './request'
export default {
  getThisFile (fileId) {
    return axios.get(config.baseUrl + 'files/' + fileId).then((response) => {
      return response.data
    })
  }
}
