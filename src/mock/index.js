import Mock from 'mockjs'
import { login } from './login'
import { getNetworkPerformanceStatus, getServerStatus, getPvDataStatus, getVisitStatus } from './dashboard'

Mock.setup({
  // 配置Ajax请求延时
  timeout: 1500
})
Mock.mock(/\/login/, login)
Mock.mock(/\/loadNetworkData/, getNetworkPerformanceStatus)
Mock.mock(/\/loadServerData/, getServerStatus)
Mock.mock(/\/loadPvData/, getPvDataStatus)
Mock.mock(/\/loadVisitData/, getVisitStatus)
export default Mock
