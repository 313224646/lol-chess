const path = require('path')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: { // 修改vant主题颜色变量
        }
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type))) // 全局引入样式表
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/stylus/main.styl')
      ],
    })
}

function resolve (dir) {
  return path.join(__dirname, dir)
}