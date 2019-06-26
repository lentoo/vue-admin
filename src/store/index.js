import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)
export const types = {
  MENU_COLLAPSE: 'MENU_COLLAPSE',
  BREADCRUMB_ITEMS: 'BREADCRUMB_ITEMS',
  MENU_STYLE: 'MENU_STYLE',
  CURRENT_MENU_STYLE: 'CURRENT_MENU_STYLE',
  SVG_ICON_NAME: 'SVG_ICON_NAME',
  UPDATE_USERINFO: 'UPDATE_USERINFO'
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
    [types.CURRENT_MENU_STYLE]: 'dark',
    [types.SVG_ICON_NAME]: [],
    /**
     * 用户信息
     */
    userInfo: {
      name: ''
    }
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
    },
    [types.SVG_ICON_NAME]: (state, res) => {
      state[types.SVG_ICON_NAME] = res
    },
    [types.UPDATE_USERINFO]: (state, userinfo) => {
      state.userInfo = userinfo
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
    },
    [types.SVG_ICON_NAME]: async ({ commit }, state) => {
      return commit(types.SVG_ICON_NAME, state)
    },
    updateUserInfo: async ({ commit }, userinfo) => {
      return commit(types.UPDATE_USERINFO, userinfo)
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
    },
    getSvgIconName (state) {
      return state[types.SVG_ICON_NAME]
    }
  },
  modules: {
    user
  }
})
