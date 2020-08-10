---
catagory: Information Theory
---

# 散度

## KL 散度

### 定义

**KL 散度（Kullback–Leibler Divergence）**，又称**相对熵（Relative Entropy)**，是描述两个概率分布 $$p$$ 和 $$q$$ 的差异的一种方法。

离散概率分布的 KL 散度：

$$
\text{KL}(p \| q) = \sum_x p(x) \log \frac{p(x)}{q(x)}
$$

连续概率分布的 KL 散度：

$$
\text{KL}(p \| q) = \intop p(x) \log \frac{p(x)}{q(x)} dx
$$


两个分布越接近，KL 散度越小，当 $$p=q$$ 时，$$\text{KL}(p \| q) = 0$$；两个分布越远，KL 散度越大。

### 信息论中的意义

在信息论中，KL 散度的意义为：

$$
\text{KL}(p \| q) = H(p,q) - H(q)
$$

其中：

- $$H(p,q)$$：用概率分布为 $$p$$ 的信息的最优编码方式，去编码概率分布为 $$q$$ 的信息，需要的平均编码长度（交叉熵）

- $$H(q)$$：对概率分布为 $$q$$ 的信息进行最优编码，需要的平均编码长度（熵）


### 性质

- **非负性：**$$\text{KL}(p \| q) \geq 0$$，且 $$\text{KL}(p \| q) = 0$$ 当且仅当 $$p=q$$

- **非对称性：**$$\text{KL}(p \| q) \ne \text{KL}(q \| p)$$
    
    因此 KL 散度并不是严格意义上的距离或度量（[严格的度量需要满足的条件](https://en.wikipedia.org/wiki/Statistical_distance)）

- **仿射变换不变性：**若 $$y=ax+b$$，则：

    $$
    \text{KL}(p(x) \| q(x)) = \text{KL}(p(y) \| q(y))
    $$

- KL 散度可能趋于无穷


## 参考

- [A tutorial of Kullback-Leibler divergence](http://www.fenghz.xyz/KL-Divergency-Description/)

- [机器学习中的散度](https://zhuanlan.zhihu.com/p/45131536)