import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elZhCnLang from 'element-ui/lib/locale/lang/zh-CN'
import elEnLang from 'element-ui/lib/locale/lang/en'
import elZhTwLang from 'element-ui/lib/locale/lang/zh-TW'
import customZhCn from './lang/zh-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import { SessionStorage } from '../utils/index'
const messages = {
  'zh-CN': Object.assign(elZhCnLang, customZhCn),
  'zh-TW': Object.assign(elZhTwLang, customZhTw),
  'en-US': Object.assign(elEnLang, customEnUs)
}
Vue.use(VueI18n)
const languages = ['zh-CN', 'zh-TW', 'en-US']

const language = languages.includes(SessionStorage.getItem('language'))
  ? SessionStorage.getItem('language')
  : 'zh-CN'

const i18n = new VueI18n({
  messages,
  locale: language
})
export default i18n
