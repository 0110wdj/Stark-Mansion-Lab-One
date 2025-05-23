## 41 下面代码输出什么

```js
var a = 10;
(function () {
  var a;
  console.log(a); //undefined
  a = 5;
  console.log(globalThis.a); // 10
  console.log(a); //20
})();
```

## 42 实现一个 sleep 函数

比如 sleep(1000) 意味着等待 1000 毫秒，可从 Promise、Generator、Async/Await 等角度实现

## 43 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

> [3, 15, 8, 29, 102, 22].sort() // [ 102, 15, 22, 29, 3, 8 ]

> 根据 MDN 上对 Array.sort()的解释，默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的 UTF-16 编码顺序来进行排序。所以'102' 会排在 '15' 前面。

## 44 介绍 HTTPS 握手过程

- 1 客户端使用 https 的 url 访问 web 服务器,要求与服务器建立 ssl 连接
- 2 web 服务器收到客户端请求后, 会将网站的证书(包含公钥)传送一份给客户端
- 3 客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥
- 4 客户端利用公钥将会话秘钥加密, 并传送给服务端, 服务端利用自己的私钥解密出会话秘钥
- 5 之后服务器与客户端使用秘钥加密传输

## 45 HTTPS 握手过程中，客户端如何验证证书的合法性

参考资料：

- 1 是否是信任的有效证书，浏览器内置了信任的根证书，看看 web 服务器上的证书是不是这些信任的根证书发的或者信任根的二级证书机构发的，还有是否过了有效期，是否被吊销；
- 2 证明对方是否持有证书的对应的私钥

参考资料：

- 1 校验证书的颁发机构是否受客户端信任。
- 2 通过 CRL 或 OCSP 的方式校验证书是否被吊销。
- 3 对比系统时间，校验证书是否在有效期内。
- 4 通过校验对方是否存在证书的私钥，判断证书的网站域名是否与证书颁发的域名一致。

## 46 输出以下代码执行的结果并解释为什么

```js
var obj = {
  2: 3,
  3: 4,
  length: 2,
  // splice: Array.prototype.splice,
  push: Array.prototype.push,
};
obj.push(1);
obj.push(2);
console.log(obj);

// {
//   '2': 1,
//   '3': 2,
//   length: 4,
//   splice: [Function: splice],
//   push: [Function: push]
// }
```

GPT 解释：

> push 是数组的一个方法，它将一个元素添加到数组的末尾。
> 在这个例子中，push 被用在 obj 上，它将 1 添加到 obj 的末尾。
> push(1) 会将 1 插入到 obj 中，并更新 length 属性。
> 因为 obj 当前的 length 是 2，push 会把 1 插入到索引 2 处，并将 length 更新为 3。

> - 键是字符串：在 JavaScript 中，所有对象的键都是字符串，因此即使你使用数字作为键（如 2 和 3），它们实际上会被转换为字符串 '2' 和 '3'。这就是为什么输出的键是 '2' 和 '3'（而不是数字 2 和 3）。
> - 对象模拟数组：尽管 obj 是一个普通对象，但它通过 length 和数组方法（push）模拟了一个类数组的行为。通过 push 向对象添加新元素，length 会相应地增长。

## 47 双向绑定和 vuex 是否冲突

存在冲突：

当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model 会比较棘手：

```
<input v-model="obj.message">
```

假设这里的 obj 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，v-model 会试图直接修改 obj.message。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。

用“Vuex 的思维”去解决这个问题的方法是：给 input 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用一个方法:

```
<input :value="message" @input="updateMessage">
```

```

// ...
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}

// ...
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}

```

