export default [
  {
    name: 'i18n - 多语言',
    path: '/i18n',
    component: () =>
      import(/* webpackChunkName: "i18n" */ '../../views/i18n/index.vue')
  }
]
