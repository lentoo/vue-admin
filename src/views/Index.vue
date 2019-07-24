<template>
  <div class="main">
    <Sider />
    <section class="right-content">
      <Header />
      <div class="viewer">
        <transition name="fade-move">
          <router-view class="viewer-detail"></router-view>
        </transition>
      </div>
    </section>
    <cc-drawer @close="drawerClose" :visible="drawerVisible" width="300px">
      <div class="drawer-setting-content">
        <div class="mb20">
          <h3 class="drawer-setting-title">整体风格设置</h3>
          <div class="drawer-setting-block">
            <div class="drawer-setting-item" @click="changeStyle('dark')">
              <cc-svg-icon
                class-name="dark-color"
                icon-class="dark-color"
                size="48px"
              ></cc-svg-icon>
              <i
                v-if="getCurrentMenuStyle === 'dark'"
                class="style-selected el-icon-check"
                style="color: #1890ff"
              ></i>
            </div>
            <div class="drawer-setting-item" @click="changeStyle('light')">
              <cc-svg-icon
                class-name="light-color"
                icon-class="dark-color"
                size="48px"
              ></cc-svg-icon>
              <i
                v-if="getCurrentMenuStyle === 'light'"
                class="style-selected el-icon-check"
                style="color: #1890ff"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer-handle" slot="handle">
        <div @click="toggleDrawer">
          <i
            :class="{
              'el-icon-s-tools': !drawerVisible,
              'el-icon-close': drawerVisible
            }"
          ></i>
        </div>
      </div>
    </cc-drawer>
  </div>
</template>

<script>
import Sider from '@/components/sider'
import Header from '@/components/Header'
import CcDrawer from '@/components/cc-drawer'
import MenuConfig from '../config/menuConfig.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'main',
  components: {
    Sider,
    Header,
    CcDrawer
  },
  data () {
    return {
      drawerVisible: false
    }
  },
  mounted () {
    this.changeBreadcrumb(this.$route)
  },
  computed: {
    ...mapGetters(['getCurrentMenuStyle'])
  },
  watch: {
    $route () {
      this.changeBreadcrumb(this.$route)
    }
  },
  methods: {
    ...mapActions(['BREADCRUMB_ITEMS', 'CURRENT_MENU_STYLE']),
    changeBreadcrumb (route) {
      let oneLevelMenu = {}
      let twoLevelMenu = {}
      MenuConfig.forEach(menu => {
        if (menu.children) {
          const item = menu.children.find(item => item.path === route.path)
          if (item) {
            oneLevelMenu = menu
            twoLevelMenu = item
            return false
          }
        } else {
          if (menu.path === route.path) {
            oneLevelMenu = menu
          }
        }
      })
      this.BREADCRUMB_ITEMS([oneLevelMenu, twoLevelMenu])
    },
    toggleDrawer () {
      this.drawerVisible = !this.drawerVisible
    },
    drawerClose () {
      this.drawerVisible = false
    },
    changeStyle (style) {
      this.CURRENT_MENU_STYLE(style)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  @include flex(row);
  .right-content {
    flex: 1;
    @include flex;
  }
  .viewer {
    background: #fafafa;
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
    margin-top: 5px;
    position: relative;
    @include flex;
    &-detail {
      padding-top: 15px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      width: 100%;
      position: absolute;
    }
  }
  .fade-move-enter-active,
  .fade-move-leave-active {
    transition: 0.3s all ease;
    // position: absolute
  }
  .fade-move-enter,
  .fade-move-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .fade-move-enter-to,
  .fade-move-leave {
    opacity: 1;
    transform: translateX(0);
  }
}

.drawer-handle {
  position: absolute;
  right: 300px;
  top: 240px;
  z-index: 0;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: var(--theme-color);
  color: #fff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
  > div {
    @include center(column);
    width: 100%;
    height: 100%;
  }
}
.drawer-setting {
  &-content {
    .dark-color,
    .light-color {
      width: 48px;
      height: 45px;
      cursor: pointer;
    }
  }
  &-block {
    @include flex(row);
  }
  &-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
  }
  &-item {
    margin-right: 25px;
    position: relative;
    .style-selected {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
