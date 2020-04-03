import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import App from './app.vue'
import createRouter from './router/index'
import createStore from './store/store'
import Tips from './conmponent/tips'
import Notice from './conmponent/notification'
import Taps from './conmponent/taps'
// import Notification from './components/notification'
// import Tabs from './components/tabs'
import axios from 'axios'
import './style/global.css'
import './style/app.less'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Tips)
Vue.use(Notice)
Vue.use(Taps)
    // Vue.use(Notification)
    // Vue.use(Tabs)
Vue.prototype.$axios = axios

export default () => {
    const router = createRouter()
    const store = createStore()

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}
