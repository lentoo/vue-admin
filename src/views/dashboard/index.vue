<template>
  <div class="dashboard">
    <el-row :gutter="40">
      <el-col>
        <el-card>
          <el-col :span="18">
            <ve-line
              :data="chartData"
              :loading="loading"
              :settings="chartSettings"
              :title="{
                text: '网络性能状况'
              }"
              :extend="chartExtend"
            ></ve-line>
          </el-col>
          <el-col :span="6">
            <div class="server-status-list">
              <h3>服务器使用状况</h3>
              <div
                class="server-status-item"
                v-for="item in serverData"
                :key="item.name"
              >
                <p class="server-status-item-title">{{ item.name }}</p>
                <el-progress
                  :text-inside="true"
                  :stroke-width="16"
                  :percentage="item.value"
                  :color="item.color"
                ></el-progress>
              </div>
            </div>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="mt20">
      <el-col>
        <el-card>
          <el-row :gutter="40">
            <el-col :span="6">
              <div class="chart-item-warpper">
                <ve-line
                  height="200px"
                  :extend="visitsChartExtend"
                  :data="visitsChartData"
                  :settings="chartSettings"
                  :loading="loading"
                ></ve-line>
              </div>
              <p class="chart-item-value text-c">
                <cc-count-to
                  style="font-size: 22px"
                  :usegroup="true"
                  :start="0"
                  :end="3333"
                ></cc-count-to>
              </p>
              <p class="chart-item-desc text-c">
                Visits
              </p>
            </el-col>
            <el-col :span="6">
              <div class="chart-item-warpper">
                <ve-histogram
                  height="200px"
                  :extend="pageviewChartExtend"
                  :data="visitsChartData"
                  :settings="chartSettings"
                  :loading="loading"
                ></ve-histogram>
              </div>
              <p class="chart-item-value text-c">
                <cc-count-to
                  style="font-size: 22px"
                  :usegroup="true"
                  :start="0"
                  :end="55543"
                >
                </cc-count-to>
              </p>
              <p class="chart-item-desc text-c">
                Page Views
              </p>
            </el-col>
            <el-col :span="6">
              <div class="chart-item-warpper">
                <ve-line
                  height="200px"
                  :extend="returingChartExtend"
                  :data="returningChartData"
                  :settings="chartSettings"
                  :loading="loading"
                ></ve-line>
              </div>
              <p class="chart-item-value text-c">
                <cc-count-to style="font-size: 22px" :start="0" :end="25">
                  <span slot="right"> %</span>
                </cc-count-to>
              </p>
              <p class="chart-item-desc text-c">
                Returning Visits
              </p>
            </el-col>
            <el-col :span="6">
              <div class="chart-item-warpper">
                <ve-line
                  height="200px"
                  :extend="pageVisitsChartExtend"
                  :data="pageVisitsChartData"
                  :settings="chartSettings"
                  :loading="loading"
                ></ve-line>
              </div>
              <p class="chart-item-value text-c">
                <cc-count-to
                  style="font-size: 22px"
                  :usegroup="true"
                  :start="0"
                  :end="55543"
                >
                </cc-count-to>
              </p>
              <p class="chart-item-desc text-c">
                Page / Visits
              </p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="mt20" :gutter="40">
      <el-col :span="14">
        <el-collapse-transition>
          <div v-show="showUnique">
            <el-card
              v-loading="loadingUnique"
            >
              <div slot="header" class="clearfix">
                <div class="card-title-box">
                  <span class="card-title">Mobile Visit</span>
                  <div>
                    <cc-svg-icon class="icon-action-item" icon-class="refresh" @click="refreshLoadUniqueData"></cc-svg-icon>
                    <cc-svg-icon class="icon-action-item" icon-class="close" @click="showUnique = false"></cc-svg-icon>
                  </div>
                </div>
              </div>

              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="unique-item" style="flex-direction: column;">
                    <cc-count-to
                      style="font-size: 22px;font-weight: 700;color: #666;"
                      :usegroup="true"
                      :start="0"
                      :end="uniqueData.visitors">
                    </cc-count-to>
                    <p style="color: #999;margin-top: 10px;">
                      Unique visitors
                    </p>
                  </div>
                </el-col>
                <el-col :span="9">
                  <div class="unique-item">
                    <div class="unique unique-progress">
                      <el-progress type="circle" :percentage="uniqueData.iphone" :stroke-width="12" color="#0aade7"></el-progress>
                    </div>
                    <div class="unique unique-icon">
                      <cc-svg-icon icon-class="iphone" class="unique-icon" style="color: #0aade7;"></cc-svg-icon>
                    </div>
                    <div class="unique unique-desc">
                      <span>iPhone</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="9">
                  <div class="unique-item">
                    <div class="unique unique-progress">
                      <el-progress type="circle" :percentage="uniqueData.android" :stroke-width="12" color="#a979d2"></el-progress>
                    </div>
                    <div class="unique unique-icon">
                      <cc-svg-icon icon-class="android" class="unique-icon" style="color: #a979d2;"></cc-svg-icon>
                    </div>
                    <div class="unique unique-desc">
                      <span>Android</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-collapse-transition>
      </el-col>
      <el-col :span="10">
        <!-- 123f -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Progress, Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
// import VeBar from 'v-charts/lib/bar.common'
import 'echarts/lib/component/title'
import 'v-charts/lib/style.css'
Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(Progress.name, Progress)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Loading.directive)
const delay = time => new Promise(resolve => setTimeout(() => resolve(), time))
const oneWeekData = getOneWeekData()

