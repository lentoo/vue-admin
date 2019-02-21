<template>
  <div class="main">
    <Sider />
    <section class="right-content">
      <Header />
      <div class="viewer">
        <router-view class="viewer-detail"></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import Sider from '@/components/sider'
import Header from '@/components/Header'
export default {
  name: 'main',
  components: {
    Sider,
    Header
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/index.scss';
.main {
  font-size: 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  @include flex(row);
  .right-content {
    flex: 1;
    @include flex;
  }
  .viewer {
    background: #FAFAFA;
    flex: 1;
    overflow: auto;
    margin-top: 5px;
    @include flex;
    &-detail {
      margin-top: 15px;
      margin-left: 10px;
      margin-right: 10px;
      flex: 1;
    }
  }
}
</style>
