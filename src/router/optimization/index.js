export default [
  {
    path: '/optimization/image-compression',
    component: () => import(/* webpackChunkName: "image-compression" */ '@/views/optimization/image-compression/index.vue')
  },
  {
    path: '/optimization/sprites',
    component: () => import(/* webpackChunkName: "sprites" */ '@/views/optimization/sprites/index.vue')
  }
]
