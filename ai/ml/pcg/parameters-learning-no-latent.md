---
title: 参数学习：最大似然
---

# 不含隐变量的图模型的参数学习

如果图模型中不含**隐变量（latent variable）**，即所有变量都是可观测的，那么网络参数一般可以直接通过**最大似然**来进行估计。

## 贝叶斯网络

给定 $N$ 个训练样本 $D=\{x^{(n)}\}^N_{n=1}$，其对数似然函数为：

$$
\begin{aligned}
    L(D; \theta) &= \frac{1}{N} \sum_{n=1}^N \log p_{\theta}(x^{(n)}) \\
        &= \frac{1}{N} \sum_{n=1}^N \sum_{k=1}^K \log p_{\theta_k}(x_k^{(n)} | x_{\pi_k}^{(n)})
\end{aligned}
$$

其中 $\theta_k$ 为第 $k$ 个变量的局部条件概率的参数。第二步可以由贝叶斯网络的[定义](/ai/dl/pcg/bayesian-network/#定义)推出。

因为所有变量都是可观测的，所以在参数估计时，分别最大化每个变量的条件似然即可：

$$
\theta_k = \arg \max \sum_{n=1}^N \log p_{\theta_k}(x_k^{(n)} | x_{\pi_k}^{(n)})
$$

## 马尔可夫随机场