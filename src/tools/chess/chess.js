const CHESS = require('./chess.json')
let PROFESSION = {
  法师: [],
  刺客: [],
  剑士: [],
  斗士: [],
  元素使: [],
  护卫: [],
  枪手: [],
  骑士: [],
  游侠: [],
  换形师: []
}
let RACE = {
  恶魔: [],
  龙: [],
  浪人: [],
  极地: [],
  帝国: [],
  忍者: [],
  贵族: [],
  暗影: [],
  海盗: [],
  海克斯: [],
  机器人: [],
  虚空: [],
  狂野: [],
  约德尔人: []
}

// 划分职业和种族
CHESS.forEach(item => {
  item.profession.split('-').forEach(value => {
    if (PROFESSION[value]) {
      PROFESSION[value].push(item)
    } else {
      console.log('profession: ', item.profession)
      throw '无法识别棋子的职业'
    }
  })

  item.race.split('-').forEach(value => {
    if (RACE[value]) {
      RACE[value].push(item)
    } else {
      console.log('race: ', item.race)
      throw '无法识别棋子的种族'
    }
  })
})

// 锁定数据
Object.freeze(PROFESSION)
Object.freeze(RACE)

class Chess {
  /**
   * 
   * @param {Object} chess 参考CHESS JSON数据 
   */
  constructor(chess) {
    this.name = chess.name
    this.race = chess.race
    this.profession = chess.profession
    this.price = chess.price
    this.numbering = chess.numbering
    this.avatar = chess.avatar
  }

  getProfessionChess () { // 获取同职业棋子
  }

  getRaceChess () { // 获取其他同种族棋子
  }
}

// 获取某职业的棋子或所有职业的棋子
function getProfession (profession) {
  let professionAll = []
  if (profession) {
    if (PROFESSION[profession]) {
      return PROFESSION[profession].map(item => {
        return new Chess(item)
      })
    } else {
      throw `不存在该职业(${profession})的棋子`
    }
  } else {
    for (const key in PROFESSION) {
      if (PROFESSION.hasOwnProperty(key)) {
        professionAll.push(
          PROFESSION[key].map(item => {
            return new Chess(item)
          })
        ) 
      }
    }
    return professionAll
  }
}

// 获取某种族的棋子或所有种族的棋子
function getRace (race) {
  let raceAll = []
  if (race) {
    if (RACE[race]) {
      return RACE[race].map(item => {
        return new Chess(item)
      })
    } else {
      throw `不存在该职业(${race})的棋子`
    }
  } else {
    for (const key in RACE) {
      if (RACE.hasOwnProperty(key)) {
        raceAll.push(
          RACE[key].map(item => {
            return new Chess(item)
          })
        ) 
      }
    }
    return raceAll
  }
}

export {
  getProfession,
  getRace
}