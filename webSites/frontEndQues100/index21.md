## 21 有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣

```js
Object.prototype.toString.call();
instanceof;
Array.isArray();
```

参考资料：

> 1.  Object.prototype.toString.call()

每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话，会返回 [Object type]，其中 type 为对象的类型。但当除了 Object 类型的对象外，其他类型直接使用 toString 方法时，会直接返回都是内容的字符串，所以我们需要使用 call 或者 apply 方法来改变 toString 方法的执行上下文。

```js
const an = ["Hello", "An"];
an.toString(); // "Hello,An"
Object.prototype.toString.call(an); // "[object Array]"
```

这种方法对于所有基本的数据类型都能进行判断，即使是 null 和 undefined 。

```js
Object.prototype.toString.call("An"); // "[object String]"
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call(Symbol(1)); // "[object Symbol]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(function () {}); // "[object Function]"
Object.prototype.toString.call({ name: "An" }); // "[object Object]"
```

Object.prototype.toString.call() 常用于判断浏览器内置对象时。

> 2.  instanceof

instanceof 的内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。

使用 instanceof 判断一个对象是否为数组，instanceof 会判断这个对象的原型链上是否会找到对应的 Array 的原型，找到返回 true，否则返回 false。

```js
[] instanceof Array; // true
```

但 instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true。

```js
[] instanceof Object; // true
```

> 3.  Array.isArray()

- 功能：用来判断对象是否为数组

- instanceof 与 isArray

当检测 Array 实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 可以检测出 iframes

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr); // true
Object.prototype.toString.call(arr); // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false
```

- Array.isArray() 与 Object.prototype.toString.call()

Array.isArray()是 ES5 新增的方法，当不存在 Array.isArray() ，可以用 Object.prototype.toString.call() 实现。

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

> MDN 引用

当检测 Array 实例时，Array.isArray 优于 instanceof，因为 Array.isArray 能跨领域工作。

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 正确检查 Array
Array.isArray(arr); // true
// arr 的原型是 xArray.prototype，它是一个不同于 Array.prototype 的对象
arr instanceof Array; // false
```

## 22 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化

snofly:

> 当涉及到 dom 文档布局变化时，触发浏览器回流；涉及到类似颜色这样的变化时，只触发重绘。
> 优化原理：减少消耗更多的回流；
> 优化手段：1、合并 dom 变化，一次性更新完成；2、动画效果使用 postion:absolute

参考信息：

1. 浏览器渲染机制

- 浏览器采用流式布局模型（Flow Based Layout）
- 浏览器会把 HTML 解析成 DOM，把 CSS 解析成 CSSOM，DOM 和 CSSOM 合并就产生了渲染树（Render Tree）。
- 有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
- 由于浏览器使用流式布局，对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一。

2. 重绘

由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如 outline, visibility, color、background-color 等，重绘的代价是高昂的，因为浏览器必须验证 DOM 树上其他节点元素的可见性。

3. 回流

回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及 DOM 中紧随其后的节点、祖先节点元素的随后的回流。

```html
<body>
  <div class="error">
    <h4>我的组件</h4>
    <p><strong>错误：</strong>错误的描述…</p>
    <h5>错误纠正</h5>
    <ol>
      <li>第一步</li>
      <li>第二步</li>
    </ol>
  </div>
</body>

<!-- 
  在上面的 HTML 片段中，对该段落(<p>标签)回流将会引发强烈的回流，因为它是一个子节点。
  这也导致了祖先的回流（div.error 和 body – 视浏览器而定）。
  此外，<h5>和<ol>也会有简单的回流，因为其在 DOM 中在回流元素之后。
  大部分的回流将导致页面的重新渲染。 
-->
```

回流必定会发生重绘，重绘不一定会引发回流。

4. 浏览器优化

现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即 16.6ms）才会清空队列，但当你获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值。

主要包括以下属性或方法：

- offsetTop、offsetLeft、offsetWidth、offsetHeight
- scrollTop、scrollLeft、scrollWidth、scrollHeight
- clientTop、clientLeft、clientWidth、clientHeight
- width、height
- getComputedStyle()
- getBoundingClientRect()

