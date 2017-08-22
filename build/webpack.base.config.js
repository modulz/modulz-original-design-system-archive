const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src/'),
            css: path.resolve(__dirname, '../src/css'),
            js: path.resolve(__dirname, '../src/js'),
            partials: path.resolve(__dirname, '../docs/_partials'),
            assets: path.resolve(__dirname, '../docs/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {importLoaders: 1}
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        root: path.resolve(__dirname, 'docs'),
                        attrs: ['img:src', 'link:href'],
                        interpolate: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
