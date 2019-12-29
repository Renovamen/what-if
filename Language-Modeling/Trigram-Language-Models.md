# 三元（Trigram）语言模型

**三元（Trigram）语言模型**是马尔科夫模型在语言建模问题上的直接应用。本节讨论三元模型的基本定义、**极大似然估计**和优缺点。



## 三元模型的定义

按照二阶马尔科夫模型：

$$
P(X_1 = x_1, X_2 = x_2, ... , X_n = x_n) = \prod_{i=1}^n P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1})
$$

其中，我们假设：

$$
P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1}) = q(x_i | x_{i-2}, x_{i-1})
$$

对任意 $$(u,v,w)$$，$$q(w|u,v)$$ 是模型的参数，之后我们将会讨论如何从训练集中估计出参数。则模型现在可以写为：

$$
p(x_1 ... x_n)=\prod_{i=1}^n q(x_i | x_{i-2}, x_{i-1})
$$

则**定义 1.2（三元语言模型）**：

三元语言模型由一个有限集 $$\mathcal{V}$$ 和一个参数 $$q(w|u,v)$$ 组成，其中 $$w \in \mathcal{V} \cup \{\text{STOP}\}$$ ，$$u,v \in \mathcal{V} \cup \{*\}$$ 。$$q(w|u,v)$$ 可以理解为单词 $$w$$ 正好出现在**二元组（Bigram）** $$(u,v)$$ 之后的概率。三元语言模型中任意句子 $$x_1 ... x_n$$ （$$x_0 = x_{-1} = *$$）出现的概率为：

$$
p(x_1 ... x_n)=\prod_{i=1}^n q(x_i | x_{i-2}, x_{i-1})
$$

例如，对于句子：***the dog barks STOP***，有：

$$
p(\text{the dog barks STOP})
$$

$$
=q(\text{the}|*,*) \times q(\text{dog}|*,\text{the}) \times q(\text{barks}|\text{the, dog}) \times q(\text{STOP}|\text{dog, barks})
$$

可以看到每个单词只依赖于它的前两个单词（**三元假设（Trigram Assumption）**）。

参数 $$q(w|u,v)$$ 也可以被理解为在给定上文 $$u,v$$ 的条件下，单词 $$w$$ 的概率分布。它需要满足以下条件：

- 对任意三元组 $$u,v,w$$，$$q(w|u,v) \geq 0$$；

- 对任意二元组 $$u,v$$，$$\sum_{w \in \mathcal{V} \cup \{\text{STOP}\}} q(w|u,v) = 1$$；

&nbsp;

那么现在的关键问题就是该如何通过训练集估计出模型的参数 $$q(w|u,v)$$。其中 $$w$$ 可能是 $$\mathcal{V} \cup \{\text{STOP}\}$$ 中的任何元素，$$u,v$$ 可能是 $$\mathcal{V} \cup \{*\}$$ 中的任何元素，所以模型的参数会有 $$|\mathcal{V}|^3$$ 个，这个数字很可能非常庞大。



## 极大似然估计（Maximum-likelihood Parameter Estimates）

定义 $$c(u,v,w)$$ 为三元组  $$(u, v, w)$$ 在训练集中出现的次数，如 $$c(\text{the, dog, barks})$$ 为单词序列 *the dog barks* 在训练集中出现的次数。定义 $$c(u,v)$$ 为二元组 $$(u,v)$$ 在训练集中出现的次数。对任意 $$w,u,v$$，它的极大似然估计为：
$$
q(w|u,v)=\frac{c(u,v,w)}{c(u,v)}
$$
比如我们要估计 $$q(\text{barks} | \text{the, dog})$$：
$$
q(\text{barks}|\text{the, dog})=\frac{c(\text{the, dog, barks})}{c(\text{the, dog})}
$$

这是一种很自然的估计方式：如果要估计 $$barks$$ 出现在 $$(\text{the, dog})$$ 后的概率，那么计算一下 $$(\text{the, dog})$$ 出现了多少次，再计算一下 $$(\text{the, dog, barks})$$ 出现了多少次，然后算这两个数的比例就行。但最大似然估计有两个很严重的问题：

