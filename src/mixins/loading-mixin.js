export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    /**
     * @description 展示加载框
     * @author lentoo
     * @date 2019-01-27
     */
    showLoading () {
      this.loading = true
    },
    /**
     * @description 隐藏加载框
     * @author lentoo
     * @date 2019-01-27
     */
    hiedLoading () {
      this.loading = false
    }
  }
}
