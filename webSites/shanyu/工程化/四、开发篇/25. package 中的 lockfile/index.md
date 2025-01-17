### 风险：间接冲突。

```
react@17.0.2
└── object-assign@4.1.0 (PS: 请注意该版本号)
```

```
Application
└── react@17.0.2
    └── object-assign@4.99.99 (PS: 请注意该版本号)
```

### 解决办法

- 将所有依赖中的版本号在 package.json 中锁死
- 将部分依赖直接编译后直接引入，而非通过依赖的方式，如 webpack、babel 等
- 时常维护
