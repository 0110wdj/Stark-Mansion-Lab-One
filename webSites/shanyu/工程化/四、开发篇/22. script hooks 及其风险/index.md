### life cycle

当我们执行任意 npm run 脚本时，将自动触发 pre/post 的生命周期。

```
// 自动执行
npm run preabc

npm run abc

// 自动执行
npm run postabc
```

### hooks 安全问题

pnpm 可以限制比如 postinstall 的执行，更安全。

### 其他

shell

```bash
# 不行
echo hello -> before
# 行
echo hello before
# 行
echo 'hello -> before'
```
