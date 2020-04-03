import createApp from './create-app.js'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        if (context.user) {
            store.state.user = context.user
        }
        router.push(context.url)

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject(new Error('no component matched'))
            }
            Promise.all(matchedComponents.map((com) => {
                if (com.aysncData) {
                    return com.aysncData({
                        store,
                        route: router.currentRoute,
                        router
                    })
                }
            })).then(data => {
                console.log(`-----${data}----`)
                context.meta = app.$meta()
                context.state = store.state // 配合int_state
                context.router = router
                resolve(app)
            })

        })
    })
}
