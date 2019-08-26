<template>
  <div>
    <van-row>
      <van-col span="8">
        <div @click="status = 0">职业</div>
        <div @click="status = 1">种族</div>
      </van-col>
      <van-col span="8">
        <div 
          v-for="(name, index) in (status === 0 ? profession : race)" 
          :key="index"
          @click="getOneTypeChess(name)">
          {{name}}
        </div>
      </van-col>
      <van-col span="8">
        <div 
          v-for="item in chess" 
          :key="item.numbering"
          @click="chessClick(item)">
          {{item.name}}
        </div>
      </van-col>
    </van-row>
    <van-divider />
    <div 
      v-for="chess in selectChess" 
      :key="chess.numbering"
      @click="chessClick(chess)">
      {{chess.name}}
    </div>
    <van-divider />
  </div>
</template>

<script>
import { Row, Col, Divider } from 'vant'
import {
  getProfessionChess,
  getProfession,
  getRaceChess,
  getRace
} from '@/tools/chess/chess.js'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Divider.name]: Divider
  },
  data () {
    return {
      profession: getProfession(),
      race: getRace(),
      status: 0, // 0: 职业, 1: 种族
      chess: [], // 分类下的棋子
      selectChess: [], // 选中的棋子
    }
  },
  computed: {},
  methods: {
    getOneTypeChess (value) {
      if (this.status === 0) { // 职业
        this.chess = getProfessionChess(value)
      } else {
        this.chess = getRaceChess(value)
      }
    },
    chessClick (targer) {
      this.selectChess.findIndex(chess => {
        return chess.numbering === targer.numbering
      }) === -1
       ? this.selectChess.push(targer)
       : console.log('该棋子已经存在')
    }
  },
  created () {}
}
</script>

<style scoped lang="stylus">
</style>
