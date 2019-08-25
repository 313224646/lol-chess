<template>
  <div>
    <div class="tip">提示: 请点击一个装备查看合成路线以及信息</div>
    <div class="synthesis">
      <div class="synthesis-item" v-for="item in synthesis" :key="item.numbering">
        <img class="equipment" :src="item.imagesUrl" @click="synthesisClick(item)"/>
      </div>
    </div>
    <van-row class="targer van-hairline--top">
      <van-col span="12">
        <van-row type="flex" align="center">
          <van-col span="12">
            <div class="synthesis--select">
              <div class="synthesis-item--select">
                <img class="equipment" :src="selectSynthesis.imagesUrl"/>
              </div>
            </div>
          </van-col>
          <van-col span="12">
            <div class="base">
              <div class="base-item" v-for="item in decomposition" :key="item.numbering">
                <img class="equipment" :src="item.imagesUrl" @click="setSelectEquipment(item)"/>
              </div>
            </div>
          </van-col>
        </van-row>
      </van-col>
      <van-col span="12">
        <div class="info">
          <div class="info-name">{{selectEquipment.name}}</div>
          <div class="info-desc">{{selectEquipment.desc}}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getSynthesis } from '@/tools/equipment/equipment'
import { Row, Col } from 'vant'
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      synthesis: getSynthesis(),
      decomposition: [], // 分解后的装备
      selectSynthesis: {},
      selectEquipment: {} // 用于展示选中装备的信息
    }
  },
  computed: {},
  methods: {
    synthesisClick (targer) {
      this.selectSynthesis = targer
      this.setSelectEquipment(targer)
      this.decomposition = targer.decomposition()
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
.equipment
  width 100%
  height 100%
  border-radius 50%
  overflow hidden
.tip
  color #e6e5e5
  margin 8px 10px
  font-size 14px
.synthesis
  display flex
  flex-flow row wrap
  margin-bottom 20px
  .synthesis-item
    width calc(100% / 6)
    padding 8px
    font-size 0
.targer
  padding 10px
  .base
  .synthesis--select
    display flex
    justify-content center
    flex-flow column nowrap
    .base-item
    .synthesis-item--select
      width calc(100% / 1.5)
      height calc(100% / 1.5)
      padding 8px
      font-size 0
.info
  color #ffffff
  margin 20px 6px
  .info-name
    font-size 18px
    margin-bottom 20px
</style>
