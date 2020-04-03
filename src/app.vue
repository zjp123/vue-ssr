<template>
  <div id="box">
    这是app{{ text }}
    <Footer />
    <div id="loading" v-show="loading">
      <Loading></Loading>
    </div>
    <span>skskk</span>
    <router-view />
    <button @click="tips">click</button>
    <taps :value="tapVlaue" @change="tapChange">
      <tap label="tap123" index="1">
        <div>content 1</div>
      </tap>
      <tap index="2">
        <span slot="label">tap234</span>
        <div>content 2</div>

        </tap>
      <tap label="tap456" index="3">
        <div>content 3</div>

      </tap>
    </taps>
  </div>
</template>

<script>
import Footer from './conmponent/footer.jsx'
import Loading from './conmponent/loading/loading.vue'
import { mapState } from 'vuex'
export default {
  metaInfo: {
    title: 'zjpde ssr'
  },
  methods: {
    tips() {
      this.$tips({
        content: 'test $notify',
        btn: 'close'
      })
      // this.$notify({
      //   content: 'test $notify',
      //   btn: 'close'
      // })
    },
    tapChange(index) {
      this.tapVlaue = index
    }
  },
  data () {
    return {
      text: '你哈ssjjs',
      tapVlaue: '1'
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  components: {
    Footer,
    Loading
  }
}
</script>

<style lang="less" scoped>
#box{
    border: 1px solid red;
}
.red{
    font-size: 16px;
}
#loading{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255,255,255,.3);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
