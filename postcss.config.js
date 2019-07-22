/**
 * postcss-import: 处理import引入的css文件
 * postcss-url： 处理图片、字体等引用路径的指向
 * postcss-px-to-viewport: css单位的转换
 * postcss-cssnext： 添加浏览器前缀
 * cssnano：压缩和清理css代码
 */
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-preset-env": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
