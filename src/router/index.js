import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Page/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../Page/ServicePage.vue')
    },
    {
      path: '/crud',
      name: 'crud',
      component: () => import('../Page/CRUD.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../Page/LoginPage.vue')
    },
    {
      path: '/gunList',
      name: 'gunList',
      component: () => import('../Page/GunList.vue')
    },
  ]
})

export default router
