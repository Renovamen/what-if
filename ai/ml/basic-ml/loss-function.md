---
catagory: ML
---

# 损失函数

## 交叉熵损失

**交叉熵损失函数（Cross-Entropy Loss Function）**一般用于分类问题。假设样本的标签为 $$C$$ 个离散的类别，模型 $$f(x; \theta) \in [0, 1]^C$$ 的输出为标签类别的条件概率分布，即：

$$
f_c (x; \theta) = p(y=c | x; \theta)
$$

$$f_c (x; \theta)$$ 为模型 $$f(x; \theta)$$ 的输出向量的第 $$c$$ 维，且满足：

$$
f_c (x; \theta) \in [0,1]
$$

$$
\sum_{c=1}^C f_c (x; \theta) = 1
$$

可以用一个 $$C$$ 维的**独热编码（one-hot encoding）**向量 $$y$$ 来表示标签。如果标签为 k，那么向量 $$y$$ 的第 k 维为 1，其它维都为 0。$$y$$ 可以被看做标签的真实条件概率分布，它属于第 k 类的概率为 1，属于其他类的概率为 0。

可以用交叉熵来衡量真实分布 $$y$$ 和模型预测分布 $$f(x; \theta)$$ 之间的差距：

$$
\begin{aligned}
   L(y, f(x; \theta)) &= -y^{\top} \log f(x; \theta) \\
                      &= - \sum_{c=1}^C y_c \log f_c(x; \theta)
\end{aligned}
$$

因为 $$y$$ 是 one-hot 向量，所以上式也可以写为：

$$
L(y, f(x; \theta)) = \log f_k(x; \theta)
$$

其中，$$f_k(x; \theta)$$ 可以被看做真实类别 k 的似然函数，所以交叉熵损失函数也就是**负对数似然函数（Negative Log-Likelihood)**。