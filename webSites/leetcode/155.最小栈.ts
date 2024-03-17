/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
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

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

var obj = new MinStack()
obj.push(1)
obj.push(2)

console.log(obj);

console.log(obj.top());

console.log(obj.getMin());

console.log(obj.pop());

console.log(obj.getMin());

console.log(obj.top());