const CHESS = require('./chess.json')

let PROFESSION = { // 职业
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
let RACE = { // 种族
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
const ELM = { // 羁绊
  恶魔: [6, 4, 2],
  极地: [6, 4, 2],
  贵族: [6, 4, 2],
  约德尔人: [6, 4, 2],
  狂野: [4, 2],
  忍者: [4, 1],
  海盗: [3],
  帝国: [4, 2],
  虚空: [3],
  龙: [2],
  暗影: [2],
  浪人: [1],
  机器人: [1],
  法师: [6, 3],
  刺客: [6, 3],
  骑士: [6, 4, 2],
  剑士: [9, 6, 3],
  枪手: [6, 4, 2],
  斗士: [6, 4, 2],
  换形师: [6, 3],
  游侠: [4, 2],
  元素使: [3]
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
}

// 获取某职业的棋子或所有职业的棋子
function getProfessionChess (profession) {
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
function getRaceChess (race) {
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

// 获取所有职业
function getProfession () {
  let profession = [] // 职业数组
  for (const key in PROFESSION) {
    if (PROFESSION.hasOwnProperty(key)) {
      profession.push(key)
    }
  }
  return profession
}

// 获取所有种族
function getRace () {
  let race = [] // 种族数组
  for (const key in RACE) {
    if (RACE.hasOwnProperty(key)) {
      race.push(key)
    }
  }
  return race
}

// 解析棋子组合获取羁绊
function getEntanglement (list) {
  let targer = {}

  list.forEach(chess => {
    chess.profession.split('-').forEach(profession => {
      if (targer.hasOwnProperty(profession)) {
        targer[profession] += 1
      } else {
        targer[profession] = 1
      }
    })

    chess.race.split('-').forEach(race => {
      if (targer.hasOwnProperty(race)) {
        targer[race] += 1
      } else {
        targer[race] = 1
      }
    })
  })
  return targer
}

// 触发的羁绊
function triggerEntanglement(list) {
  let targer = {}
  for (const key in list) {
    if (list.hasOwnProperty(key)) {
      if (
        ELM[key].find(value => {
          return value < list[key]
        })
      ) {
        targer[key]
      }
    }
  }
}

// export {
//   getProfessionChess,
//   getRaceChess,
//   getProfession,
//   getRace,
//   getEntanglement
// }