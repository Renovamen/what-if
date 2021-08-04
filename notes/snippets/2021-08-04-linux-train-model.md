---
title: How to Train Your Models
date: 2021-08-04
---

Linux 炼丹

<!-- more -->


## 常用命令

Nvidia GPU 状态：

```bash
nvidia-smi
watch -n 10 nvidia-smi  # 每 10s 更新一次
```

目录大小

```bash
du -sh  # 当前目录占用的空间大小
du -lh --max-depth=1  # 当前目录下一级子文件和子目录占用的空间大小
du -sh * | sort -n  # 按当前目录下一级子文件和子目录的大小排序
du -sh ${filename}  # 指定文件大小
```

磁盘空间：

```bash
df -h
```


## 后台运行

```bash
nohup python train.py &
```

输出会默认存到当前目录下的 `nohup.out` 中，如果想改变存储位置到 `/path/test.out`：

```bash
nohup python train.py > /path/test.out &
```

在不停止进程的情况下清空 `nohup.out` 文件：

```bash
cp /dev/null nohup.out
# or
cat /dev/null > nohup.out
```

查看和关闭后台进程：

```bash
jobs -l  # 查看进程，找到进程的 PID
kill -9 ${PID}  # 关闭进程
```

断开终端连接并重连后，断开前的后台进程就没法用 `jobs -l` 查看了，所以这时要用 `ps ux` 列出所有的进程：

```bash
ps ux
kill -9 ${PID}
```
