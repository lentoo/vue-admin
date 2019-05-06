<template>
  <div class="cc-drawer"
    :class="{
      'cc-drawer-open': preVisible
    }"
    :style="{
      zIndex
    }"
  >
    <div class="cc-drawer-mask" :style="maskStyle" @click="close">

    </div>
    <div class="cc-drawer-content" :style="{
      width: Number.isInteger(width) ?` ${width}px` : width
    }">
      <div class="cc-drawer-title" v-if="!$slots.title && title">
        {{title}}
      </div>
      <slot name="title" v-else></slot>
      <div class="cc-drawer-body">
        <slot></slot>
      </div>

      <slot name="handle"></slot>

    </div>
  </div>
</template>

<script>
export default {
  name: 'cc-drawer',
  props: {
    visible: {
      default: false
    },
    /**
     * 点击蒙层是否允许关闭
     */
    maskClosable: {
      default: true
    },
    /**
     * 是否展示遮罩
     */
    mask: {
      default: true
    },
    /**
     * 遮罩样式
     */
    maskStyle: {
      default: () => {}
    },
    /**
     * 标题 string / slot
     */
    title: {
      default: ''
    },
    /**
     * 宽度
     */
    width: {
      default: 256,
      type: [String, Number]
    },
    /**
     * 设置 Drawer 的 z-index
     */
    zIndex: {
      default: 1000,
      type: Number
    }
  },
  data () {
    return {
      preVisible: this.visible
    }
  },
  watch: {
    visible () {
      console.log('visible')
      this.preVisible = this.visible
    }
  },
  methods: {
    close () {
      if (this.maskClosable) {
        this.preVisible = false
        this.$emit('close', this.preVisible)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.cc-drawer {
  position: fixed;
  right: 0;
  height: 100%;
  z-index: 999;
  width: 0;
  &-mask {
    position: fixed;
    width: 100%;
    height: 0;
    background-color: rgba(0,0,0,.65);
    transition: opacity .3s linear, height 0s ease .3s;
  }
  &-open {
    width: 100%;
    .cc-drawer-mask {
      height: 100%;
      opacity: .3;
      transition: none;
    }
    .cc-drawer-content {
      transform: translateX(0);
    }
  }
  &-content {
    width: 256Px;
    background: #fff;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: transform .3s cubic-bezier(.9,0,.3,.7),box-shadow .3s cubic-bezier(.9,0,.3,.7);
  }
  &-title {
    padding: 16px 24px;
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
  }
  &-body {
    padding: 24Px;
  }
}
</style>
