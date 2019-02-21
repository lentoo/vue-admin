import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const types = {
  MENU_COLLAPSE: 'MENU_COLLAPSE'
}
export default new Vuex.Store({
  state: {
    [types.MENU_COLLAPSE]: false
  },
  mutations: {
    [types.MENU_COLLAPSE]: (state, res) => {
      state[types.MENU_COLLAPSE] = res
    }
  },
  actions: {
    [types.MENU_COLLAPSE]: async ({ commit }, state) => {
      return commit(types.MENU_COLLAPSE, state)
    }
  },
  getters: {
    getMenuCollapse (state) {
      return state[types.MENU_COLLAPSE]
    }
  }
})
