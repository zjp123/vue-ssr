const koa = require('koa')
const send = require('koa-send')
const koaBody = require('koa-body') // 处理request.body
const path = require('path')
const koaSeesion = require('koa-session')
const app = new koa()
const staticRouter = require('./router/static')
const apiRouter = require('./router/api')
const userRouter = require('./router/user')
const createDB = require('./db/db')
const config = require('../app.config')
const isDev = process.env.NODE_ENV === 'development'

app.keys = ['zjp ssr']
app.use(koaSeesion({
    key: 'zjpctt',
    maxAge: 24 * 3600
}, app))
app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    ctx.set('Allow', 'PUT, POST, GET, DELETE, OPTIONS')
    if (ctx.method === 'OPTIONS') {

        ctx.body = 200

    } else {
        await next()
    }

})

const db = createDB(config.db.appId, config.db.appKey)
app.use(async(ctx, next) => {
    try {
        console.log(`request with path ${ctx.path}`)
        await next()
    } catch (err) {
        console.log(err)
            // console.log('111111111111')

        ctx.status = 500
        if (isDev) {
            ctx.body = err.message
        } else {
            ctx.bosy = 'please try again later'
        }
    }
})
app.use(koaBody())

app.use(async(ctx, next) => {
    ctx.db = db
    await next()
})
app.use(async(ctx, next) => {
    if (ctx.path === '/favicon.ico') {
        await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../src/') })
    } else {
        await next()
    }
})

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
app.use(userRouter.routes()).use(userRouter.allowedMethods())

let pageRouter
if (isDev) {
    pageRouter = require('./router/dev-ssr')
} else {
    pageRouter = require('./router/pro-ssr')
}
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
    console.log(`server is listening on ${HOST}:${PORT}`)
})
