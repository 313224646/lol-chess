<template>
  <div>
    <div class="equipment">
      <div class="base">
        <div class="base-item" v-for="(item, index) in base" :key="index">
          <img :src="item.imagesUrl" @click="equipmentClick(item)"/>
        </div>
      </div>
      <div class="base">
        <div class="base-item" v-for="item in 8" :key="item">
          <img :src="selectBase.imagesUrl" />
        </div>
      </div>
      <div class="synthesis">
        <transition-group name="van-slide-right">
          <div class="synthesis-item" v-for="(item, index) in baseToSynthesisAll" :key="index">
            <img :src="item.imagesUrl"/>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { getBase, getSynthesis } from '@/tools/equipment/equipment'
import { Button } from 'vant'
export default {
  name: 'index',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      base: getBase(),
      synthesis: getSynthesis(),
      baseToSynthesisAll: [],
      selectBase: {}
    }
  },
  computed: {},
  methods: {
    equipmentClick (targer) {
      this.selectBase = targer
      this.baseToSynthesisAll = targer.synthesisAll()
      
    }
  },
  created () {},
  mounted () {},
  activated () {}
}
</script>

<style scoped lang="stylus">
.equipment
  display flex
  justify-content space-between
  background-color #684e35
  .base
  .synthesis
    display flex
    justify-content center
    flex-flow column nowrap
    height 100vh
    .base-item
    .synthesis-item
      width calc(100vh / 8)
      height calc(100vh / 8)
      padding 8px
      font-size 0
      img
        width 100%
        height 100%
        border-radius 50%
        overflow hidden
</style>
