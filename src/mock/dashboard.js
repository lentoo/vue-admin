import Mock from 'mockjs'
function getOneWeekData () {
  // 获取系统当前时间
  var now = new Date()
  var nowTime = now.getTime()
  var oneDayTime = 24 * 60 * 60 * 1000
  var weekData = []
  for (var i = 0; i < 7; i++) {
    // 显示周一
    var ShowTime = nowTime - i * oneDayTime
    // 初始化日期时间
    var myDate = new Date(ShowTime)
    var year = myDate.getFullYear()
    var month = myDate.getMonth() + 1
    var date = myDate.getDate()
    weekData.push(year + '-' + month + '-' + date)
    var str = '星期' + '日一二三四五六'.charAt(myDate.getDay())
    console.log(str)
  }
  return weekData.reverse()
}
export const getNetworkPerformanceStatus = req => {
  const date = getOneWeekData()
  // const visitsData = [1393, 3530, 2923, 1723, 3792, 4593, 5000]
  // const returningData = [3000, 1000, 2000, 2700, 2200, 2800, 3000]
  // const pageVisitsData = [500, 1000, 2000, 3000, 2200, 2800, 2000]
  const mockData = Mock.mock({
    'networkPerformanceStatus|7': [
      {
        'id|+1': Mock.Random.guid(),
        'upload|1000-6000': 0,
        'download|1000-6000': 0
      }
    ]
  })
  console.log(mockData)
  mockData.networkPerformanceStatus.forEach((item, index) => {
    item.date = date[index]
  })
  return mockData
}
export const getServerStatus = req => {
  const serverDataValues = [40, 60, 55, 66, 90, 50]
  let serverData = [
    {
      name: 'CPU Usage',
      value: 0,
      color: '#ef4e74'
    },
    {
      name: 'Memory Usage ( 16 GB )',
      value: 0,
      color: '#00b0ef'
    },
    {
      name: 'Disk Usage ( C:\\ 120GB )',
      value: 0,
      color: '#44c788'
    },
    {
      name: 'Domain ( 2/5 )',
      value: 0,
      color: '#f19a4c'
    },
    {
      name: 'Database ( 90/100 )',
      value: 0,
      color: '#bd3873'
    },
    {
      name: 'Email Account ( 25/50 )',
      value: 0,
      color: '#665ca8'
    }
  ]
  serverData.forEach((item, index) => {
    item.value = serverDataValues[index]
  })
  return {
    serverData
  }
}

export const getPvDataStatus = req => {
  const visitsData = [1393, 3530, 2923, 1723, 3792, 4593, 5000]
  const returningData = [3000, 1000, 2000, 2700, 2200, 2800, 3000]
  const pageVisitsData = [500, 1000, 2000, 3000, 2200, 2800, 2000]
  const oneWeekData = getOneWeekData()
  return {
    visitsChartData: {
      columns: ['date', 'Visits'],
      rows: oneWeekData.map((week, index) => ({
        date: week,
        Visits: visitsData[index]
      }))
    },
    returningChartData: {
      columns: ['date', 'returning visits'],
      rows: oneWeekData.map((week, index) => ({
        date: week,
        'returning visits': returningData[index]
      }))
    },
    pageVisitsChartData: {
      columns: ['date', 'returning visits'],
      rows: oneWeekData.map((week, index) => ({
        date: week,
        'returning visits': pageVisitsData[index]
      }))
    }
  }
}
export const getVisitStatus = req => {
  return {
    visitors: 32145,
    pcVisitors: 84552,
    iphone: 50,
    android: 40,
    mac: 20,
    windows: 80
  }
}
