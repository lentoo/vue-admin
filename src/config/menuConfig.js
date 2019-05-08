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
      },
      {
        name: '可拖拽列表',
        path: '/components/drag-list',
        icon: 'drag'
      },
      {
        name: 'Markdown 编辑器',
        path: '/components/markdown',
        icon: 'markdown'
      },
      {
        name: '抽屉',
        path: '/components/drawer',
        icon: 'drawer'
      }
    ]
  },
  {
    name: '优化',
    path: '/optimization',
    icon: 'optimization',
    children: [
      {
        name: '图片自动压缩',
        path: '/optimization/image-compression',
        icon: 'compression'
      },
      {
        name: '自动合成精灵图',
        path: '/optimization/sprites',
        icon: 'sprites'
      }
    ]
  }

]
