<script>
import TapContarner from './tapContanier'
export default {
  name: 'Taps',
  components: {
    TapContarner
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    handleChange(index) {
      this.$emit('change', index)
    }
  },
  data() {
    return {
      contents: []
    }
  },
  render() {

    return (
      <div class="taps">
        <ul class="taps-header">
          {this.$slots.default}
        </ul>
        <tap-contarner contents={this.contents}></tap-contarner>
      </div>
    )
  }
}
</script>
<style lang="less">
  .taps-header{
    list-style: none;
    li{
      width: 100px;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      text-align: center;
      &.active{
        &::after{
          content: '';
          display: block;
          width: 100%;
          border-bottom:1px solid red ;
        }
      }
    }
  }
</style>
