export default [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
    name: 'Index',
    meta: {
      layout: 'default',
    },
  },
]
