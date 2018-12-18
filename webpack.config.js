'use strict'

const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common.config.js');

const devMode = process.env.NODE_ENV !== 'production'

const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader;

const resolve = (dir) => {
    return path.join(__dirname, '..', dir)
}

const publicConfig = {
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                exclude: /node_modules|antd\.css/,
                use: [
                    styleLoader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIndetName:"[name]__[local]___[hash:base64:5]"
                        },
                    },{
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                         // compiles Less to CSS
                    },{
                        loader: require.resolve('sass-loader'), // compiles Less to CSS
                    },
                ]
            }, {
                test: /\.less$/,
                exclude: /node_modules|antd\.css/,
                use: [
                    styleLoader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIndetName:"[name]__[local]___[hash:base64:5]"
                        },
                    },{
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                         // compiles Less to CSS
                    },{
                        loader: require.resolve('less-loader'), // compiles Less to CSS
                    },
                ]
            },{
                test: /\.css$/,
                // exclude: /node-modules|antd\.(le|c)ss/,
                use: [
                    styleLoader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIndetName:"[name]__[local]___[hash:base64:5]"
                        },
                    },{
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                         // compiles Less to CSS
                    }
                ]
            }, {
                //antd css no use css module
                test: /\.css$/,
                include: /antd\.css/,
                use: [
                    styleLoader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                            ],
                        },
                    },
                ],
            },{
                //antd css no use css module
                test: /\.less$/,
                include: /antd\.less/,
                use: [
                    styleLoader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },{
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                            ],
                        },
                    },{
                        loader: require.resolve('less-loader'), // compiles Less to CSS
                    },
                ],
            },
        ]
    },
    /* */
    mode:'production',
    devtool: 'inline-sources-map',
    /** */
    plugins:[
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['dist/*.*']),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
};

module.exports = merge(commonConfig, publicConfig); 