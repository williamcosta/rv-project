const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: ['./src/app.jsx', './src/scss/style.scss',],
    output: {
        path: path.join(__dirname, 'public/'),
        publicPath: '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: false,
                            },
                        },
                    ]
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.css',
            disable: false,
            allChunks: true
        })
    ]
}