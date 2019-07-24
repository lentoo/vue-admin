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

export class LocalStorage {
  static setItem (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.log('LocalStorage setStorage error', error)
      return false
    }
  }
  static getItem (key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.log('LocalStorage getStorage error', error)
      return ''
    }
  }
}
export class SessionStorage {
  static setItem (key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.log('SessionStorage setStorage error', error)
      return false
    }
  }
  static getItem (key) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    } catch (error) {
      console.log('SessionStorage getStorage error', error)
      return ''
    }
  }
}
