/**
 * Created by snow on 06/09/2017.
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './App.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'assets'),
        publicPath: '/assets',
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    },

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    },
                }],
            },
        ],

    },
};