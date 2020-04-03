const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const cssTIQU = require('mini-css-extract-plugin')

// console.log(process.env.NODE_ENV, 'jsjsjsj')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    // mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        // 先尝试 ts，tsx 后缀的 TypeScript 源码文件
        extensions: ['.js', '.json', '.jsx', '.css', '.less', '.vue']

    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-aaa.[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlPlugin({
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.DefinePlugin({
            'process.env': isDev ? '"development"' : '"production"'
        })
    ]

}

if (isDev) {
    config.module.rules.push({
        test: /\.(le|c)ss$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'less-loader'
        ]
    })
    config.devtool = '#cheap-module-eval-source-map'
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
    config.devServer = {
        port: 8000,
        host: '0.0.0.0', // 同一个局域网的ip都可以访问
        overlay: {
            errors: true // 错误显示到网页上
        },
        historyApiFallback: true,
        hot: true,
        open: true
    }
} else {
    config.entry = {
        app: path.join(__dirname, 'src/main.js')
            // vendor: ['vue']
    }

    config.output.filename = '[name]-[chunkhash:5].js'
    config.plugins.push(
        new cssTIQU({
            filename: 'css/[name].[contentHash:5].css',
            chunkFilename: '[id].[contentHash:5].css'
        })
    )
    config.module.rules.push({
        test: /\.(le|c)ss$/,
        use: [
            cssTIQU.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'less-loader'
        ]
    })
}

module.exports = config