const DATA_FROM_BACKEND = {
  columns: ['date', '上传', '下载'],
  rows: [
    { date: '', 上传: 1393, 下载: 1393 },
    { date: '', 上传: 3530, 下载: 2500 },
    { date: '', 上传: 2923, 下载: 2780 },
    { date: '', 上传: 4000, 下载: 3500 },
    { date: '', 上传: 2500, 下载: 2700 },
    { date: '', 上传: 3500, 下载: 2000 },
    { date: '', 上传: 2200, 下载: 2200 }
  ]
}
const DATA_UNIQUE_FROM_BACKEND = {
  visitors: 32145,
  iphone: 50,
  android: 40
}

const DATA_PV_FROM_BACKEND = (() => {
  const visitsData = [1393, 3530, 2923, 1723, 3792, 4593, 5000]
  const returningData = [3000, 1000, 2000, 2700, 2200, 2800, 3000]
  const pageVisitsData = [500, 1000, 2000, 3000, 2200, 2800, 2000]
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
})()

DATA_FROM_BACKEND.rows = DATA_FROM_BACKEND.rows.map((item, index) => {
  item.date = oneWeekData[index]
  return item
})
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
export default {
  name: 'dashboard',

  data () {
    return {
      itemSpan: 4,
      chartSettings: {
        area: true
      },
      chartExtend: {
        xAxis: {
          boundaryGap: false
        },
        grid: {
          right: '3%',
          containLabel: true
        }
      },
      chartData: {
        columns: [],
        rows: []
      },
      visitsChartData: {
        columns: [],
        rows: []
      },
      returningChartData: {
        columns: [],
        rows: []
      },
      pageVisitsChartData: {
        columns: [],
        rows: []
      },
      commonChartExtend: {
        grid: {
          top: '3%',
          left: '1%',
          containLabel: true
        },
        xAxis: {
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false,
          axisTick: {
            // y轴刻度线
            show: false
          },
          splitLine: {
            // 网格线
            show: false
          }
        },
        legend: {
          show: false
        }
      },
      serverData: [
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
      ],
      loading: false,
      showUnique: true,
      uniqueData: {
        visitors: 0,
        iphone: 0,
        android: 0
      },
      loadingUnique: true,
      delayTime: 1500
    }
  },
  computed: {
    visitsChartExtend () {
      return {
        ...this.commonChartExtend,
        color: '#e44e54',
        areaStyle: {
          // 是否需要填充
          color: '#ffd2d3'
        }
      }
    },
    pageviewChartExtend () {
      return {
        ...this.commonChartExtend,
        color: '#44c788'
      }
    },
    returingChartExtend () {
      return {
        ...this.commonChartExtend,
        color: '#715eb3',
        areaStyle: {
          // 是否需要填充
          color: '#e2dcf3'
        }
      }
    },
    pageVisitsChartExtend () {
      return {
        ...this.commonChartExtend,
        color: '#43c1f1',
        areaStyle: {
          // 是否需要填充
          color: '#c1ecfb'
        }
      }
    }
  },
  created () {
    this.loading = true

    setTimeout(() => {
      this.loading = false
      this.loadServerData()
      this.loadNetworkData()
      this.loadPvData()
    }, this.delayTime)
    this.loadUniqueData()
  },
  methods: {
    loadServerData () {
      const serverDataValues = [40, 60, 55, 66, 90, 50]
      this.serverData.forEach((item, index) => {
        item.value = serverDataValues[index]
      })
    },
    loadNetworkData () {
      this.chartData = DATA_FROM_BACKEND
    },
    loadPvData () {
      this.visitsChartData = DATA_PV_FROM_BACKEND.visitsChartData
      this.returningChartData = DATA_PV_FROM_BACKEND.returningChartData
      this.pageVisitsChartData = DATA_PV_FROM_BACKEND.pageVisitsChartData
    },
    refreshLoadUniqueData () {
      this.loadingUnique = true
      this.loadUniqueData()
    },
    async loadUniqueData () {
      await delay(this.delayTime)
      this.uniqueData = { ...DATA_UNIQUE_FROM_BACKEND }
      DATA_UNIQUE_FROM_BACKEND.visitors += +(Math.random() * 1000).toFixed(0)
      DATA_UNIQUE_FROM_BACKEND.android += +(Math.random() * 5).toFixed(0)
      DATA_UNIQUE_FROM_BACKEND.iphone += +(Math.random() * 5).toFixed(0)
      this.loadingUnique = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/common.scss";
.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  padding-bottom: 20px;
  .server-status-list {
    h3 {
      margin-bottom: 10px;
      font-weight: 700;
    }
  }
  .server-status-item {
    margin-bottom: 10px;
    &-title, {
      font-size: 12px;
      color: #999;
      margin-bottom: 10px;
    }
  }
  .chart-item-warpper {
    height: 130px;
  }
  .chart-item-value {
    color: #666;
    font-weight: 700;
  }
  .chart-item-desc {
    font-size: 14px;
    color: #999;
  }
  .card-title-box {
    @include center(row);
    height: 22px;
    .card-title {
      flex: 1;
      font-size: 14px;
      font-weight: 700;
    }
  }
  .icon-action-item {
    color: #999;
    font-size: 14px;
    padding: 10px;
    padding-right: 0;
    margin-right: 10px;
    cursor: pointer;
    &:first-child {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .unique-item {
    @include center(row);
    height: 140px;
    .unique-icon {
      width: 22px;
      height: 22px;
      font-size: 22px;
    }
    .unique {
      margin-right: 10px;
      line-height: 0;
      &-icon {
        margin-right: 5px;
      }
      &-desc {
        font-weight: 700;
        color: #666;
      }
    }
  }
}
</style>
