# 马尔科夫决策过程

大部分强化学习问题都可以被纳入一个叫**马尔科夫决策过程**（Markov Decision Processes，MDP）的框架下。

## 马尔科夫性

**马尔科夫性**（Markov Property）是指系统的下一个状态 $s_{t+1}$ 仅与当前状态 $s_t$ 有关，而与以前的状态无关：

$$
\mathbb{P}[s_{t+1} \mid s_t] = \mathbb{P}[s_{t+1} \mid s_1, \dots, s_t]
$$

换句话说，给定当前状态，未来状态条件独立于历史状态。一旦当前状态已知，历史信息就会被抛弃。


## 马尔科夫过程

**马尔科夫过程**（Markov Processes，MP）由二元组 $⟨\mathcal{S}, P⟩$ 描述，其中：

- $\mathcal{S}$：状态空间（state space），即状态的有限集
- $P$：状态转移概率

$P$ 可以用一个矩阵来描述（状态转移矩阵，state-transition matrix）：

$$
P = 
\begin{bmatrix}
  P_{11} & P_{12} & \cdots & P_{1n} \\
  P_{21} & P_{22} & \cdots & P_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  P_{n1} & P_{n2} & \cdots & P_{nn}
\end{bmatrix}
$$

其中，$P_{ij}$ 描述了从状态 $i$ 转移到的下一个状态是状态 $j$ 的概率。


## 马尔科夫决策过程

对于强化学习问题，马尔科夫过程不足以描述其特点，因为智能体会通过动作与环境进行交互，并从环境中获得奖励，而马尔科夫过程中不考虑动作和奖励。

**马尔科夫决策过程**在马尔科夫过程的基础上加入了动作和奖励函数，它由元组 $\mathcal{M} = ⟨\mathcal{S}, \mathcal{A}, P, R, \gamma⟩$ 描述，其中：

- $\mathcal{S}$：状态空间（state space），即状态的有限集
- $\mathcal{A}$：动作空间（action space），即动作的有限集
- $P$：状态转移概率
- $R$：奖励函数
- $\gamma$：折扣因子

所以马尔科夫决策过程的状态转移概率是包含了动作这一项的，也就是[之前](/ai/rl/basic/key-concepts.html#状态转移概率与奖励函数)所说的：

$$
P_{ss'}^a = \mathbb{P}(S_{t+1} = s' \mid S_t = s, A_t = a)
$$

在 model-free 设置下，环境是未知的，也就是说我们没有关于 $P$ 和 $R$ 的（全部）信息。

