# vue-app-base

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性

#### 安装步骤
>初始化项目
-   npm init
>安装webpack， webpack-cli
-   npm install webpack --save-dev
-   npm install webpack-cli --save-dev
    //老是报错
        WARNING in configuration
        The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
        You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
    //发现是exports 写错成export
-   npm install webpack webpack-cli -g  先全局安装下

>引入样式资源加载器
-   npm install less-loader --save-dev
-   npm install css-loader style-loader --save-dev

>引入Vue单文件组件的webpack加载器
-   npm install vue-loader --save-dev
>必须要下载 vue-template-compiler
-   npm install vue-template-compiler --save-dev
>引入文件资源加载器
-   npm install url-loader --save-dev
-   npm install file-loader --save-dev
>引入HTML加载器,将 HTML 导出为字符串。当编译器要求时，HTML 被最小化。
-   npm install html-loader --save-dev

>插件将生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包
-   npm install html-webpack-plugin --save-dev
>引入处理用来编译转换代码的加载器
-   npm install babel-loader @babel/core @babel/preset-env --save-dev 
-   npm install babel-plugin-import --save-dev

>自动清理输出目录的插件，如dist目录
-   npm install clean-webpack-plugin --save-dev
>将单个文件或整个目录复制到构建目录。
-   npm install copy-webpack-plugin --save-dev

>提供用于开发的 HTTP Server,集成[自动编译] 和 [自动刷新浏览器] 等功能.
-   npm install webpack-dev-server --save-dev
>提取CSS文件到单独文件中
-   npm install mini-css-extract-plugin --save-dev
>压缩CSS
-   npm install optimize-css-assets-webpack-plugin --save-dev
>压缩JavaScript
-   npm install terser-webpack-plugin --save-dev
>合并webpack配置文件
-   npm install webpack-merge --save-dev

>安装 ESLint 模块为开发依赖
-   npm install eslint --save-dev
>结合 Webpack 后续配置
-   npm install eslint-plugin-react --save-dev 
>通过npx eslint --init生成配置文件



#### 补充
>入口
    entry：{
        app: './src/app.js',    //应用程序
        vendors: './src/vendors.js'     //第三方库
    }

    //多页面应用程序
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
>使用loader
    1.可以在 import 语句或任何等效于 "import" 的方式中指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。
        import Styles from 'style-loader!css-loader?modules!./styles.css';
    2.你也可以通过 CLI 使用 loader：
        webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
>什么是webpack模块
>   - ES2015 import 语句
>   - CommonJS require() 语句
>   - AMD define 和 require 语句
>   - css/sass/less 文件中的 @import 语句。
>   - 样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)
