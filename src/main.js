import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import app from './app.vue'
import createRouter from './router/index'
import createStore from './store/store'
import './style/global.css'
import './style/app.less'

Vue.config.devtools = true

// if (process.env.NODE_ENV === 'development') {
// } else {
//     Vue.config.devtools = false
// }

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#root')
