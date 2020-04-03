module.exports = (isDev) => {
    return {
        // preserveWhitepace: true, // 去除空格
        extractCSS: !isDev, // 把Vue组件内部的css 提取出来放在css文件中
        // cssModules: {
        //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
        //     camelCase: true
        // }
        // hotReload: false, // 根据环境变量生成
        // modules: true,
        // 自定义生成的类名
        compilerOptions: {
            preserveWhitepace: true
        },
        localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
    }
}
