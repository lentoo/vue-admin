<template>
  <div class="count-to">
    <slot name="left"></slot>
    <span class="prefix" v-if="!$slots.left && prefix">{{prefix}}</span>
    <span :style="contentStyle" class="count-content" :id="countToId"></span>
    <span v-if="simplify" class="count-to-unit-text">{{unitText}}</span>
    <span class="suffix" v-if="!$slots.right && suffix">{{suffix}}</span>
    <slot name="right"></slot>
  </div>
</template>
<script>
// countup.js http://inorganik.github.io/countUp.js/
import CountUp from 'countup.js'
export default {
  name: 'cc-count-to',
  props: {
    /**
     * @description 起始值，即动画开始前显示的数值
     */
    start: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值，即动画结束后显示的数值
     */
    end: {
      type: Number,
      required: true
    },
    /**
     * @description 小数位
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 小数分隔符号
     */
    decimal: {
      type: String,
      default: ','
    },
    /**
     * @description 动画持续的时间，单位是秒
     */
    duration: {
      type: Number,
      default: 2
    },
    /**
     * @description 动画延迟开始的时间，单位是秒
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 是否使用easing动画效果
     */
    uneasing: {
      type: Boolean,
      default: true
    },
    /**
     * @description 是否使用分组，分组后每三位会用一个符号分隔
     */
    usegroup: {
      type: Boolean,
      default: false
    },
    /**
     * @description 用于分组的符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 是否简化显示，设为true后会使用unit单位来做相关省略
     */
    simplify: {
      type: Boolean,
      default: false
    },
    /**
     * @description 自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略
     *              1000即显示为1K+
    */
    unit: {
      type: Array,
      default () {
        return [[3, 'K+'], [6, 'M+'], [9, 'B+']]
      }
    },
    /**
     * @description 前缀字符
     */
    prefix: {
      type: String,
      default: ''
    },
    /**
     * @description 后缀字符
     */
    suffix: {
      type: String,
      default: ''
    },
    /**
     * @description 文字内容的样式
     */
    contentStyle: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      countToId: `count-to-${this._uid}`,
      instance: null,
      unitText: '',
      endVal: 0
    }
  },
  mounted () {
    var options = {
      useEasing: this.uneasing,
      useGrouping: this.usegroup,
      separator: this.separator,
      decimal: this.decimal
    }
    const endVal = this.getValue(this.end)
    this.instance = new CountUp(this.countToId, this.start, endVal, this.decimals, this.duration, options)
    if (!this.instance.error) {
      setTimeout(() => {
        this.instance.start(() => {
          this.$emit('complate')
        })
      }, this.delay)
    } else {
      console.error(this.instance.error)
    }
  },
  methods: {
    getHandleVal (val, len) {
      return {
        endVal: parseInt(val / Math.pow(10, this.unit[len - 1][0])),
        unitText: this.unit[len - 1][1]
      }
    },
    transformValue (val) {
      let len = this.unit.length
      let res = {
        endVal: 0,
        unitText: ''
      }
      if (val < Math.pow(10, this.unit[0][0])) res.endVal = val
      else {
        for (let i = 1; i < len; i++) {
          if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) res = this.getHandleVal(val, i)
        }
      }
      if (val > Math.pow(10, this.unit[len - 1][0])) res = this.getHandleVal(val, len)
      return res
    },
    getValue (val) {
      let res = 0
      if (this.simplify) {
        let { endVal, unitText } = this.transformValue(val)
        this.unitText = unitText
        res = endVal
      } else {
        res = val
      }
      return res
    },
    pause () {
      this.instance.pauseResume()
    },
    reset () {
      this.instance.reset()
    }
  },
  watch: {
    end () {
      const endVal = this.getValue(this.end)
      this.instance.update(endVal)
    }
  }
}
</script>
<style lang="scss" scoped>
.count-to {
  display: inline-block;
}
</style>
