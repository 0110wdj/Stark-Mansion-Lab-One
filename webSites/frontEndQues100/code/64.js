// 模拟实现一个 Promise.finally

Promise.prototype.finally = function (cb) {
  cb = typeof cb === 'function' ? cb : function () { };

  // 保证 finally 方法在子类继承 Promise 时依然保持行为一致。
  var Fn = this.constructor;  // 获取当前实例构造函数的引用

  // 接受状态：返回数据
  var onFulfilled = function (data) {
    return Fn.resolve(cb()).then(function () {
      return data
    })
  };

  // 拒绝状态：抛出错误
  var onRejected = function (err) {
    return Fn.resolve(cb()).then(function () {
      throw err
    })
  };

  return this.then(onFulfilled, onRejected);
}