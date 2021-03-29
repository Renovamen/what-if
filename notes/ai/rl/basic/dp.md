# 基于模型的动态规划

对于 model-based 方法而言，环境 $R(s, a)$ 和 $P_{ss'}^a$ 是已知的，那么可以直接根据[贝尔曼方程](/ai/rl/basic/bellman-equations/)用动态规划来计算更新策略。整个过程分为**策略评估**（policy evaluation）和**策略改进**（policy improvement）两部分：

1. 策略评估：评估每个状态的 $V$ 值函数

  $$
  V_{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s) \Big( R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P_{ss'}^a V_{\pi}(s') \Big) \tag{1}
  $$

2. 策略改进：计算 $Q$ 值函数，$\pi$ 会按照一定的方法根据 $Q$ 值输出动作（如贪婪法，直接输出 $Q$ 值最大的动作）：

  $$
  Q_{\pi}(s, a) = R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P_{ss'}^a V_{\pi}(s') \tag{2}
  $$

然后不断迭代上述两个步骤，这叫**策略迭代**（policy iteration）：

$$
\pi_0 \xrightharpoonup{\text{评估}} V_{\pi_0} \xrightharpoonup{\text{改进}} \pi_1 \xrightharpoonup{\text{评估}} V_{\pi_1} \xrightharpoonup{\text{改进}} \pi_2 \xrightharpoonup{\text{评估}} \cdots \xrightharpoonup{\text{改进}} \pi_* \xrightharpoonup{\text{评估}} V_*
$$


## 自举

可以看到，需要用下一个状态 $s'$ 的值函数来更新当前状态 $s$ 的值函数。但 $s'$ 的值函数也是我们估算出来的，相当于要用一个估算去更新同类的估算，这种方法叫**自举**（bootstrapping）。

::: tip
Bootstrapping 的字面意思是：拔自己的鞋带，把自己举起来（[这里](https://omarsbrain.wordpress.com/2010/01/22/bootstrapping-and-artificial-intelligence/)有一张很形象的图）
:::


## 策略迭代

### 线性方程组的迭代解法

对于式 $(1)$，$R(s, a)$、$P_{ss'}^a$ 和 $\gamma$ 已知，$\pi$ 是给定的当前要评估的策略，也已知，唯一的未知数是状态值函数。那么式 $(1)$ 可以看**关于状态值函数的线性方程组**。

线性方程组的数值求解包括直接法（如高斯消元) 和迭代解法，策略评估中采用了迭代解法中的高斯-赛德尔迭代法：

$$
V_{k+1}(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s) \Big( R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P_{ss'}^a V_k(s') \Big)
$$

其中 $k$ 表示第 $k$ 次迭代。

#### 雅克比迭代法

// 有空再写

#### 高斯-赛德尔迭代法

// 有空再写


### 策略评估

因此用迭代法进行策略评估的流程为：

- **Init** $V_0(s) = 0$
- **Repeat** $k=0, 1, \dots$:（$k$ 是第 $k$ 个高斯-赛德尔迭代）
  - **for** every $s \in \mathcal{S}$ **do**:（一次状态扫描）
    - $V_{k+1}(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s) \Big( R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P_{ss'}^a V_k(s') \Big)$
- **Until** $V_{k+1}(s) = V_k(s)$


### 策略改进

这里把策略考虑为确定策略，即 $\pi(s) = a$。那么一个很自然的方法就是用贪婪法（greedy）来更新策略，即直接输出 Q 值最大的动作：

$$
\pi'(s) = \arg \max_{a \in \mathcal{A}} Q_{\pi}(s, a)
$$

---

那么把策略评估和策略改进合起来：

- **Init** $\pi_0$
- **Repeat** $t = 0, 1, \dots$（$t$ 是第 $t$ 个时间步）
  - 进行[策略评估](#策略评估)，得到 $V_{\pi_t}$
  - **for** every $s \in \mathcal{S}$ **do**:
    - $\pi_{t+1}(s) = \arg \max_{a \in \mathcal{A}} Q_{\pi}(s, a)$
- **Until** $\pi_{k+1}(s) = \pi_k(s)$

也就是有两个循环，内循环在用高斯-赛德尔迭代法进行策略评估，循环到值函数收敛为止；外循环在更新策略，循环到策略收敛为止。


### 最优性证明

证明更新后的 $\pi'(s)$ 一定是更好的策略：

$$
Q_{\pi}(s, \pi'(s)) = \max_{a \in \mathcal{A}} Q_{\pi}(s, a) \geq Q_{\pi}(s, \pi(s)) = V_{\pi}(s) \tag{3}
$$

$$
\begin{aligned}
  V_{\pi}(s) & \leq Q_{\pi}(s, \pi'(s)) = \mathbb{E}_{\pi'} \Big [ R_{t+1} + \gamma V_{\pi}(s_{t+1}) \mid S_t = s \Big ] \\
    & \leq \mathbb{E}_{\pi'} \Big [ R_{t+1} + \gamma Q_{\pi} \big (s_{t+1}, \pi'(s_{t+1}) \big ) \mid S_t = s \Big ] \quad \text{(代入式 3)}\\
    & \leq \mathbb{E}_{\pi'} \Big [ R_{t+1} + \gamma R_{t+2} + \gamma^2 Q_{\pi} \big (s_{t+2}, \pi'(s_{t+2}) \big ) \mid S_t = s \Big ] \quad \text{(代入式 3)}\\
    & \leq \mathbb{E}_{\pi'} \Big [ R_{t+1} + \gamma R_{t+2} + \cdots \mid S_t = s \Big ] \\
    & = V_{\pi'}(s)
\end{aligned}
$$

因此策略更新到 $\pi'$ 后， $V$ 和 $Q$ 在状态 $s$ 的值都比更新前更高。

当更新停止后，有：

$$
Q_{\pi}(s, \pi'(s)) = \max_{a \in \mathcal{A}} Q_{\pi}(s, a) = Q_{\pi}(s, \pi(s)) = V_{\pi}(s)
$$

$$
\rArr V_{\pi}(s) = \max_{a \in \mathcal{A}} Q_{\pi}(s, a)
$$

也就是对每个状态 $s$，采取的都是最优动作，即这时 $\pi$ 是最优策略。


## 值函数迭代

策略迭代会等到 $V$ 收敛后再进行策略改进，而**值函数迭代**（value iteration）不等 $V$ 收敛，而是评估一次后就进行策略改进：

- **Init** $\pi_0, V_0(s) = 0$
- **Repeat** $t = 0, 1, \dots$（$t$ 是第 $t$ 个时间步）
  - **for** every $s \in \mathcal{S}$ **do**
    - $V_{t+1}(s) = \max_{a \in \mathcal{A}} \Big( R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P_{ss'}^a V_t(s') \Big)$
- **Until** $V_{t+1}(s) = V_t(s)$
- **Output** $\pi(s) = \arg \max_{a \in \mathcal{A}} \Big( R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P_{ss'}^a V_t(s') \Big)$

可以看到值函数迭代过程中并没有一个显示的策略。
