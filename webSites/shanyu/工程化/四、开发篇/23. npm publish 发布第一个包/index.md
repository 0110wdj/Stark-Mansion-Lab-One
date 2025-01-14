## 发包注意事项

1、@name/pkgname 这种包名是收费的

2、常用命令

```bash
# 增加一个修复版本号: 1.0.1 -> 1.0.2 (自动更改 package.json 中的 version 字段)
$ npm version patch

# 增加一个小的版本号: 1.0.1 -> 1.1.0 (自动更改 package.json 中的 version 字段)
$ npm version minor

# 将更新后的包发布到 npm 中
$ npm publish
```

3、注意配置

- repository
- README
