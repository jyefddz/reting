import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: () => import('@/views/Home')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  },
  {
    path: '/detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/home/list',
        component: () => import('@/views/Search')
      },
      {
        path: '/home/news',
        component: () => import('@/views/News')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/Profile')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
