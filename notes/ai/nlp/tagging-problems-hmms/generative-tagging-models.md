# 生成标注模型

## 定义

生成模型可以被用于标注问题。令 $\mathcal{K}$ 为所有可能出现的标签的集合，且假设它是一个有限集。则有**定义 2.1（生成标注模型，Generative Tagging Models）**：

假设有限集 $\mathcal{V}$ 是所有单词的集合，有限集 $\mathcal{K}$ 是所有标签的集合。定义 $\mathcal{S}$ 为所有序列对 $\langle x_1 \dots x_n, y_1 \dots y_n \rangle$（$n \geq 0, x_i \in \mathcal{V}, y_i \in \mathcal{K}, i = 1 \dots n$） 的集合。则生成标注模型是一个函数 $p$，满足：

1. 对任意 $\langle x_1 \dots x_n, y_1 \dots y_n \rangle \in \mathcal{S}$，$p(x_1 \dots x_n, y_1 \dots y_n) \geq 0$

2. $\sum_{\langle x_1 \dots x_n, y_1 \dots y_n \rangle \in \mathcal{S}} p(x_1 \dots x_n, y_1 \dots y_n) = 1$

也就是说 $p(x_1 \dots x_n, y_1 \dots y_n)$ 是序列对的概率分布。

从 $x_1 \dots x_n$ 到 $y_1 \dots y_n$ 的映射的定义为：

$$
f(x_1 \dots x_n) = \arg \max_{y_1 \dots y_n} p(x_1 \dots x_n, y_1 \dots y_n)
$$

也就是说模型的输出结果是概率最高的标注序列。



## 存在的问题

现在有三个重要的问题：

- 如何定义 $p(x_1 \dots x_n, y_1 \dots y_n)$
- 如何从训练集中估计参数
- 怎样高效的找出 $\arg \max_{y_1 \dots y_n} p(x_1 \dots x_n, y_1 \dots y_n)$

[下一节](/ai/nlp/tagging-problems-hmms/trigram-hmms/)将讨论用三元隐马尔科夫模型（Trigram Hidden Markov Models）来解决这些问题。