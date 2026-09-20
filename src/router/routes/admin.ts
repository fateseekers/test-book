import type { RouteRecordRaw } from 'vue-router'
import AdminPagePage from '@/pages/AdminPage.vue'

export const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: AdminPagePage,
  },
]
