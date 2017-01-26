const webpack = require('webpack');
const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
        ],
    },
    externals: externals(),
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
};