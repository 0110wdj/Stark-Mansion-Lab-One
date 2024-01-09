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
