import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const booksRoutes: RouteRecordRaw[] = [
  {
    path: '/books',
    component: () => import('@/pages/BooksPage.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
]
