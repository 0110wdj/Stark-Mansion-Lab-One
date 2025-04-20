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

