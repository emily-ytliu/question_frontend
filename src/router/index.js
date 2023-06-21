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
    {
      path: '/backHome',
      name: 'backHome',
      component: () => import("../views/BackHome.vue")
    },
    {
      path: '/backAdmin',
      name: 'backAdmin',
      component: () => import("../views/BackAdmin.vue"),
      children: [
        {
          // 子路由: /backAdmin/content
          path: "content",
          component: () => import("../components/AdminContent.vue"),
        },
        {
          // 子路由: /backAdmin/question
          path: "question",
          component: () => import("../components/AdminQuestion.vue"),
        },
        {
          // 子路由: /backAdmin/feedback
          path: "feedback",
          component: () => import("../components/AdminFeedback.vue"),
        },
        {
          // 子路由: /backAdmin/result
          path: "result",
          component: () => import("../components/AdminResult.vue"),
        },
      ]
    },
  ]
})

export default router
