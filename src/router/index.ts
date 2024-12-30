import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout-with-double-sidebars',
      name: 'layout-with-double-sidebars',
      component: () => import('@/views/LayoutWithDoubleSidebars.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/HomePage.vue'),
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('@/pages/SearchPage.vue'),
        },
      ],
    },
    {
      path: '/layout-with-no-sidebars',
      name: 'layout-with-no-sidebars',
      component: () => import('@/views/LayoutWithNoSidebars.vue'),
      children: [
        {
          path: '/profile/:id',
          name: 'profile',
          component: () => import('@/pages/ProfilePage.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
    },
  ],
})

export default router
