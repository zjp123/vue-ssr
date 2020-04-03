<template>
  <div :todos="todos">
    这是home页面{{ home }}
    {{todos}}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      home: 'lallalal'
    }
  },
  methods: {
    ...mapActions(['fetchTodos'])
  },
  mounted() {
    if (this.todos && this.todos.length < 1) { // 避免服务端渲染时获取数据以后  客户端再重新发请求
      this.fetchTodos()

    }

  },
  computed: {
    ...mapState(['todos'])
  },
  aysncData({ store }) { // 服务端渲染时，获取数据
    if (store.state.user) {
      return store.dispatch('fetchTodos')

    }
    return Promise.resolve()
  }

}
</script>

<style lang="scss" scoped>

</style>
