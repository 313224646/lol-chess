<template>
  <div id="app">
    <!-- 默认全局缓存页面 -->
    <!-- 组件名字以-nka结尾都的文件都不缓存 “not keep alive” -->
    <keep-alive :exclude="/-nka$/">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import './assets/stylus/reset.styl';
</style>

