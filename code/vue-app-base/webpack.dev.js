//webpack.dev.js文件中保留开发模式素需的内容。
const { merge } = require('webpack-merge')  //合并webpack配置文件
const webpack = require('webpack');   //访问内置的插件
const common = require('./webpack.common.js') // 导入公共配置

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {  //模块热替换
    host: 'localhost',
    compress: true,
    open: false, // 启动服务时，自动打开浏览器
    hot: true, // 开启热更新功能
    contentBase: 'public'   //静态服务文件夹
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin() // 打开热更新插件
  ]
})
