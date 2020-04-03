<script>
export default {
  name: 'Tap',
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: 'tap'
    }

  },
  computed: {
    active() {
      return this.$parent.value === this.index
    }
  },
  mounted() {
    this.$parent.contents.push(this)
  },
  methods: {
    handleClick() {
      this.$parent.handleChange(this.index)
    }
  },
  render() {
    const classNames = {
      tap: true,
      active: this.active
    }
    console.log('====================================')
    // console.log(this.$slots.default)
    console.log('====================================')
    const tap = this.$slots.label || <span>{this.label}</span>
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tap}
      </li>
    )
  }
}

// <taps>
//   <tap label="text">
//     <span></span>
//   </tap>
// </taps>
</script>
