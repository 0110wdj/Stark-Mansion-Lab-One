## 41 下面代码输出什么

```js
var a = 10;
(function () {
    var a ;
    console.log(a)//undefined
    a = 5
    console.log(globalThis.a)// 10
    console.log(a)//20
})()
```
