/**
 * Created by jose on 2017/3/28.
 */
import axios from 'axios'
import config from './request'
var TOKEN = ''
export default {
  param () {
    // eslint-disable-next-line
    TOKEN = Cookies.get('token')
    axios.defaults.headers.common['token'] = TOKEN
  },
  getUser () {
    return axios.get(config.baseUrl + 'user').then((response) => {
      return response.data
    })
  },
  getFiles () {
    return axios.get(config.baseUrl + 'desk').then((response) => {
      return response.data
    })
  },
  getFolderFiles (folderId) {
    return axios.get(config.baseUrl + 'folder/' + folderId).then((response) => {
      return response.data
    })
  },
  getRecentFile () {
    return axios.get(config.baseUrl + 'recent').then((response) => {
      return response.data
    })
  },
  createFile (filenname, type, inFolder) {
    return axios.post(config.baseUrl + 'files', {filename: filenname, type: type, in_folder: inFolder}).then((response) => {
      return response.data
    })
  },
  renameFile (fileId, filename) {
    return axios.put(config.baseUrl + 'files', {file_id: fileId, filename: filename}).then((response) => {
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
  },
  getFriends () {
    return axios.get(config.baseUrl + 'friends').then((response) => {
      return response.data
    })
  },
  searchFriend (keywords) {
    return axios.get(config.baseUrl + 'search/' + keywords).then((response) => {
      return response.data
    })
  },
  postFriendId (fid) {
    return axios.post(config.baseUrl + 'friends', {fid: fid}).then((response) => {
      return response.data
    })
  },
  getWriterLists (fileId) {
    return axios.get(config.baseUrl + 'writers?file_id=' + fileId).then((response) => {
      return response.data
    })
  },
  addCoWriters (fileId, uids) {
    return axios.post(config.baseUrl + 'writers', {file_id: fileId, writer_ids: uids}).then((response) => {
      return response.data
    })
  }
}
