<template>
  <div id="tips" :style="style" v-show="visible"
    @mouseenter="clearTimer"
      @mouseleave="createTimer"
  >
    <span>{{content}}</span>
    <button @click="handleClose">{{btn}}</button>

  </div>
</template>

<script>
  export default {
    name: 'Tips',
    props: {
      content: {
        type: String,
        required: true
      },
      btn: {
        type: String,
        default: '关闭'
      }
    },
    data () {
      return {
        visible: true
      }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
        e.preventDefault()
        this.visible = false

        this.$emit('close')
    },
    createTimer() {},
    clearTimer() {}

    }
  }
</script>

<style lang="less" scoped>
#tips{
  width: 300px;
  height: 40px;
  line-height: 40px;
  padding: 10px 20px;
  background-color: black;
  color: #fff;
}
</style>
