import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front-home',
      component: () => import("../views/FrontHome.vue")
    },
    {
      path: '/front-answer/:qId',
      name: 'front-answer',
      component: () => import("../views/FrontAnswer.vue")
    },
    {
      path: '/front-confirm',
      name: 'front-confirm',
      component: () => import("../views/FrontConfirm.vue")
    },
    {
      path: '/front-result',
      name: 'front-result',
      component: () => import("../views/FrontResult.vue")
    },
    {
      path: '/back-home',
      name: 'back-home',
      component: () => import("../views/BackHome.vue")
    },
    {
      path: '/back-admin',
      name: 'back-admin',
      component: () => import("../views/BackAdmin.vue"),
      children: [
        {
          // 子路由: /back-admin/content
          path: "content/:qId?",
          component: () => import("../components/AdminContent.vue"),
        },
        {
          // 子路由: /back-admin/question
          path: "question/:qId?",
          component: () => import("../components/AdminQuestion.vue"),
        },
        {
          // 子路由: /back-admin/feedback
          path: "feedback/:qId?",
          component: () => import("../components/AdminFeedback.vue"),
        },
        {
          // 子路由: /back-admin/result
          path: "result/:qId?",
          component: () => import("../components/AdminResult.vue"),
        },
      ]
    },
  ]
})

export default router
