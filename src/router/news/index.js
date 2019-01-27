export default [
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue')
  }
]
