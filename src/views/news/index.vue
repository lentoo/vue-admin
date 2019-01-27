<template>
  <div class="news">
    新闻页面
    <input type="file" name="" value="请选择图片" @change="uploadFile" id="file">
  </div>
</template>

<script>
import Vue from 'vue'
import newsMixin from '@/mixins/news-mixin'
import { Button } from 'element-ui'
import { uploadFile } from '../../api'
Vue.use(Button)
export default {
  name: 'news',
  mixins: [newsMixin],
  data () {
    return {}
  },
  async created () {
    await this.NEWS_LIST()
    console.log(this.getNewsResponse)
  },
  methods: {
    async uploadFile (e) {
      const file = document.getElementById('file').files[0]
      const formdata = new FormData()
      formdata.append('file', file)
      await uploadFile(formdata)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
