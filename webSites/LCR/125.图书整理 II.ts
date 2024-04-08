class CQueue {
  pushStack: number[]
  popStack: number[]

  constructor() {
    this.pushStack = []
    this.popStack = []
  }

  appendTail(value: number): void {
    this.pushStack.push(value)
  }

  deleteHead(): number {
    if (this.popStack.length > 0) {
      return this.popStack.pop() || -1
    } else {
      if (this.pushStack.length > 0) {
        while (this.pushStack.length > 0) {
          this.popStack.push(this.pushStack.pop() || NaN)
        }
        return this.popStack.pop() || -1
      } else {
        return -1
      }
    }
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
let myQueue = new CQueue();
console.log(myQueue);
myQueue.appendTail(1); // queue is: [1]
console.log(myQueue);
myQueue.appendTail(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue);
myQueue.deleteHead(); // return 1, queue is [2]
console.log(myQueue);