1. 如果一个三元组在训练集中没有出现，那么 $$q(w|u,v)=0$$（因为分子为 0）。由于参数规模一般会很大，这种情况会经常出现，导致数据很稀疏。而且这是不合理的，一个三元组在训练集中没有不出现不等于它出现的概率为 0；
2. 分母 $$c(u,v)$$ 也有可能为 0，这时这个估计的定义就不合法了。

[后面](Smoothed-Estimation-of-Trigram-Models.md)我们会讨论该如何改进参数估计方法来解决这些问题，但现在我们先讨论该如何评估一个语言模型的好坏。



## 语言模型评估指标：困惑度（Perplexity）

### 定义

假设测试集中有 $$m$$ 个句子 $$x^{(1)},x^{(2)}, ... ,x^{(m)}$$，每个测试句子 $$x^{(i)} \ (i \in \{1 ... m\})$$ 是一个单词序列 $$x_1^{(i)},...,x_{n_i}^{(i)}$$，$$n_i$$ 是第 $$i$$ 个句子的长度，每个句子都以 STOP 符号结尾。

我们可以用语言模型测出每个测试句子 $$x^{(i)}$$ 出现的概率 $$p(x^{(i)})$$。一个容易想到的评估指标是该模型测出的所有测试句子出现的概率 $$\prod_{i=1}^m p(x^{(i)})$$，毕竟质量越高的模型处理测试句子的能力越强。

&nbsp;

模型在测试集上的 **perplexity（困惑度）**是这个指标的变形。

令 $$M=\sum_{i=1}^m n_i$$ 为测试集中的单词总数。 对 $$\prod_{i=1}^m p(x^{(i)})$$ 取对数再除以 $$M$$，有：
$$
\frac{1}{M}\log_2 \prod_{i=1}^m p(x^{(i)}) = \frac{1}{M} \sum_{i=1}^m \log_2 p(x^{(i)})
$$

**定义 1.3（perplexity）**：
$$
2^{-l}
$$
其中：
$$
l=\frac{1}{M} \sum_{i=1}^m \log_2 p(x^{(i)})
$$
perplexity 是一个正数，perplexity **越小**，模型处理测试句子的能力就越强。



### 一些扩展

1. 如果令：

    $$
    t=\sqrt[M]{\prod_{i=1}^m p(x^{(i)})} = \sqrt[M] {\prod_{i=1}^m \prod_{j=1}^{n_i}q(x_j^{(i)}|x_j^{(i-2)},x_j^{(i-1)})}
    $$

    则有：
    $$
    \text{perplexity}=\frac{1}{t}
    $$
    可以看到 $$t$$ 为所有参数 $$q(x_j^{(i)}|x_j^{(i-2)},x_j^{(i-1)})$$ 的几何平均数（Geometric Mean）。例如一个模型的 perplexity 是 100，则 $$t=0.01$$，也就是它的所有参数的几何平均数为 0.01。

2. 如果模型对某个测试集中的三元组 $$u,v,w$$ 估计出的参数 $$q(w|u,v)=0$$，则它的 perplexity 就会为 $$\infty$$。所以如果我们要用 perplexity 来作为模型评估指标的话，就一定要避免把参数估计为 0。

3. 论文 [A Bit of Progress in Language Modeling (Goodman, 2001)](http://www-labs.iro.umontreal.ca/~felipe/IFT6285-Automne2019/resources-2011/Articles/goodman2001.pdf) 是一篇写了几乎所有和 N 元模型（N-Gram）有关的东西的综述。它用 $$|\mathcal{V}|=50,000$$ 的英语数据集评估了一元（Unigram）、二元（Bigram）和 三元（Trigram）模型。
   
   其中二元模型中每个单词只依赖于它的前一个单词：
   $$
   p(x_1 ... x_n)=\prod_{i=1}^n q(x_i | x_{i-1})
   $$
   一元模型中每个单词之间相互独立：
   $$
   p(x_1 ... x_n)=\prod_{i=1}^n q(x_i)
   $$
   结果为三元模型的 perplexity 大概为 74，二元模型为 137，一元模型为 955。可以看到三元模型的效果比一元模型和二元模型要好很多。



## 三元模型的优缺点

三元假设太苛刻了，且在语义上过于简单，但它有较好实际应用效果。