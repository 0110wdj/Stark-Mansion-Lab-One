## 4.2 practice

### 4.2-1 使用 Strassen 算法计算如下矩阵乘法:

$$
\begin{bmatrix}
1 & 3 \\
7 & 5
\end{bmatrix}
\begin{bmatrix}
6 & 8 \\
4 & 2
\end{bmatrix}
$$

给出计算过程。

解：
根据 Strassen 算法步骤：

1、分解为子矩阵：

$$
假设输入矩阵: A =
\begin{bmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{bmatrix}
B =
\begin{bmatrix}
B_{11} & B_{12} \\
B_{21} & B_{22}
\end{bmatrix}
,
输出矩阵: C =
\begin{bmatrix}
C_{11} & C_{12} \\
C_{21} & C_{22}
\end{bmatrix}
则有：\\
C_{11} = A_{11} \cdot B_{11} +  A_{12} \cdot B_{21}\\
C_{12} = A_{11} \cdot B_{12} +  A_{12} \cdot B_{22}\\
C_{21} = A_{21} \cdot B_{11} +  A_{22} \cdot B_{21}\\
C_{22} = A_{21} \cdot B_{12} +  A_{22} \cdot B_{22}\\
$$

(这里只是表示一个输出矩阵的子矩阵的组成来源，不用计算)

2、创建 10 个矩阵，表示第一步中的矩阵的和或差。

$$
\begin{align*}
S_1 & = B_{12} - B_{22}\\
S_2 & = A_{11} + A_{12}\\
S_3 & = A_{21} + A_{22}\\
S_4 & = B_{21} - B_{11}\\
S_5 & = A_{11} + A_{22}\\
S_6 & = B_{11} + B_{22}\\
S_7 & = A_{12} - A_{22}\\
S_8 & = B_{21} + B_{22}\\
S_9 & = A_{11} - A_{21}\\
S_{10} & = B_{11} + B_{12}\\
\end{align*}
$$

3、算出七个矩阵积

$$
\begin{align*}
P_1 & = A_{11} \cdot S_1 \\
P_2 & = S_2 \cdot B_{22} \\
P_3 & = S_3 \cdot B_{11} \\
P_4 & = A_{22} \cdot S_4 \\
P_5 & = S_5 \cdot S_6 \\
P_6 & = S_7 \cdot S_8 \\
P_7 & = S_9 \cdot S_{10} \\
\end{align*}
$$

4、

$$
通过 P_{i} 矩阵的不同组合进行加减运算，得到输出矩阵 C 的子矩阵 C_{11},C_{12},C_{21},C_{22}
$$

$$
\begin{align*}
C_{11} & = P_5 + P_4 - P_2 + P_5 \\
C_{12} & = P_1 + P_2 \\
C_{21} & = P_3 + P_4 \\
C_{22} & = P_5 + P_1 - P_3 - P_7 \\
\end{align*}
$$

**由于规模较小，一次算出结果：**

$$
\begin{bmatrix}
1 & 3 \\
7 & 5
\end{bmatrix}
\begin{bmatrix}
6 & 8 \\
4 & 2
\end{bmatrix}
$$

$$
\begin{align*}
S_1 & = B_{12} - B_{22} = 8 - 2 = 6 \\
S_2 & = A_{11} + A_{12} = 1 + 3 = 4 \\
S_3 & = A_{21} + A_{22} = 7 + 5 = 12 \\
S_4 & = B_{21} - B_{11} = 4 - 6 = -2 \\
S_5 & = A_{11} + A_{22} = 1 + 5 = 6 \\
S_6 & = B_{11} + B_{22} = 6 + 2 = 8 \\
S_7 & = A_{12} - A_{22} = 3 - 5 = -2 \\
S_8 & = B_{21} + B_{22} = 4 + 2 = 6 \\
S_9 & = A_{11} - A_{21} = 1 - 7 = -6 \\
S_{10} & = B_{11} + B_{12} = 6 + 8 = 14\\
\end{align*}
$$

$$
\begin{align*}
P_1 & = A_{11} \cdot S_1 = 1 \cdot 6 = 6 \\
P_2 & = S_2 \cdot B_{22} = 4 \cdot 2 = 8 \\
P_3 & = S_3 \cdot B_{11} = 12 \cdot 6 = 72 \\
P_4 & = A_{22} \cdot S_4 = 5 \cdot (-2) = -10 \\
P_5 & = S_5 \cdot S_6 = 6 \cdot 8 = 48 \\
P_6 & = S_7 \cdot S_8 = -2 \cdot 6 = -12 \\
P_7 & = S_9 \cdot S_{10} = -6 \cdot 14 = -84\\
\end{align*}
$$

$$
\begin{align*}
C_{11} & = P_5 + P_4 - P_2 + P_6 = 48 - 10 - 8 - 12 = 18 \\
C_{12} & = P_1 + P_2 = 6 + 8 = 14 \\
C_{21} & = P_3 + P_4 = 72 - 10 = 62 \\
C_{22} & = P_5 + P_1 - P_3 - P_7 = 48 + 6 - 72 + 84 = 66 \\
\end{align*}
$$

得到最终结果：

$$
C =
\begin{bmatrix}
18 & 14 \\
62 & 66
\end{bmatrix}
$$

### 4.2-2 为 Strassen 算法编写伪代码。

先简单假设输入矩阵 A B 规模是 2 的幂。

算法思路：
1、将每个大矩阵分为四个子矩阵，直到最小的子矩阵元素为数字。
2、通过 Strassen 算法，将子矩阵的八次乘法运算，改为七次乘法运算。

实现思路：分治法求解。

```c
// 基本矩阵的加减法
CalcMatrixAdditionOrSubtraction(baseMatrixA,baseMatrixB,operator)
  // 过程略
  return baseMatrixA operator baseMatrixB

// 基本矩阵的乘法
CalcMatrixMultiplication(baseMatrixA,baseMatrixB)
  // 过程略
  return baseMatrixA * baseMatrixB

// 输入规模 n 的矩阵 A B
// 用 A_11 A_12 A_21 A_22 表示 A 的子矩阵， B 同理
CalcStrassen(A,B)
  if A_11 is number
    return CalcMatrixMultiplication(A,B)
  for i = 1 to 11
    // 根据 Strassen 算法定义 10 个 S 矩阵
    S_i = CalcMatrixAdditionOrSubtraction(subMatrix,subMatrix,operator)
  for j = 1 to 8
    // 根据 Strassen 算法定义 7 个 P 矩阵
    // 由于不是基本矩阵，需要递归得到
    P_j = CalcStrassen(subMatrixOrS_i,subMatrixOrS_i)
  // 元素具备之后，根据 Strassen 算法加减运算得到 C
  // 过程略
  return C
```
