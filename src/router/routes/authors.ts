import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const authorsRoutes: RouteRecordRaw[] = [
  {
    path: '/authors',
    component: () => import('@/pages/AuthorsPage.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
]
