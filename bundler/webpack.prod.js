const path = require('path')
const { merge } = require('webpack-merge')  
const commonConfiguration = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CopyWebpackPlugin({
                patterns: [
                    {from: path.resolve(__dirname, '../static'),
                    to: path.resolve(__dirname, '../dist/static')},
                    {from: path.resolve(__dirname, '../src/sketch/fonts'),
                    to: path.resolve(__dirname, '../dist/fonts')}
                ],
              }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                minify: true
            }),
            new CleanWebpackPlugin()
        ]

    }
)
