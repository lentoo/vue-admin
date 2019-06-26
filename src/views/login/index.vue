<template>
  <div class="cc-login">
    <div class="cc-login-wrapper">
      <div class="cc-login-form" @keyup.enter="doLogin">
        <el-card shadow="never"
          title="欢迎登陆"
        >
          <div slot="header" class="clearfix">
            <span>欢迎登陆</span>
          </div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入用户名">
                <cc-svg-icon style="padding-left: 5px;" slot="prefix" icon-class="user"></cc-svg-icon>
                <!-- <i slot="prefix" class="el-input__icon el-icon-date"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input autofocus v-model="form.password" type="password" placeholder="请输入密码">
                <cc-svg-icon style="padding-left: 5px;" slot="prefix" icon-class="lock"></cc-svg-icon>
                <!-- <i slot="prefix" class="el-input__icon el-icon-date"></i> -->
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" size="small" @click="doLogin" :loading="loading">{{loading ? '正在登陆中...' : '登录'}}</el-button>
            </el-form-item>
            <p style="font-size: 12px;text-align: center;color: #999;">输入任意用户名密码登录</p>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
  name: 'cc-login',

  data () {
    return {
      form: {
        name: 'lentoo',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['handleLogin']),
    doLogin () {
      this.loading = true
      this.$refs.form.validate(async validate => {
        if (validate) {
          this.handleLogin({
            username: this.form.name,
            password: this.form.password,
            loginDateTime: Date.now()
          }).then(res => {
            this.loading = false
            this.$router.push('/dashboard')
          })
          // setTimeout(() => {
          //   this.loading = false
          // }, 1500)
          // setTimeout(() => {
          //   this.$router.push('/dashboard')
          // }, 2000)
        }
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cc-login {
  &-wrapper {
    height: 100vh;
    background: url('https://img.ccode.live/image/jpg/login.jpglogin-bg.29b543c1.jpg') no-repeat center center;
    background-size: cover;
  }
  &-form {
    width: 330px;
    position: absolute;
    right: 250px;
    top: 50%;
    transform: translateY(-60%);
  }
}
</style>
