<template>
  <draggable
    v-bind="$attrs"
    :move="onMove"
    class="cc-drag-list"
    @end="handleChange($event)"
    v-model="list"
    >
    <slot></slot>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'cc-drag-list',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  components: {
    draggable
  },
  data () {
    return {
      list: this.value
    }
  },
  methods: {
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    handleEnd ($event) {
      console.log($event)
    },
    handleChange ($event) {
      this.$emit('input', this.list)
      this.$emit('change', { $event, value: this.list })
    }
  },
  watch: {
    list () {
      this.$emit('input', this.list)
    }
  }
}
</script>
<style lang="scss" scoped>
.cc-drag-list {

}
</style>
