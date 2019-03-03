<template>
  <div class="count-to">
    <el-row style="margin-bottom: 20px" :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">cc-count-to 基础使用</span>
          </div>
          <cc-count-to :start="0" :end="2019"></cc-count-to>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">左右添加文字</span>
          </div>
          <cc-count-to :start="0" :end="2019" prefix="Total:">
            <span slot="right"> times</span>
          </cc-count-to>
        </el-card>
      </el-col>
       <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">保留小数</span>
          </div>
          <cc-count-to ref="countReset" :start="0" :end="2019" :decimals="2" prefix="$ "></cc-count-to>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">自定义样式</span>
          </div>
          <cc-count-to :content-style="contentStyle" :start="0" :end="2019" :decimals="2" prefix="$ "></cc-count-to>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px" :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">分组</span>
          </div>
          <cc-count-to :content-style="contentStyle" style="font-size: 22px" :usegroup="true" :start="0" :end="20190220" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
       <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">分组符号</span>
          </div>
          <cc-count-to :content-style="contentStyle" style="font-size: 22px" :usegroup="true" separator="~" :start="0" :end="20190220" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
       <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">暂停</span>
            <el-button @click="$refs.countPause.pause()" style="float: right; padding: 3px 0" type="text">暂停/继续</el-button>
          </div>
          <cc-count-to :content-style="contentStyle" style="font-size: 22px" ref="countPause" :start="0" :end="2019" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">重置</span>
            <el-button @click="$refs.countReset.reset()" style="float: right; padding: 3px 0" type="text">重置</el-button>
          </div>
          <cc-count-to :content-style="contentStyle" style="font-size: 22px" ref="countReset" :start="0" :end="2019" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px" :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">简化显示</span>
          </div>
          <cc-count-to @complate="handleComplate" :content-style="contentStyle" style="font-size: 22px" :simplify="true" :start="0" :end="2019" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">自定义单位</span>
          </div>
          <p>
            <span>250</span> => <cc-count-to :content-style="contentStyle" style="font-size: 22px" :simplify="true" :start="1" :end="250"></cc-count-to>
          </p>
          <p>
            <span>2019</span> => <cc-count-to :content-style="contentStyle" style="font-size: 22px" :unit="[[3, '千+']]" :simplify="true" :start="1" :end="2019"></cc-count-to>
          </p>
          <p>
            <span>201909</span> =>
            <cc-count-to :unit="[[ 5, '十万+']]" :content-style="contentStyle" style="font-size: 22px" :simplify="true" :start="0" :end="201909"></cc-count-to>
          </p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">动画完成事件</span>
          </div>
          <p>动画完成：{{isComplate}}</p>
          <cc-count-to @complate="handleComplate" :content-style="contentStyle" style="font-size: 22px" :start="0" :end="2019" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">异步更新数据</span>
          </div>
          <cc-count-to :content-style="contentStyle" style="font-size: 22px" :start="0" :end="asyncEndData" prefix="Total:"></cc-count-to>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span class="cart-title">综合案例</span>
          </div>
          <p>
            <span>{{asyncEndData}}</span>
            =>
            <cc-count-to :content-style="contentStyle" style="font-size: 22px" :start="0" :end="asyncEndData" :simplify="true" :unit="[[ 3, 'k+'], [ 4, 'w+']]" suffix=" times"></cc-count-to>
          </p>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'count-to',
  data () {
    return {
      asyncEndData: 20199,
      contentStyle: {
        fontSize: '48px',
        color: '#116BBE'
      },
      isComplate: false
    }
  },
  created () {
    setInterval(() => {
      this.asyncEndData += 10
    }, 2000)
  },
  methods: {
    handleComplate () {
      this.isComplate = true
    }
  }
}
</script>

<style lang="scss">
.count-to {
  .cart-title {
    font-weight: 700;
    font-size: 14px;
  }
  .el-card__body {
    height: 160px;
  }
}
</style>
