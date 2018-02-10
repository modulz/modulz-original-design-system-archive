const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getEntries } = require('./utils.js');

const config = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/modulz-js.min.js',
        path: path.resolve(__dirname, '../public')
    },
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
            },
            {
                // Match woff2 in addition to patterns like .woff?v=1.1.1.
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader",
                options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
                },
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        stats: 'errors-only',
        port: 9000
    },
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin('css/modulz.min.css')
    ]
};

const pages = getEntries('./docs/pages/', 'html');
for (const pathname in pages) {
    // Configured to generate the html file, define paths, etc.
    const conf = {
        filename: pathname + '.html', // html output pathname
        template: pages[pathname], // Template path
        inject: true
    };
    config.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = config;
