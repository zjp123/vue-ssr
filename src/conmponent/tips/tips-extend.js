import Tips from './tips.vue'

export default {
    extends: Tips,
    computed: {
        style() {
            return {
                position: 'fixed',
                right: '20px',
                bottom: `${this.verticalOffset}px`
            }
        }
    },
    data() {
        return {
            verticalOffset: 0,
            autoClose: 3000,
            height: 0,
            visible: false

        }
    },
    mounted() {
        this.createTimer()
    },
    updated() {
        console.log('height', this.$el.offsetHeight)
        this.height = this.$el.offsetHeight
    },
    methods: {
        createTimer() {
            console.log(this.autoClose)
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.$emit('destory', this)
                    this.visible = false
                }, this.autoClose)
            }
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        }

    },
    beforeDestory() {
        this.clearTimer()
    }

}
