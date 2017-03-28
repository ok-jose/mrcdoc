// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// use
Vue.use(VueRouter)
Vue.use(Iview)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routers
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
export default {
  components: {
    Vue
  }
}
