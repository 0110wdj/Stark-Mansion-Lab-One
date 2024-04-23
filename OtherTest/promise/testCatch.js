// test.js

const MyPromise = require('./mypromise')
const promise = new MyPromise((resolve, reject) => {
  // resolve('success')
  throw new Error('执行器错误')
})

promise.then(value => {
  console.log(1)
  console.log('resolve', value)
}, reason => {
  console.log(2)
  console.log(reason.message)
})
