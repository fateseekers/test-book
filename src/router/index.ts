import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes } from '@/router/routes/main.ts'
import { adminRoutes } from '@/router/routes/admin.ts'
import { booksRoutes } from '@/router/routes/book.ts'
import { authorsRoutes } from '@/router/routes/authors.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes,
    ...booksRoutes,
    ...authorsRoutes,
    ...adminRoutes
  ],
})

export default router
