const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { getEntries } = require('./utils.js');
const webpackConfig = require('./webpack.base.config');

const entries = getEntries('./src/js/components/', 'js');

webpackConfig.entry = entries;

webpackConfig.output = {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, '../dist')
};

webpackConfig.plugins = [
    new ExtractTextPlugin('modulz.min.css')
];

module.exports = webpackConfig;