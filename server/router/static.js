const Router = require('koa-router')
const send = require('koa-send')

const staticRouter = new Router({ prefix: '/public' })
    // console.log('888888888888888')
staticRouter.get('/*', async ctx => {
    await send(ctx, ctx.path)
})

module.exports = staticRouter
