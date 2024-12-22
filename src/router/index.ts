import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/default-layout',
      name: 'DefaultLayout',
      component: () => import('@/views/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/HomePage.vue'),
        },
      ],
    },
  ],
})

export default router
