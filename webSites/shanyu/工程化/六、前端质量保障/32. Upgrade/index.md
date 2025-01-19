npm 的版本号为 semver 规范，由 [major, minor, patch] 三部分组成，其中

- major: 当你发了一个含有 Breaking Change 的 API
- minor: 当你新增了一个向后兼容的功能时
- patch: 当你修复了一个向后兼容的 Bug 时

```bash
# 发现有待更新的 package
npm outdated
# 自动将 package.json 中待更新版本号进行重写
npm-check-updates -u
# 仅仅升级到最新的 patch 版本
npx npm-check-updates --target patch -u
```
