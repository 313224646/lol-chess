const CHESS = require('./chess.json')
let profession = {
  FaShi: [],
  CiKe: [],
  JianShi: [],
  DouShi: [],
  YuanSuShi: [],
  HuWei: [],
  QiangShou: [],
  QiShi: [],
  YouXia: [],
  HuanXingShi: []
}
let race = {
  EMo: [],
  Long: [],
  LangRen: [],
  JiDi: [],
  DiGuo: [],
  RenZhe: [],
  GuiZu: [],
  AnYing: [],
  HaiDao: [],
  HaiKeSi: [],
  JiQiRen: [],
  XuKong: [],
  KuangYe: [],
  YueDeErRen: []
}

// 划分职业和种族
CHESS.forEach(item => {
  item.profession.split('-').forEach(value => {
    switch (value) {
      case '法师':
        profession.FaShi.push(item)
        break
      case '刺客':
        profession.CiKe.push(item)
        break
      case '剑士':
        profession.JianShi.push(item)
        break
      case '斗士':
        profession.DouShi.push(item)
        break
      case '元素使':
        profession.YuanSuShi.push(item)
        break
      case '护卫':
        profession.HuWei.push(item)
        break
      case '枪手':
        profession.QiangShou.push(item)
        break
      case '骑士':
        profession.QiShi.push(item)
        break
      case '游侠':
        profession.YouXia.push(item)
        break
      case '换形师':
        profession.HuanXingShi.push(item)
        break
      default:
        console.log('profession: ', item.profession)
        throw '无法识别棋子的职业'
        break
    }
  })
  
  item.race.split('-').forEach(value => {
    switch (value) {
      case '恶魔':
        race.EMo.push(item)
        break
      case '龙':
        race.Long.push(item)
        break
      case '浪人':
        race.LangRen.push(item)
        break
      case '极地':
        race.JiDi.push(item)
        break
      case '帝国':
        race.DiGuo.push(item)
        break
      case '忍者':
        race.RenZhe.push(item)
        break
      case '贵族':
        race.GuiZu.push(item)
        break
      case '暗影':
        race.AnYing.push(item)
        break
      case '海盗':
        race.HaiDao.push(item)
        break
      case '机器人':
        race.JiQiRen.push(item)
        break
      case '海克斯':
        race.HaiKeSi.push(item)
        break
      case '虚空':
        race.XuKong.push(item)
        break
      case '狂野':
        race.KuangYe.push(item)
        break
      case '约德尔人':
        race.YueDeErRen.push(item)
        break
      default:
        console.log('race: ',item.race)
        throw '无法识别棋子的种族'
        break
    }
  })
})

// 锁定数据
Object.freeze(profession)
Object.freeze(race)

class Chess {
  /**
   * 
   * @param {Object} chess 参考CHESS JSON数据 
   */
  constructor(chess) {
    this.name = chess.name
    this.race = chess.race
    this.career = chess.career
    this.price = this.price
    this.numbering = this.numbering
    this.avatar = this.avatar
  }

  getProfessionChess () { // 获取其他职业棋子
  }

  getRaceChess () { // 获取其他同种族棋子
  }
}

function pinyin (value) { // 转成拼音
  value
}