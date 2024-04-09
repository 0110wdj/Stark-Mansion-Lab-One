// 同 leetcode 155

Array.prototype.at = function (index: number) {
  if (index < 0) {
    return this[this.length + index]
  } else {
    return this[index]
  }
}

class MinStack {
  stack: number[]
  min_stack: number[]

  constructor() {
    this.stack = []
    this.min_stack = []
  }

  push(val: number): void {
    this.stack.push(val)
    if (this.min_stack.at(-1) === undefined || val <= (this.min_stack.at(-1) ?? -Infinity)) {
      this.min_stack.push(val)
    }
  }

  pop(): void {
    const top = this.stack.pop()
    if (top === this.min_stack.at(-1)) {
      this.min_stack.pop()
    }
  }

  top(): number {
    const top = this.stack.at(-1)
    return top ?? NaN
  }

  getMin(): number {
    return this.min_stack.at(-1) ?? -Infinity
  }
}