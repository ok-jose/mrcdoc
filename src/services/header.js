/**
 * Created by jose on 2017/4/1.
 */
import axios from 'axios'
import config from './request'
export default {
  getUser () {
    return axios.get(config.baseUrl + 'user').then((response) => {
      return response.data
    })
  },
  getNotice () {
    return axios.get(config.baseUrl + 'notices').then((response) => {
      return response.data
    })
  },
  replyFriend (fid, type) {
    return axios.post(config.baseUrl + 'friends/reply', {fid: fid, is_accept: type}).then((response) => {
      return response.data
    })
  },
  readNotice (nid) {
    return axios.delete(config.baseUrl + 'notices/' + nid).then((response) => {
      return response.data
    })
  }
}
