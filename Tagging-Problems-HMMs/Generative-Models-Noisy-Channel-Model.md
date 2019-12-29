# 生成模型和噪声通道模型

本节将标注问题视为监督学习（Supervised Learning）问题。



## 生成模型（Generative Models）

生成模型是一个重要的监督学习模型。监督学习的定义是，假设有一个训练集 $$(x^{(1)}, y^{(1)})...(x^{(m)}, y^{(m)})$$，每个样本都包含一个输入 $$x^{(i)}$$ 和一个标签  $$y^{(i)}$$。令 $$\mathcal{X}$$ 为输入集合，$$\mathcal{Y}$$ 为标签集合。我们的目标是从训练集中学习出一个映射函数 $$f:\mathcal{X} \to \mathcal{Y}$$。

NLP 中的许多问题都是监督学习问题。如在标注问题中， $$\mathcal{X}$$ 即序列集合 $$x_1...x_n$$，$$\mathcal{Y}$$ 即标签集合 $$y_1...y_n$$；在机器翻译（machine translation）中，每个输入为源语言（如中文）中的一个句子，每个标签为其对应的目标语言（如英文）的句子。

&nbsp;

一种确定函数 $$f(x)$$ 的方法是，定义一个**条件概率模型（conditional model）**：
$$
p(y|x)
$$
模型的参数需要从训练集中估计出来。

如果输入测试数据 $$x$$，模型的输出（预测的标签）为：
$$
f(x)=\arg \max_{y \in \mathcal{Y}} p(y|x)
$$
即，将最可能的预测标签 $$y$$ 作为模型的输出。$$p(y|x)$$ 越接近实际的条件分布，$$f(x)$$ 的效果越好。

&nbsp;

另一种方法是定义一个**生成模型（Generative Model）**。生成模型对联合概率（joint probability）进行建模而不是直接估计条件分布 $$p(y|x)$$：
$$
p(x,y)
$$
模型的参数也需要从训练集 $$(x^{(i)},y^{(i)})$$（$$i=1...n$$）中估计出来。

可以进一步把  $$p(x,y)$$ 分解为：
$$
p(x,y)=p(y)p(x|y)
$$
然后分别估计模型 $$p(y)$$ 和 $$p(x|y)$$。这两个模型的意义是：

-  $$p(y)$$ 是标签 $$y$$ 的先验概率分布（prior probability distribution）
-  $$p(x|y)$$ 是在给定标签 $$y$$ 的前提下，生成 $$x$$ 的概率

给定一个生成模型，我们可以使用贝叶斯规则（Bayes rule）来推导出任意 $$(x, y)$$ 的条件概率 $$p(y|x)$$：
$$
p(y|x)=\frac{p(y)p(x|y)}{p(x)}
$$

$$
p(x)=\sum_{y \in \mathcal{Y}}p(x,y) = \sum_{y \in \mathcal{Y}}p(y)p(x|y)
$$

给定输入的测试样本 $$x$$，模型的输出 $$f(x)$$ 可以被推导为：
$$
f(x) =\arg \max_y p(y|x)
$$

$$
=\arg \max_y \frac{p(y)p(x|y)}{p(x)} \tag{2.1}
$$

$$
=\arg \max_y p(y)p(x|y) \tag{2.2}
$$

公式 2.1 是贝叶斯规则。公式 2.2 是因为分母 $$p(x)$$ 与 $$y$$ 无关，是一个常数，可以忽略掉，所以我们不需要去计算 $$p(x)$$ 。



## 噪声通道模型（Noisy Channel Model）

把联合概率分解为 $$p(y)$$ 和 $$p(x | y)$$  的模型通常被称为噪声通道模型。当输入一个测试样本 $$x$$ 时，我们假设模型已经生成了两个步骤：

1. 按概率 $$p(y)$$ 选择了一个标签 $$y$$；
2. 按分布 $$p(x | y)$$ 生成样本 $$x$$。

$$p(x|y)$$ 被称为 **channel model** 或 **distortion model**，它将 $$y$$ 作为输入，将 $$x$$ 作为输出。对于其他的任务，它的功能分别为：

- 对于拼写纠错（spelling correction），$$p(x|y)$$ 把单词映射到它们可能的错误拼写；
- 对于语音识别（speech recognition），$$p(x|y)$$ 把单词或音位（phonemes）映射到它们对应的声波波形（acoustic waveforms）；
- 对于机器翻译（machine translation），$$p(x|y)$$ 把目标语言的单词或短语（phrases）映射到它们对应的源语言；

$$p(y)$$ 被称为 **source model** 或 **language model**。