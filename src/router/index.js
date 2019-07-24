import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
Vue.use(Router)

const IndexRoute = {
  path: '/',
  component: Index,
  redirect: '/login',
  children: []
}

let routes = [
  IndexRoute,
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  IndexRoute.children = [
    ...IndexRoute.children,
    ...(routerModule.default || routerModule)
  ]
})

export default new Router({
  mode: 'hash',
  routes: routes
})
