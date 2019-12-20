# Trigram 语言模型

**Trigram 语言模型**是马尔科夫模型在语言建模问题上的直接应用。本章讨论 Trigram 模型的基本定义、用于构建它的**极大似然估计（Maximum-likelihood Parameter Estimates）**和它的优缺点。



## Trigram 模型的定义

按照二阶马尔科夫模型：

$$
P(X_1 = x_1, X_2 = x_2, ... , X_n = x_n) = \prod_{i=1}^n P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1})
$$

其中，我们假设：

$$
P(X_i=x_i | X_{i-2}=x_{i-2}, X_{i-1}=x_{i-1}) = q(x_i | x_{i-2}, x_{i-1})
$$

对任意 $$(u,v,w)$$，$$q(w|u,v)$$ 是模型的参数，之后我们将会讨论如何从训练数据中估计出参数。则模型现在可以写为：

$$
p(x_1 ... x_n)=\prod_{i=1}^n q(x_i | x_{i-2}, x_{i-1})
$$

则**定义2（Trigram 语言模型）**：

Trigram 语言模型由一个有限集 $$\mathcal{V}$$ 和一个参数 $$q(w|u,v)$$ 组成，其中 $$w \in \mathcal{V} \cup \{STOP\}$$ ，$$u,v \in \mathcal{V} \cup \{*\}$$ 。$$q(w|u,v)$$ 可以理解为单词 $$w$$ 出现在在**二元组（Bigram）** $$(u,v)$$ 后的概率。Trigram 语言模型中任意句子 $$x_1 ... x_n$$ （$$x_0 = x_{-1} = *$$）出现的概率为：

$$
p(x_1 ... x_n)=\prod_{i=1}^n q(x_i | x_{i-2}, x_{i-1})
$$

例如，对于句子：***the dog barks STOP***，有：

$$
p(the \ dog \ barks \ STOP)=q(the|*,*) \times q(dog|*,the) \times q(barks|the,dog) \times q(STOP|dog,barks)
$$

可以看到每个单词只依赖于它的前两个单词（**三元假设（Trigram Assumption）**）。

参数需要满足以下条件：

- 对任意三元组 $$u,v,w$$，$$q(w|u,v) \geq 0$$；

- 对任意二元组 $$u,v$$，$$\sum_{w \in \mathcal{V} \cup \{STOP\}} q(w|u,v) = 1$$；

因此 $$q(w|u,v)$$ 也可以理解为在给定上文 $$u,v$$ 的条件下，单词 $$w$$ 的概率分布。

&nbsp;

那么现在的关键问题就是要如何通过训练数据估计出模型的参数 $$q(w|u,v)$$。因为 $$w$$ 可能是 $$\mathcal{V} \cup \{STOP\}$$ 中的任何元素，$$u,v$$ 可能是 $$\mathcal{V} \cup \{*\}$$ 中的任何元素，所以模型的参数会有 $$|\mathcal{V}|^3$$ 个，这个数字很可能非常庞大。