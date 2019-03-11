<template>
  <div class="sprites">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card header="精灵图">
          <p>
            使用说明：将需要合成精灵图的图片放置在 assets/sprites 目录下，然后只需按正常的方式引用图片，会自动合成精灵图<br>
          </p>
          <div class="logo"></div>
          <div class="logo-icon"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card header="精灵图分组">
          <p>
            如果需要分组，只需在 assets/sprites 新建一个目录，该目录中的图片会单独的合成一张精灵图
          </p>
          <div class="icon icon1"></div>
          <div class="icon icon2"></div>
          <div class="icon icon3"></div>
          <div class="icon icon4"></div>
          <div class="icon icon5"></div>
          <div class="icon icon6"></div>
          <div class="icon icon7"></div>
          <div class="icon icon8"></div>
          <div class="icon icon9"></div>
          <div class="icon icon10"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'sprites'
}
</script>
<style lang="scss" scoped>
.sprites {
  .logo {
    display: inline-block;
    width: 153px;
    height: 78px;
    background: url('../../../assets/images/sprites/logo.png.png')
  }
  .logo-icon {
    display: inline-block;
    width: 200px;
    height: 200px;
    background: url('../../../assets/images/sprites/logo-icon.png.png')
  }
  p {
    color: #999;
    margin-bottom: 15px;
  }
  .icon {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  @for $i from 1 through 10 {
    .icon#{$i} {
      background: url('../../../assets/images/sprites/icon/0#{$i}.png')
    }
  }
}
</style>
