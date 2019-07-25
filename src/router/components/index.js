export default [
  {
    path: '/components/count-to',
    component: () =>
      import(
        /* webpackChunkName: "components-count-to" */ '@/views/components/count-to/index.vue'
      )
  },
  {
    path: '/components/tree-table',
    component: () =>
      import(
        /* webpackChunkName: "components-tree-table" */ '@/views/components/tree-table/index.vue'
      )
  },
  {
    path: '/components/drag-list',
    component: () =>
      import(
        /* webpackChunkName: "components-drag-list" */ '@/views/components/drag-list/index.vue'
      )
  },
  {
    path: '/components/markdown',
    component: () =>
      import(
        /* webpackChunkName: "components-markdown" */ '@/views/components/markdown/index.vue'
      )
  },
  {
    path: '/components/drawer',
    component: () =>
      import(
        /* webpackChunkName: "components-drawer" */ '@/views/components/drawer/index.vue'
      )
  },
  {
    path: '/components/svg-icons',
    component: () =>
      import(
        /* webpackChunkName: "components-svg" */ '@/views/components/svg-icons/index.vue'
      )
  },
  {
    path: '/components/rich-text',
    component: () =>
      import(
        /* webpackChunkName: "rich-text" */ '@/views/components/rich-text/index.vue'
      )
  }
]
