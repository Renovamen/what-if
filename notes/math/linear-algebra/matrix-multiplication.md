---
title: 1. 矩阵乘法
---

# 矩阵乘法

## 1.1 向量 x 向量

1. 有向量 $x,y \in R^n$，$x^Ty$ 被称为**向量内积（Inner Product）**或**点积（Dot Product）**，结果为一个实数。 

  $$
  x^Ty \in R^n = 

  \left[
    \begin{matrix}
      x_1 & x_2 & ... & x_n
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      y_1  \\
      y_2  \\
      \vdots  \\
      y_n
    \end{matrix}
  \right]

  = \sum_{i=1}^n x_i y_i
  $$

  注：$x^Ty = y^Tx$ 始终成立。

2. 有向量 $x \in R^n, y \in R^m$，$xy^T \in R^{m \times n}$ 被称为**向量外积（Outer Product）**，结果为一个矩阵，其中 $(xy^T)_{ij} = x_i y_i$。

  $$
  xy^T \in R^{m \times n} = 

  \left[
    \begin{matrix}
      x_1  \\
      x_2  \\
      ...  \\
      x_m
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      y_1 & y_2 & ... & y_n
    \end{matrix}
  \right]

  = 
  
  \left[
    \begin{matrix}
      x_1y_1 & x_1y_2 & \cdots & x_1y_n \\
      x_2y_1 & x_2y_2 & \cdots & x_2y_n \\
      \vdots & \vdots & \ddots & \vdots \\
      x_my_1 & x_my_2 & \cdots & x_my_n
    \end{matrix}
  \right]
  $$


## 1.2 矩阵 x 向量

有矩阵 $A \in R^{m \times n}$，向量 $x \in R^n$，它们的积是一个向量 $Ax \in R^m$。有两种理解矩阵与向量的乘法的方式：

1. 行列内积

  如果按行写 $A$，可以把 $Ax$ 表示为：

  $$
  y = Ax = 

  \left[
    \begin{matrix}
      - & a_1^T  & - \\
      - & a_2^T  & - \\
        & \vdots & \\
      - & a_m^T  & -
    \end{matrix}
  \right]x = 

  \left[
    \begin{matrix}
      a_1^Tx \\
      a_2^Tx \\
      \vdots \\
      a_m^Tx
    \end{matrix}
  \right]
  $$

  可以看出 $y$ 的第 $i$ 行是 $A$ 的第 $i$ 行和 $x$ 的内积，即 $y_i = a_i^T x$。

2. 整列相乘

  把 $A$ 按列表示：

  $$
  y = Ax = 

  \left[
    \begin{matrix}
        | &   | &        &   | \\
      a_1 & a_2 & \cdots & a_n \\
        | &   | &        &   |
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      x_1 \\
      x_2 \\
      \vdots \\
      x_n
    \end{matrix}
  \right] = 

  [ a^1 ] x_1 + [ a^2 ] x_2 + \cdots + [ a^n ] x_n
  $$

  可以看到，$y$ 是 $A$ 的列的线性组合，其中线性组合的系数由 $x$ 的元素给出。

也可以在左侧乘以行向量，写为 $y^T = x^T A$，其中 $ A \in R^{m \times n}, x \in R^m, y \in R^n $。也有两种理解方式：

1. 把 $A$ 按列表示：

  $$
  y^T = x^T A = 

  x^T

  \left[
    \begin{matrix}
        | &   | &        &   | \\
      a_1 & a_2 & \cdots & a_n \\
        | &   | &        &   |
    \end{matrix}
  \right]
  
  =

  \left[
    \begin{matrix}
      x^T a^1 & x^T a^2 & \cdots & x^T a^n
    \end{matrix}
  \right]
  $$

  可以看出 $y^T$ 的第 $i$ 个元素为 $x$ 和 $A$ 的第 $i$ 列的内积。

2. 整行相乘

  把 $A$ 按行表示：

  $$
  y^T = x^T A = 

  \left[
    \begin{matrix}
      x_1 & x_2 & \cdots & x_n
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      - a_1^T - \\
      - a_2^T - \\
        \vdots \\
      - a_m^T -
    \end{matrix}
  \right]
  
  = x_1 [- a_1^T -] + x_2 [- a_2^T -] + \cdots + x_n [- a_n^T -]
  $$

  可以看出 $y^T$ 是 $A$ 的行的线性组合，其中线性组合的系数由 $x$ 的元素给出。


## 1.3 矩阵 x 矩阵

两个矩阵相乘，其中 $A \in R^{m \times n}, B \in R^{n \times p}$（$A$ 的总列数必须与 $B$ 的总行数相等），则：

$$ 
C = AB \in R^{m \times p}
$$

其中 $C_{ij} = \text{row}_i \times \text{column}_j = \sum_{k=1}^n A_{ik}B_{kj}$。

1. 行列内积

  显然，$C_{ij}$ 等于 $A$ 的第 $i$ 行和 $B$ 的第 $j$ 列的内积：

  $$
  C = AB = 

  \left[
    \begin{matrix}
      - & a_1^T  & - \\
      - & a_2^T  & - \\
        & \vdots & \\
      - & a_m^T  & -
    \end{matrix}
  \right]
  
  \left[
    \begin{matrix}
        | &   | &        &   | \\
      b_1 & b_2 & \cdots & b_p \\
        | &   | &        &   |
    \end{matrix}
  \right]
  
  = 

  \left[
    \begin{matrix}
      a_1^Tb_1 & a_1^Tb_2 & \cdots & a_1^Tb_p \\
      a_2^Tb_1 & a_2^Tb_2 & \cdots & a_2^Tb_p \\
        \vdots &   \vdots & \ddots &   \vdots \\
      a_m^Tb_1 & a_m^Tb_2 & \cdots & a_m^Tb_p
    \end{matrix}
  \right]

  $$


