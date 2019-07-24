<template>
  <el-dropdown trigger="click" @command="selectLang">
    <span class="el-dropdown-link">
      {{ langList[lang] }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(value, key) in localList"
        :command="key"
        :key="key"
        >{{ value }}</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { SessionStorage } from '../../../utils'
export default {
  name: 'language',
  data () {
    return {
      langList: {
        'zh-CN': '语言',
        'zh-TW': '語言',
        'en-US': 'Lang'
      },
      localList: {
        'zh-CN': '中文简体',
        'zh-TW': '中文繁体',
        'en-US': 'English'
      },
      lang: SessionStorage.getItem('language') ? SessionStorage.getItem('language') : 'zh-CN'
    }
  },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
      this.lang = lang
      SessionStorage.setItem('language', lang)
    }
  }
}

</script>
