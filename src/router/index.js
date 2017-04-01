import Editor from '@/components/Editor'
import Guide from '@/components/Guide'
import Signup from '@/components/Signup'
import Desktop from '@/components/Desktop'
export default [
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
    path: '/editor/:file_id',
    name: 'editor',
    component: Editor
  },
  {
    path: '/desktop',
    name: 'desktop',
    component: Desktop
  }
]
