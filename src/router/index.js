import Editor from '@/views/Editor'
import Guide from '@/views/Guide'
import Signup from '@/views/Signup'
import Desktop from '@/views/Desktop'
import Recent from '@/views/Recent'
import Star from '@/views/Star'
import Recycle from '@/views/Recycle'
import Account from '@/views/Account'
import Solution from '@/views/Solution'
import Profile from '@/views/Profile'
import Friends from '@/views/Friends'
// import Folder from '@/views/Folder'
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
    path: '/folder/:file_id',
    name: 'folder',
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
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/solution',
    name: 'solution',
    component: Solution
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]
