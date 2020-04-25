---
catagory: Linear Algebra
catalog: true
---

# 8. 求解 Ax = b：可解性和解的结构
## 8.1 Ax = b 的解

举例，同上一讲：$$3 \times 4$$ 矩阵： 

$$
A=
\left[
  \begin{matrix}
    1 & 2 & 2 & 2\\
    2 & 4 & 6 & 8\\
    3 & 6 & 8 & 10
  \end{matrix}
\right]
$$

求 $$Ax=b$$ 的特解：

写出其增广矩阵（augmented matrix）
$$ [A | b]$$：

$$
\left[
\begin{array}{c c c c|c}
1 & 2 & 2 & 2 & b_1 \\
2 & 4 & 6 & 8 & b_2 \\
3 & 6 & 8 & 10 & b_3
\end{array}
\right]
\underrightarrow{\text{消元}}
\left[
\begin{array}{c c c c|c}
1 & 2 & 2 & 2 & b_1 \\
0 & 0 & 2 & 4 & b_2-2b_1 \\
0 & 0 & 0 & 0 & b_3-b_2-b_1
\end{array}
\right]
$$

显然，有解的必要条件为 $$b_3-b_2-b_1=0$$。

### 8.1.1 Ax = b 可解性
讨论 $$b$$ 满足什么条件才能让方程 $$Ax=b$$ 有解（solvability condition on $$b$$）：

1. 从列空间看：当且仅当 $$b$$ 属于 $$A$$ 的列空间时；
2. 如果 $$A$$ 的各行线性组合得到 0 行，则 $$b$$ 端分量做同样的线性组合，结果也为 0 时，方程才有解。

### 8.1.2 Ax = b 的解结构
1. 特解

    解法：令所有自由变量取 0，则有
    $
    \Big\lbrace
    \begin{aligned}
      x_1 + 2x_3 & = 1 \\
      2x_3 & = 3
    \end{aligned}
    $，解得
    $
    \Big\lbrace
    \begin{aligned}
      x_1 & = -2 \\
      x_3 & = \frac{3}{2}
    \end{aligned}
    $
   
    代入 $$Ax=b$$ 求得特解： 
    $
    x_p=
    \begin{bmatrix}-2 \\ 
      0 \\ 
      \frac{3}{2} \\ 
      0
    \end{bmatrix}
    $

2. 通解

    令 $$Ax=b$$ 成立的所有解：
    $
    \Big\lbrace
    \begin{aligned}
      A x_p & = b \\
      A x_n & = 0
    \end{aligned}
    \quad
      \rightarrow{}
    \quad
    A(x_p+x_n)=b
    $

    即 $$Ax=b$$ 的解集为其特解加上零空间。对本例有：

    $$
    x_{\text{complete}}=
    \begin{bmatrix}-2 \\ 
      0 \\ 
      \frac{3}{2} \\ 
      0
    \end{bmatrix}
    +c_1
    \begin{bmatrix}
      -2\\
      1\\
      0\\
      0
    \end{bmatrix}
    +c_2
    \begin{bmatrix}
      2\\
      0\\
      -2\\
      1
    \end{bmatrix}
    $$

## 8.2 秩 r 与 Ax = b 的解关系
对于 $$m \times n$$ 矩阵 $$A$$，有矩阵 $$A$$ 的秩 $$r \leq \min(m, n)$$。

### 8.2.1 列满秩

主元变量为 $$n$$，没有自由变量。因为没有自由变量可以赋值，所以列的线性组合得不到 0（因为如果存在非零 $$x$$ 使 $$Ax=0$$ 成立，那么 $$A$$ 中有一列是没有贡献的，既然没有贡献，那么也就不存在列满秩的情况了）。

所以列满秩的解的情况：0 或 1 个特解。

举例：

列满秩 $$r=n$$ 情况：

$$
A=
\begin{bmatrix}
  1 & 3 \\
  2 & 1 \\
  6 & 1 \\
  5 & 1
\end{bmatrix}
，
R=
\begin{bmatrix}
  1 & 0 \\
  0 & 1 \\
  0 & 0 \\
  0 & 0
\end{bmatrix}
$$

$$rank(A)=2$$，要使 $$Ax=b, b \neq 0$$ 有非零解，$$b$$ 必须取 $$A$$ 中各列的线性组合，此时 $$A$$ 的零空间中只有 $$0$$ 向量。

**P.S.** 因为行向量是 2 维的，且前两行线性无关，2 维平面中有两个向量线性无关，那该平面的所有向量都可以由这两个向量线性组合得到，所以后面两行一定会是 0 行。

### 8.2.2 行满秩
每行都有主元，不存在 0 行，那么 $$b$$ 就没有要求，而且有 $$n-r$$ 个自由变量，所以解有无穷多个。

举例：

行满秩 $$r=m$$ 情况：

$$
A=
\begin{bmatrix}
  1 & 2 & 6 & 5 \\
  3 & 1 & 1 & 1
\end{bmatrix},

R=
\begin{bmatrix}
  1 & 0 & - & - \\
  0 & 1 & - & -
\end{bmatrix}
$$

$$rank(A)=2$$，$$\forall b \in R^m$$ 都有 $$x \neq 0$$ 的解，因为此时 $$A$$ 的列空间为 $$R^m$$，$$b \in R^m$$ 恒成立，组成 $$A$$ 的零空间的自由变量有 $$n-r$$ 个。


### 8.2.3 行列满秩
代表的是满秩方阵，消元到最简形式是单位矩阵，是一个可逆矩阵，结合 $$r=m$$ 和 $$r=n$$ 的解的情况得出此时一定有一个解 $$b$$，$$b$$ 满足是 $$A$$ 向量的线性组合。

举例：

行列满秩情况：$$r=m=n$$，如：

$$
A=
\begin{bmatrix}
  1 & 2 \\
  3 & 4
\end{bmatrix}
$$

则 $$A$$ 最终可以化简为 $$R=I$$，其零空间只包含 $$0$$ 向量。


### 8.2.4 总结

$$
\begin{array}{c|c|c|c}
  r=m=n & r=n<m & r=m<n & r<m,r<n \\

  R=I & R=\begin{bmatrix}I\\0\end{bmatrix} & R=\begin{bmatrix}I&F\end{bmatrix} & R=\begin{bmatrix}I&F\\0&0\end{bmatrix} \\
  
  \text{1 solution} & \text{0 or 1 solution} & \infty \text{ solution} & \text{0 or } \infty \text{ solution}
\end{array}
$$