const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: ['./src/app.js', './src/scss/style.scss',],
    output: {
        path: path.join(__dirname, 'public/'),
        publicPath: '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
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