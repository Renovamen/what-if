---
catagory: Statistical NLP
---

# 马尔科夫模型（Markov Models）

本节讨论**马尔科夫模型（Markov Models）**。

## Markov Models for Fixed-length Sequences

**定长序列（Fixed-length Sequences）的马尔科夫模型。**

考虑一个随机变量序列 $$X_1, X_2, ... ,X_n$$ （$$X_i \in \mathcal{V}$$），它的长度 $$n$$ 是一个定值。我们需要计算联合概率 $$P(X_1=x_1, X_2=x_2, ..., X_n=x_n)$$，即任意一个序列 $$x_1 x_2 ... x_n$$ 出现的概率。

序列 $$x_1 x_2 ... x_n$$ 的所有可能的取值为 $$|\mathcal{V}|^n$$，我们不可能列举出所有 $$|\mathcal{V}|^n$$ 种可能，所以我们需要进行一些假设。

<br>

**一阶马尔科夫假设（First-order Markov Assumption）**：假设第 $$i$$ 个词的概率只依赖于它的前一个词 $$x_{i-1}$$，而与其它词无关，即对任意 $$i \in \{2 ... n\}$$：
$$
P(X_i=x_i | X_1=x_1, ..., X_{i-1}=x_{i-1}) = P(X_i=x_i | X_{i-1}=x_{i-1})
$$

也即 $$X_i$$ 在给定 $$X_{i-1}$$ 时，条件独立于 $$X_1 ... X_{i-2}$$。

那么一个句子出现的概率为：
$$
P(X_1=x_1, X_2=x_2, ..., X_n=x_n)
$$

$$
= P(X_1=x_1) \prod_{i=2}^n P(X_i=x_i | X_1=x_1, ..., X_{i-1}=x_{i-1}) \tag{1.1}
$$

$$
= P(X_1=x_1) \prod_{i=2}^n P(X_i=x_i | X_{i-1}=x_{i-1}) \tag{1.2}
$$

公式 1.1 可以由条件概率的链式法则直接推出，而公式 1.2​ 利用了一阶马尔科夫假设。

<br>

**二阶马尔科夫假设（Second-order Markov Assumption）**要弱一些：第 $$i$$ 个词依赖于它的前两个词 $$x_{i-1}$$ 和 $$x_{i-2}$$，即：

$$
P(X_i=x_i | X_1=x_1, ..., X_{i-1}=x_{i-1}) 
$$

$$
= P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1})
$$

那么一个句子出现的概率为:

$$
P(X_1 = x_1, X_2 = x_2, ... , X_n = x_n)
$$

$$
= \prod_{i=1}^n P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1})
$$

为了方便，令 $$x_0 = x_{-1} = *$$，$$*$$ 表示句子的开始。



## Markov Sequences for Variable-length Sentences

**变长序列（Variable-length Sentences）的马尔科夫模型**

大多数情况下句子长度 $$n$$ 都是不定的，为了处理这个问题，我们假设句子中的第 $$n$$ 个单词 $$X_n$$ 总是为一个特殊符号 **STOP**，STOP 符号只能出现在句子末尾。即 $$x_n = \text{STOP}$$，$$i = 1 ... (n-1)$$，$$x_i \in \mathcal{V}$$。

按照之前的假设（如二阶马尔科夫假设），我们每一步都按照分布 $$P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1})$$ 来生成 $$x_i$$。$$x_i$$ 可以是 $$\mathcal{V}$$ 中的变量，也可以是 STOP 符号。如果我们生成了 STOP 符号，则该句子生成结束，否则继续生成下一个单词，即：

1. $$i=0$$，$$x_0=x_{-1}=*$$；
2. 根据分布 $$P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1})$$ 生成 $$x_i$$；
3. 若 $$x_i = \text{STOP}$$，返回序列 $$x_1x_2 ... x_i$$；否则令 $$i=i+1$$，回到步骤 2。

这样该模型就可以生成任意长度的句子了。