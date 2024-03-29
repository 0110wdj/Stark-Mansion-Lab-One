## 3.1 practice

### 3.1-1 假设 f(n) 与 g(n) 都是渐近非负函数。使用 Θ 记号的基本定义来证明 max(f(n),g(n)) = Θ(f(n)+g(n))。

（下面可能是一本正经的胡说八道）

根据 Θ 记号的定义：
Θ(g(n))={f(n):存在正常量 c1、c2 和 n0，使得对所有 n >= n0，有 0 <= (c1)g(n) <= f(n) <= (c2)g(n)}

在此题目中，令 m(n) = f(n)+g(n)，则有 Θ(f(n)+g(n)) = Θ(m(n))。

存在 h(n) = Θ(m(n)) 及相关常量 a、b，及存在 am(n) <= h(n) <= bm(n)

带入 m(n) = f(n)+g(n) 得： af(n) + ag(n) <= h(n) <= bf(n) + bg(n)

af(n) - bf(n) <= h(n) - ag(n) - bf(n) <= bg(n) - ag(n)

(a-b)f(n) <= h(n) - ag(n) - bf(n) <= (b-a)g(n)

存在 -f(n) <= (h(n) - ag(n) - bf(n))/(b-a) <= g(n)
0 <= 1/(b-a)(h(n) - ag(n) - bf(n))+ fn <= g(n) + f(n)

1/(b-a)(h(n) - ag(n) - bf(n))+ fn <= g(n) + f(n)
1/(b-a)(h(n) - ag(n) - bf(n)) <= g(n)
(h(n) - ag(n) - bf(n)) <= (b-a)g(n)
h(n) - ag(n) - bf(n) <= bg(n) - ag(n)
h(n) <= bg(n) - ag(n) + ag(n) + bf(n)
h(n) <= bg(n) + bf(n)

令 h(n) = max(f(n),g(n))，假设 f(n) >= g(n)

f(n) <= bg(n) + bf(n)
(1-b)f(n) <= bg(n)
f(n) <= (1-b)/bg(n)
g(n) <= (1-b)/bg(n)
1 <= (1-b)/b
b <= (1-b)
b <= 1/2

显然存在这样的 b,那么也就存在 h(n) = max(f(n),g(n)) ，即有 max(f(n),g(n)) = Θ(f(n)+g(n))。

### 3.1-2 证明：对任意实常量 a 和 b，其中 b > 0，有 (n+a)^b = Θ(n^b)。

方法一：

非形式化的证明：(n+a)^b 最高次元为 n^b ，则运行时间为 Θ(n^b)。

方法二：

根据 Θ 记号的定义：
Θ(g(n))={f(n):存在正常量 c1、c2 和 n0，使得对所有 n >= n0，有 0 <= (c1)g(n) <= f(n) <= (c2)g(n)}

带入已知条件，需要证明：
(c1)n^b <= (n+a)^b <= (c2)n^b
c1 <= (n+a)^b/(n^b) <= c2
c1 <= ((n+a)/n)^b <= c2
c1 <= (1+a/n)^b <= c2

当 n 足够大时，a/n 近似为 0，则有 c1 <= 1 <= c2，显然能够成立。

### 3.1-3 解释为什么“算法 A 的运行时间至少是 O(n^2)”这一表述是无意义的。

根据 Ο 记号的定义：
Ο(g(n))={f(n):存在正常量 c 和 n0，使得对所有 n >= n0，有 0 <= f(n) <= cg(n)}

Ο 记号只保证运行时间的渐进上界，所以只能说 “算法 A 的运行时间至多是 O(n^2)”。

如果 “算法 A 的运行时间至少是 O(n^2)” 成立，其实等同于 算法 A 的运行时间至少是 0。这样的表述明显没有意义。

### 3.1-4 2^(n+1) = O(2^n) 成立吗？2^(2n) = O(2^n) 成立吗？

需证明:存在正常量 c 和 n0，使得对所有 n >= n0，有 0 <= f(n) <= cg(n)

第一个等式 2^(n+1) = O(2^n) 成立
即 2^(n+1) <= c(2^n)
2 <= c

有解

第二个等式 2^(2n) = O(2^n) 不成立
2^(2n) <= c(2^n)
2^n <= c

无解

### 3.1-5 证明定理 3.1。

