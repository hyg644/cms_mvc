const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const commonConfig = {
    /*入口*/
    entry:{
        app: [
            '@babel/polyfill',
            path.join(__dirname, 'src/index.js')
            // path.join(__dirname, 'src/index.tsx')
        ],
        vendor: ['react','react-router-dom','redux','react-dom','react-redux','antd']
    } ,
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js',
        /** 静态资源地址:https://cdn.xxx.com/src*/
        publicPath : '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                }
            },{
                test: /\.(js|jsx)$/,
                // use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src'),
                loader:'babel-loader',
                query:
                    {
                        // presets:["@babel/preset-env",  "@babel/preset-react"],
                        plugins: [
                            [  "import",{libraryName: "antd", style: 'css'}] // antd按需加载
                        ]
                    },
            }, {
                test: /\.(png|jpg|gif|jpeg|webp)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },{
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'font/[hash].[ext]',
                        limit: 5000,
                        mimetype: 'application/font-woff'
                    }
                }
            },

        ]
    },
    /** */
    resolve:{
        alias:{
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname,'src/router'),
            actions: path.join(__dirname,'src/redux/actions'),
            reduces: path.join(__dirname,'src/redux/reduces'),
            style: path.join(__dirname,'src/style'),
            utils: path.join(__dirname,'src/utils'),
            locales:path.join(__dirname,'src/locales'),
            // mock: path.join(__dirname,'src/mock')
            reduxLib: path.join(__dirname,'src/redux'),
        },
        extensions:['.js','.jsx','.ts','.tsx']
    },
    /** */
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        
    ],
    optimization:{
        splitChunks: {
            cacheGroups:{
                commons:{
                    name:'vendor',
                    chunks:'initial',
                    minChunks:2
                }
            }
        },
        splitChunks: {
            cacheGroups:{
                commons:{
                    name:'runtime',
                    chunks:'initial',
                    minChunks:2
                }
            }
        }
    }
};

module.exports = commonConfig;