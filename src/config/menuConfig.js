export default [
  {
    name: 'dashboard',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    name: 'components',
    path: '/components',
    icon: 'component',
    children: [
      {
        name: 'count-to',
        path: '/components/count-to',
        icon: 'rise'
      },
      {
        name: 'tree-table',
        path: '/components/tree-table',
        icon: 'tree'
      },
      {
        name: 'drag-list',
        path: '/components/drag-list',
        icon: 'drag'
      },
      {
        name: 'markdown',
        path: '/components/markdown',
        icon: 'markdown'
      },
      {
        name: 'rich-text',
        path: '/components/rich-text',
        icon: 'rich-text'
      },
      {
        name: 'drawer',
        path: '/components/drawer',
        icon: 'drawer'
      },
      {
        name: 'svg-icons',
        path: '/components/svg-icons',
        icon: 'svg'
      }
    ]
  },
  {
    name: 'optimization',
    path: '/optimization',
    icon: 'optimization',
    children: [
      {
        name: 'image-compression',
        path: '/optimization/image-compression',
        icon: 'compression'
      },
      {
        name: 'sprites',
        path: '/optimization/sprites',
        icon: 'sprites'
      }
    ]
  },
  {
    path: '/i18n',
    name: 'i18n',
    icon: 'language'
  }
]
