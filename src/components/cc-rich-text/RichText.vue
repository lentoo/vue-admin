<template>
  <div class="cc-rich-text">
    <quill-editor ref="myQuillEditor" v-bind="$attrs" v-on="$listeners">
    </quill-editor>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor /* { default global options } */)
export default {
  name: 'cc-rich-text'
}

</script>
<style lang="scss" scoped>
.cc-rich-text {
}
</style>
