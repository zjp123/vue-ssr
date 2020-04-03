import Vue from 'vue'
import Tips from './tips.vue'
import tipsFn from './tipfunc'

export default (vue) => {
    Vue.component(Tips.name, Tips)
    Vue.prototype.$tips = tipsFn
}
