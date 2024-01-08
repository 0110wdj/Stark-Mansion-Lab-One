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
log(a^{log_bc}) = log_bc * log(a)\\
log(c^{log_ba}) = log_ba * log(c)\\
需证明 log_bc * loga = log_ba * logc\\
\frac {log_bc}{log_ba}=\frac {logc}{loga}\\
log_ac =log_ac\\
$$

证毕
