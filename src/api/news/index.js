import axios from '../index'
import qs from 'qs'
export const getNewsList = (params) => {
  return axios.get('/news/list?' + qs.stringify(params))
}