定理 3.1 原文：
在 ο 记号中，当 n 趋于无穷时，函数 f(n) 相对 g(n) 来说变得微不足道，即：

$$
\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0
$$

证明：
根据 ο 记号的定义：

$$
ο(g(n))=\{f(n):对任意正常量 c > 0，存在常量n_0 >0，使得对所有 n >= n_0，有 0 <= f(n) < cg(n)\}
$$

换算一下：

$$
f(n) < cg(n)\\
\frac{f(n)}{g(n)} < c \\
\lim_{n \to \infty} \frac{f(n)}{g(n)} < c
$$

由于需要满足小于任意正常量 c, 所以左侧只能是 0。

### 3.1-6 证明：一个算法的运行时间 Θ(g(n))当且仅当其最坏情况运行时间为 Ο(g(n))，且其最好情况运行时间为 Ω(g(m))。

证明：

先列出定义：

$$
Θ(g(n))={f(n):存在正常量 c_1、c_2 和 n_0，使得对所有 n \geq n_0，有 0 \leq c_1g(n) \leq f(n) \leq c_2g(n)}
$$

$$
Ο(g(n))={f(n):存在正常量 c 和 n_0，使得对所有 n \geq n_0，有 0 \leq f(n) \leq cg(n)}
$$

$$
Ω(g(n))={f(n):存在正常量 c 和 n_0，使得对所有 n \geq n_0，有 0 \leq cg(n) \leq f(n) }
$$

对某个算法，
当其最坏情况运行时间为 Ο(g(n))时，有

$$
f(n)≤cg(n)
$$

当其最好情况运行时间为 Ω(g(m))时，有

$$
f(n) \geq cg(n)
$$

这两个 c 不同，可记为

$$
c_1 和 c_2
$$

那么两种情况都存在时，算法运行时间在两个 cg(n) 之间。正好符合定义。

### 3.1-7 证明：ο(g(n)) ∩ ω(g(n)) 为空集。

根据两者的定义

$$
ο(g(n))=\{f(n):对任意正常量 c > 0，存在常量n_0 >0，使得对所有 n ≥ n_0，有 0 ≤ f(n) < cg(n)\}
$$

$$
ω(g(n))=\{f(n):对任意正常量 c > 0，存在常量n_0 >0，使得对所有 n ≥ n_0，有 0 ≤ cg(n) < f(n)\}
$$

于是有下面集合：

$$
ο(g(n)) ∩ ω(g(n))=\{f(n):对任意正常量 c_1 > 0，c_2 > 0, 存在常量 n_0 > 0，使得对所有 n ≥ n_0，有 0 ≤ c_1g(n) < f(n) < c_2g(n)\}
$$

显然，下式无法成立：

$$
c_1g(n) < f(n) < c_2g(n) 且 c_1 = c_2
$$

### 3.1-8 （扩展定义）

可以扩展我们的记号到有两个参数 n 和 m 的情形，其中的 n 和 m 可以按不同速率独立地趋于无穷。对于给定的函数 g(n,m)，用 Ο(g(n,m)) 来表示以下函数集：

$$
Ο(g(n,m)) = \{f(n,m)：存在正常量 c、n_0 和 m_0，使得对所有 n ≥ n_0 或 m ≥ m_0，有 0 ≤ f(n,m) ≤ cg(n,m)｝
$$

对 Ω(g(n,m)) 和 Θ(g(n,m)) 给出相应的定义。

解：
参照上文的形式即可，得：

$$
Ω(g(n,m)) = \{f(n,m)：存在正常量 c、n_0 和 m_0，使得对所有 n ≥ n_0 或 m ≥ m_0，有 0 ≤  cg(n,m) ≤ f(n,m)｝
$$

$$
Θ(g(n,m)) = \{f(n,m)：存在正常量 c_1、c_2、n_0 和 m_0，使得对所有 n ≥ n_0 或 m ≥ m_0，有 0 ≤ c_1g(n,m) ≤ f(n,m) ≤ c_2g(n,m)｝
$$

完。

另外，思考下 3.1-8 的意义。

个人理解为，如果只有一个参数，则可以直观的理解为平面图中渐近上界和渐近下界中间的区域。

如果有两个参数，则可以认为是立体空间中的一个圆锥体空间。
