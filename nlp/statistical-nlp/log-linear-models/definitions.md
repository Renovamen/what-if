---
catagory: Statistical NLP
---

# 定义

## Basic Definitions

对数线性模型要解决的问题是：有输入集合 $$\mathcal{X}$$ 和标签集合 $$\mathcal{Y}$$，对条件概率 $$p(y|x)$$（$$x \in \mathcal{X}, y \in \mathcal{Y}$$）进行建模。

如在[语言模型](/nlp/statistical-nlp/language-modeling/)中，$$\mathcal{Y}$$ 是词典 $$\mathcal{V}$$，$$\mathcal{X}$$ 是单词序列 $$w_1...w_{i-1}$$（$$i \geq 1, w_j \in \mathcal{V}, j \in \{1 . . .(i - 1)\}$$）的集合。输入 $$x$$ 为 $$w_1...w_{i-1}$$，标签 $$y$$ 为 $$w_i$$。

在[词性标注](/nlp/statistical-nlp/tagging-problems-hmms/)中， $$\mathcal{Y}$$ 是标签集合 $$\mathcal{T}$$，$$\mathcal{X}$$ 是上下文 $$⟨w_1w_2 ... w_n, t_1t_2 ... t_{i-1}⟩$$ 的集合（$$n \geq 1, w_i \in \mathcal{V}, i \in \{1 ... n\}, t_j \in \mathcal{T}, j \in \{1 ... (i-1)\}$$）。

<br>

**定义 3.1（对数线性模型）：**

对数线性模型由以下部分组成：

- 可能的输入集合 $$\mathcal{X}$$；
- 可能的标签集合 $$\mathcal{Y}$$，假设它为有限集；
- 一个正整数 $$d$$，它确定了模型中的特征和参数数量；
- 一个函数 $$f: \mathcal{X} \times \mathcal{Y} \rightarrow \Reals^d$$，它把 $$(x,y)$$ 映射到了其特征向量 $$f(x,y)$$；
- 一个参数向量 $$v \in \Reals^d$$

对任意 $$x \in \mathcal{X}, y \in \mathcal{Y}$$，该模型定义了以下条件概率：
$$
p(y|x;v) = \frac{\exp (v \cdot f(x,y))}{\sum_{y' \in \mathcal{Y}} \exp(v \cdot f(x,y'))} \tag{3.1}
$$
其中，$$\exp(x) = e^x$$，$$v \cdot f(x,y) = \sum_{k=1}^d v_kf_k(x,y)$$ 是 $$v$$ 和 $$f(x,y)$$ 的内积（inner product）。$$p(y|x;v)$$ 可以被理解为：当参数为 $$v$$ 时，在给定 $$x$$ 的条件下 $$y$$ 的概率。



## Model Form

公式 3.1 中，最主要的是求内积 $$v \cdot f(x,y)$$ 。 $$v \cdot f(x,y)$$ 越大说明在给定上下文 $$x$$ 的情况下，$$y$$ 出现的概率越大。$$v \cdot f(x,y)$$ 可以是任意实数，但 $$\exp (v \cdot f(x,y))$$ 只可能是正数。

<br>

公式 3.1 的分母是一个归一化项（normalization term），用于保证分布的和为 1，即：
$$
\sum_{y \in \mathcal{Y}} p(y|x;v) = 1
$$
<br>

将公式 3.1 拆成以下形式：
$$
g(x) = \log \sum_{y' \in \mathcal{Y}} \exp (v \cdot f(x,y'))
$$

$$
\begin{aligned}	
	\log p(y|x;v) &= v \cdot f(x,y) - \log \sum_{y' \in \mathcal{Y}} \exp (v \cdot f(x,y')) \\
	&= v \cdot f(x,y) - g(x)
\end{aligned} \tag{3.2}
$$

公式 3.2 中的第一项 $$v \cdot f(x,y)$$ 对 $$f(x,y)$$ 是线性的，而第二项 $$g(x)$$ 只与 $$x$$ 有关，与 $$y$$ 无关。所以当 $$x$$ 一定时，取对数后的概率 $$\log p(y|x;v)$$ 对 $$f(x,y)$$ 是线性的，所以这个模型叫“对数线性模型”。