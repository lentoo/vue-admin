import axios from '.'
export function loadNetworkPerformanceStatus () {
  return axios.get('/loadNetworkData')
}

export function loadServerStatus () {
  return axios.get('/loadServerData')
}

export function loadPvStatus () {
  return axios.get('/loadPvData')
}

export function loadVisitStatus () {
  return axios.get('/loadVisitData')
}
