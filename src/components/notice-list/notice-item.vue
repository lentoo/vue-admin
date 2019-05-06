<template>
   <div class="notice-item">
      <div class="notice-item-avatar">
        <img class="notice-item-avatar-icon" src="../../assets/images/home/notice.png" />
      </div>
      <div class="notice-item-content">
        <h4 class="notice-item-content-title">
          左侧图标用于区分不同的类型
        </h4>
        <div class="notice-item-content-description">
          10 分钟前
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'notice-item',

  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./notice.scss" scoped>
</style>
