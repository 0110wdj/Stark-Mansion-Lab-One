### 第三方库 bug 时的解决办法

#### 第 1 种

修复 bug，提交 pr，更新版本。

#### 第 2 种

修改 node_modules 总的源代码文件，复制该文件到 git 版本管理中，最后总是使用复制的文件去覆盖源代码文件（这个文件可能是 npm i 新安装的，所以需要覆盖）。

#### 第 3 种

使用 patch-package 工具，将改动本身记录下来，之后直接在生产环境中使用该改动即可。

注意：这里的“改动本身”是指类似 git diff 的那种记录的文件。

```patch
diff --git a/node_modules/lodash/index.js b/node_modules/lodash/index.js
index 5d063e2..1be61ea 100644
--- a/node_modules/lodash/index.js
+++ b/node_modules/lodash/index.js
@@ -1 +1,3 @@
+console.log("test lodash patch package");
+
 module.exports = require('./lodash');
\ No newline at end of file

```

patch-package 使用的完整的流程如下：

```bash
# 修改库源文件
$ vim node_modules/lodash/index.js

# 对目标库的修复生成一个 patch 文件，位于 patches/lodash+4.17.21.patch
$ npx patch-package lodash

# 将修复文件提交到版本管理之中
$ git add patches/lodash+4.17.21.patch
$ git commit -m "fix 一点儿小事 in lodash"

# 此后的命令在生产环境或 CI 中执行
# 此后的命令在生产环境或 CI 中执行
# 此后的命令在生产环境或 CI 中执行

# 在生产环境装包
$ npm i

# 为生产环境的 lodash 进行小修复
$ npx patch-package

# 大功告成！
```
