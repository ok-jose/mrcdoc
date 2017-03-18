import Editor from '@/components/Editor'
import Guide from '@/components/Guide'
import Desktop from '@/components/Desktop'
export default [
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
