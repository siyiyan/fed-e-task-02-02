### 提纲
  Babel 是什么

------------------------

### 总结
  参考网址
  插件较多，打包的时候要引入

------------------------


#### 参考网址
[bebel网址](https://www.babeljs.cn/docs/)

#### Babel 是什么？
```
Babel 是一个 JavaScript 编译器
Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
```

##### 作用
>   - 语法转换
>   - 通过 Polyfill 方式在目标环境中添加缺失的特性（通过 [@babel/polyfill](https://www.babeljs.cn/docs/babel-polyfill)）
>   - 源码转换（codemods）
>   - 更多！（查看这些 [视频](https://www.babeljs.cn/videos.html)获得启发）

##### ES2015及更新版本
```
Babel通过语法转换器来支持新版本的JavaScript语法。

这些[插件](https://www.babeljs.cn/docs/plugins)让您现在可以使用新的语法，无需等待浏览器的支持。查看[使用指南](https://www.babeljs.cn/docs/usage)开始入门吧。
```

##### JSX与React

```
Babel能够转换JSX语法！查看[反应预设](https://www.babeljs.cn/docs/babel-preset-react)了解更多信息。通过和[babel-sublime](https://github.com/babel/babel-sublime)一起使用还可以把语法高亮的功能提升到一个新的水平。

npm install --save-dev @babel/preset-react          //将会@babel/preset-react添加到你的Babel配置文件中。
```

##### 类型注释（Flow 和 TypeScript）
```
Babel可以删除类型注释！查看[流预设](https://www.babeljs.cn/docs/babel-preset-flow)或[TypeScript](https://www.babeljs.cn/docs/babel-preset-typescript)预设了解如何使用。严重牢记Babel不做类型检查，你仍然需要安装Flow或TypeScript来执行类型检查的工作。

npm install --save-dev @babel/preset-flow

// @flow
function square(n: number): number {
  return n * n;
}

或通过以下命令安装打字稿预设
npm install --save-dev @babel/preset-typescript

function Greeter(greeting: string) {
    this.greeting = greeting;
}

[Flow](https://flow.org/)
[TypeScrript](https://www.typescriptlang.org/)
```

##### 插件化
```
Babel 构建在插件之上。使用现有的或者自己编写的插件可以组成一个转换管道。通过使用或创建一个 preset 即可轻松使用一组插件。 [了解更多 →](https://www.babeljs.cn/docs/plugins)

利用 [astexplorer.net](https://astexplorer.net/#/KJ8AjD6maa) 可以立即创建一个插件，或者使用 [generator-babel-plugin](https://github.com/babel/generator-babel-plugin) 生成一个插件模板。

// 一个插件就是一个函数
export default function ({types: t}) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      }
    }
  };
}
```

##### 可调式
```
由于 Babel 支持 Source map，因此你可以轻松调试编译后的代码。
```

##### 符合规范
```
Babel 尽最大可能遵循 ECMAScript 标准。不过，Babel 还提供了特定的选项来对标准和性能做权衡。
```


##### 代码紧凑
```
Babel 尽可能用最少的代码并且不依赖太大量的运行环境。

有些情况是很难达成的这一愿望的，因此 Babel 提供了 "loose" 参数，用以在特定的转换情况下在符合规范、文件大小和速度之间做折中。
```
