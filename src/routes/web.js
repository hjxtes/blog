import Layout from '@/layout/index'
import lazy from '@/components/Lazy'

export default {
  path: '/',
  name: 'home',
  component: Layout,
  childRoutes: [
    { path: '/home', component: lazy(() => import('@/views/home')) },
  ],
}
