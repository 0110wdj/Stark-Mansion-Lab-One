## 3.2 practice

### 3.2-1 证明：若 f(n) 和 g(n) 是单调递增的函数，则函数 f(n)+g(n) 和 f(g(n)) 也是单调递增的，此外，若 f(n) 和 g(n) 是非负的，则 f(n)⋅g(n) 是单调递增的。

根据函数单调性定义：

$$
若 m \leq n 蕴含 f(m) \leq f(n),则函数 f(n) 是单调递增的。
$$

证明：

已知 f(n) 和 g(n) 是单调递增的函数，则存在 m ≤ n 使得 f(m) ≤ f(n), g(m) ≤ g(n)。

显然 f(m)+g(m) ≤ f(n)+g(n)

**则有函数 h(n) = f(n)+g(n) 为单调递增函数(证明 1)**

令 x = g(m), y = g(n)
存在 g(m) ≤ g(n) 即 x ≤ y
对 f(x) ≤ f(y) 成立
带入得
f(g(m)) ≤ f(g(n)) 对 m ≤ n 成立

**则有函数 h(n) = f(g(n)) 为单调递增函数(证明 2)**

f(m) ≤ f(n)
f(m)⋅g(n) ≤ f(n)⋅g(n)
f(m)⋅g(n) ≤ f(n)⋅g(n)

g(m) ≤ g(n)
g(m)⋅f(m) ≤ g(n)⋅f(m)

**综上 f(m)⋅g(m) ≤ f(n)⋅g(n) (证明 3)**

### 3.2-2 证明等式(3.16)

等式(3.16)原文：

$$
a^{log_bc} = c^{log_ba}
$$

证明：
使用的基本性质：

$$
log_b(a^n) = n⋅log+b(a)\\
log_ba=\frac{log_ca}{log_cb}
$$

证明过程：

$$
log(a^{log_bc}) = log_bc⋅log(a)\\
log(c^{log_ba}) = log_ba⋅log(c)\\
需证明 log_bc⋅loga = log_ba⋅logc\\
\frac {log_bc}{log_ba}=\frac {logc}{loga}\\
log_ac =log_ac\\
$$

证毕

### 3.2-3 证明等式(3.19)。并证明 \(n! = ω(2^n)\) 且 \(n! = ο(n^n)\)

等式(3.19)原文：

$$
lg(n!) = Θ(nlgn)
$$

证明 1：

根据 n! 的定义：n! = 1⋅2⋅3⋅⋅⋅n，可得：（当 n > 1 时成立）
\(2^n\) = 2⋅2⋅2⋅⋅⋅2 ≤ n! ≤ n⋅n⋅n⋅⋅⋅n = \(n^n\)

求除法极限：

$$
\lim_{x \to n} \frac {2^n}{n!} = \frac {2⋅2⋅2⋅⋅⋅2}{1⋅2⋅3⋅⋅⋅n} = 2⋅1⋅\frac {2}{3}⋅⋅⋅\frac {2}{n-1}⋅\frac {2}{n}  = 0 \\
---- \\
---- \\
\lim_{x \to n} \frac {n^n}{n!} = \frac {n⋅n⋅n⋅⋅⋅n}{1⋅2⋅3⋅⋅⋅n} = n⋅\frac {n}{2}⋅\frac {n}{3}⋅⋅⋅⋅\frac {n}{n-1}⋅1  = \infty \\
$$

**证得 \(n! = ω(2^n)\) 且 \(n! = ο(n^n)\)**

证明 2：

先列出定义：

$$
Θ(g(n))={f(n):存在正常量 c_1、c_2 和 n_0，使得对所有 n \geq n_0，有 0 \leq c_1g(n) \leq f(n) \leq c_2g(n)}
$$

需要证明:

$$
c_1nlgn ≤ lg(n!) ≤ c_2nlgn\\
即 nlgn^{c_1} ≤ lg(n!) ≤ nlgn^{c_2}\\
$$

证明：

$$
已知 n! = ω(2^n) 且 n! = ο(n^n)\\
则有 2^n < n! < n^n\\
根据函数单调性 lg(2^n) < lg(n!) < lg(n^n)\\
即 nlg2 < lg(n!) < nlgn
$$

显然，存在 \(c_1\) 和 \(c_2\) 使得下面不等式成立：

$$
nlgn^{c_1} ≤ lg(n!) ≤ nlgn^{c_2}
$$

证毕(存在疑惑)

### 3.2-4 函数 \( ⌈ lgn ⌉ !\) 多项式有界吗？函数 \( ⌈ lglgn ⌉ !\) 多项式有界吗？

根据网上获取到的定义：

函数 f(x) 有界：
对于函数 f(x)，如果存在实数 M 和 N，使得对于所有的 x 在定义域内，都有 M ≤ f(x) ≤ N，那么这个函数就被称为有界的。

函数 f(x) 多项式有界：
这存在一个多项式 P(x) 和正实数 M，使得对于所有 x 大于某个阈值 N，都有 \(∣⌈logx⌉!∣ ≤ P(x)\)，即 \(∣⌈logx⌉!∣\)在某个点之后始终受到某个多项式 P(x) 的界限。

**没有找到可靠的信息，此题略过。**

### 3.2-5 如下两个函数中，哪一个渐近更大些：\(lg(lg^∗n)\) 还是 \(lg^∗(lgn)\)?

直接展开看看：

\(lg(lg^∗n)\)
= \(lg(lg(lg(..lg(2)..)))\)

**n+1 个 lg**

\(lg^∗(lgn)\)
=\(lg(lg(..lg((lgn))..))\)

**n+1 个 lg**

显然，都是递增函数，下面的式子渐近更大一些。

