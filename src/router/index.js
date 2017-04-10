import Editor from '@/views/Editor'
import Guide from '@/views/Guide'
import Signup from '@/views/Signup'
import Desktop from '@/views/Desktop'
import Recent from '@/views/Recent'
import Star from '@/views/Star'
import Recycle from '@/views/Recycle'
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
  },
  {
    path: '/recent',
    name: 'recent',
    component: Recent
  },
  {
    path: '/star',
    name: 'star',
    component: Star
  },
  {
    path: '/recycle',
    name: 'recycle',
    component: Recycle
  }
]
