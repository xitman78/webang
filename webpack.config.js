'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    watch: NODE_ENV == 'development',

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel' },
            {test: /\.tpl\.html$/, loader: 'raw'}
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('en')
        }),
        new CopyWebpackPlugin([
            { from: 'index.html', to: '../dist/index.html' }
        ])
    ]
};

if( NODE_ENV == 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}