2. 列乘以行

  用列表示 $A$，用行表示 $B$，这时 $C_{ij}$ 等于 $A$ 的第 $i$ 列和 $B$ 的第 $j$ 行的外积的和：

  $$
  C = AB = 

  \left[
    \begin{matrix}
        | &   | &        &   | \\
      a_1 & a_2 & \cdots & a_n \\
        | &   | &        &   |
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      - & b_1^T  & - \\
      - & b_2^T  & - \\
        & \vdots & \\
      - & b_n^T  & -
    \end{matrix}
  \right]
  
  = 

  \sum_{i=1}^n a_ib_i^T
  $$

  这种情况下，$a_i \in R^m$，$b_i \in R^p$，外积 $a_ib_i^T$ 的维度是 $m \times p$，与 $C$ 的维度一致。

  如：

  $$
  \left[
    \begin{matrix}
      2 & 7 \\
      3 & 8 \\
      4 & 9
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      1 & 6 \\
      0 & 0
    \end{matrix}
  \right]

  =

  \left[
    \begin{matrix}
      2 \\
      3 \\
      4
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      1 & 6
    \end{matrix}
  \right]

  +

  \left[
    \begin{matrix}
      7 \\
      8 \\
      9
    \end{matrix}
  \right]

  \left[
    \begin{matrix}
      0 & 0
    \end{matrix}
  \right]

  = 

  \left[
    \begin{matrix}
      2 & 12 \\
      3 & 18 \\
      4 & 24
    \end{matrix}
  \right]
  $$

  每一次都是用列向量与行向量相乘得到一个矩阵，每次得到的矩阵都有特点。如：

  $$
  \begin{bmatrix}
    2 \\
    3 \\
    4
  \end{bmatrix}

  \begin{bmatrix}
    1 & 6
  \end{bmatrix}
  =
  \begin{bmatrix}
    2 & 12 \\
    3 & 18 \\
    4 & 24
  \end{bmatrix}
  $$
  
  矩阵
  $\begin{bmatrix} 
    2 & 12 \\ 
    3 & 18 \\ 
    4 & 24 
  \end{bmatrix}$
  每一列都和向量
  $\begin{bmatrix} 
    2 \\ 
    3 \\ 
    4 
  \end{bmatrix}$
  同向，即列向量都在
  $\begin{bmatrix}
    2 \\ 
    3 \\ 
    4 
  \end{bmatrix}$
  这条直线上，列空间是一条直线。同理，行向量都在
  $\begin{bmatrix}
    1 & 6
  \end{bmatrix}$
  这条直线上，行空间（矩阵行所有可能的线性组合）是一条直线。


3. 整列相乘

  把 $B$ 用列表示，则可以将 $C$ 的列视为 $A$ 与 $B$ 的列的矩阵向量积（1.2 节）：

  $$
  C = AB = A

  \left[
    \begin{matrix}
        | &   | &        &   | \\
      b_1 & b_2 & \cdots & b_p \\
        | &   | &        &   |
    \end{matrix}
  \right]

  =

  \left[
    \begin{matrix}
        | &   | &        &   | \\
      Ab_1 & Ab_2 & \cdots & Ab_p \\
        | &   | &        &   |
    \end{matrix}
  \right]
  $$

  $c_j = Ab_j$，可以看做 $C$ 的第 $j$ 列是 $A$ 的列向量以 $B$ 的第 $j$ 列作为系数所求得的线性组合。


4. 整行相乘

  把 $A$ 用行表示，则可以将 $C$ 的行视为 $A$ 与 $B$ 的列的矩阵向量积（1.2 节）：

  $$
  C = AB =

  \left[
    \begin{matrix}
      - & a_1^T  & - \\
      - & a_2^T  & - \\
        & \vdots &   \\
      - & a_m^T  & -
    \end{matrix}
  \right] B = 

  \left[
    \begin{matrix}
      - & a_1^TB & - \\
      - & a_2^TB & - \\
        & \vdots &   \\
      - & a_m^TB & -
    \end{matrix}
  \right]
  $$

  $c_i^T = a_i^Tb$，可以看做 $C$ 的第 $i$ 行是 $B$ 的行向量以 $A$ 的第 $i$ 行作为系数所求得的线性组合。

5. 分块乘法

  $$
  \left[
    \begin{array}{c|c}
             A_1 & A_2 \\
      \hline A_3 & A_4
    \end{array}
  \right]
  
  \left[
    \begin{array}{c|c}
             B_1 & B_2 \\
      \hline B_3 & B_4
    \end{array}
  \right]
  
  =
  
  \left[
    \begin{array}{c|c}
             A_1B_1+A_2B_3 & A_1B_2+A_2B_4 \\
      \hline A_3B_1+A_4B_3 & A_3B_2+A_4B_4
    \end{array}
  \right]
  $$

  在分块合适的情况下，可以简化运算。
