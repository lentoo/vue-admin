<template>
  <div class="markdown">
    <el-card>
      <cc-markdown style="max-height: 600px;" v-model="markdown"></cc-markdown>
    </el-card>
  </div>
</template>

<script>
import CcMarkdown from '../../../components/cc-markdown'
export default {
  name: 'markdown',
  components: {
    CcMarkdown
  },
  data () {
    return {
      markdown: {
        markdown: '# markdown 编辑器\n基于 [mavon-editor](https://www.npmjs.com/package/mavon-editor) 插件',
        html: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
