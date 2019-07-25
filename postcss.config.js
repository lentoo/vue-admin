module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-sprites': {
      basePath: './dist',
      spritePath: './dist/img/sprites',
      retina: true,
      filterBy: function (image) {
        // Allow only png files
        if (image.url.includes('sprites')) {
          if (!/\.png$/.test(image.url)) {
            return Promise.reject(new Error(' Allow only png files'))
          }
          return Promise.resolve()
        }
        return Promise.reject(new Error(' Allow only png files'))
      },
      groupBy: function (image) {
        const spritesPaths = image.url.split('sprites')
        if (spritesPaths.length > 1) {
          const spriteImagePaths = spritesPaths[1].split('/')
          if (spriteImagePaths.length > 2) {
            const groupName = spriteImagePaths[1]
            return Promise.resolve(groupName)
          } else {
            return Promise.reject(new Error('Not a group name.'))
          }
        } else {
          return Promise.reject(new Error('Not a group name.'))
        }
      }
    }
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 1920,
    //   viewportHeight: 938,
    //   unitPrecision: 5,
    //   viewportUnit: 'vw',
    //   selectorBlackList: [],
    //   minPixelValue: 1,
    //   mediaQuery: false,
    //   propList: ['*']
    // }
  }
}