[官网链接](https://vuex.vuejs.org/zh/guide/forms.html)

## 48 call 和 apply 的区别是什么，哪个性能更好一些

- Function.prototype.apply 和 Function.prototype.call 的作用是一样的，区别在于传入参数的不同；

- 第一个参数都是，指定函数体内 this 的指向；

- 第二个参数开始不同，apply 是传入带下标的集合，数组或者类数组，apply 把它传给函数作为参数，call 从第二个开始传入的参数是不固定的，都会传给函数作为参数。

- call 比 apply 的性能要好，平常可以多用 call, call 传入参数的格式正是内部所需要的格式，参考[call 和 apply 的性能对比](https://github.com/noneven/__/issues/6)

## 49 为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？

作用：工作中，用于前端监控，比如曝光等等，谷歌和百度的都是用的 1x1 像素的透明 gif 图片；

原因：

- 没有跨域问题，一般这种上报数据，代码要写通用的；（排除 ajax）
- 不会阻塞页面加载，影响用户的体验，只要 new Image 对象就好了；（排除 JS/CSS 文件资源方式上报）
- 在所有图片中，体积最小；（比较 PNG/JPG）

- 能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
- 触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
- 跨域友好
- 执行过程无阻塞
- 相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
- GIF 的最低合法体积最小（最小的 BMP 文件需要 74 个字节，PNG 需要 67 个字节，而合法的 GIF，只需要 43 个字节）

数据埋点：

数据埋点请求是指通过在网页或应用中埋入代码片段（通常是 JavaScript）来收集用户行为数据，诸如页面访问、点击、滑动等。数据埋点请求的核心作用是把这些行为数据发送到服务器，用于分析和监控，帮助优化产品和服务。

通常，埋点数据会通过 HTTP 请求发送给后端服务，内容包括用户操作的相关信息，比如用户 ID、访问的页面、时间戳、操作类型等。这样的数据可以帮助开发团队跟踪用户行为，进行流量分析、性能监控、用户体验优化等。

## 50 实现 (5).add(3).minus(2) 功能

50.js

## 51 Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

- Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
- Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象。
- Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。

## 52 怎么让一个 div 水平垂直居中

52.html

## 53 输出以下代码的执行结果并解释为什么

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x); // undefined
console.log(b.x); // {n:2}
```

这一行比较复杂。先获取等号左侧的 a.x，但 a.x 并不存在，于是 JS 为（堆内存中的）对象创建一个新成员 x，这个成员的初始值为 undefined，（这也是为什么直接引用一个未定义的变量会报错，但是直接引用一个对象的不存在的成员时，会返回 undefined.）

创建完成后，目标指针已经指向了这个新成员 x，并会先挂起，单等等号右侧的内容有结果了，便完成赋值。

接着执行赋值语句的右侧，发现 a={n:2}是个简单的赋值操作，于是 a 的新值等于了{n:2}。

这里特别注意，这个 a 已经不是开头的那个 a，而是一个全新的 a,这个新 a 指针已经不是指向原来的值的那个堆内存，而是分配了一个新的堆内存。但是原来旧的堆内存因为还有 b 在占用，所以并未被回收。

然后，将这个新的对象 a 的堆内存指针，赋值给了刚才挂起的新成员 x,此时，对象成员 x 便等于了新的对象 a。

## 54 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？

每次遍历获取到一个 max 或 min 到数组开头或结尾，然后缩小遍历范围，直到遍历结束。
时间复杂度：O(n^2)
改进：直接改成快速排序，不会更糟了。

## 55 某公司 1 到 12 月份的销售额存在一个对象里面

如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

```js
let obj = { 1: 222, 2: 123, 5: 888 };
const result = Array.from({ length: 12 }).map(
  (_, index) => obj[index + 1] || null
);
console.log(result);
```

## 56 要求设计 LazyMan 类，实现以下功能。

56.js

## 57 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。

- opacity: 0：
  - 优点：可以设置透明度，适用于需要隐藏元素但保留布局空间的场景。
  - 缺点：会影响元素的子元素的透明度，可能会影响布局。
  - 适用场景：需要隐藏元素但保留布局空间的场景。
- visibility: hidden：
  - 优点：不会影响元素的子元素的透明度，不会影响布局。
  - 缺点：无法设置透明度，适用于不需要隐藏元素但保留布局空间的场景。
  - 适用场景：不需要隐藏元素但保留布局空间的场景。
- display: none：
  - 优点：不会影响元素的子元素的透明度，不会影响布局。
  - 缺点：无法设置透明度，适用于不需要隐藏元素且不需要保留布局空间的场景。
  - 适用场景：不需要隐藏元素且不需要保留布局空间的场景。

## 58 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？

箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有以下几点差异：

1、函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

2、不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

3、不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

4、不可以使用 new 命令，因为：

- 没有自己的 this，无法调用 call，apply。
- 没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 \_\_proto\_\_

new 过程大致是这样的：

```js
function newFunc(father, ...rest) {
  var result = {};
  result.__proto__ = father.prototype;
  var result2 = father.apply(result, rest);
  if (
    (typeof result2 === "object" || typeof result2 === "function") &&
    result2 !== null
  ) {
    return result2;
  }
  return result;
}
```

## 59 给定两个数组，写一个方法来计算它们的交集。

例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

```js
function intersect(nums1, nums2) {
  const map = new Map();
  const result = []; // 存储交集结果
  // 遍历第一个数组，统计每个元素的出现次数
  for (let num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  // 遍历第二个数组，检查每个元素是否在第一个数组中出现过
  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  } // 返回交集结果
  return result; // 输出交集结果
}
```

## 60 已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。

```html
<img src="1.jpg" style="width:480px!important;”>
```

参考方案：

```css
img {
  padding:0 90px;
  box-sizing: border-box;
}

img {
  max-width：300px;
}

img {
  transform: scale(300/480);
}
```
