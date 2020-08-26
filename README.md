####一、简答题
1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
> 答
>   - 六个核心概念
>       - Entry，入口，这是Webpack执行构建的第一步，可理解为输入。
>       - Module，模块，在Webpack中一切皆模块，一个模块即为一个文件。Webpack会从Entry开始递归找出所有的依赖模块。
>       - Chunk，代码块，一个Chunk由多个模块组合而成，它用于代码合并与分割。
>       - Loader，模块转换器，用于将模块的原内容按照需求转换成新内容。
>       - Plugin，扩展插件，在Webpack构建过程的特定时机注入扩展逻辑，用来改变或优化构建结果。
>       - Output，输出结果，源码在Webpack中经过一系列处理后而得出的最终结果。
>   - Webpack构建流程
>       - Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务。

2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
> 答
>   - 不同
>       - Loader,专注实现资源模块加载,例如常见的：
>           - 编译转换类,foo.css  css-loader  bundle.js 以JS形式工作的CSS模块
>           - 文件操作类,bar.png  file-loader  bundle.js  导出文件访问路径  bar.png
>           - 代码检查类,baz.js   eslint-loader 检查通过/不通过  baz.js
>       - Plugin,解决其他自动化工作
>           - e.g. 清除 dist 目录
>           - e.g. 拷贝静态文件至输出目录
>           - e.g. 压缩输出代码
>   - 思路
>       -  Loader用于对模块文件进行编译转换和加载处理，在module.rules数组中进行配置，它用于告诉Webpack在遇到哪些文件时使用哪些Loader去加载和转换。Loader还可以通过querystring或object指定选项参数。
>       - Plugin用于扩展Webpack功能，实现原理是在构建流程里注入钩子函数。在plugins数组中进行配置。相比于 Loader， Plugin拥有更宽的能力范围


####二、编程题
1、使用 Webpack 实现 Vue 项目打包任务
具体任务及说明：

    先下载任务的基础代码  百度网盘链接: https://pan.baidu.com/s/1pJl4k5KgyhD2xo8FZIms8Q 提取码: zrdd

    这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构

    有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）

    这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务

    尽可能的使用上所有你了解到的功能和特性

作业要求

本次作业中的编程题要求大家完成相应代码后（二选一）

1.  简单录制一个小视频介绍一下实现思路，并演示一下相关功能。

2.  提交一个项目说明文档，要求思路流程清晰。

最终将录制的视频或说明文档和代码统一提交至作业仓库。