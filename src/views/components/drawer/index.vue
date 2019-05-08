<template>
  <div class="drawer">
    <el-row :gutter="20">

      <el-col :span="4">
        <el-card header="抽屉组件" shadow="hover">
          <p class="mb20">基础使用</p>
          <el-button @click="openDrawer">打开抽屉</el-button>
        </el-card>
      </el-col>
      <el-col :span="8">

        <el-card header="抽屉组件" shadow="hover">
          <p class="mb20">不同方向</p>
          <div>
            <el-radio-group v-model="position">
              <el-radio label="left">left</el-radio>
              <el-radio label="top">top</el-radio>
              <el-radio label="bottom">bottom</el-radio>
              <el-radio label="right">right</el-radio>
            </el-radio-group>
            <el-button class="ml20" @click="openDrawer">打开抽屉</el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="4">
        <el-card header="抽屉组件" shadow="hover">
          <p class="mb20">自定义大小 通过 width 属性</p>
          <el-button @click="openDrawer({
            width: 300
          })">打开抽屉</el-button>
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card header="抽屉组件" shadow="hover">
          <p class="mb20">自定义遮罩层样式 通过 maskStyle 属性</p>
          <el-button @click="openDrawer({
            maskStyle: {
              backgroundColor: '#000',
              opacity: '.7'
            }
          })">打开抽屉</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt20">
      <el-col :span="4">
        <el-card header="抽屉组件" shadow="hover">
          <p class="mb20">点击蒙层是否允许关闭 </p>
          <el-button @click="openDrawer({
            maskClosable: false
          })">打开抽屉</el-button>
        </el-card>
      </el-col>

       <el-col :span="4">
        <el-card header="抽屉组件" shadow="hover">
          <p class="mb20">不显示蒙版 通过 mask 属性控制</p>
          <el-button @click="openDrawer({
            mask: false
          })">打开抽屉</el-button>
        </el-card>
      </el-col>
    </el-row>
    <cc-drawer
      @close="handleClose"
      :placement="position"
      :visible="drawerVisible"
      :width="width"
      :mask="mask"
      :maskClosable="maskClosable"
      :maskStyle="maskStyle"
      title="标题"
    >
      抽屉内容
      <el-button type="primary" @click="() => drawerVisible = false">关闭抽屉</el-button>
    </cc-drawer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Radio, RadioGroup } from 'element-ui'
import CcDrawer from '@/components/cc-drawer'
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
export default {
  name: 'drawer',
  components: {
    CcDrawer
  },
  data () {
    return {
      drawerVisible: false,
      position: 'right',
      width: 400,
      mask: true,
      maskClosable: true,
      maskStyle: {}
    }
  },
  methods: {
    openDrawer ({ width = undefined, mask = true, maskClosable = true, maskStyle = {} }) {
      this.width = width
      this.mask = mask
      this.maskClosable = maskClosable
      this.maskStyle = maskStyle
      this.drawerVisible = true
    },
    handleClose () {
      this.drawerVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/common.scss";
</style>
