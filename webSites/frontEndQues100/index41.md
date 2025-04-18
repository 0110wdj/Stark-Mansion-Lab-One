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