### 基本

semver，Semantic Versioning 语义化版本的缩写，[major, minor, patch]

- major: 当你发了一个含有 Breaking Change 的 API
- minor: 当你新增了一个向后兼容的功能时
- patch: 当你修复了一个向后兼容的 Bug 时

### 举例

对于 ~1.2.3 而言，它的版本号范围是 >=1.2.3 <1.3.0

对于 ^1.2.3 而言，它的版本号范围是 >=1.2.3 <2.0.0

### 更新

npm i 某个 package 时

- 当 package-lock.json 该 package 锁死的版本号符合 package.json 中的版本号范围时，将以 package-lock.json 锁死版本号为主。

- 当 package-lock.json 该 package 锁死的版本号不符合 package.json 中的版本号范围时，将会安装该 package 符合 package.json 版本号范围的最新版本号，并重写 package-lock.json
