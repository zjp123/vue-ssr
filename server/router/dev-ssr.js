const path = require('path')
const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const fs = require('fs')
const axios = require('axios')
const serverConfig = require(path.join(__dirname, '../../build/webpack.config.server'))
const VueSSRServer = require('vue-server-renderer')
const serverRender = require('./server-render')
const Router = require('koa-router')

const webpackComplier = webpack(serverConfig)
const mfs = new MemoryFS()
webpackComplier.outputFileSystem = mfs

let bundle
webpackComplier.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err => console.log(err))
    stats.warnings.forEach(warn => console.warn(err))

    const bundlePath = path.join(
        serverConfig.output.path,
        'vue-ssr-server-bundle.json'
    )
    bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
    console.log('new bundle generated')
})

const handleRender = async(ctx) => {
    if (!bundle) {
        ctx.body = '还没弄好呢。。。'
    }
    const clientMiniFaset = await axios.get(
        'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
    )
    const clientData = clientMiniFaset.data
    const templateHtml = fs.readFileSync(
        path.join(__dirname, '../serverTemplate.ejs'),
        'utf-8'
    )
    const renderer = await VueSSRServer.createBundleRenderer(bundle, {
        inject: false,
        clientManifest: clientData
    })
    await serverRender(ctx, renderer, templateHtml)

    console.log('new bundle')
}

const router = new Router()
router.get('*', handleRender)
module.exports = router
