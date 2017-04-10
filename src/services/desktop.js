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
      return response.data
    })
  },
  createFile (filenname, type) {
    return axios.post(config.baseUrl + 'files', {filename: filenname, type: type}).then((response) => {
      return response.data
    })
  },
  delFiles (fileId) {
    return axios.delete(config.baseUrl + 'files?file_ids=' + fileId).then((response) => {
      return response.data
    })
  },
  withOrWithout (fileId, type) {
    return axios.post(config.baseUrl + 'stars', {file_id: fileId, type: type}).then((response) => {
      return response.data
    })
  },
  getStarFiles () {
    return axios.get(config.baseUrl + 'stars').then((response) => {
      return response.data
    })
  }
}
