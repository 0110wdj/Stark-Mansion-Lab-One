// 1 二叉树层序遍历
// 2 实现一个事件发射器
// 3 实现防抖函数
// 4 大数相加

function createEventPublisher(maxParallelCount) {
  const taskQueue = [];
  let processingTaskCount = 0;

  function processNextEvent() {
    // 只要还有并发空位，就不断补任务
    while (
      processingTaskCount < maxParallelCount &&
      taskQueue.length > 0
    ) {
      const event = taskQueue.shift();
      processingTaskCount++;

      Promise.resolve()
        .then(() => event())
        .catch((err) => {
          console.error('event error:', err);
        })
        .finally(() => {
          processingTaskCount--;
          processNextEvent(); // 任务完成后继续补位
        });
    }
  }

  function addEvent(event) {
    if (typeof event !== 'function') {
      throw new TypeError('event must be a function');
    }
    taskQueue.push(event);
    processNextEvent();
  }

  return {
    addEvent,
  };
}

function createTestEvent(name, delay) {
  return () => {
    console.log(`[start] ${name} at ${Date.now()}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`[end]   ${name} at ${Date.now()}`);
        resolve();
      }, delay);
    });
  };
}
function test() {
  const eventPublisher = createEventPublisher(2);

  const event1 = createTestEvent('event1', 1000);
  const event2 = createTestEvent('event2', 1000);
  const event3 = createTestEvent('event3', 1000);
  const event4 = createTestEvent('event4', 1000);

  eventPublisher.addEvent(event1);
  eventPublisher.addEvent(event2);
  eventPublisher.addEvent(event3);
  eventPublisher.addEvent(event4);
}

test();
