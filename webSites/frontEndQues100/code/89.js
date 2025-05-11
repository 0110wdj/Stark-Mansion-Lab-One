// 设计并实现 Promise.race()

function myRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      // 使用 Promise.resolve 确保即使传入的是非 Promise，也能统一处理
      Promise.resolve(p).then(resolve, reject);
    }
  });
}

// 测试
const p1 = new Promise((resolve) => setTimeout(() => resolve('p1'), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve('p2'), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve('p3'), 3000));

console.time('race');
myRace([p1, p2, p3]).then((res) => {
  console.timeEnd('race');
  console.log(res);
  process.exit(0);  // 强制 Node.js 提前退出
});