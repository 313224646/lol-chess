<template>
  <div class="test common-text">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.common-text
  truncate-text()
  font-size 16px
</style>
