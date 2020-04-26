---
catagory: NLP
---

# 参数估计

## Log-Likelihood Function

假设有一个有样本 $$(x^{(i)}, y^{(i)})$$ 组成的训练集（$$i \in \{1...n\},x^{(i)} \in \mathcal{X}, y^{(i)} \in \mathcal{Y}$$）。直观上来说，对任意样本 $$i$$，$$\log p(y^{(i)}|x^{(i)};v)$$ 越大说明模型越能拟合这个样本。所以 log-likelihood 就是每个样本的条件概率取对数的和：
$$
L(v) = \sum_{i=1}^n \log p(y^{(i)}|x^{(i)};v) \tag{3.3}
$$
这是一个关于参数向量 $$v$$ 的函数，可以理解为是评估 $$v$$ 对训练数据的拟合程度的函数。

<br>

现在考虑用极大似然估计来进行参数估计，即：
$$
v_{ML} = \arg \max_{v \in \Reals^d} L(v)
$$
但极大似然估计会存在一些问题，尤其是在特征数量很大的时候。比如考虑一个只有一元、二元、三元特征的语言模型。三元组 $$\text{any statistical model}$$ 只在训练集的第 100 个样本中出现过，即：
$$
f_{N(\text{any, statistical, model})}(x^{(100)}, y^{(100)}) = 1
$$
同时这是训练集中唯一满足 $$u = \text{any}, v = \text{statistical}$$ 的三元组 $$(u,v,w)$$。

在这种情况下，估计出来的参数会为 $$+\infty$$，因为对第 100 个样本，有：
$$
v \cdot f(x^{(100)},y^{(100)}) = \sum_{k=1}^d v_kf_k(x^{(100)},y^{(100)})
$$

$$
= v_1f_{N(\text{any, statistical, model})}(x^{(100)},y^{(100)}) + v_2f_{N(\text{statistical, model})}(x^{(100)},y^{(100)}) + v_3f_{N(\text{model})}(x^{(100)},y^{(100)})
$$

$$
= v_1
$$

<br>

$$
p(y|x;v) = \frac{\exp (v \cdot f(x,y))}{\sum_{y' \in \mathcal{Y}} \exp(v \cdot f(x,y'))} \tag{3.1}
$$

$$
p(y^{(100)}|x^{(100)}; v) = \frac{\exp (v \cdot f(x^{(100)},y^{(100)}))}{\sum_{y' \in \mathcal{Y}} \exp(v \cdot f(x^{(100)},y'))} = 1
$$

$$
\Rightarrow \frac{\exp (v_1)}{\sum_{y' \in \mathcal{Y}} \exp(v \cdot f(x^{(100)},y'))} = 1
$$

$$
\Rightarrow \frac{\exp (v \cdot f(x,y))}{\sum_{y' \in \mathcal{Y}} \exp(v \cdot f(x,y'))}
$$

$$
\Rightarrow v \rightarrow +\infty
$$



这时不管其他样本的条件概率怎么样，$$L(v)$$ 都会最大。这样估计出来的参数在测试集上的表现会很差（过拟合），它会由“训练集 $$\text{any statistical}$$ 的后面一定会跟着 $$\text{model}$$”的现象而直接得出 $$P(W_i = \text{model}|W_{i-1}, W_{i-2} = \text{any, statistical})) = 1$$ 的结论。



## Regularization

**正则化**

一个常用的解决方案是在公式 3.3 中加入一个正则化项（regularization term）来避免参数的估计过大（趋近于无穷）。一个常用的正则化项是参数的 2 范数（2-norm），即：
$$
\| v \|^2 = \sum_k v_k^2
$$
其中 $$\|v\|$$ 是向量 $$v$$ 的长度（欧几里得范数（Euclidean norm），因为 $$\|v\| = \sqrt{\sum_kv_k^2}$$，也即 L2 范数）。

则修改后的对数似然函数为（$$\lambda > 0$$）：
$$
L'(v) = \sum_{i=1}^n \log p(y^{(i)}|x^{(i)};v) - \frac{\lambda}{2} \sum_k v_k^2 \tag{3.4}
$$
最优参数为：
$$
v^* = \arg \max_v L'(v)
$$
公式 3.4 的第二项是一个惩罚项（penalty term），用于让参数