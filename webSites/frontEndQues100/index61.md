## 61 介绍下如何实现 token 加密

> 服务端在生成 token 时，加入少量的用户信息，比如用户的 id。服务端接收到 token 之后，可以解析出这些数据，从而将 token 和用户关联了起来。

> 需要一个 secret（随机数）
> 后端利用 secret 和加密算法(如：HMAC-SHA256)对 payload(如账号密码)生成一个字符串(token)，返回前端
> 前端每次 request 在 header 中带上 token
> 后端用同样的算法解密

## 62 redux 为什么要把 reducer 设计成纯函数

redux 的设计思想就是不产生副作用，数据更改的状态可回溯，所以 redux 中处处都是纯函数

redux 三大原则

- 单一数据流
  整个应用 state 都被储存在一个 store 里面 构成一个 Object tree
- State 是只读的
  唯一改变 state 的方法就是触发 action, action 是一个用于描述已发生事件的普通对象
- 使用纯函数来执行修改
  为了描述 action 如何改变 state tree， 你需要编写 reducers
  把 reducer 设计成纯函数，可以实现时间旅行，记录/回放或者热加载

store 里的 state 是一个引用类型，多个组件都可能共享这个 state，如果允许直接在组件中修改这个 state，由于组件间千丝万缕的关系，复杂度会变得很高，定位问题会变得异常困难，因为很难搞清楚到底是哪个组件“搞坏”了数据，而采用纯函数就没有这样的副作用。

## 63 如何设计实现无缝轮播

代码千万种，这里主要说一下两种实现思想：

- 每次轮播元素动画执行到末尾的时候迅速让其位置恢复原位，造成视觉上的无缝轮播
- 将轮播元素复制一份，第一个 item 元素轮播执行完后将其删除后添加在整个轮播列表的最后，造成循环轮播

## 64 模拟实现一个 Promise.finally

64.js

## 65 哪个性能更高？

```js
a["b"]["c"]["d"];
a.b.c.d;
```

> 这个题从 AST 角度看就很简单了，两者转换成 AST 前者的的树是含计算的，后者只是 string literal，天然前者会消耗更多的计算成本，时间也更长。

## 66 ES6 代码转成 ES5 代码的实现思路是什么

ES6 转 ES5 分为以下两种情况

- 1.语法转换
  ES6 语法通过 babel 等工具为 ES5 语法，本质是将 ES6 语法转 AST（抽象语法数——对编程语言编写的程序的一种描述）再将 AST 转为 ES5 语法代码；例如：let,const 转换为 var，箭头函数转换为 function 函数声明等
- 2.API 转换
  采用 babel-polyfill 等工具对 ES5 中不存在的 API（包括 Set 等 ES6 中新的数据结构）做修复，例如：Array.prototype.includes Set Map 等在 ES5 中不存在，需要用相应的 ES5 代码实现这些 API

## 67 数组编程题

```
随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
```

67.js

## 68 如何解决移动端 Retina 屏 1px 像素问题？

