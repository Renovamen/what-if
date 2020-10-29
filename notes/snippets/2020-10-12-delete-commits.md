---
title: Delete Commit History
date: 2020-10-12
---

保留代码但删除 Github 上的提交历史记录的方法。

<!-- more -->

```bash
git checkout --orphan latest_branch  # 用当前代码建一个新分支
git add -A  # 添加所有文件
git commit -am "some commit messages"  # commit
git branch -D master  # 删除原 master 分支
git branch -m master  # 将新建的分支重命名为 master
git push -f origin master  # 强制推送上 Github
```