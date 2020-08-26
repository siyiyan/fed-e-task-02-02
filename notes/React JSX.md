###提纲

------------------------

###总结
1、推荐在 React 中使用 JSX
2、结构
    ReactDOM.render(
        html代码
        ,
        document.getElementById('ID')
    )
3、<h1>{i == 1 ? 'True!' : 'False'}</h1>，没有if else，但可以使用三元运算
4、<h1 style = {myStyle}>菜鸟教程</h1>，样式也在花括号里面
5、{/*注释...*/}，注释也在花括号里面
6、<div>{arr}</div>，数组也在花括号里面

------------------------



####参考网址
[bebel网址](https://www.runoob.com/react/react-jsx.html)

####React JSX 介绍
```
React 使用 JSX 来替代常规的 JavaScript。

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。

JSX 是在 JavaScript 内部实现的。
我们知道元素是构成 React 应用的最小单位，JSX 就是用来声明 React 当中的元素。

与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。

要将 React 元素渲染到根 DOM 节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：
```

####React JSX 优点：
>   - JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
>   - 它是类型安全的，在编译过程中就能发现错误。
>   - 使用 JSX 编写模板更加简单快速。

####React JSX 注意：
```
由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。
```

####React JSX使用
```
添加自定义属性需要使用 data- 前缀。
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    <h2>欢迎学习 React</h2>
    <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>
    ,
    document.getElementById('example')
);
```

####React JSX 独立文件

    helloworld_react.js

    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
    );

    HTML

    <body>
        <div id="example"></div>
        <script type="text/babel" src="helloworld_react.js"></script>
    </body>

####React JSX JavaScript表达式
```
1、我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中。
ReactDOM.render(
    <div>
      <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);

2、在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。
ReactDOM.render(
    <div>
      <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example')
);
```

####React JSX 样式
```
React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

####React JSX 注释
```
注释需要写在花括号中
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```

####React JSX 数组
```
JSX 允许在模板中插入数组，数组会自动展开所有成员
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```