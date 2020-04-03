<script>
export default {
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  render() {
    const content = this.contents.map(v => {
      return v.active ? v.$slots.default : ''
    })
    return (
        <div class="tap-content">
          {content}
        </div>
    )
  }

}
</script>
