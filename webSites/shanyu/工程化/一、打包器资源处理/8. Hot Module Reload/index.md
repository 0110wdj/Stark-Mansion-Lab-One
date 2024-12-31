- 1 webpack-dev-server 将打包输出 bundle 使用内存型文件系统控制，而非真实的文件系统。此时使用的是 memfs 模拟 node.js fs API

- 2 每当文件发生变更时，webpack 将会重新编译，webpack-dev-server 将会监控到此时文件变更事件，并找到其对应的 module。此时使用的是 chokidar 监控文件变更

- 3 webpack-dev-server 将会把变更模块通知到浏览器端，此时使用 websocket 与浏览器进行交流。此时使用的是 ws

- 4 浏览器根据 websocket 接收到 hash，并通过 hash 以 JSONP 的方式请求更新模块的 chunk

- 5 浏览器加载 chunk，并使用新的模块对旧模块进行热替换，并删除其缓存
