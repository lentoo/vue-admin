export default [
  {
    path: '/product',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/index.vue')
  }
]
