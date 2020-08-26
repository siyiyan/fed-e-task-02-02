//webpack.prod.js文件中保留生产模式的内容。

const merge = require('webpack-merge')  //合并webpack配置文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  //自动清理输出目录的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')  //将单个文件或整个目录复制到构建目录
const common = require('./webpack.common.js') // 导入公共配置
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') //压缩CSS
const TerserWebpackPlugin = require('terser-webpack-plugin')//压缩JS

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin()
        ]
    },
    optimization: {
        usedExports: true,// 标记未引用代码
        minimize: true,//移除未使用代码
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(['public']) //public目录下所有文件拷贝到输出目录.开发阶段最好不要使用这个插件,留在上线前的那次打包中使用
    ]
})
