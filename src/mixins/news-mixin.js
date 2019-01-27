import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getNewsResponse'])
  },
  methods: {
    ...mapActions(['NEWS_LIST'])
  }
}
