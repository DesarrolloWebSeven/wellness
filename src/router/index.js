import { createRouter, createWebHistory } from 'vue-router'
import Import from '../views/Import.vue'
import Invoicing from '../views/Invoicing.vue'
const routes = [
  {
    path: '/',
    name: 'Import',
    component: Import
  },
  {
    path: '/invoicing',
    name: 'Invoicing',
    component: Invoicing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
