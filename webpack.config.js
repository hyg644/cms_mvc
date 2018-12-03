const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const UglifyJSPlugin =require('uglifyjs-webpack-plugin') //文件压缩
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin =require('extract-text-webpack-plugin')  //抽取css

const merge = require('webpack-merge');

const commonConfig =require('./webpack.common.config.js');

const publicConfig ={
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader?modules&localIdentName=[local]-[hash:base64:5]','postcss-loader']
            })
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJSPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
           }
       }),
       new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
} 

module.exports=merge(commonConfig,publicConfig)
// module.exports = {
//     devtool: 'cheap-module-source-map',
//     entry: {
//         app: [
//             path.join(__dirname, 'src/index.js')
//         ],
//         vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//     },
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: '[name].[chunkhash].js',
//         chunkFilename: '[name].[chunkhash].js',
//         publicPath:'/'
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             use: ['babel-loader'],
//             include: path.join(__dirname, 'src')
//         }, {
//             test: /\.css$/,
//             use: ExtractTextPlugin.extract({
//                 fallback: "style-loader",
//                 use: "css-loader"
//               })
//         }, {
//             test: /\.(png|jpg|gif)$/,
//             use: [{
//                 loader: 'url-loader',
//                 options: {
//                     limit: 8192
//                 }
//             }]
//         }]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.join(__dirname, 'src/index.html')
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor',
//             name: 'runtime'
//         }),
//         new webpack.optimize.UglifyJsPlugin(),
//         new webpack.DefinePlugin({
//           'process.env': {
//               'NODE_ENV': JSON.stringify('production')
//            }
//        }),
//        new webpack.HashedModuleIdsPlugin(),
//        new CleanWebpackPlugin(['dist']),
//        new ExtractTextPlugin({
//             filename: '[name].[contenthash:5].css',
//             allChunks: true
//         })
//     ],
//     resolve: {
//         alias: {
//             pages: path.join(__dirname, 'src/pages'),
//             component: path.join(__dirname, 'src/component'),
//             router: path.join(__dirname, 'src/router'),
//             actions: path.join(__dirname, 'src/redux/actions'),
//             reducers: path.join(__dirname, 'src/redux/reducers')
//         }
//     }
// };