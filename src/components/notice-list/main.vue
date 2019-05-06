<template>
  <div class="notice-container">
    <div class="notice-list">
      <NoticeItem></NoticeItem>
      <NoticeItem></NoticeItem>
      <NoticeItem></NoticeItem>
      <NoticeItem></NoticeItem>
      <NoticeItem></NoticeItem>
      <NoticeItem></NoticeItem>
      <NoticeItem></NoticeItem>
    </div>
    <div class="notice-list-bottomBar">
      <div>
        清空 通知
      </div>
      <div>
        查看更多
      </div>
    </div>
  </div>
</template>

<script>
import NoticeItem from './notice-item'
export default {
  name: 'notice-list',
  components: {
    NoticeItem
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" src="./notice.scss" scoped>
</style>
<style lang="scss">
.header-right {
  .el-badge__content.is-fixed {
    top: 25px;
  }
}
.header-popper {
  user-select: none;
  padding: 0 !important;
  .el-tabs__nav.is-stretch {
    padding-top: 5px;
  }
}
</style>
