## 81 打印出 1 - 10000 之间的所有对称数，例如：121、1331 等

81.js

## 82 周一算法题之「移动零」

```
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:

1、必须在原数组上操作，不能拷贝额外的数组。

2、尽量减少操作次数。
```

82.js

## 83.js var、let 和 const 区别的实现原理是什么

它们的行为差异源于 JavaScript 引擎在编译和执行时对它们的处理方式不同

编译阶段，JavaScript 会根据作用域创建“环境记录（Environment Record）”

对于 var，变量绑定存在于其所属的函数环境记录中（Function Environment Record）。

对于 let 和 const，它们绑定在块级环境记录（Block Environment Record）中，并且每次进入新块都会新建一个环境记录。

所有声明都会被“预处理”——编译阶段进入词法环境（Lexical Environment）。

var 的声明会被提升，并立即初始化为 undefined 。

let 和 const 也会被记录，但不会被初始化，处于“暂时性死区（Temporal Dead Zone, TDZ）”，直到执行到声明语句。

## 84 请实现一个 add 函数，满足以下功能。

```js
add(1); // 1
add(1)(2); // 3
add(1)(2)(3); // 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```

84.js

## 85 react-router 里的 Link 标签和 a 标签有什么区别？如何禁掉 a 标签默认事件，禁掉之后如何实现跳转？

| 特性           | `<Link>`（来自 react-router）                                     | `<a>`（原生 HTML）       |
| -------------- | ----------------------------------------------------------------- | ------------------------ |
| **跳转方式**   | 使用 `history.push` 改变 URL，不刷新页面（**单页应用 SPA 体验**） | 默认会导致页面刷新       |
| **性能**       | 更快、保留页面状态                                                | 刷新页面，重新加载资源   |
| **作用**       | 仅改变前端路由，不重新请求 HTML 文档                              | 发起 HTTP 请求，刷新页面 |
| **支持 props** | 支持 `to=""`、`replace`、`state` 等 props                         | 仅支持 `href`            |

```html
<!-- 禁用 a 标签的默认行为 -->
<a href="/about" onClick={(e) => e.preventDefault()}>
  About
</a>
```

```js
// 你可以手动使用 react-router-dom 提供的 useNavigate 或 useHistory 来编程式跳转
import { useNavigate } from "react-router-dom";

function MyLink() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // 阻止默认跳转
    navigate("/about"); // 手动跳转
  };

  return (
    <a href="/about" onClick={handleClick}>
      About
    </a>
  );
}
```

```
从最终渲染的 DOM 来看，这两者都是链接，都是 <a> 标签，区别是：

<Link> 是 react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 接管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面。

<a> 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）。
```

## 86 周一算法题之「两数之和」

给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

86.js

## 87 在输入框中如何判断输入的是一个正确的网址？

```js
function isValidURL(url) {
  const pattern =
    /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
  return pattern.test(url);
}
```

```js
function isValidURL(url) {
  try {
    new URL(url.includes("://") ? url : "http://" + url);
    return true;
  } catch (_) {
    return false;
  }
}
```

```js
async function urlIsReachable(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
```

## 88 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

88.js

## 89 设计并实现 Promise.race()

89.js

## 90 实现模糊搜索结果的关键词高亮显示

90.html

![90](./imgs/90.jpg)

## 91 介绍下 HTTPS 中间人攻击

