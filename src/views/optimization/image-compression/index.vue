<template>
  <div class="image-compression">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card header="原图">
          <img src="../../../assets/images/login-bg.jpg" alt="" srcset="">
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card header="压缩后的图">
          <img src="../../../assets/images/login-bg.compression.jpg" alt="" srcset="">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'image-compression'
}
</script>
<style lang="scss" scoped>

.image-compression {
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
