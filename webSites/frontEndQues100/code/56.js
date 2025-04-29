// 要求设计 LazyMan 类，实现以下功能。

class LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  eat(food) {
    this.tasks.push(() => {
      console.log(`I am eating ${food}`);
    });
    return this;
  }

  sleep(time) {
    this.tasks.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`I am sleeping ${time} seconds...`);
          resolve();
        }, time * 1000);
      })
    });
    return this;
  }

  sleepFirst(time) {
    this.tasks.unshift(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`I am sleeping ${time} seconds...`);
          resolve();
        }, time * 1000);
      })
    });
    return this;
  }

  async next() {
    const task = this.tasks.shift();
    if (typeof task === 'function') {
      await task();
      await this.next();
    } else {
      console.log(task);
    }
  }
}

new LazyMan('Tony');
// Hi I am Tony

new LazyMan('Tony').sleep(1).eat('lunch');
// // Hi I am Tony
// // 等待了1秒...
// // I am eating lunch

new LazyMan('Tony').eat('lunch').sleep(1).eat('dinner');
// // Hi I am Tony
// // I am eating lunch
// // 等待了1秒...
// // I am eating diner

new LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(1).sleep(2).eat('junk food');
// // Hi I am Tony
// // 等待了5秒...
// // I am eating lunch
// // I am eating dinner
// // 等待了10秒...
// // I am eating junk food
