import { login } from '../../api/user'
import { getToken, setToken } from '../../utils'
const state = {
  token: getToken(),
  access: '',
  userName: '',
  userId: ''
}
const actions = {
  handleLogin: async ({ commit }, { username, password }) => {
    const res = await login({ username, password })
    commit('setToken', res.token)
    commit('setUserName', res.username)
    setToken(res.token)
  }
}
const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setUserName (state, username) {
    state.userName = username
  }
}
const getters = {

}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
