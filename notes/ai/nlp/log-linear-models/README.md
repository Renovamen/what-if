---
title: 介绍
---

# 对数线性模型

**对数线性模型**（Log-Linear Models）在 NLP 中的应用非常广泛，它的主要优点是能够利用丰富的特征集，从而相比前面提到的简单的评估方法能更好的表示数据。本章将讨论其定义和参数估计的方法。这里有两个引出对数线性模型的例子：

## Language Modeling

考虑一个语言模型，任务是对以下条件概率进行估计：

$$
P(W_i=w_i \mid W_1 = w_1 \dots W_{i-1} = w_{i-1}) = p(w_i \mid w_1 \dots w_{i-1})
$$

也就是在给定前面的单词序列 $w_1 \dots w_{i-1}$ 的条件下，对 $w_i$ 的分布进行建模。

在[三元模型](/ai/nlp/language-modeling/trigram-language-models/)中，我们假设了：

$$
p(w_i \mid w_1 \dots w_{i-1})=p(w_i \mid w_{i-2},w_{i-1})=q(w_i \mid w_{i-2},w_{i-1})
$$

$q(w \mid u,v)$ 是模型的参数，可以通过一些方法估计出来（如[极大似然估计](/ai/nlp/language-modeling/trigram-language-models/#maximum-likelihood-parameter-estimates)）。

但三元模型对于上下文的利用还不够。假如上下文 $w_1 \dots w_{i-1}$ 是以下单词序列：

*Third, the notion “grammatical in English” cannot be identified in any way with the notion “high order of statistical approximation to English”. It is fair to assume that neither sentence (1) nor (2) (nor indeed any part of these sentences) has ever occurred in an English discourse. Hence, in any statistical*

现在我们想估计下一个单词 $w_i$ 是 *model* 的概率，即：

$$
P(W_i=\text{model} \mid W_1=w_1 \dots W_{i-1}=w_{i-1})
$$

我们希望利用上下文中的所有特征来估计 *model* 出现在下一个单词的概率，而不是像三元模型那样仅仅利用前两个单词。如：只考虑单词 $w_{i-2}$ 的影响：

$$
P(W_i = \text{model} \mid W_{i-2} = \text{any})
$$

考虑前一个词是形容词（adjective）的影响（$\text{pos}$ 是把单词映射到其词性的函数）：

$$
P(W_i = \text{model} \mid \text{pos}(W_{i-1}) = \text{adjective})
$$

考虑前一个词的后缀是 *ical* 的影响（$\text{suff4}$ 是把单词映射到其最后四个字母的函数）：

$$
P(W_i = \text{model} \mid \text{suff4}(W_{i-1}) = \text{ical})
$$

考虑单词 *word* 从未出现在上下文中过的影响：

$$
P(W_i = \text{model} \mid W_j \not= \text{model  for } j \in {1  \dots (i-1)})
$$

考虑单词 *grammatical* 在上下文中出现过的影响：

$$
P(W_i = \text{model} \mid W_j = \text{grammatical  for some } j \in {1  \dots (i-1)})
$$

一个简单粗暴的方法是魔改一下[线性插值法](/ai/nlp/language-modeling/smoothed-estimation-of-trigram-models/#linear-interpolation)，把上述估计直接按不同的权重合在一起：

$$
\begin{aligned}
  p(\text{model} \mid w_1 \dots w_{i-1}) &= \lambda_1 × q_{ML}(\text{model} \mid w_{i-2} = \text{any}, w_{i-1} = \text{statistical}) \\
    &+ \lambda_2 × q_{ML}(\text{model} \mid w_{i-1} = \text{statistical}) \\
    &+ \lambda_3 × q_{ML}(\text{model}) \\
    &+ \lambda_4 × q_{ML}(\text{model} \mid w_{i-2} = \text{any}) \\
    &+ \lambda_5 × q_{ML}(\text{model} \mid w_{i-1} \text{ is an adjective}) \\
    &+ \lambda_6 × q_{ML}(\text{model} \mid w_{i-1} \text{ ends in “ical”}) \\
    &+ \lambda_7 × q_{ML}(\text{model} \mid \text{“model” does not occur somewhere in } w_1 \dots w_{i-1}) \\
    &+ \lambda_8 × q_{ML}(\text{model} \mid \text{“grammatical” occurs somewhere in } w_1 \dots w_{i-1}) \\
    &+ \text{ }  \dots 
\end{aligned}
$$

但当要考虑的条件特别多时，实现这种方法会非常困难。而对数线性模型是一种更合适的能利用更多上下文信息的方法。


## POS Tagging

考虑单词序列 $w_i \dots w_n$ 和其对应的标签序列 $t_1 \dots t_{i-1}$（$i<n$），我们的任务是对第 $i$ 个标签的条件分布进行建模，即：

$$
P(T_i = t_i \mid T_1 = t_1 \dots T_{i-1} = t_{i-1}, W_1 = w_1 \dots W_n = w_n)
$$

词性标注也有很多对估计 $t_i$ 的分布有用的上下文信息，简单粗暴的魔改线性插值法依然会在要考虑的条件很多时面临困难，所以这时依然需要对数线性模型。


## 参考

1. [**Log-Linear Models (Notes)**. *Michael Collins*. Columbia University.](http://www.cs.columbia.edu/~mcollins/loglinear.pdf)
2. [**Log-Linear Models (Slides)**. *Michael Collins*. Columbia University.](http://www.cs.columbia.edu/~mcollins/cs4705-spring2019/slides/loglinear-slides.pdf)
