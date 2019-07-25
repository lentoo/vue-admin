<template>
  <div class="rich-text">
    <el-card>
      <el-row class="mb10">
        <el-col>
          <rich-text
            :content="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            @change="onEditorChange($event)"
          ></rich-text>
        </el-col>
      </el-row>
      <el-row>
        <el-button @click="modifyContent">修改内容</el-button>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import RichText from '../../../components/cc-rich-text'
export default {
  name: 'rich-text-view',
  components: {
    RichText
  },
  data () {
    return {
      content: '<h4>基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。</h4>',
      editorOption: {
        // some quill options
      }
    }
  },
  methods: {
    onEditorBlur (quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus (quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady (quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange ({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
    modifyContent () {
      this.content = 'Quill editor component for Vue, support SPA and SSR.'
    }
  }
}
</script>
<style lang="scss" scoped>
.rich-text {
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
