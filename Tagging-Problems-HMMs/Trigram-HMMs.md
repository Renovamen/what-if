# 三元隐马尔科夫模型（Trigram Hidden Markov Models，Trigram HMMs）



## Trigram HMMs 的定义

**定义 2.2（Trigram HMMs）**：

trigram HMM 由有限集 $$\mathcal{V}$$、有限集 $$\mathcal{K}$$ 和以下参数组成：

- $$q(s|u,v)$$

  $$s \in \mathcal{K} \cup \{STOP\}$$，$$u, v \in \mathcal{K} \cup \{*\}$$。$$q(s|u,v)$$ 可以理解为标签 $$s$$ 跟在 $$(u,v)$$ 后的概率。

- $$e(x|s)$$

  $$x \in \mathcal{K}$$，$$s \in \mathcal{K}$$。$$e(x|s)$$ 可以理解为在 $$s$$ 状态下观察结果为 $$x$$ 的概率。

定义 $$\mathcal{S}$$ 为所有序列对 $$\langle x_1 ... x_n, y_1 ... y_{n+1} \rangle$$ 的集合（$$n \geq 0, x_i \in \mathcal{V}, y_i \in \mathcal{K}, i = 1...n, y_{n+1}=STOP$$）。

然后定义：
$$
p(x_1 ... x_n, y_1 ... y_{n+1})=\prod_{i=1}^{n+1}q(y_i|y_{i-2},y_{i-1})\prod_{i=1}^n e(x_i|y_i)
$$
其中 $$y_0 = y_{-1} = *$$。

如：$$n = 3$$，$$x_1 ... x_3$$ 为一个句子 $$the \ dog \ laughs$$，$$y_1...y_4$$ 为标签序列 $$D \ N \ V \ STOP$$。则：
$$
p(x_1 ... x_n, y_1 ... y_{n+1})
$$

$$
=q(D|*,*) \times q(N|*,D) \times q(V|D,N) \times q(STOP|N,V) \times e(the|D) \times e(dog|N) \times e(laughs|V)
$$

从模型的形式来看，这是一个噪声通道模型：

- $$q(D|*,*) \times q(N|*,D) \times q(V|D,N) \times q(STOP|N,V)$$ 是标签序列 $$D \ N \ V \ STOP$$ 的先验概率（而且这里用了二阶马尔科夫模型）
- $$e(the|D) \times e(dog|N) \times e(laughs|V)$$ 是条件概率 $$p(the \ dog \ laughs|D \ N \ V \ STOP)$$



## Trigram HMMs 中的独立性假设（Independence Assumptions）

考虑一对有随机变量组成的序列 $$X_1 ... X_n$$ 和 $$Y_1 ... Y_n$$，其中 $$X_i$$ 可以为 $$\mathcal{V}$$ 中的任何单词， $$Y_i$$ 可以为 $$\mathcal{K}$$ 中的任何标签。因为 $$n$$ 也是一个随机变量，句子可以为任意长度，所用这里用与[变长序列的马尔科夫模型](../Language-Modeling/Markov-Models.md)中所用方法类似的方法来处理这个问题。

我们的任务是对联合概率进行建模（$$x_i \in \mathcal{V}, y_i \in \mathcal{K}$$）：
$$
P(X_1 = x_1 ... X_n = x_n, Y_1 = y_1 ... Y_n = y_n)
$$
为了方便，加一个随机变量 $$Y_{n+1}=STOP$$。

HMM 的核心思想是：
$$
P(X_1 = x_1 ... X_n = x_n, Y_1 = y_1 ... Y_{n+1} = y_{n+1})
$$

$$
= \prod_{i=1}^{n+1} P(Y_i = y_i | Y_{i-2} = y_{i-2}, Y_{i-1} = y_{i-1}) \prod_{i=1}^n P(X_i = x_i|Y_i = y_i) \tag{2.3}
$$

其中 $$y_0 = y_{-1} = *$$，$$*$$ 是一个特殊的开始符号。

公式 2.3 跟上一节 trigram HMMs 中的联合概率因式分解后的形式很相似，所以我们继续假设对任意 $$i$$、任意 $$y_{i-2},y_{i-1},y_i$$：
$$
P(Y_i = y_i | Y_{i-2} = y_{i-2}, Y_{i-1} = y_{i-1}) = q(y_i|y_{i-2},y_{i-1})
$$
且对任意 $$i$$、任意 $$x_i,y_i$$：
$$
P(X_i = x_i|Y_i = y_i) = e(x_i|y_i)
$$

