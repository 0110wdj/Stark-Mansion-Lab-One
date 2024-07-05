/**
 * 设计一个异步任务的调度器，最多同时有两个异步任务在执行
 * 待执行的任务按照添加顺序依执行。
 * 使测试用例满足输出顺序。
 */

// 待完成

class Scheduler {
  arr
  cur
  next
  constructor() {
    this.arr = []
    this.cur = null
    this.next = null
  }

  async add(promiseCreator) {
    if (this.cur == null) {
      this.cur = promiseCreator
      await promiseCreator()
      this.cur = null
    }
    if (this.next === null) {
      this.next = promiseCreator
      await promiseCreator()
      this.next = null
    }

    this.arr.push(new Promise(async resolve => {
      
      await promiseCreator()
      resolve()
    }))
  }
}

//测试用例：
const scheduler = new Scheduler();

const task = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const addTask = (ms, order) => {
  scheduler.add(() => task(ms)).then(() => console.log(ms, order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 输出要求：
// 500 '2'
// 300 '3'
// 1000 '1'
// 400 '4'
