const serverRender = require('./server-render')
const Router = require('koa-router')
const path = require('path')
const Vuessr = require('vue-server-renderer')
const fs = require('fs')
const clientManifest = require('../../public/vue-ssr-client-manifest.json')
    // 注意这个加上了public 因为在webpack.client.js 里面的publicPath的设置
const renderer = Vuessr.createBundleRenderer(
    path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'), {
        inject: false,
        clientManifest
    }
)

const template = fs.readFileSync(
    path.join(__dirname, '../serverTemplate.ejs'),
    'utf-8'
)

const pageRouter = new Router()

pageRouter.get('*', async(ctx) => {
    await serverRender(ctx, renderer, template)
})

module.exports = pageRouter
