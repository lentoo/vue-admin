import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Card, Button, Row, Col, Tag, Switch } from 'element-ui'
import './components'
import './assets/icons'

Vue.config.productionTip = false

Vue.component(Card.name, Card)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tag.name, Tag)
Vue.component(Switch.name, Switch)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  getRem(1920, 100)
}
window.onresize = function () {
  getRem(1920, 100)
}
/**
 * @description rem适配
 * @author lentoo
 * @date 2019-01-30
 * @param {*} pwidth 设计图尺寸
 * @param {*} prem rem基数 1 rem = ${prem} px
 */
function getRem (pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / pwidth * prem + 'px'
}
getRem(1920, 100)
