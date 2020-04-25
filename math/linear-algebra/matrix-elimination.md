---
catagory: Linear Algebra
catalog: true
---

# 矩阵消元
## 2.1 消元法

三元方程组 
$
\begin{cases}
  x& + 2y& + z& = 2 \\
  3x& + 8y& + z& = 12 \\
  &4y& + z& = 2
\end{cases}
$
对应的矩阵形式 $$Ax=b$$ 为：

$$
\begin{bmatrix}
  1 & 2 & 1 \\
  3 & 8 & 1 \\
  0 & 4 & 1
\end{bmatrix}
\begin{bmatrix}
  x \\
  y \\
  z
\end{bmatrix}
=
\begin{bmatrix}
  2 \\
  12 \\
  2
\end{bmatrix}
$$


**消元**（$$[A \| b]$$ 为方程组的**增广矩阵**形式）：

$$
[A | b] = 

\left[
  \begin{array}{c c c |c}
    \underline{1} & 2 & 1 & 2 \\
    3             & 8 & 1 & 12 \\
    0             & 4 & 1 & 2
  \end{array}
\right]
\underrightarrow{r2-3r1}

\left[
  \begin{array}{c c c |c}
    \underline{1} & 2             & 1  & 2 \\
    0             & \underline{2} & -2 & 6 \\
    0             & 4             & 1  & 2
  \end{array}
\right]

\underrightarrow{r3-2r2}
\left[
  \begin{array}{c c c |c}
    \underline{1} & 2             & 1             & 2 \\
    0             & \underline{2} & -2            & 6 \\
    0             & 0             & \underline{5} & -10
  \end{array}
\right]
$$

下划线的元素为**主元**，主元不能为零。如果在消元时遇到主元位置为零，则需要看它的后面的行对应位置是否为 0，如果不为 0，就交换这两行，将非零数视为主元。

消元失效：如果它后面所有行的对应位置都为 0，则该矩阵**不可逆**，消元法求出的解不唯一。（如：把第三个方程 $$z$$ 前的系数成 -4，会导致第二步消元时最后一行全部为零，则第三个主元就不存在了，消元就不能继续进行了。）

消元后方程组变为 
$
\begin{cases}
   x  & +2y & +z  & = 2 \\
      &  2y & -2z & = 6 \\
      &     &  5z & = -10
\end{cases}
$

从第三个方程求出 $$z=-2$$，代入第二个方程求出 $$y=1$$，再代入第一个方程求出 $$x=2$$。

## 2.1 消元矩阵

