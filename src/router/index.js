import { createRouter, createWebHistory } from 'vue-router'

import Shipment from '@/views/Shipment.vue'

const routes = [
  {
    path: '/shipment',
    component: Shipment,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/shipment') {
    return next('/shipment')
  }

  return next()
})

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100)
})

export default router
