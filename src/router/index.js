// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('@/views/About.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
