<template>
  <div class="cc-drawer"
    :class="{
      'cc-drawer-open': preVisible,
      [`cc-drawer-${placement}`]: true
    }"
    :style="{
      zIndex
    }">
    <div class="cc-drawer-mask" v-if="mask" :style="maskStyle" @click="maskClick">

    </div>
    <div ref="drawerContent" class="cc-drawer-content" :style="drawerStyle"
      :class="`cc-drawer-content-${placement}`"
    >
      <div class="cc-drawer-title" v-if="!$slots.title && title">
        <div class="drawer-title">
          <div>
            {{title}}
          </div>
          <div class="icon-close" @click="close">
            <i class="el-icon-close"></i>
          </div>
        </div>
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
    },
    /**
     * 抽屉的方向
     */
    placement: {
      type: String,
      default: position => {
        const positions = ['top', 'right', 'bottom', 'left']
        if (positions.includes(position)) {
          return position
        }
        return 'right'
      }
    }
  },
  data () {
    return {
      preVisible: this.visible
    }
  },
  computed: {
    drawerStyle () {
      let style = {}
      const width = this.width
      if (this.placement === 'left' || this.placement === 'right') {
        style.width = Number.isInteger(width) ? ` ${width}px` : width
      } else {
        style.height = Number.isInteger(width) ? ` ${width}px` : width
      }
      return style
    }
  },
  mounted () {
    this.$refs.drawerContent.addEventListener('transitionEnd', () => {
      console.log('transitionEnd')
    })
  },
  watch: {
    visible () {
      console.log('visible')
      this.preVisible = this.visible
    }
  },
  methods: {
    maskClick () {
      if (this.maskClosable) {
        this.close()
      }
    },
    close () {
      this.preVisible = false
      this.$emit('close', this.preVisible)
    }
  }

}
</script>

<style lang="scss" scoped>
.cc-drawer {
  position: fixed;
  height: 100%;
  z-index: 999;
  width: 0;
  &-left {
    top: 0;
    left: 0;
  }
  &-right {
    top: 0;
    right: 0;
  }
  &-top {
    width: 100%;
    height: 0;
    left: 0;
    top: 0;
  }
  &-bottom  {
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
  }
  &-mask {
    position: fixed;
    width: 100%;
    height: 0;
    background-color: rgba(0,0,0,.65);
    transition: opacity .3s linear, height 0s ease .3s;
  }
  &-open {
    width: 100%;
    height: 100%;
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    .cc-drawer-mask {
      height: 100%;
      opacity: .3;
      transition: none;
    }
    .cc-drawer-content-right {
      transform: translateX(0);
    }
    .cc-drawer-content-left {
      transform: translateX(0);
    }
    .cc-drawer-content-top {
      transform: translateY(0);
    }
    .cc-drawer-content-bottom {
      transform: translateY(0);
    }
  }
  &-content {
    position: absolute;
    width: 256px;
    height: 100%;
    background: #fff;
    transition: transform .3s cubic-bezier(.9,0,.3,.7),box-shadow .3s cubic-bezier(.9,0,.3,.7);
  }
  &-content-right {
    top: 0;
    right: 0;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
  }
  &-content-left {
    top: 0;
    left: 0;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    transform: translateX(-100%);
  }
  &-content-top {
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-100%);
  }
  &-content-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
  }
  &-title {
    padding: 16px 24px;
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
    .drawer-title {
      @include flex(row);
      justify-content: space-between;
    }
    .icon-close {
      cursor: pointer;
      vertical-align: middle;
    }
  }
  &-body {
    padding: 24px;
  }
}
</style>
