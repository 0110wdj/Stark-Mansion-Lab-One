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
