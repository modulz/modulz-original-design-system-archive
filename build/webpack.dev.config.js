const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getEntries } = require('./utils.js');
const webpackConfig = require('./webpack.base.config');

webpackConfig.entry = './docs/main.js';

webpackConfig.output = {
    filename: 'js/modulz.min.js',
    path: path.resolve(__dirname, '../public')
};

webpackConfig.devServer = {
    contentBase: path.resolve(__dirname, '../public'),
    stats: 'errors-only',
    port: 9000
};

webpackConfig.devtool = "source-map";

webpackConfig.plugins = [
    new ExtractTextPlugin('css/modulz-css.min.css')
];

const pages = getEntries('./docs/pages/', 'html');
for (const pathname in pages) {
    // Configured to generate the html file, define paths, etc.
    const conf = {
        filename: pathname + '.html', // html output pathname
        template: pages[pathname], // Template path
        inject: true
    };
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = webpackConfig;
