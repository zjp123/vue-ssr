const ejs = require('ejs')

module.exports = async(ctx, renderer, template) => {
    ctx.headers['Content-Type'] = 'text/html'

    const context = { url: ctx.path, user: ctx.session.user }

    try {
        const appString = await renderer.renderToString(context)

        if (context.router.currentRoute.fullPath !== ctx.path) {
            return ctx.redirect(context.router.currentRoute.fullPath)
        }
        // console.log(context.renderStyles(), 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n')
        const { title } = context.meta.inject() // 处理meta 信息的
        const html = ejs.render(template, {
            inject: false,
            appString,
            style: context.renderStyles(),
            scripts: context.renderScripts(),
            title: title.text(),
            // title: title.text(),
            initalState: context.renderState()
        })

        ctx.body = html
    } catch (err) {
        console.log('render error', err)
        throw err
    }
}
