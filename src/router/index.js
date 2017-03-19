import Editor from '@/components/Editor'
import Guide from '@/components/Guide'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Desktop from '@/components/Desktop'
export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/',
    name: 'guide',
    component: Guide
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  },
  {
    path: '/desktop',
    name: 'desktop',
    component: Desktop
  }
]
