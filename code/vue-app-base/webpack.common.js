const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')// 配合 vue-loader 使用，用于编译转换 .vue 文件
const HtmlWebpackPlugin = require('html-webpack-plugin') //把打包后的文件直接注入到html模板中
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //自动清理输出目录的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')//将单个文件或整个目录复制到构建目录
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//提取CSS文件到单独文件中


//import ('webpack').Configuration 是 ts
//@type 是 jsdoc

/**@type {import ('webpack').Configuration} */
module.exports= {
    mode: 'none',
    entry: './src/main.js', //指定入口文件路径，相对路径./是不能省略的
    output: {  //输出文件的位置       
        path: path.join(__dirname, 'dist'), //目标输出目录 path 的绝对路径
        filename: 'js/bundle.[hash:6].js', //输出对象的名称
        //publicPath: 'dist'  //网站的根目录
    },
    
    module: {
        rules: [ //module.rules 允许你在 webpack 配置中指定多个 loader。尽可能使用 module.rules，因为这样可以减少源码中的代码量，并且可以在出错时，更快地调试和定位 loader 中的问题。
            {
                test: /\.css$/,     //test,用于标识出应该被对应的 loader 进行转换的某个或某些文件
                use: [MiniCssExtractPlugin.loader,'css-loader']     // 开发环境不提取css，打包更快
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'               
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',   //能转base64 就转，不能就fallback file-loader
                    options: {
                        name: 'img/[name].[contenthash:6].[ext]',
                        esModule: false, // 解决 vue 打包之后的图片地址 object%20Module
                        limit: 2 * 1024 //kb
                    }
                }               
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',   //能转base64 就转，不能就fallback file-loader
                    options: {
                        //attrs: ['img:src', 'a:href']
                    }
                }               
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: 'auto' }]
                        ]  //这个集合包含了全部的最新的es特性
                    }
                }
            },
        ]
    },
    plugins: [  //想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。
        new CleanWebpackPlugin(),   // 打包的时候输出文件夹dist目录中的所有文件都将被删除，但是目录不会删除
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ //你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。
            template: './public/index.html',     //HTML模板文件
            title: 'Vue app Sample',
            favicon: './public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            BASE_URL: '"/"'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:6].css'
        })
    ]
}