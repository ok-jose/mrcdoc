import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Guide from '@/components/Guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide
    },
    {
      path: '/team',
      name: 'hello',
      component: Hello
    }
  ]
})
