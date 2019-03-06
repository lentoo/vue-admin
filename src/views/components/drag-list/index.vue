<template>
  <div class="drag-list-page">
    <el-card header="拖拽列表">
      <el-row>
        <el-col :span="6">
          <el-card header="待办事项">
            <draggable>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </draggable>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'drag-list-page',
  components: {
    draggable
  },
  data () {
    return {
      options: {
        dropzoneSelector: 'ul',
        draggableSelector: 'li'
        // handlerSelector: null,
        // multipleDropzonesItemsDraggingEnabled: true,
        // showDropzoneAreas: true,
        // onDrop: function (event) {},
        // onDragstart: function (event) {},
        // onDragend: function (event) {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.index {

}
</style>
