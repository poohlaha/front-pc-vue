import { CONSTANT } from '@configs/index'

const state = {
  language: CONSTANT.LANGUAGES[0], // 默认中文
  skin: CONSTANT.SKINS[0] // 默认orange
}

const mutations = {}

const actions = {}
const getters = {}

// 分模块
export default {
  name: 'common',
  state,
  mutations,
  actions,
  getters
}
