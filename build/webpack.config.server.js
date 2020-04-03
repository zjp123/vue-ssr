const webpack = require('webpack')
const cssTIQU = require('mini-css-extract-plugin')
const webapckMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const config = webapckMerge(baseConfig, {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../src/server-entry.js')
            // vendor: ['vue']
    },
    output: {
        libraryTarget: 'commonjs2',
        filename: 'server-entry.js',
        publicPath: '/public/',
        path: path.join(__dirname, '../server-build')
    },
    devtool: 'source-map',
    externals: Object.keys(require('../package.json').dependencies),
    module: {
        rules: [{
            test: /\.(le|c)ss$/,
            use: [
                process.env.NODE_ENV !== '"production"' ? 'vue-style-loader' : cssTIQU.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'less-loader'
            ]
        }]
    },
    plugins: [
        new cssTIQU({
            filename: 'css/[name].[contentHash:5].css',
            chunkFilename: '[name].[contentHash:5].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin()

    ]

})

config.resolve = {
    alias: {
        model: path.join(__dirname, '../src/clientApi/server-model.js')
    },
    extensions: ['.js', '.json', '.jsx', '.css', '.less', '.vue']

}

// console.log(config.module.rules, 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')

module.exports = config
