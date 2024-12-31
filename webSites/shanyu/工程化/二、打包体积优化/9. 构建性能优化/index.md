### 1 更快的 loader: swc

当 loader 进行编译时的 AST 操作均为 CPU 密集型任务，使用 Javascript 性能低下，此时可采用高性能语言 rust 编写的 swc。

### 2 持久化缓存: cache

### 3 多进程: thread-loader
