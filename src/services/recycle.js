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
  },
  resumeFiles (fileIds) {
    return axios.post(config.baseUrl + 'restore', {file_ids: fileIds}).then((response) => {
      return response.data
    })
  },
  destroyFiles (fileIds) {
    return axios.delete(config.baseUrl + 'files/destroy?file_ids=' + fileIds).then((response) => {
      return response.data
    })
  }
}
