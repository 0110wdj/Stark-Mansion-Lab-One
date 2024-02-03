## 4.3 practice

### 4.3-1 证明：\(T(n)=T(n-1)+n\)的解为\(Ο(n^2)\)。

代入法证明步骤：
1、猜测解的形式。
2、用数学归纳法求出解中的常数，并证明解是正确的。

证明过程：

1、猜测：\(T(n) = Ο(n^2)\)，则需要证明 \(T(n) \leq cn^2\)。

2、归纳证明：

假定此上界对所有正数 \(m < n\) 都成立，特别是对于 \(m = n - 1\)，有 \(T(n - 1) \leq c(n-1)^2\)。

将其代入递归式，得到：

$$
\begin{align*}
T(n) & \leq c(n-1)^2 +n \\
T(n) & \leq cn^2 - 2cn + 1 +n \\
T(n) & \leq cn^2 + (1- 2c)n + 1 \\
当 c 大于 0.5 时，可得：\\
T(n) & \leq cn^2 + (1- 2c)n + 1 \leq cn^2 \\
T(n) & \leq cn^2 \\
\end{align*}
$$

证明完毕

### 4.3-2 证明 \(T(n)=T(\lceil n/2 \rceil)+1\)的解为 \(Ο(\lg n)\)。

代入法证明步骤：
1、猜测解的形式。
2、用数学归纳法求出解中的常数，并证明解是正确的。

证明过程：

1、猜测：\(T(n) = Ο(\lg n)\)，则需要证明 \(T(n) \leq c\lg n\)。
2、归纳证明：

假定此上界对所有正数 \(m < n\) 都成立，特别是对于 \(m = \lceil n/2 \rceil\)，有 \(T(\lceil n/2 \rceil) \leq c\lg \lceil n/2 \rceil\)。

将其代入递归式，得到：

$$
\begin{align*}
T(n) & \leq c\lg \lceil n/2\rceil + 1 \\
T(n) & \leq c\lg(n/2) + 1 \\
T(n) & \leq c\lg n - c\lg 2 + 1 \\
T(n) & \leq c\lg n - c + 1 \\
当 c 在 0 和 1 之间时，可得：\\
T(n) & \leq c\lg n - c + 1 \leq c\lg n \\
T(n) & \leq c\lg n \\
\end{align*}
$$

证毕

### 4.3-3 我们看到 \(T(n)=2T(\lfloor n/2 \rfloor) + n\) 的解为 \(Ο(n \lg n)\)。证明 \(Ω(n\lg n)\)也是这个递归式的解。从而得出结论：解为 \(Θ(n\lg n)\)。

代入法证明步骤：
1、猜测解的形式。
2、用数学归纳法求出解中的常数，并证明解是正确的。

证明过程：

1、猜测：\(T(n) = Ω(n \lg n)\)，则需要证明 \(T(n) \geq cn\lg n\)。
2、归纳证明：

假定此下界对对所有正数 \(m < n\) 都成立，特别是对于 \(m = \lfloor n/2 \rfloor\)，有 \(T(\lfloor n/2 \rfloor) \geq c\lfloor n/2 \rfloor\lg \lfloor n/2 \rfloor\)。

将其代入递归式，得到：

$$
\begin{align*}
T(n) & \geq 2c\lfloor n/2 \rfloor\lg \lfloor n/2 \rfloor + n \\
T(n) & \geq cn\lg(n/2) + n \\
T(n) & \geq cn\lg n - cn\lg 2 + n \\
T(n) & \geq cn\lg n - cn + n \\
当 c 在 0 和 1 之间时，可得：\\
T(n) & \geq cn\lg n - cn + n \geq cn\lg n \\
T(n) & \geq cn\lg n \\
\end{align*}
$$

证明完成。