https 协议由 http + ssl 协议构成，具体的链接过程可参考 [SSL 或 TLS 握手的概述](https://github.com/lvwxx/blog/issues/3)

中间人攻击过程如下：

- 1、服务器向客户端发送公钥。
- 2、攻击者截获公钥，保留在自己手上。
- 3、攻击者自己生成一个【伪造的】公钥，发给客户端。
- 4、客户端收到伪造的公钥后，生成加密 hash 值发给服务器。
- 5、攻击者获得加密 hash 值，用自己的私钥解密获得真秘钥。
- 6、同时生成假的加密 hash 值，发给服务器。
- 7、服务器用私钥解密获得假秘钥。
- 8、服务器用加秘钥加密传输信息

防范方法：

- 1、服务端在发送浏览器的公钥中加入 CA 证书，浏览器可以验证 CA 证书的有效性

> https 不存在中间人攻击。除非你自己忽略浏览器的不安全提醒，或者自己 http client 禁用证书校验。但是这都是使用者的错，和 https 没有关系。
> https 本就有 CA 认证过程，这个就是用来防止劫持，退一万步讲，就算你伪造 CA 成功，你也拿不到我的对称密钥，除非客户端主动泄漏，我实在不理解 HTTPS 如何能进行中间人攻击。我觉得这个问题应该改成 http 的中间人攻击？

## 92 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id

92.js

## 93 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。

93.js

## 94 vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？

在 Vue 中使用 v-for 渲染列表时，并不一定需要使用事件代理。Vue 本身支持为每个列表项单独绑定事件处理函数，而且它在内部做了性能优化，所以一般情况下，你可以直接给每个元素绑定事件处理函数而不用担心性能问题。

```html
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" @click="handleClick(item)">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        list: ["Apple", "Banana", "Cherry"],
      };
    },
    methods: {
      handleClick(item) {
        console.log("Clicked:", item);
      },
    },
  };
</script>
```

这种方式在 Vue 内部会通过虚拟 DOM 的差分机制，只为必要的 DOM 节点绑定事件处理器。对于绝大多数应用场景来说，它的性能已经足够好。

当列表非常大或存在频繁 DOM 更新时，可考虑事件代理。

## 95 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

95.js

- 使用 Reflect.ownKeys 获取 keys，包括 Symbol
- 使用 map 记录对象引用，可以解决循环引用问题

## 96 介绍下前端加密的常见场景和方法

首先，加密的目的，简而言之就是将明文转换为密文、甚至转换为其他的东西，用来隐藏明文内容本身，防止其他人直接获取到敏感明文信息、或者提高其他人获取到明文信息的难度。
通常我们提到加密会想到密码加密、HTTPS 等关键词，这里从场景和方法分别提一些我的个人见解。

场景-密码传输
前端密码传输过程中如果不加密，在日志中就可以拿到用户的明文密码，对用户安全不太负责。
这种加密其实相对比较简单，可以使用 PlanA-前端加密、后端解密后计算密码字符串的 MD5/MD6 存入数据库；也可以 PlanB-直接前端使用一种稳定算法加密成唯一值、后端直接将加密结果进行 MD5/MD6，全程密码明文不出现在程序中。

PlanA
使用 Base64 / Unicode+1 等方式加密成非明文，后端解开之后再存它的 MD5/MD6 。

PlanB
直接使用 MD5/MD6 之类的方式取 Hash ，让后端存 Hash 的 Hash 。

场景-数据包加密
应该大家有遇到过：打开一个正经网站，网站底下蹦出个不正经广告——比如 X 通的流量浮层，X 信的插入式广告……（我没有针对谁）
但是这几年，我们会发现这种广告逐渐变少了，其原因就是大家都开始采用 HTTPS 了。
被人插入这种广告的方法其实很好理解：你的网页数据包被抓取->在数据包到达你手机之前被篡改->你得到了带网页广告的数据包->渲染到你手机屏幕。
而 HTTPS 进行了包加密，就解决了这个问题。严格来说我认为从手段上来看，它不算是一种前端加密场景；但是从解决问题的角度来看，这确实是前端需要知道的事情。

Plan
全面采用 HTTPS

场景-展示成果加密
经常有人开发网页爬虫爬取大家辛辛苦苦一点一点发布的数据成果，有些会影响你的竞争力，有些会降低你的知名度，甚至有些出于恶意爬取你的公开数据后进行全量公开……比如有些食谱网站被爬掉所有食谱，站点被克隆；有些求职网站被爬掉所有职位，被拿去卖信息；甚至有些小说漫画网站赖以生存的内容也很容易被爬取。

Plan
将文本内容进行展示层加密，利用字体的引用特点，把拿给爬虫的数据变成“乱码”。
举个栗子：正常来讲，当我们拥有一串数字“12345”并将其放在网站页面上的时候，其实网站页面上显示的并不是简单的数字，而是数字对应的字体的“12345”。这时我们打乱一下字体中图形和字码的对应关系，比如我们搞成这样：

图形：1 2 3 4 5
字码：2 3 1 5 4

这时，如果你想让用户看到“12345”，你在页面中渲染的数字就应该是“23154”。这种手段也可以算作一种加密。
具体的实现方法可以看一下[《Web 端反爬虫技术方案》](https://juejin.im/post/5b6d579cf265da0f6e51a7e0)。

## 97 React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？

React diff

- 由于 web UI 中跨级移动操作非常少、可以忽略不计，所以 react 实现的 diff 是同层级比较
- 拥有相同类型的两个组件产生的 DOM 结构也是相似的，不同类型的两个组件产生的 DOM 结构则不近相同
- 对于同一层级的一组子节点，通过分配唯一唯一 id 进行区分（key 值）

[传统 diff、react 优化 diff、vue 优化 diff](https://www.jianshu.com/p/398e63dc1969)

Vue diff

- 跟 react 一样，只进行同层级比较，忽略跨级操作

## 98 写出如下代码的打印结果

```js
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object();
  o.siteUrl = "http://www.google.com";
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl); // http://www.baidu.com
```

## 99 编程算法题

用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

```js
function reverseInt(num) {
  if (num === 0) return "";
  return String(num % 10) + reverseInt(Math.floor(num / 10));
}
```

## 100 请写出如下代码的打印结果

```js
function Foo() {
  // 注意，这里的 Foo 是闭包传入的 functon Foo 函数对象
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
Foo.prototype.a = function () {
  console.log(3);
};
Foo.a = function () {
  console.log(4);
};
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();

// 4 2 1
```
