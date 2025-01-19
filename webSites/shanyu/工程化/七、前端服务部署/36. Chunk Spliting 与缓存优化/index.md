### 分包考虑

- 一行代码将导致整个 bundle.js 的缓存失效
- 一个页面仅仅需要 bundle.js 中 1/N 的代码，剩下代码属于其它页面，完全没有必要加载

### 分包运行时

- 打包工具运行时

  > webpack(或其他构建工具) 运行时代码不容易变更，需要单独抽离出来，比如 webpack.runtime.js。由于其体积小，必要时可注入 index.html 中，减少 HTTP 请求数，优化关键请求路径

- 前端框架运行时
  > React(Vue) 运行时代码不容易变更，且每个组件都会依赖它，可单独抽离出来 framework.runtime.js。请且注意，务必将 React 及其所有依赖(react-dom/object-assign)共同抽离出来，否则有可能造成性能损耗，

### 使用 webpack 分包

- 引用次数
- 包体积大小
