let config = {
  baseUrl: 'http://api.mrcdoc.local/'
}
import axios from 'axios'

// eslint-disable-next-line
var TOKEN = Cookies.get('token')
axios.defaults.headers.common['token'] = TOKEN

export default config
