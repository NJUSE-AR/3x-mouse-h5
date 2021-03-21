import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/color',
    name: 'Color',
    component: () => import('../views/Color')
  },
  {
    path: '/interact',
    name: 'Interact',
    component: () => import('../views/Interact')
  },
  {
    path: '/scan',
    name: 'Scan',
    component: () => import('../views/Scan')
  },
  {
    path: '/wash',
    name: 'Wash',
    component: () => import('../views/Wash')
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/Share')
  }
]

const router = new VueRouter({
  routes
})

export default router
