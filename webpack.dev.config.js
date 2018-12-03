const path=require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');
var merge = require('webpack-merge');

const devConfig = {
    devtool: 'inline-source-map',
    entry:{
        app:[
            'react-hot-loader/patch',
             path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]","postcss-loader"]
        }]
    },
    devServer: {
        contentBase:path.join(__dirname,'./dist'),
        historyApiFallback: true,
        port: 8080,
        host: '10.0.41.31',
        hot: true,
        proxy: {
            "/api/*": "http://10.0.41.31:8080/$1"
        }
    },
    plugins:[
        // new webpack.DefinePlugin({
        //     MOCK:true
        // })
    ]
};


module.exports = merge({
    customizeArray(a, b, key) {
        console.log('--------请开始你的-------')
        console.log(key)
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);


// module.exports={
//     // 入口
//     entry:{
//         app:[
//             path.join(__dirname,'src/index.js'),
//         'react-hot-loader/patch'
//         ],
//         vendor:['react','react-router-dom','redux','react-dom','react-redux']
//     },
//     // 输出到dist文件夹,输出文件名字为bundle.js
//     output:{
//         path:path.join(__dirname,'./dist'),
//         filename:'[name].[hash].js',
//         chunkFilename:'[name].[chunkhash].js'
//     },
//     devServer:{
//         contentBase:path.join(__dirname,'./dist'),
//         historyApiFallback: true,
//         port: 8080,
//         host: '10.0.41.31',
//         hot: true
//         // proxy: {
//         //     "/api": "http://10.0.41.31:8080"
//         // }
//     },
//     module: {
//         rules: [{
//             test: /\.js$/,
//             use: ['babel-loader?cacheDirectory=true'],
//             include: path.join(__dirname, 'src')
//         },{
//             test: /\.css$/,
//             use: ['style-loader', 'css-loader']
//         },{
//             test:/\.(png|jpg|gif)$/,
//             use:[{
//                 loader:'url-loader',
//                 options:{
//                     limit:8192   //小于8k图片将会被转成base64编码
//                 }
//             }]
//         }]
//     },
//     //热更新
//     plugins:[
//         new HtmlWebpackPlugin({
//             filename:'index.html',
//             template:path.join(__dirname,'src/index.html')
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name:'vendor'
//         })
//    ],
//    resolve:{
//        alias:{
//            pages:path.join(__dirname,'src/pages'),
//            components:path.join(__dirname,'src/components'),
//            router:path.join(__dirname,'src/router'),
//            actions: path.join(__dirname, 'src/redux/actions'),
//            reducers: path.join(__dirname, 'src/redux/reducers'),
//        },
//        extensions: ['.js', '.jsx']
//    },
//    devtool:'inline-source-map',

// };