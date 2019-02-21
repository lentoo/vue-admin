export default [
  {
    path: '/components/count-to',
    component: () => import(/* webpackChunkName: "components-count-to" */ '@/views/components/count-to/index.vue')
  },
  {
    path: '/components/tree-table',
    component: () => import(/* webpackChunkName: "components-tree-table" */ '@/views/components/tree-table/index.vue')
  }
]
