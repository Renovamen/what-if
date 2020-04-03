---
title: Built a Cluster on Mac with VMware Fusion
slug: built-cluster-with-vmware
date: 2018-01-17
excerpt: "Final Project of 2018 Fall Distributed Systems"
---

## Misc

由于一些神奇的原因导致我在组队上出了一些偏差，分布式计算的期末项目我得一个人写。于是“队里所有人把电脑连在同一个局域网下就可以当集群了”这种理想情况在我身上就失效了，我得多开几台虚拟机搭集群。当我在答辩现场告诉助教“我没队友我只能开几台虚拟机给你演示”的时候甚至感觉有些孤独...

讲道理这课的项目直接用了 UIUC CS425 Distributed Systems 的 Machine Problems，而别人似乎是每个组发十几台服务器...

## Progress

- 虚拟机：

    - https://blog.csdn.net/Myuhua/article/details/81215209
        
        在 VMware Fusion 上装 CentOS 7 和配网络之类的东西。配完一台之后，剩下几台直接复制镜像然后改一下 IP 就可以。

- Mac 远程连接 Linux 异常修复：   
    - https://blog.csdn.net/wd2014610/article/details/79945424

- CentOS 7 配 Python 3 环境（我也忘了到底是看哪个配好的了）：
    - https://www.cnblogs.com/JahanGu/p/7452527.html
    - https://www.cnblogs.com/simuhunluo/p/7704765.html
    - https://blog.csdn.net/qq_36288025/article/details/82534508