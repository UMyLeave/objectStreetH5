import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:"/HomeView",
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
