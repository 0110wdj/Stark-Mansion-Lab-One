// 1. setTimeout
function test1() {
  console.log('script start')	//1. 打印 script start
  setTimeout(function () {
    console.log('settimeout')	// 4. 打印 settimeout
  })	// 2. 调用 setTimeout 函数，并定义其完成后执行的回调函数
  console.log('script end')	//3. 打印 script start
  // 输出顺序：script start->script end->settimeout
}


// 2. Promise
/**
 * Promise本身是同步的立即执行函数， 
 * 当在executor中执行resolve或者reject的时候, 此时是异步操作，会先执行then/catch等，
 * 当主栈完成后，才会去调用resolve/reject中存放的方法执行，
 * 打印p的时候，是打印的返回结果，一个Promise实例。
 */

function test2() {
  console.log('script start')
  let promise1 = new Promise(function (resolve) {
    console.log('promise1')
    resolve()
    console.log('promise1 end') // 这个也是同步代码
  }).then(function () {
    console.log('promise2')
  })
  setTimeout(function () {
    console.log('settimeout')
  })
  console.log('script end')
  // 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
}

// 3. async/await
/**
 * async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。
 * 可以理解为，是让出了线程，跳出了 async 函数体。
 */
function test3() {
  async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end')
  }
  async function async2() {
    console.log('async2')
  }

  console.log('script start');
  async1();
  console.log('script end')

  // 输出顺序：script start->async1 start->async2->script end->async1 end
}

function test4() {
  async function func1() {
    return 1
  }

  console.log(func1().then(res => {
    console.log(res);  // 1
  }))
}
// test1();
// test2();
// test3();
test4();