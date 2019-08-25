const BASIS = require('./basis.json') // 基础装备
const SYNTHESIS = require('./synthesis.json') // 合成装备
const ALL = BASIS.concat(SYNTHESIS)

class Equipment {
  constructor(name, numbering, desc) {
    this.name = name
    this.numbering = numbering
    this.imagesUrl = `https://game.gtimg.cn/images/lol/tft/items/${numbering}.png`,
    this.desc = desc
  }
}

// 基础装备类
class Basis extends Equipment {
  constructor(numbering) {
    const info = findEquipment(numbering)
    super(info.name, info.numbering, info.desc)
  }
  synthesisOne (numbering) { // 合成单个装备
    const equipment = findEquipment(numbering)
    return new Synthesis(synthesis(this.numbering, equipment.numbering).name)
  }
  synthesisAll () { // 单个装备能合成的对应装备
    const equipment = findEquipment(this.numbering)
    return BASIS.map(item => {
      return new Synthesis(synthesis(equipment.numbering, item.numbering).numbering)
    })
  }
}

// 合成装备类
class Synthesis extends Equipment {
  constructor(numbering) {
    const info = findEquipment(numbering)
    super(info.name, info.numbering, info.desc)
    this.way = info.way
  }

  decomposition () { // 装备分解
    return this.way.split('+').map(numbering => {
      return new Basis(numbering)
    })
  }
}



// 根据名字查找一个装备
function findEquipment (numbering) {
  const result = ALL.find(item => {
    return item.numbering === numbering
  })
  if (result) {
    return result
  } else {
    throw '查找失败，装备不存在'
  }
}

// 根据编号合成装备
function synthesis (numbering1, numbering2) {
  const result = SYNTHESIS.find(item => {
    return item.way.includes(numbering1 + '+' + numbering2) || item.way.includes(numbering2 + '+' + numbering1)
  })
  if (result) {
    return result
  } else {
    console.log(numbering1, numbering2)
    throw '合成失败，不存在的合成路线'
  }
}

// 获取基本装备
function getBase () {
  return BASIS.map(item => {
    return new Basis(item.numbering)
  })
}

// 获取合成装备
function getSynthesis () {
  return SYNTHESIS.map(item => {
    return new Synthesis(item.numbering)
  })
}

export {
  getBase,
  getSynthesis
}