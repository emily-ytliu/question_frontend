import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontHome',
      component: () => import("../views/FrontHome.vue")
    },
    {
      path: '/backHome',
      name: 'backHome',
      component: () => import("../views/BackHome.vue")
    },
    {
      path: '/frontAnswer',
      name: 'frontAnswer',
      component: () => import("../views/FrontAnswer.vue")
    },
    {
      path: '/frontConfirm',
      name: 'frontConfirm',
      component: () => import("../views/FrontConfirm.vue")
    },
    {
      path: '/frontResult',
      name: 'frontResult',
      component: () => import("../views/FrontResult.vue")
    },
  ]
})

export default router
