const Router = require('koa-router')

const userRoute = new Router({ prefix: '/user' })

userRoute.post('/login', ctx => {
    console.log('====================================')
    console.log('loginkkkkkkkk', ctx.request.body)
    console.log('====================================')

    if (ctx.request.body.username === 'zjp' && ctx.request.body.password === '123') {
        ctx.session.user = {
            username: 'zjp'
        }
        ctx.body = {
            success: true,
            data: {
                username: 'zjp'
            }
        }
    } else {
        ctx.status = 402
        ctx.body = {
            success: false,

            message: 'not ok'

        }
    }
})
module.exports = userRoute
