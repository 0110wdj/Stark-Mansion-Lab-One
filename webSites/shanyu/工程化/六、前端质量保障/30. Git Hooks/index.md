#### git hook 脚本

```bash
ls -lah .git/hooks

applypatch-msg.sample     pre-merge-commit.sample
commit-msg.sample         pre-push.sample
fsmonitor-watchman.sample pre-rebase.sample
post-update.sample        pre-receive.sample
pre-applypatch.sample     prepare-commit-msg.sample
pre-commit.sample         update.sample
```

#### 自定义脚本位置

```bash
# 可通过命令行配置 core.hooksPath
git config 'core.hooksPath' .husky

# 也可通过写入文件配置 core.hooksPath
cat .git/config
[core]
  ignorecase = true
  precomposeunicode = true
  hooksPath = .husky
```

在前端工程化中，husky 即通过自定义 core.hooksPath 并将 npm scripts 写入其中的方式来实现此功能。

**注意 1：~/.husky 文件夹是在项目根目录下，与 .git 文件夹同级。**
**注意 2：需要给 hook 脚本添加可执行权限**