------

公式 2.3 是由模型中的独立性假设推导出来的，首先：
$$
P(X_1 = x_1 ... X_n = x_n, Y_1 = y_1 ... Y_{n+1} = y_{n+1})
$$

$$
= P(Y_1 = y_1 ... Y_{n+1} = y_{n+1}) \times P(X_1 = x_1 ... X_n = x_n | Y_1 = y_1 ... Y_{n+1} = y_{n+1})
$$

这一步由链式法则直接推出。现在联合概率已经被分解为了标签序列 $$y_1 ... y_{n+1}$$ 的概率和在选定了标签序列的情况下 $$x_1 . . . x_{n+1}$$ 的概率，跟噪声通道模型的形式一样。

然后进行独立性假设：

1. 假设对任意序列 $$y_1 ... y_{n+1}$$：

   $$
    P(Y_1 = y_1 ... Y_{n+1} = y_{n+1}) = \prod_{i=1}^{n+1} P(Y_i=y_i|Y_{i-2}=y_{i-2},Y_{i-1}=y_{i-1})
   $$

   即假设 $$y_1 ... y_{n+1}$$ 是一个二阶马尔科夫序列，每个状态只依赖于它的前两个状态。

2. 假设对任意在给定标签序列 $$y_1 ... y_{n+1}$$ 的情况下的序列 $$x_1 ... x_{n+1}$$：
   $$
   P(X_1 = x_1 ... X_n = x_n | Y_1 = y_1 ... Y_{n+1} = y_{n+1})
   $$

   $$
   = \prod_{i=1}^n P(X_i = x_i |X_1 = x_1 ... X_{i-1} = x_{i-1}, Y_1 = y_1 ... Y_{n+1} = y_{n+1})  \tag{2.4}
   $$

   $$
   = \prod_{i=1}^n P(X_i = x_i | Y_i = y_i) \tag{2.5}
   $$

   公式 2.4 是链式法则，公式 2.5 是我们的假设。即我们假设 $$X_i$$ 只依赖于 $$Y_i$$，条件独立于其他所有变量。

然后就可以推出公式 2.3 了。

------

模型生成序列对 $$y_1 ... y_{n+1}, x_1 ... x_n$$ 的过程为：

1. 初始化  $$i = 1$$，$$y_0 = y_{-1} = *$$

2. 按分布 $$q(y_i |y_{i-2}, y_{i-1})$$ 生成 $$y_i$$
3. 如果 $$y_i = STOP$$，则返回 $$y_1 ... y_i, x_1 ... x_{i-1}$$；否则按分布 $$e(x_i |y_i)$$ 生成 $$x_i$$，然后 $$i = i + 1$$，返回步骤 2



## Trigram HMM 的参数估计

有一个训练集，包含  $$x_1...x_n$$ 和其对应的  $$y_1...y_n$$。定义 $$c(u,v,s)$$ 为标签序列 $$(u,v,s)$$ 在训练集中出现的次数，$$c(u,v)$$ 为 $$(u,v)$$ 在训练集中出现的次数。定义 $$c(s \rightsquigarrow x)$$ 为训练集中在 $$s$$ 状态下观察结果为 $$x$$ 的概率，如 $$c(N \rightsquigarrow dog)$$ 为标注为 $$N$$ 的 $$dog$$ 出现的概率。

则极大似然估计为：
$$
q(s|u,v)=\frac{c(u,v,s)}{c(u,v)}
$$

$$
e(x|s)=\frac{ c(s \rightsquigarrow x) }{c(s)}
$$

该模型的参数估计就是极大似然估计。现在[平滑](../Language-Modeling/Smoothed-Estimation-of-Trigram-Models.md)一下参数 $$q(s|u,v)$$：
$$
q(s|u,v)=\lambda_1 \times q_{ML}(s|u,v) + \lambda_2 \times q_{ML}(s|v) + \lambda_3 \times q_{ML}(s)
$$
其中 $$\lambda_1 \geq 0, \lambda_2 \geq 0, \lambda_3 \geq 0$$，且 $$\lambda_1 + \lambda_2 + \lambda_3 = 1$$。

&nbsp;

该方法的一个问题是，如果单词 $$x$$ 在训练集中出现的频率很低甚至不出现，$$e(x|s)$$ 的值就会很不可靠甚至为 0。后面将讨论解决这个问题的方法。