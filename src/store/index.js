import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const types = {
  MENU_COLLAPSE: 'MENU_COLLAPSE',
  BREADCRUMB_ITEMS: 'BREADCRUMB_ITEMS',
  MENU_STYLE: 'MENU_STYLE',
  CURRENT_MENU_STYLE: 'CURRENT_MENU_STYLE'
}
export default new Vuex.Store({
  state: {
    [types.MENU_COLLAPSE]: false,
    [types.BREADCRUMB_ITEMS]: [],
    [types.MENU_STYLE]: {
      light: {
        backgroundColor: '#fff',
        textColor: 'rgba(0, 0, 0, .65)',
        activeTextColor: '#1890ff',
        logoBackgroundColor: '#fff',
        logoColor: '#1890ff'
      },
      dark: {
        backgroundColor: '#001529',
        textColor: '#fff',
        activeTextColor: '#116BBE',
        logoBackgroundColor: '#022445',
        logoColor: '#fff'
      }
    },
    [types.CURRENT_MENU_STYLE]: 'dark'
  },
  mutations: {
    [types.MENU_COLLAPSE]: (state, res) => {
      state[types.MENU_COLLAPSE] = res
    },
    [types.BREADCRUMB_ITEMS]: (state, res) => {
      state[types.BREADCRUMB_ITEMS] = res
    },
    [types.CURRENT_MENU_STYLE]: (state, res) => {
      state[types.CURRENT_MENU_STYLE] = res
    }
  },
  actions: {
    [types.MENU_COLLAPSE]: async ({ commit }, state) => {
      return commit(types.MENU_COLLAPSE, state)
    },
    [types.BREADCRUMB_ITEMS]: async ({ commit }, state) => {
      return commit(types.BREADCRUMB_ITEMS, state)
    },
    [types.CURRENT_MENU_STYLE]: async ({ commit }, state) => {
      return commit(types.CURRENT_MENU_STYLE, state)
    }
  },
  getters: {
    getMenuCollapse (state) {
      return state[types.MENU_COLLAPSE]
    },
    getBreadcrumbItems (state) {
      return state[types.BREADCRUMB_ITEMS]
    },
    getMenuStyle (state) {
      return state[types.MENU_STYLE][state[types.CURRENT_MENU_STYLE]]
    },
    getCurrentMenuStyle (state) {
      return state[types.CURRENT_MENU_STYLE]
    }
  }
})
