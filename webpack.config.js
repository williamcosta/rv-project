const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: ['./src/app.js', './src/scss/style.scss'],
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './public/style.css',
            allChunks: true
        })
    ]
}