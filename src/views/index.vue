<template>
  <div class="index">
    <van-field
      class="break-all"
      v-model="message"
      type="textarea"
      placeholder="你想说些什么吗？"
      rows="1"
      autosize
    />
  </div>
</template>

<script>
import { Field } from 'vant'
import http from 'axios'
export default {
  name: 'home',
  components: {
    [Field.name]: Field
  },
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
