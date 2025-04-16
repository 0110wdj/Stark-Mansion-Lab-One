// 生成防抖函数
const antiShak = (callback = () => { }, time = 1000) => {
  let id = null;
  const refun = () => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      // callback(args)
      callback.apply(this, arguments);
    }, time);
  }
  return refun
}

// 生成节流函数
const throttle = (callback = () => { }, time = 1000) => {
  let isWaiting = false;
  const refun = () => {
    if (isWaiting) return;
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
      // callback(args)
      callback.apply(this, arguments);
    }, time);
  }
  return refun
}

/**
 * 定时执行回调函数，可以设置总次数和时间间隔
 * @param {{
* frequency?:number,
* intervalTime?:number,
* callback?:Function
* }} [props] 
*/
const setIntervalCall = (props = {}) => {
  let i = 0;
  const {
    frequency = 10,
    intervalTime = 50,
    callback = () => { }
  } = props;
  const id = setInterval(() => {
    if (i < frequency) {
      console.log("callback-" + i);
      // callback();
      callback.apply(this, arguments);
      i++
    } else {
      clearInterval(id);
    }
  }, intervalTime);
}

// test 1
// console.log("normal");
// setIntervalCall();

// test 2
// console.log("antiShak");
// const antiShakFun = antiShak(() => {
//   console.log('true callback');
// }, 600)
// setIntervalCall({ frequency: 10, intervalTime: 500, callback: antiShakFun });

// test 3
// console.log("throttle");
// const throttleFun = throttle(() => {
//   console.log('true callback');
// }, 900)
// setIntervalCall({ frequency: 10, intervalTime: 400, callback: throttleFun });