### 3.2-6 证明：黄金分割率 \(\phi\) 及其共轭数 \(\hat{\phi}\) 都满足方程 \(x^2=x+1\) 。

求解方程得：
\(x_1=\frac{1+\\\sqrt5}{2}\)
\(x_2=\frac{1-\\\sqrt5}{2}\)

根据黄金分割率的定义：～。

证明完成。（存疑）

### 3.2.7 用归纳法证明：第 i 个斐波那契数满足等式 \(F_i=\frac{\phi^i - \hat{\phi}^i}{\sqrt 5}\)，其中 \(\phi\) 是黄金分割率且 \(\hat{\phi}\) 是其共轭数。

**证明：**

显然 \(F_0 = 0, F_1 = 1\)

第一步（基础情况）:
我们首先证明当 n = 2 时,

左侧：
\(F_2 = 1\)

右侧：
\(\frac{\phi^i - \hat{\phi}^i}{\sqrt 5}\)
= \(\frac{\phi^2 - \hat{\phi}^2}{\sqrt 5}\)
= \(\frac{(\frac{1+\\\sqrt5}{2})^2 - (\frac{1-\\\sqrt5}{2})^2}{\sqrt 5}\)
= \(\frac{(\frac{1+\\\sqrt5}{2}-\frac{1-\\\sqrt5}{2} )(\frac{1+\\\sqrt5}{2}+\frac{1-\\\sqrt5}{2})}{\sqrt 5}\)
= 1

基础情况成立。

第二步(归纳假设):
假设对于第 k 个数子，即 i = k 时等式成立，则有 \(F_k = \frac{\phi^k - \hat{\phi}^k}{\sqrt 5}\) 成立。

第三步(归纳证明):
我们需要证明当 i = k + 1 时，

$$
F_{k+1} = \frac{\phi^{k+1} - \hat{\phi}^{k+1}}{\sqrt 5}
$$

能够成立。

根据斐波那契数列定义可得：

$$
F_{k+1} = F_k + F_{k-1} = \frac{\phi^{k} - \hat{\phi}^{k}}{\sqrt 5} + \frac{\phi^{k-1} - \hat{\phi}^{k-1}}{\sqrt 5} = \frac{\phi^k + \phi^{k-1} - \hat{\phi}^k - \hat{\phi}^{k-1}}{\sqrt 5} = \frac{(\phi + 1)(\phi^{k-1}) - (\hat{\phi} + 1)(\hat{\phi}^{k-1})}{\sqrt 5}
$$

根据定义：\(\phi\) 和 \(\hat{\phi}\) 是方程 \(x^2 = x + 1\) 的两个根，所以有：

$$
\phi^2 = \phi + 1\\
\hat{\phi}^2 = \hat{\phi} + 1
$$

带入上式继续计算：

$$
F_{k+1} = \frac{(\phi^2)(\phi^{k-1}) - (\hat{\phi}^2)(\hat{\phi}^{k-1})}{\sqrt 5} = \frac{\phi^{k+1} - \hat{\phi}^{k+1}}{\sqrt 5}
$$

证明完成。

### 3.2.8 证明：klnk = Θ(n) 蕴涵着 k = Θ(n/lnn)。

根据定义：

$$
Θ(g(n))={f(n):存在正常量 c_1、c_2 和 n_0，使得对所有 n \geq n_0，有 0 \leq c_1g(n) \leq f(n) \leq c_2g(n)}
$$

有：
\(c_1g(n) ≤ f(n) ≤ c_2g(n) \)
\(c_1n ≤ klnk ≤ c_2n \)
**对任意 k 成立**

令 \(k = \frac{n}{lnn}\)，下式也成立：
\(c_1n ≤ \frac{n}{lnn}ln(\frac{n}{lnn}) ≤ c_2n \)
\(c_1 ≤ \frac{1}{lnn}ln(\frac{n}{lnn}) ≤ c_2 \)
\(c_1lnn ≤ ln(\frac{n}{lnn}) ≤ c_2lnn \)
\(c_1lnn ≤ lnn - lnlnn ≤ c_2lnn \)
\(c_1 ≤ 1 - \frac{lnlnn}{lnn} ≤ c_2\)
\(c_1 + \frac{lnlnn}{lnn} ≤ 1 ≤ c_2 + \frac{lnlnn}{lnn} \)

需证明：
\(\frac{c_3n}{lnn} ≤ k ≤ \frac{c_4n}{lnn}\)
\(\frac{c_3n}{lnn} ≤ \frac{n}{lnn} ≤ \frac{c_4n}{lnn}\)
\(c_3 ≤ 1 ≤ c_4\)

**关键步骤：**
当 n 足够大时，\( \frac{lnlnn}{lnn} \) 趋紧于 0，所以存在约等于 \(c_3 = c_1 + \frac{lnlnn}{lnn} \) 常数，使得需证明的不等式链左侧成立。右侧同理。（存疑）

## think

### 3-1 (多项式的渐近行为)

假设

$$
p(n) = \lim_{i=0 \to d}a_in^i
$$

是一个关于 n 的 d 次多项式，其中 \(a_d > 0\), k 是一个常量。

使用渐近记号的定义来证明下面的性质。

a.若 k ≥ d，则 \(p(n) = Ο(n^k)\)。
b.若 k ≤ d，则 \(p(n) = Ω(n^k)\)。
c.若 k = d，则 \(p(n) = Θ(n^k)\)。
d.若 k > d，则 \(p(n) = ο(n^k)\)。
e.若 k < d，则 \(p(n) = ω(n^k)\)。

证明：

- a

根据 Ο 定义：

$$
Ο(g(n))={f(n):存在正常量 c 和 n_0，使得对所有 n \geq n_0，有 0 \leq f(n) \leq cg(n)}
$$
