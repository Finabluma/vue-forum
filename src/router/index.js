import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow
  },
]

export default createRouter({
  history: createWebHistory(),
  routes, 
})
