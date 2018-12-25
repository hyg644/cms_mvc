'use strict'

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config');

const devConfig = {
    /*入口*/
    entry:{
       app: [
            '@babel/polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
            // path.join(__dirname, 'src/index.tsx')
        ]
    } ,
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        //chunkhash???
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|le|c)ss$/,
                exclude: /node_modules|antd\.css/,
                use: [
                    require.resolve('style-loader'),
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
                    },{
                        loader: require.resolve('less-loader'), // compiles Less to CSS
                    },
                ]
            }, {
                //antd css no use css module
                test: /\.css$/,
                include: /node_modules|antd\.css/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            // 改动
                            // modules: true,   // 新增对css modules的支持
                            // localIndetName: '[name]__[local]__[hash:base64:5]', //
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                // autoprefixer({
                                //     browsers: [
                                //         '>1%',
                                //         'last 4 versions',
                                //         'Firefox ESR',
                                //         'not ie < 9', // React doesn't support IE8 anyway
                                //     ],
                                //     flexbox: 'no-2009',
                                // }),
                            ],
                        },
                    },
                ],
            },{
                //antd css no use css module
                test: /\.less$/,
                include: /node_modules|antd\.less/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            // 改动
                            // modules: true,   // 新增对css modules的支持
                            // localIndetName: '[name]__[local]__[hash:base64:5]', //
                        },
                    },{
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                // autoprefixer({
                                //     browsers: [
                                //         '>1%',
                                //         'last 4 versions',
                                //         'Firefox ESR',
                                //         'not ie < 9', // React doesn't support IE8 anyway
                                //     ],
                                //     flexbox: 'no-2009',
                                // }),
                            ],
                        },
                    },{
                        loader: require.resolve('less-loader'), // compiles Less to CSS
                    },
                ],
            },
        ]
    },
    plugins:[
        // new webpack.DefinePlugin({
        //     MOCK:true
        // })
    ],
    /* */
    mode:'development',
    /* */
    devServer: {
        port:8212,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,//配置回调页面
        host:'10.0.41.131',
        hot:true,
        // open:true,
        // host:'localhost',
        // compress: true,//启用gzip压缩
        proxy: {
            '/api': {
                target: 'http://localhost:8213',
                pathRewrite: {'^/api' : ''}
              }
        }//接口调用代理
    },
    devtool: 'inline-sources-map',
    /** */
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         filename:'index.html',
    //         template:path.join(__dirname,'src/index.html')
    //     }),
    //     /** */
    //     // new webpack.optimize.CommonsChunkPlugin({
    //     //     name: 'vendor'
    //     // })
    // ],
    /** 
     * 配置项   
     *splitChunks: {
     * chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
     * minSize: 0,                // 最小尺寸，默认0
     * minChunks: 1,              // 最小 chunk ，默认1
     * maxAsyncRequests: 1,       // 最大异步请求数， 默认1
     * maxInitialRequests: 1,     // 最大初始化请求书，默认1
     * name: () => {},            // 名称，此选项可接收 function
     * cacheGroups: {             // 这里开始设置缓存的 chunks
     *   priority: "0",           // 缓存组优先级 false | object |
     *   vendor: {                   // key 为entry中定义的 入口名称
     *     chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
     *     test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
     *     name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
     *     minSize: 0,
     *     minChunks: 1,
     *     enforce: true,
     *     maxAsyncRequests: 1,       // 最大异步请求数， 默认1
     *     maxInitialRequests: 1,     // 最大初始化请求书，默认1
     *     reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
     *   }
     * }
     *}
    */
    // optimization:{
    //     splitChunks: {
    //         cacheGroups:{
    //             commons:{
    //                 name:'vendor',
    //                 chunks:'initial',
    //                 minChunks:2
    //             }
    //         }
    //     }
    // }
    
};

module.exports = merge({
    customizeArray(a, b, key){
        /**entry.app不合并，全替换*/
        if(key === 'entry.app'){
            return b;
        }
        return undefined;
    }
})(commonConfig,devConfig);