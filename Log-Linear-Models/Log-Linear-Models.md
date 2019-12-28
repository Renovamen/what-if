# 对数线性模型（Log-Linear Models）

对数线性模型（Log-Linear Models）要解决的问题是：有输入集合 $\mathcal{X}$ 和标签集合 $\mathcal{Y}$，对条件概率 $p(y|x)$（$x \in \mathcal{X}, y \in \mathcal{Y}$）进行建模。

如在[语言模型](../Language-Modeling/README.md)中， $\mathcal{Y}$ 是词典 $\mathcal{V}$， $\mathcal{X}$ 是单词序列 $w_1...w_{i-1}$（$i \geq 1, w_j \in \mathcal{V}, j \in \{1 . . .(i - 1)\}$）的集合。在[词性标注](../Tagging-Problems-HMMs/README.md)中， $\mathcal{Y}$ 是标签集合 $\mathcal{T}$，$\mathcal{X}$ 是上下文 $⟨w_1w_2 ... w_n, t_1t_2 ... t_{i-1}⟩$（$n \geq 1, w_i \in \mathcal{V}, i \in \{1 ... n\}, t_j \in \mathcal{T}, j \in \{1 ... (i-1)\}$）的集合。

**定义3.1（对数线性模型）：**

对数线性模型由以下部分组成：

- 可能的输入集合 $\mathcal{X}$；
- 可能的标签集合 $\mathcal{Y}$，假设它为有限集；
- 一个正整数 $d$，它确定了模型中的特征和参数数量；
- 一个函数 $f: \mathcal{X} \times \mathcal{Y} \rightarrow \Reals^d$，它把 $(x,y)$ 映射到了其特征向量 $f(x,y)$；
- 一个参数向量 $v \in \Reals^d$

对任意 $x \in \mathcal{X}, y \in \mathcal{Y}$，该模型定义了以下条件概率：
$$
p(y|x;v) = \frac{\exp (v \cdot f(x,y))}{\sum_{y' \in \mathcal{Y}} \exp(v \cdot f(x,y'))}
$$
其中，$\exp(x) = e^x$，$v \cdot f(x,y) = \sum_{k=1}^d v_kf_k(x,y)$ 是 $v$ 和 $f(x,y)$ 的内积（inner product）。$p(y|x;v)$ 可以被理解为：当参数为 $v$ 时，在给定 $x$ 的条件下 $y$ 的概率。