所以，我们应该避免频繁的使用上述的属性，他们都会强制渲染刷新队列。

5. 减少重绘与回流

- 1 CSS

  - 使用 transform 替代 top
  - 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
  - 避免使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局。
  - 尽可能在 DOM 树的最末端改变 class，回流是不可避免的，但可以减少其影响。尽可能在 DOM 树的最末端改变 class，可以限制了回流的范围，使其影响尽可能少的节点。
  - 避免设置多层内联样式，CSS 选择符从右往左匹配查找，避免节点层级过多。

    ```html
    <div>
      <a> <span></span> </a>
    </div>
    <style>
      span {
        color: red;
      }
      div > a > span {
        color: red;
      }
    </style>
    ```

    对于第一种设置样式的方式来说，浏览器只需要找到页面中所有的 span 标签然后设置颜色，但是对于第二种设置样式的方式来说，浏览器首先需要找到所有的 span 标签，然后找到 span 标签上的 a 标签，最后再去找到 div 标签，然后给符合这种条件的 span 标签设置颜色，这样的递归过程就很复杂。所以我们应该尽可能的避免写过于具体的 CSS 选择器，然后对于 HTML 来说也尽量少的添加无意义标签，保证层级扁平。

  - 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 requestAnimationFrame
  - 避免使用 CSS 表达式，可能会引发回流。
  - 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点，例如 will-change、video、iframe 等标签，浏览器会自动将该节点变为图层。
  - CSS3 硬件加速（GPU 加速），使用 css3 硬件加速，可以让 transform、opacity、filters 这些动画不会引起回流重绘 。但是对于动画的其它属性，比如 background-color 这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

- 2 JavaScript
  - 避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。
  - 避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中
  - 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
  - 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

## 23 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景

参考资料：

> 观察者模式由具体目标调度，每个被订阅的目标里面都需要有对观察者的处理，会造成代码的冗余。而发布订阅模式则统一由调度中心处理，消除了发布者和订阅者之间的依赖。

## 24 聊聊 Redux 和 Vuex 的设计思想

参考资料：

> 共同点
> 首先两者都是处理全局状态的工具库，大致实现思想都是：全局 state 保存状态---->dispatch(action)
> ------>reducer(vuex 里的 mutation)----> 生成 newState; 整个状态为同步操作；

> 区别
> 最大的区别在于处理异步的不同，vuex 里面多了一步 commit 操作，在 action 之后 commit(mutation)之前处理异步，而 redux 里面则是通过中间件处理

ai:

> 1.  Redux

- 单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
- State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
- 使用纯函数来执行修改：为了描述 action 如何改变 state tree ，你需要编写 reducers。
- 三大原则：
  - 单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
  - State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
  - 使用纯函数来执行修改：为了描述 action 如何改变 state tree ，你需要编写 reducers。
- 中间件：Redux 的中间件用于支持异步 action，它可以让我们在 action 和 reducer 之间插入自定义的逻辑。

> 2.  Vuex

- 单一数据源：Vuex 的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 状态只读：改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
- 模块化：Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。

## 25 说说浏览器和 Node 事件循环的区别

参考资料：

> 其中一个主要的区别在于浏览器的 event loop 和 nodejs 的 event loop 在处理异步事件的顺序是不同的,nodejs 中有 micro event;其中 Promise 属于 micro event 该异步事件的处理顺序就和浏览器不同.nodejs V11.0 以上 这两者之间的顺序就相同了.

```js
function test() {
  console.log("start");
  setTimeout(() => {
    console.log("children2");
    Promise.resolve().then(() => {
      console.log("children2-1");
    });
  }, 0);
  setTimeout(() => {
    console.log("children3");
    Promise.resolve().then(() => {
      console.log("children3-1");
    });
  }, 0);
  Promise.resolve().then(() => {
    console.log("children1");
  });
  console.log("end");
}

test();

// 以上代码在node11以下版本的执行结果(先执行所有的宏任务，再执行微任务)
// start
// end
// children1
// children2
// children3
// children2-1
// children3-1

// 以上代码在node11及浏览器的执行结果(顺序执行宏任务和微任务)
// start
// end
// children1
// children2
// children2-1
// children3
// children3-1
```

