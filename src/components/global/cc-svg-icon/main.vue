<template>
  <svg v-on="$listeners" class="cc-svg-icon" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'cc-svg-icon',
  props: {
    iconClass: {
      type: String
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return `svg-icon ${this.className}`
      }
      return `svg-icon`
    }
  }
}
</script>
<style lang="scss" scoped>
.cc-svg-icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
