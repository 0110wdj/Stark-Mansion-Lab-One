// new Promise.allSettled()
// 根据他的机制去修改 Promise.all

function myAllSettled<T>(promises: Promise<T>[]) {
  return Promise.all(promises.map(p =>
    p.then(
      value => ({ status: 'fulfilled', value }),
      reason => ({ status: 'rejected', reason })
    )
  ));
}

// 示例用法
const promises = [
  Promise.resolve(1),
  Promise.reject('error'),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
];

myAllSettled(promises)
  .then(results => {
    console.log(results);
  });