## 26 介绍模块化发展历程

```
可从IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ES Module、<script type="module"> 这几个角度考虑。
```

参考资料：

```
早期: 通过 IIFE 自行封装和管理作用域。

模块化方案: AMD 和 CMD 通过异步加载、延迟加载模块来提升性能。

Node.js 引领的 CommonJS: 提供了同步加载和统一模块机制，适用于服务端。

UMD: 使得模块在不同环境下可以兼容使用。

现代工具: Webpack 通过动态加载和代码拆分提高了应用的加载性能。

ESM: 提供了原生、静态的模块化支持，逐渐成为标准。

HTML <script type="module">: 使得浏览器直接支持模块化，免去了额外的打包工具依赖。
```

## 27 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？

参考资料：

> 在 ES5 中，全局变量直接挂载到全局对象的属性上，所以能在 window 上看到 var 声明的变量
> 在 ES6 中，全局对象的属性和全局变量脱钩，但是为了保持兼容性，旧的不变，所以 var、function 声明的全局变量依然可以在 window 对象上看到，而 let、const 声明的全局变量在 window 对象上看不到,在定义变量的块级作用域中就能获取。

## 28 cookie 和 token 都存放在 header 中，为什么不会劫持 token？

参考资料：

> xss：用户通过各种方式将恶意代码注入到其他用户的页面中。就可以通过脚本获取信息，发起请求，之类的操作。
> csrf：跨站请求攻击，简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去运行。这利用了 web 中用户身份验证的一个漏洞：简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的。csrf 并不能够拿到用户的任何信息，它只是欺骗用户浏览器，让其以用户的名义进行操作。

> 上面的两种攻击方式，如果被 xss 攻击了，不管是 token 还是 cookie，都能被拿到，所以对于 xss 攻击来说，cookie 和 token 没有什么区别。但是对于 csrf 来说就有区别了。

> 以上面的 csrf 攻击为例：

> cookie：用户点击了链接，cookie 未失效，导致发起请求后后端以为是用户正常操作，于是进行扣款操作。
> token：用户点击链接，由于浏览器不会自动带上 token，所以即使发了请求，后端的 token 验证不会通过，所以不会进行扣款操作。

## 29 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的 ？

参考资料：

> 双向数据绑定是指数据的变化会同时影响视图和模型，反之亦然。在 Vue 中，双向数据绑定是通过数据劫持和发布-订阅模式来实现的。
> 数据劫持：Vue 利用了 Object.defineProperty() 方法来劫持数据的 getter 和 setter，当数据发生变化时，会触发相应的 setter，从而通知订阅者更新视图。
> 发布-订阅模式：Vue 中的订阅者和发布者是通过事件中心来实现的。当数据发生变化时，发布者会通知订阅者更新视图。
> 当 Model 改变 View 时，Vue 会通过数据劫持和发布-订阅模式来实现双向数据绑定。当 Model 中的数据发生变化时，Vue 会自动更新 View 中的数据。
> 当 View 改变 Model 时，Vue 会通过事件监听来实现双向数据绑定。当 View 中的数据发生变化时，Vue 会自动更新 Model 中的数据。
> 双向数据绑定是 Vue 中非常重要的一个特性，它使得数据的变化能够同时影响视图和模型，从而提高了开发效率。

> vue 通过 Object.defineProperty 劫持传进来的数据， 然后在数据 getter 的时候订阅重新编译模板的消息，然后通过 js 监听元素的事件，这里 input 事件也好，keyup 事件也好，总是监听输入框值变化，将新的值重新赋值给被劫持的 data,这样就会触发 setter 函数，再 setter 函数中就会去发布重新编译模板的消息

## 30 两个数组合并成一个数组

请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

30.js

## 31 改造下面的代码，使之输出 0 - 9，写出你能想到的所有解法。

```
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
```

31.js

