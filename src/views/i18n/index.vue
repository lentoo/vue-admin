<template>
  <div class="language">
    <el-card>
      <el-row>
        <el-tooltip
          class="item"
          effect="dark"
          :content="$t('tips')"
          placement="top-start"
        >
          <el-link type="info">{{ `${$t("note")}：${$t("tips")}` }}</el-link>
        </el-tooltip>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tooltip, Link } from 'element-ui'
Vue.use(Tooltip).use(Link)
export default {
  name: 'i18n',
  data () {
    return {
      msg: ''
    }
  }
}

</script>
<style lang="scss" scoped>
.i18n {
}
</style>
