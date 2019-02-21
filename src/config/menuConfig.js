export default [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    name: '组件',
    path: '/components',
    icon: 'component',
    children: [
      {
        name: '数字渐变',
        path: '/components/count-to',
        icon: 'rise'
      },
      {
        name: '树状表格',
        path: '/components/tree-table',
        icon: 'tree'
      }
    ]
  }
]
