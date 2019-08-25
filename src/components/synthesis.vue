<template>
  <div>
    <div class="tip">提示: 请点击一个装备查看合成路线以及信息</div>
    <div class="equipment">
      <div class="base">
        <div class="base-item" v-for="(item, index) in base" :key="index">
          <img :src="item.imagesUrl" @click="equipmentClick(item)"/>
        </div>
      </div>
      <div class="base" v-show="selectBase.name">
        <div class="base-item base-item--select" v-for="item in 8" :key="item">
          <img :src="selectBase.imagesUrl"/>
        </div>
      </div>
      <div class="synthesis">
        <div class="synthesis-item" v-for="item in baseToSynthesisAll" :key="item.numbering">
          <img :src="item.imagesUrl" @click="setSelectEquipment(item)"/>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info-name">{{selectEquipment.name}}</div>
      <div class="info-desc">{{selectEquipment.desc}}</div>
    </div>
  </div>
</template>

<script>
import { getBase } from '@/tools/equipment/equipment'
export default {
  data () {
    return {
      base: getBase(),
      baseToSynthesisAll: [],
      selectBase: {},
      selectEquipment: {} // 用于展示选中装备的信息
    }
  },
  computed: {},
  methods: {
    equipmentClick (targer) {
      this.selectBase = targer
      this.setSelectEquipment(targer)
      this.baseToSynthesisAll = targer.synthesisAll()
    },
    setSelectEquipment (targer) {
      this.selectEquipment = targer
    }
  },
  created () {},
  mounted () {},
  activated () {}
}
</script>

<style scoped lang="stylus">
.tip
  color #e6e5e5
  margin 8px 10px
  font-size 14px
.equipment
  display flex
  justify-content space-between
  padding 0 20px
  .base
  .synthesis
    display flex
    justify-content center
    flex-flow column nowrap
    height 70vh
    .base-item
    .synthesis-item
      width calc(70vh / 8)
      height calc(70vh / 8)
      padding 8px
      font-size 0
      img
        width 100%
        height 100%
        border-radius 50%
        overflow hidden
    .base-item--select
      position relative
      &:before
        content ''
        position absolute
        top 50%
        left -68px
        width 68px
        height 2px
        background-color #fff
      &:after
        content ''
        position absolute
        top 50%
        right -68px
        width 68px
        height 2px
        background-color #fff
.info
  color #ffffff
  margin 20px
  .info-name
    font-size 18px
    margin-bottom 20px
</style>