[7 种方法解决移动端 Retina 屏幕 1px 边框问题](https://juejin.cn/post/6844903456717668359)

## 69 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。

略

## 70 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的。

Webpack 的热更新通过以下几个关键点实现：

- 监听文件更改，重新编译模块。

- 使用 WebSocket 通知浏览器模块变更。

- 浏览器通过 HMR API 加载更新的模块。

- 保持页面状态不变，避免刷新浏览器。

## 71 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

71.js

## 72 为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因。

不一定。

### 🔍 一览表：`for` vs `forEach`

| 比较维度          | `for` 循环                    | `forEach` 循环                      |
| ----------------- | ----------------------------- | ----------------------------------- |
| **语法类型**      | 语法结构（流程控制）          | 数组方法（函数式）                  |
| **函数调用开销**  | ✅ 无函数调用开销             | ❌ 每次迭代调用一次回调函数         |
| **可中断性**      | ✅ 支持 `break` / `continue`  | ❌ 不支持中断，只能抛异常           |
| **异步兼容性**    | ✅ 可搭配 `await` 串行执行    | ⚠️ 异步回调中 `await` 不起作用      |
| **可读性/简洁性** | ❌ 写法更长、更灵活           | ✅ 简洁易读（尤其适合简单逻辑）     |
| **稀疏数组处理**  | ❌ 会访问所有索引（包括空项） | ✅ 自动跳过稀疏项                   |
| **链式调用能力**  | ❌ 无法链式调用               | ✅ 可与 `map` / `filter` 等组合使用 |
| **性能表现**      | ✅ 更快（特别是大数组）       | ❌ 函数式开销稍大                   |
| **引擎优化**      | ✅ 优化更成熟                 | ⚠️ 抽象程度高，优化有限             |
| **语义清晰性**    | ⚠️ 灵活但易写错               | ✅ 回调封装逻辑更清晰               |

### ✅ 推荐使用场景总结：

| 使用场景描述                              | 推荐用法                | 理由说明                   |
| ----------------------------------------- | ----------------------- | -------------------------- |
| 遍历大数组，追求性能                      | `for`                   | 避免回调函数开销，性能更优 |
| 需要中途退出循环（如找到目标值后）        | `for`                   | 支持 `break` / `return`    |
| 逻辑简单、偏向声明式风格                  | `forEach`               | 简洁可读                   |
| 遍历稀疏数组，跳过空项                    | `forEach`               | 自动跳过空值               |
| 与 `map/filter/reduce` 等链式函数组合使用 | `forEach`               | 风格一致、表达清晰         |
| 异步任务需并发处理（如下载多个文件）      | `forEach + Promise.all` | 可并发执行所有任务         |
| 异步任务需严格串行执行（逐个处理）        | `for + await`           | 逐步等待完成，保证顺序     |
| 数组可能在遍历中被修改（如添加元素）      | `forEach`               | 避免死循环，行为更稳定     |

## 73 介绍下 BFC、IFC、GFC 和 FFC

| 格式化上下文 | 触发方式                | 用于           | 特性简述                                 |
| ------------ | ----------------------- | -------------- | ---------------------------------------- |
| BFC          | `overflow`, `float`, 等 | 块状元素布局   | 独立布局环境，清除浮动、避免 margin 合并 |
| IFC          | 默认块中行内元素        | 文本和内联内容 | 行内排布，受字体、行高、基线对齐影响     |
| GFC          | `display: grid`         | 网格布局       | 二维布局，定义行列，强大控制能力         |
| FFC          | `display: flex`         | 弹性布局       | 一维方向排布，自动分配空间，灵活         |

BFC（Block formatting contexts）：块级格式上下文
页面上的一个隔离的渲染区域，那么他是如何产生的呢？可以触发 BFC 的元素有 float、position、overflow、display：table-cell/ inline-block/table-caption ；BFC 有什么作用呢？比如说实现多栏布局’

IFC（Inline formatting contexts）：内联格式上下文
IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同
IFC 中时不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排列。
那么 IFC 一般有什么用呢？
水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。
垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

GFC（GrideLayout formatting contexts）：网格布局格式化上下文
当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

FFC（Flex formatting contexts）:自适应格式上下文
display 值为 flex 或者 inline-flex 的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少 safari 和 chrome 还是 OK 的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。

## 74 使用 JavaScript Proxy 实现简单的数据绑定

74.html

## 75 数组里面有 10 万个数据，取第一个元素和第 10 万个元素的时间相差多少

JavaScript 没有真正意义上的数组，所有的数组其实是对象，其“索引”看起来是数字，其实会被转换成字符串，作为属性名（对象的 key）来使用。所以无论是取第 1 个还是取第 10 万个元素，都是用 key 精确查找哈希表的过程，其消耗时间大致相同。

## 76 输出以下代码运行结果

```js
// example 1
var a = {},
  b = "123",
  c = 123;
a[b] = "b";
a[c] = "c";
console.log(a[b]); // c

// ---------------------
// example 2
var a = {},
  b = Symbol("123"),
  c = Symbol("123");
a[b] = "b";
a[c] = "c";
console.log(a[b]); // b

// ---------------------
// example 3
var a = {},
  b = { key: "123" },
  c = { key: "456" };
a[b] = "b";
a[c] = "c";
console.log(a[b]); // c
```

这题考察的是对象的键名的转换。

- 对象的键名只能是字符串和 Symbol 类型。
- 其他类型的键名会被转换成字符串类型。
- 对象转字符串默认会调用 toString 方法。

example 3 对象类型会调用 toString 方法转换成字符串 [object Object]。

## 77 算法题「旋转数组」, 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

77.js

我看到一个很巧妙的写法，步骤是这样的：
1、翻转整个数组；
2、翻转前 n-k 个元素；
3、翻转后 k 个元素；
翻转逻辑为：两边向中间遍历，并交换元素。

例如：

输入 [1, 2, 3, 4, 5, 6, 7] k=3
一步 [7, 6, 5, 4, 3, 2, 1]
二步 [4, 5, 6, 7, 3, 2, 1]
三步 [4, 5, 6, 7, 1, 2, 3]

时间复杂度为 Ο(n/2+(n-k)/2+k/2) = Ο(n)
空间复杂度为 O(1)

## 78 Vue 的父组件和子组件生命周期钩子执行顺序是什么

> 父组建： beforeCreate -> created -> beforeMount
> 子组件： -> beforeCreate -> created -> beforeMount -> mounted
> 父组件： -> mounted
> 总结：从外到内，再从内到外

## 79 input 搜索如何防抖，如何处理中文输入

防抖就不说了，主要是这里提到的中文输入问题，其实看过 elementui 框架源码的童鞋都应该知道，elementui 是通过 compositionstart & compositionend 做的中文输入处理：
相关代码：

```js
<input
ref="input"
@compositionstart="handleComposition"
@compositionupdate="handleComposition"
@compositionend="handleComposition"
>
```

这 3 个方法是原生的方法，这里简单介绍下，官方定义如下 compositionstart 事件触发于一段文字的输入之前（类似于 keydown 事件，但是该事件仅在若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）
简单来说就是切换中文输入法时在打拼音时(此时 input 内还没有填入真正的内容)，会首先触发 compositionstart，然后每打一个拼音字母，触发 compositionupdate，最后将输入好的中文填入 input 中时触发 compositionend。触发 compositionstart 时，文本框会填入 “虚拟文本”（待确认文本），同时触发 input 事件；在触发 compositionend 时，就是填入实际内容后（已确认文本）,所以这里如果不想触发 input 事件的话就得设置一个 bool 变量来控制。

## 80 介绍下 Promise.all 使用、原理实现及错误处理

Promise.all()方法将多个 Promise 实例包装成一个 Promise 对象（p），接受一个数组（p1,p2,p3）作为参数，数组中不一定需要都是 Promise 对象，但是一定具有 Iterator 接口，如果不是的话，就会调用 Promise.resolve 将其转化为 Promise 对象之后再进行处理。
使用 Promise.all()生成的 Promise 对象（p）的状态是由数组中的 Promise 对象（p1,p2,p3）决定的；
1、如果所有的 Promise 对象（p1,p2,p3）都变成 fullfilled 状态的话，生成的 Promise 对象（p）也会变成 fullfilled 状态，p1,p2,p3 三个 Promise 对象产生的结果会组成一个数组返回给传递给 p 的回调函数；
2、如果 p1,p2,p3 中有一个 Promise 对象变为 rejected 状态的话，p 也会变成 rejected 状态，第一个被 rejected 的对象的返回值会传递给 p 的回调函数。
Promise.all()方法生成的 Promise 对象也会有一个 catch 方法来捕获错误处理，但是如果数组中的 Promise 对象变成 rejected 状态时，并且这个对象还定义了 catch 的方法，那么 rejected 的对象会执行自己的 catch 方法，并且返回一个状态为 fullfilled 的 Promise 对象，Promise.all()生成的对象会接受这个 Promise 对象，不会返回 rejected 状态。
