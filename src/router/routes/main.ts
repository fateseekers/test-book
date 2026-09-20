import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/IndexPage.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
]
