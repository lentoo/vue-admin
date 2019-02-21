import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Menu, MenuItem, Submenu } from 'element-ui'
import menuConfig from '@/config/menuConfig'
import './sider.scss'
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
export default {
  name: 'sider',
  data () {
    return {
      menuConfig,
      defaultActive: ''
    }
  },
  computed: {
    ...mapGetters(['getMenuCollapse'])
  },
  created () {
    this.defaultActive = this.$route.path
    console.log(this.$route)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    renderMenu (menus) {
      return menus.map(menu => {
        if (menu.children) {
          const icon = menu.icon ? <cc-svg-icon icon-class={menu.icon}></cc-svg-icon> : ''
          return (
            <el-submenu index={menu.path}>
              <template slot="title">
                {icon}
                <span>{menu.name}</span>
              </template>
              {this.renderMenu(menu.children)}
            </el-submenu>
          )
        } else {
          const icon = menu.icon ? <cc-svg-icon icon-class={menu.icon}></cc-svg-icon> : ''
          return (
            <el-menu-item index={menu.path}>
              {icon}
              <span slot="title">{menu.name}</span>
            </el-menu-item>
          )
        }
      })
    }
  },

  render () {
    return (
      <div class="sider">
        <div class="sider-logo">
          Vue
        </div>
        <el-menu
          default-active={this.defaultActive}
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#116BBE"
          router={true}
          collapse={this.getMenuCollapse}
          open={this.handleOpen}
          close={this.handleClose}>
          {this.renderMenu(this.menuConfig)}
        </el-menu>
      </div>)
  }
}
