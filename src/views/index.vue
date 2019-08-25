<template>
  <div class="index">
    <van-tabs v-model="active">
      <van-tab title="装备合成"><index-synthesis /></van-tab>
      <van-tab title="装备分解"><index-decomposition /></van-tab>
      <van-tab title="阵容联想"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  name: 'index',
  components: {
    indexSynthesis: () => import('@/components/synthesis'),
    indexDecomposition: () => import('@/components/decomposition'),
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  activated () {}
}
</script>

<style scoped lang="stylus">
.index
  background-color #90966e
  height 100vh
  overflow hidden
</style>
