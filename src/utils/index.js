export function setStorage (key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.log('setStorage error', error)
    return false
  }
}
export function getStorage (key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.log('getStorage error', error)
    return ''
  }
}
export function setToken (token) {
  setStorage('token', token)
}
export function getToken () {
  return getStorage('token')
}
