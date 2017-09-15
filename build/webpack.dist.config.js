const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = require('./webpack.base.config');

webpackConfig.entry = './src/js/main.js';

webpackConfig.output = {
    filename: 'modulz.min.js',
    path: path.resolve(__dirname, '../dist')
};

webpackConfig.plugins = [
    new ExtractTextPlugin('modulz.min.css')
];

module.exports = webpackConfig;