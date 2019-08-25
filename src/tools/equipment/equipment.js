const BASE = require('./base.json') // 基础装备
const SYNTHESIS = require('./synthesis.json') // 合成装备
const ALL = BASE.concat(SYNTHESIS)

class Equipment {
  constructor(name) {
    const info = findEquipment(name)
    this.name = info.name
    this.numbering = info.numbering
    this.imagesUrl = `https://game.gtimg.cn/images/lol/tft/items/${this.numbering}.png`,
    this.desc = info.desc
  }
}

class EquipmentBasis extends Equipment {
  constructor(name) {
    super(name)
  }
  synthesisOne (name) { // 合成单个装备
    const equipment = findEquipment(name)
    return new Equipment(synthesis(this.numbering, equipment.numbering).name)
  }
  synthesisAll () { // 单个装备能合成的对应装备
    const equipment = findEquipment(this.name)
    return BASE.map(item => {
      return new Equipment(synthesis(equipment.numbering, item.numbering).name)
    })
  }
}

// 根据名字查找一个装备
function findEquipment (name) {
  const result = ALL.find(item => {
    return item.name === name
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
  return BASE.map(item => {
    return new EquipmentBasis(item.name)
  })
}

// 获取合成装备
function getSynthesis () {
  return SYNTHESIS.map(item => {
    return new Equipment(item.name)
  })
}

export {
  getBase,
  getSynthesis
}