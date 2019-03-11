import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const types = {
  MENU_COLLAPSE: 'MENU_COLLAPSE',
  BREADCRUMB_ITEMS: 'BREADCRUMB_ITEMS'
}
export default new Vuex.Store({
  state: {
    [types.MENU_COLLAPSE]: false,
    [types.BREADCRUMB_ITEMS]: []
  },
  mutations: {
    [types.MENU_COLLAPSE]: (state, res) => {
      state[types.MENU_COLLAPSE] = res
    },
    [types.BREADCRUMB_ITEMS]: (state, res) => {
      state[types.BREADCRUMB_ITEMS] = res
    }
  },
  actions: {
    [types.MENU_COLLAPSE]: async ({ commit }, state) => {
      return commit(types.MENU_COLLAPSE, state)
    },
    [types.BREADCRUMB_ITEMS]: async ({ commit }, state) => {
      return commit(types.BREADCRUMB_ITEMS, state)
    }
  },
  getters: {
    getMenuCollapse (state) {
      return state[types.MENU_COLLAPSE]
    },
    getBreadcrumbItems (state) {
      return state[types.BREADCRUMB_ITEMS]
    }
  }
})
