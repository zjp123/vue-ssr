import createApp from './create-app'
import { pub } from './clientApi/util'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) { // 服务端渲染 和 浏览器 数据共享
    store.replaceState(window.__INITIAL_STATE__)
}

pub.$on('auth', _ => {
    router.push('/login')
})

router.onReady(() => {
    app.$mount('#root')
})
