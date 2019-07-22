## 介绍  
这是一个Vue的初始化模板，用于移动端开发。由于之前每次开始一个新的项目，都需要重修配置一些通用的功能，比如Css的reset、移动端适配、还有一些插件等等，这有点无聊，所以就把常用的保留下来，就变成了一个初始化模板

## 移动端适配
* 采用vw适配移动端
* 转换工具为postcss，开发单位为px，转换后单位为vw
* 低版本终端兼容性处理`viewport-units-buggyfill`（已放弃）

## Vant组件库
默认使用Vant组件库，纯属个人喜好。  

#### 按需引入
```
import { Button } from 'vant'

components: {
  [Button.name]: Button
}
```

## 字体设置
主要因为安卓端默认字体会总体偏上
#### public/index.html
```
<html lang="zh-cmn-Hans">...</html>
```
#### src/assets/stylus/reset.styl
```
#app {
  font-family: miui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
## 插件
放置了一些常用插件在`src/plugins`

## 页面过渡（暂时移除）
设置页面过渡的滑入滑出效果，尝试过css和js的方案，但在低端手机上体验不是很好，暂时移除
