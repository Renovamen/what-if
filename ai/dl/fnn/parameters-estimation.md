---
catagory: DL
---

# 参数学习

## 损失函数

损失函数用[交叉熵损失](/ai/ml/basic-ml/loss-function/#交叉熵损失)：

$$
L(y, \hat{y}) = -y^{\top} \log \hat{y}
$$

其中 $$y \in \{0,1\}^C$$ 为真实标签的 one-hot 向量，$$\hat{y}$$ 为模型输出。

假设训练集为 $$D = \{ (x^{(n)}, y^{(n)}) \}_{n=1}^N$$，对于样本 $$x^{(n)}$$，网络的输出为 $$\hat{y}^{(n)}$$。则在整个数据集上的代价函数为：

$$
J(w, b) = \frac{1}{N} \sum_{n=1}^N L(y^{(n)}, \hat{y}^{(n)}) + \frac{1}{2} \lambda \| w \|^2_2
$$

其中：

- $$w, b$$：网络中的权重矩阵和偏置向量

- $$\frac{1}{2} \lambda \| w \|^2_2$$：$$l_2$$ 正则化项，用来防止过拟合，$$\| w \|^2_2$$ 是一个 $$l_2$$ 范数

- $$\lambda$$：正则化系数（超参数），用于控制控制正则化强弱，$$\lambda$$ 越大，$$w$$ 就会越接近于 0

## 梯度下降

参数可以通过梯度下降法来进行学习。在梯度下降法的每次迭代中，第 $$l$$ 层的参数 $$w^{(n)}$$ 和 $$b^{(n)}$$ 的更新方式为：

$$
\begin{aligned}
   w^{(l)} &\leftarrow w^{(l)} - \alpha \cdot \frac{\partial J(w,b)}{\partial w^{(l)}} \\
           &= w^{(l)} - \alpha ( \frac{1}{N} \sum_{n=1}^N (\frac{\partial L(y^{(n)}, \hat{y}^{(n)})}{\partial w^{(l)}}) + \lambda w^{(l)} ) \\
    b^{(l)} &\leftarrow b^{(l)} - \alpha \cdot \frac{\partial J(w,b)}{\partial b^{(l)}} \\
           &= b^{(l)} - \alpha ( \frac{1}{N} \sum_{n=1}^N \frac{\partial L(y^{(n)}, \hat{y}^{(n)})}{\partial b^{(l)}})
\end{aligned}
$$

其中 $$\alpha$$ 为**学习率（learning rate）**。

## 反向传播

梯度下降法需要计算损失函数对各参数的偏导（即梯度）。如果直接用链式法则逐一对每个参数求偏导会比较低效，因为有的子表达式会被重复计算很多次。因此神经网络中会用**反向传播（back propagation）**算法来更高效的计算梯度。

### 反向传播流程

定义第 $$l$$ 层神经元的**误差项** $$\delta^{(l)}$$ 为：

$$
\delta^{(l)} = \frac{\partial J}{\partial z^{(l)}} \in \Reals^{M_l}
$$

$$\delta^{(l)}$$ 表示了第 $$l$$ 层神经元对最终代价的影响，也间接反映了不同神经元对网络能力的贡献程度。

那么反向传播有四条核心公式：

1. 计算输出层的误差项 $$\delta^{(L)}$$：

    $$
    \delta^{(L)} = \nabla_a J \odot \sigma'(z^{(L)}) \tag{\text{BP1}}
    $$

    $$\nabla_a J$$ 是一个向量，它的第 $$i$$ 个元素为 $$\frac{\partial J}{\partial a^{(L)}_i}$$。$$\nabla_a J$$ 可以理解为代价函数随输出的激活值的变化而变化的速度，$$\sigma'(z^{(L)})$$ 可以理解为在 $$z^{(L)}$$ 处激活函数 $$\sigma$$ 变化的速度。

2. 使用下一层的误差项 $$\delta^{(l+1)}$$ 来计算当前层的误差项 $$\delta^{(l)}$$：

    $$
    \delta^{(l)} = ((w^{(l+1)})^{\top} \delta^{(l+1)}) \odot \sigma'(z^{(l)}) \tag{\text{BP2}}
    $$

    这就是**误差的反向传播**。反向传播的含义就是：第 $$l$$ 层的某个神经元的误差项 = 所有与该神经元相连的第 $$l + 1$$ 层的神经元的误差项的权重和 * 该神经元激活函数的梯度。

3. 计算偏置 $$b$$ 的梯度：

    $$
    \frac{\partial J}{\partial b^{(l)}} = \delta^{(l)} \tag{\text{BP3}}
    $$

3. 计算权重 $$w$$ 的梯度：

    $$
    \frac{\partial J}{\partial w^{(l)}} = \delta^{(l)} (a^{(l-1)})^{\top} \tag{\text{BP4}}
    $$

然后就是按梯度下降法，用算出来的梯度去更新参数。

### 公式证明

证明一下反向传播的四条核心公式：

#### BP1

BP1 链式法则一步推出来

#### BP2

由 $$z^{(l+1)} = w^{(l+1)}a^{(l)} + b^{(l+1)}$$：

$$
\frac{\partial z^{(l+1)}}{\partial a^{(l)}} = (w^{(l+1)})^{\top} \qquad \in \Reals^{M_l \times M_{l+1}}
$$

由 $$a^{(l)} = \sigma (z^{(l)})$$：

$$
\begin{aligned}
    \frac{\partial a^{(l)}}{\partial z^{(l)}} &= \frac{\partial \sigma (z^{(l)})}{\partial z^{(l)}} \\
        &= \text{diag} (\sigma' (z^{(l)})) \qquad \in \Reals^{M_l \times M_l}
\end{aligned}
$$

$$\text{diag} (\sigma' (z^{(l)}))$$ 表示一个对角线元素全为 $$\sigma' (z^{(l)})$$，其他元素全为 0 的矩阵。

因此根据链式法则，第 $$l$$ 层的误差项为：

$$
\begin{aligned}
    \delta^{(l)} &=  \frac{\partial J}{\partial z^{(l)}} \\
        &= \frac{\partial J}{\partial z^{(l+1)}} \cdot \frac{\partial z^{(l+1)}}{\partial a^{(l)}} \cdot \frac{\partial a^{(l)}}{\partial z^{(l)}} \\[1em]
        &= \delta^{(l+1)} \cdot (w^{(l+1)})^{\top} \cdot \text{diag} (\sigma' (z^{(l)})) \\[0.8em]
        &= ((w^{(l+1)})^{\top} \delta^{(l+1)}) \odot \sigma'(z^{(l)}) \qquad \in \Reals^{M_l}
\end{aligned}
$$

#### BP3

由 $$z^{(l)} = w^{(l)}a^{(l-1)} + b^{(l)}$$：

$$
\frac{\partial z^{(l)}}{\partial b^{(l)}} = I_{M_l} \qquad \in \Reals^{M_l \times M_l}
$$

$$I_{M_l}$$ 表示 $$M_l \times M_l$$ 的单位矩阵。

由链式法则：

$$
\frac{\partial J}{\partial b^{(l)}} = \frac{\partial J}{\partial z^{(l)}} \cdot \frac{\partial z^{(l)}}{\partial b^{(l)}} = \frac{\partial J}{\partial z^{(l)}} = \delta^{(l)}
$$

#### BP4

由 $$z^{(l)} = w^{(l)}a^{(l-1)} + b^{(l)}$$：

$$
\begin{aligned}
    \frac{\partial z^{(l)}}{\partial w_{ij}^{(l)}} &= \left [ \frac{\partial z_1^{(l)}}{\partial w_{ij}^{(l)}}, \dots, \frac{\partial z_i^{(l)}}{\partial w_{ij}^{(l)}}, \dots, \frac{\partial z_{M_l}^{(l)}}{\partial w_{ij}^{(l)}}  \right ] \\
        &= \left [ 0, \dots, \frac{\partial (w_{i:}^{(l)} a^{(l-1)} + b_i^{(l)})}{\partial w_{ij}^{(l)}}, \dots, 0  \right ] \\
        &= \left [ 0, \dots, a_j^{(l-1)}, \dots, 0  \right ] \qquad \in \Reals^{1 \times M_l}
\end{aligned}
$$

其中 $$w_{i:}^{(l)}$$ 为权重矩阵 $$w^{(l)}$$ 的第 $$i$$ 行。最后的结果是一个行向量（列向量关于标量的偏导为行向量）。

由链式法则：

$$
\begin{aligned}
    \frac{\partial J}{\partial w_{ij}^{(l)}} &= \frac{\partial J}{\partial z^{(l)}} \cdot \frac{\partial z^{(l)}}{\partial w_{ij}^{(l)}} \\
        &=  \left [ \delta_1^{(l)}, \dots, \delta_i^{(l)}, \dots, \delta_{M_l}^{(l)} \right ] \left [ 0, \dots, a_j^{(l-1)}, \dots, 0  \right ] \\
        &= \delta_i^{(l)} a_j^{(l-1)}
\end{aligned}
$$

其中 $$\delta_i^{(l)} a_j^{(l-1)}$$ 相当于向量 $$\delta^{(l)}$$ 和向量 $$a^{(l-1)}$$ 的[外积](/math/linear-algebra/matrix-multiplication/#11-向量-x-向量)的第 $$i,j$$ 个元素。因此上式可以写为：

$$
\begin{aligned}
    \left [ \frac{\partial J}{\partial w^{(l)}} \right ]_{ij} &= \left [ \delta^{(l)} (a^{(l-1)})^{\top} \right ]_{ij} \\
    \Rightarrow \frac{\partial J}{\partial w^{(l)}} &= \delta^{(l)} (a^{(l-1)})^{\top} \qquad \in \Reals^{M_l \times M_{l-1}}
\end{aligned}
$$