<template>
  <div class="svg-icons">
    <el-card header="svg 图标">
      <div class="mb20">
        使用方法：直接使用 cc-svg-icon 组件 设置 icon-class 属性值为 svg 图标的名称
      </div>
      <div class="svg-icons">
        <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="svg-item" v-for="svg in getSvgIconName" :key="svg">
          <cc-svg-icon class="svg-icon" :icon-class="svg" size="22"></cc-svg-icon>
          <p class="svg-name"> {{svg}} </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'animate.css'
export default {
  name: 'svg-icons',

  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getSvgIconName'])
  },
  methods: {
    handleMouseEnter (e) {
      e.target.querySelector('.svg-icon').classList.add('animated', 'rubberBand')
      console.log('handleMouseOver', e)
    },
    handleMouseLeave (e) {
      e.target.querySelector('.svg-icon').classList.remove('animated', 'rubberBand')
      console.log('handleMouseOut', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/common.scss';
.svg-icons {
  margin: 0 20px;
  border-right: 0;
  .svg-item {
    text-align: center;
    display: inline-block;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    width: 145px;
    height: 120px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      .svg-icon,.svg-name {
       color: var(--theme-color);
      }
    }
  }
  .svg-icon {
    width: 26px;
    height: 26px;
    color: #99a9bf;
    transition: color .3s ease;
  }
  .svg-name {
    margin-top: 15px;
    color: #99a9bf;
    transition: color .3s ease;
  }
}
</style>
