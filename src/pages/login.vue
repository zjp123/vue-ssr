<template>
  <div>
    <div><span>用户名</span><input type="text" v-model="username"></div>
    <div><span>密码</span><input autocomplete="new-password" type="text" v-model="password"></div>
    <button @click="loginHandle">登陆</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      login: '等那个你那个那个那个',
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginAction']),
    loginHandle() {
      // console.log(this.username, this.password)
      // const para = JSON.stringify({
      //     username: this.username,
      //     password: this.password
      //   })
      // this.$axios.get('http://localhost:3333/api/todos')
      // .then(function (response) {
      //   console.log(response)
      // })
      // .catch(function (error) {
      //   console.log(error)
      // })
      const params = {
          username: this.username,
          password: this.password
        }

      this.loginAction(params).then( response => {
        console.log(response)
        this.$router.replace('/')
      })
      .catch(function (error) {
        console.log(error)
      })

  }
}
}
</script>

<style lang="scss" scoped>

</style>
