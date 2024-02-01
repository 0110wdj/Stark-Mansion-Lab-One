## 4.3 practice

### 4.3-1 证明：\(T(n)=T(n-1)+n\)的解为\(Ο(n^2)\)。

代入法证明步骤：
1、猜测解的形式。
2、用数学归纳法求出解中的常数，并证明解是正确的。

证明过程：

1、猜测：\(T(n) = Ο(n^2)\)。

2、需要证明：

$$
\begin{align*}
T(n) & \leq cn^2 \\
c(n-1)^2 + n & \leq cn^2 \\
c(n^2-2n + 1) + n & \leq cn^2 \\
cn^2-2cn + c + n & \leq cn^2 \\
(1-2c)n + c & \leq 0 \\
\end{align*}
$$

显然 c 大于 0.5 时，对一定规模的 n 上式成立。

### 4.3-2 证明 \(T(n)=T(\lceil n/2 \rceil)+1\)的解为 \(Ο(\lg n)\)。

代入法证明步骤：
1、猜测解的形式。
2、用数学归纳法求出解中的常数，并证明解是正确的。

1、猜测：\(T(n) = Ο(\lg n)\)。

2、需要证明：

$$
\begin{align*}
T(n) & \leq c\lg n \\
c(\lg \lceil n/2 \rceil) + 1 & \leq c\lg n \\
\lg \lceil n/2 \rceil + 1/c & \leq \lg n \\
1/c & \leq \lg n - \lg \lceil n/2 \rceil \\
1/c & \leq \lg n/(\lceil n/2 \rceil) \\
1 & \leq c \\
\end{align*}
$$

证毕