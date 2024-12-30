1、最佳实践：js 文件放在 cdn 服务器里面，和网站主域名是不同的。

2、script 引入的参数

3、注入的原理为当打包器已生成 entryPoint 文件资源后，获得其文件名及 publicPath，并将其注入到 html 中

4、[最小化实例源代码](https://github.com/shfshanyue/mini-code/tree/master/code/html-webpack-plugin)阅读
