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

