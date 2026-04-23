// 1 二叉树层序遍历
// 2 实现一个事件发射器
// 3 实现防抖函数
// 4 大数相加

function createDebounceFunction(func, time) {
  let timeoutId = null;

  function debounceFunction(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, time);
  }
  return debounceFunction;
}