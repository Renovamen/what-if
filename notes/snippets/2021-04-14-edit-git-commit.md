---
date: 2021-03-28
---

# Edit Git Commit

修改已经提交过的 git commit 的日期和描述（或别的什么东西）。

<!-- more -->

比如要修改最近两次提交的 commit，首先 `rebase`：

```bash
git rebase -i HEAD~2
```

把 `pick` 改成 `edit` 或 `e`：

```bash
e e7864bc commit 1  # 原来是：pick e7864bc commit 1
e 4d1003c commit 2  # 原来是：pick 4d1003c commit 2
```

指定作者日期、提交者日期和描述：

```bash
GIT_COMMITTER_DATE="2021-04-14T09:23:26" git commit --amend --date="2021-04-14T09:23:26" -am "new commit message"
```

然后转到下一个提交：

```bash
git rebase --continue
```