## 32 Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。

gpt:

1. 虚拟 DOM 解决的问题

虚拟 DOM 的核心思想是先在内存中创建一个虚拟的 DOM 树，然后通过比较（通常是使用 Diff 算法）虚拟 DOM 和真实 DOM 的差异，最终只将差异部分更新到真实 DOM 中。这比每次直接操作原生 DOM 来得更加高效，因为：

- 减少了频繁的 DOM 操作：直接操作真实 DOM 很耗费性能，尤其是在需要频繁更新的情况下。每次更新真实 DOM 时，浏览器都会进行重排和重绘，这会导致页面性能下降。

- 批量更新：虚拟 DOM 允许将多次 DOM 操作合并成一次更新，从而减少浏览器的渲染次数。

2. 虚拟 DOM 的性能优势

- 避免重复计算：虚拟 DOM 通过对比前后状态，能够避免不必要的渲染。例如，当你只修改了一个文本框的内容，虚拟 DOM 会通过对比新旧状态来决定哪些部分需要更新，从而避免不必要的重新渲染。

- 异步更新：虚拟 DOM 可以对多个更新进行批处理，而不是一次次的同步更新，这样可以进一步减少渲染的次数。

3. 原生 DOM 的性能劣势

- 重排与重绘：每次修改 DOM 都可能导致浏览器重排（reflow）和重绘（repaint）。如果你的页面很复杂，这种操作的代价会很高。虚拟 DOM 通过减少 DOM 更新的次数，避免了这种昂贵的操作。

- DOM 操作是同步的：直接操作原生 DOM 需要同步执行，因此每个 DOM 操作都会即时反映在页面上，这可能导致性能瓶颈，尤其是在复杂的 UI 更新场景中。

4. 虚拟 DOM 的局限性

- 额外的计算开销：虽然虚拟 DOM 优化了 DOM 操作的性能，但它也引入了额外的计算开销，特别是在大量更新时。Diff 算法本身也需要一定的计算资源，尤其是在大量节点变化时。

- 不是万能的：对于某些场景，尤其是简单的页面更新，直接操作原生 DOM 可能并不会导致性能瓶颈。在这种情况下，虚拟 DOM 的性能优势可能就不那么明显，甚至可能有一些额外的开销。

5. 性能测试和实际应用

在实际应用中，虚拟 DOM 的优势主要体现在 复杂的 UI 更新 和 频繁的交互 上。例如，在 React 和 Vue 等框架中，虚拟 DOM 帮助处理了大量动态渲染的情况，极大地提高了 UI 更新的效率。而在一些简单的页面或仅做一次性更新的场景下，虚拟 DOM 的优势并不明显。

总结
虚拟 DOM 的设计是为了优化频繁 DOM 更新的性能，它通过减少不必要的重新渲染和合并 DOM 操作来实现这一点，通常能提高复杂应用的渲染效率。但是，虚拟 DOM 并不是“更快”的万能解决方案，它也有自己的计算开销。在简单的页面更新场景中，直接操作原生 DOM 可能更直接高效。

换句话说，虚拟 DOM 更适合复杂和动态的 UI 更新场景，而对于简单、静态的页面，虚拟 DOM 的优势可能不明显。因此，是否使用虚拟 DOM 取决于具体的应用场景。

