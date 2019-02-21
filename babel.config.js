const IS_PROD = process.env.NODE_ENV === 'production'
const plugins = [
  [
    'component',
    {
      'libraryName': 'element-ui',
      'styleLibraryName': 'theme-chalk'
    }
  ]
]

if (IS_PROD) {
  plugins.unshift([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}
module.exports = {
  presets: [
    // ['es2015', { 'modules': false }],
    '@vue/app'
  ],
  plugins
}
