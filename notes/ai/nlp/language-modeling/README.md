---
title: 介绍
---

# 语言模型

现在有一个语料库，它是某种语言中一系列句子的集合，现在我们要从中构建出一个语言模型，并进行参数估计。**语言模型**（Language Modeling）是用来计算一个句子出现的概率的模型。


## 定义

令词典 $\mathcal{V}$ 为该语言中所有单词的集合。如：如果要为英语构建一个语言模型，则：

$$
\mathcal{V} = \{\text{the, dogs, laughs, saw, barks, cat, ...}\}
$$

$\mathcal{V}$ 有可能非常大，毕竟它可能包含成千上万个单词，但它通常都是一个有限集。

一个句子就是一个单词序列：
$$
x_1x_2 ... x_n
$$

其中 $x_i \in \mathcal{V}$，$i \in \{1...(n-1)\}$，$n \geq 1$。假设 $x_n$ 是一个特殊的符号 **STOP**（$\text{STOP} \notin \mathcal{V}$），如：

- the cat saw the dog STOP
- the STOP
- STOP

令 $\mathcal{V}^+$ 为由词典 $\mathcal{V}$ 产生的所有句子，这是一个无限集，因为句子可以是任意长度。

则**定义 1.1（语言模型）**：

语言模型由一个有限集 $\mathcal{V}$ 和一个函数 $p(x_1, x_2, ..., x_n)$ 组成，其中：

- 对任意的 $\langle x_1, x_2, ..., x_n \rangle \in \mathcal{V}^{+}$， $p(x_1, x_2, ..., x_n) \geq 0$
- $\sum_{\langle x_1, x_2, ..., x_n \rangle \in \mathcal{V}^{+}} p(x_1, x_2, ..., x_n)=1$

因此 $p(x_1, x_2, ..., x_n)$ 是 $\mathcal{V}$ 中的所有句子的概率分布。

<br>

一种简单（但不怎么样）的从训练语料库中构建语言模型的方法可以为：令 $c(x_1, x_2, ..., x_n)$ 为训练数据中句子 $x_1x_2 ... x_n$ 出现的次数，$N$ 为训练数据里句子总数，则：

$$
p(x_1, x_2, ..., x_n)=\frac{c(x_1, x_2, ..., x_n)}{N}
$$

这个模型不怎么样，因为如果某个句子没有在训练数据里出现过，那么该模型会将它的概率设为 0。因此本章将讨论一些能处理训练数据中没出现过的句子的方法。



## 参考

1. [**Language Modeling (Notes)**. *Michael Collins*. Columbia University.](http://www.cs.columbia.edu/~mcollins/lm-spring2013.pdf)
2. [**Language Modeling (Slides)**. *Michael Collins*. Columbia University.](http://www.cs.columbia.edu/~mcollins/cs4705-spring2019/slides/lmslides.pdf)
3. [**A Bit of Progress in Language Modeling**. *Joshua T. Goodman*. Computer Speech & Language 2001.](http://www-labs.iro.umontreal.ca/~felipe/IFT6285-Automne2019/resources-2011/Articles/goodman2001.pdf)