[原文](https://www.zhihu.com/question/31809713/answer/53544875)

## 33 下面的代码打印什么内容，为什么？

```js
var b = 10;
(function b() {
  b = 20;
  console.log(b); //[Function: b]
})();
```

在非匿名自执行函数中，函数变量为只读状态无法修改；

## 34 简单改造下面的代码，使之分别打印 10 和 20。

```js
var a = 10;
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();
```

## 35 浏览器缓存读取规则，可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache 中？

从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。

- Service Worker
- Memory Cache

Memory Cache 也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源,例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快,内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

- Disk Cache

Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。

- Push Cache

浏览器会把哪些文件丢进内存中？哪些丢进硬盘中？
关于这点，网上说法不一，不过以下观点比较靠得住：

对于大文件来说，大概率是不存储在内存中的，反之优先
当前系统内存使用率高的话，文件优先存储进硬盘

[参考链接](https://www.jianshu.com/p/54cc04190252)

## 36 使用迭代的方式实现 flatten 函数。

秒法：

```js
const flatten = (inputArray) => {
  let result = [...inputArray];
  // 当数组中还存在数组元素时继续循环
  while (result.some((item) => Array.isArray(item))) {
    // 使用 concat 和扩展运算符来展开一层数组
    result = [].concat(...result);
  }
  return result;
};
```

## 37 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？

> 应该是各自对于状态管理机制的一种涉及。vue 和 redux 都是一种状态管理机制。 然后他们会有自己的 state、和修改 state 的方法， 修改 state 的方法涉及到同步和异步，vuex 的处理方式是同步在 mutation 里面，异步在 actions 里面，然后 redux 的同步就是 reducer ，异步更多的是用户自己去通过中间件的方式去实现的把。 没写过 redux 我只能理解到这里了。

vue 用的不是很多，所以不是很清楚 mutation 里面为什么不能有异步操作，下面解释一下为什么 Redux 的 reducer 里不能有异步操作。

先从 Redux 的设计层面来解释为什么 Reducer 必须是纯函数
如果你经常用 React+Redux 开发，那么就应该了解 Redux 的设计初衷。Redux 的设计参考了 Flux 的模式，作者希望以此来实现时间旅行，保存应用的历史状态，实现应用状态的可预测。所以整个 Redux 都是函数式编程的范式，要求 reducer 是纯函数也是自然而然的事情，使用纯函数才能保证相同的输入得到相同的输入，保证状态的可预测。所以 Redux 有三大原则：

单一数据源，也就是 state
state 是只读，Redux 并没有暴露出直接修改 state 的接口，必须通过 action 来触发修改
使用纯函数来修改 state，reducer 必须是纯函数
下面在从代码层面来解释为什么 reducer 必须是纯函数
那么 reducer 到底干了件什么事，在 Redux 的源码中只用了一行来表示：

currentState = currentReducer(currentState, action)
这一行简单粗暴的在代码层面解释了为什么 currentReducer 必须是纯函数。currentReducer 就是我们在 createStore 中传入的 reducer（至于为什么会加个 current 有兴趣的可以自己去看源码），reducer 是用来计算 state 的，所以它的返回值必须是 state，也就是我们整个应用的状态，而不能是 promise 之类的。

要在 reducer 中加入异步的操作，如果你只是单纯想执行异步操作，不会等待异步的返回，那么在 reducer 中执行的意义是什么。如果想把异步操作的结果反应在 state 中，首先整个应用的状态将变的不可预测，违背 Redux 的设计原则，其次，此时的 currentState 将会是 promise 之类而不是我们想要的应用状态，根本是行不通的。

其实这个问题应该是 Redux 中为什么不能有副作用的操作更合适。

[链接](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/65)

## 38 下面代码中 a 在什么情况下会打印 1

```js
var a = {
  i: 1,
  toString() {
    return a.i++;
  },
};

var a = {
  i: 1,
  valueOf() {
    return a.i++;
  },
};

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}
```

## 39 介绍下 BFC 及其应用

参考资料：

> BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素互不影响。

> 创建 BFC 的方式有：
> 1.html 根元素
> 2.float 浮动 3.绝对定位
> 4.overflow 不为 visible
> 5.display 为表格布局或者弹性布局

> BFC 的主要作用是 1.清除浮动 2.防止同一 BFC 容器中的相邻元素间的外边距重叠问题

## 40 在 Vue 中，子组件为何不可以修改父组件传递的 Prop

组件对 data 的监听是深度监听，对 props 的监听是浅度监听。

单向数据流，易于监测数据的流动，出现了错误可以更加迅速的定位到错误发生的为止。

在 initProps 的时候，在 defineReactive 时，通过判断是否在开发环境，如果是开发环境，会在触发 set 时，判断此 key 是否处于 updateChildren 中被修改，如果不是，说明此修改来自子组件，触发 warning 提示。