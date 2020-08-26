###IIFE（即时调用函数表达式）

####参考文章-What function window, document, undefined - window, document really means
    [文章地址](https://ultimatecourses.com/blog/what-function-window-document-undefined-iife-really-means)

####总结
    以上表达式有三个我们要理解的点，分别是：

    分号：“ ; ”

    表达式：(function () {//......})()

    参数：$、window、document、undefined

#####一、分号
    我们有时会看到在一些js代码前面会加一个分号，例如上面，那么它到底起到什么作用呢？

    首先，它不是无意义的，他是为了防止js文件合并时前一个文件结束没加分号而引起的语法错误。
    我们都知道，js语句最后都要加上分号，也许没加上也没事，但在做前端自动化时会对文件进行合并，也就是说有可能会有另一个文件加到当前文件的前面，虽然因为代码有换行不会出现什么问题，但是在进行代码压缩时会去掉换行和空格，这时如果前一个文件的结束没加上分号，那会导致两个文件的内容连接在一起而出现语法错误。而如果你在代码前面加一个分号，合并压缩时就相当于在前一个文件的结束加上一个分号，让它结束掉就不会影响当前代码，即时前一个代码结束处存在分号，那么两个分号连在一起也不会出现错误。

#####二、表达式
    开头的那段代码叫做IIFE（即时调用函数表达式），一般的函数表达式声明后我们可以在需要时多次调用，但是，IIFE之所以被创造出来就是因为他们是直接调用的函数表达式，这也就意味着他们在运行时直接被调用，而且只能被运行一次，之后不能再被调用。

    一般的函数表达式：

    var log= function () {
    //......
    };
    log();
    即时调用函数表达式：

    var log = (function () {
    //......
    })();
    注意，包含“function () {//......}”的括号不能省略，否则不起作用，

####三、参数

    1、$参数

    $形参是jquery的简写，很多方法和类库也使用$,这里$接受jQuery对象，也是为了避免$变量冲突，保证插件可以正常运行。

    2、window、document参数

    window, document形参分别接受window, document对象，window, document对象都是全局环境下的，而在函数体内的window, document其实是局部变量，不是全局的window, document对象。这样做有个好处就是可以提高性能，减少作用域链的查询时间，如果你在函数体内需要多次调用window 或 document对象，这样把window 或 document对象当作参数传进去，这样做是非常有必要的。当然如果你的插件用不到这两个对象，那么就不用传递这两个参数了。

    3、undefined

    undefined在老一辈的浏览器是不被支持的，直接使用会报错，js框架要考虑到兼容性，因此增加一个形参undefined。

    有时在我们的插件中用不到window document undefined 我们就可以写简单一些

    ;(function ($) {
        //code----
    })(jQuery);


    前面的代码段中函数形参其实是可以随意命名的，例如下面两段效果都是一样的：

    (function (window, document, undefined) {
    console.log(window); // Object window
    })(window, document);
    
    (function (a, b, c) {
    console.log(a); // Object window
    })(window, document);