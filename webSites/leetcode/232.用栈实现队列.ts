/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    stack4push: number[]
    stack4pop: number[]

    constructor() {
        this.stack4push = []
        this.stack4pop = []
    }

    push(x: number): void {
        this.stack4push.push(x)
    }

    pop(): number {
        if (this.stack4pop.length === 0) {
            while (this.stack4push.length > 0) {
                this.stack4pop.push(this.stack4push.pop() || NaN)
            }
        }
        return this.stack4pop.pop() || NaN
    }

    peek(): number {
        if (this.stack4pop.length === 0) {
            while (this.stack4push.length > 0) {
                this.stack4pop.push(this.stack4push.pop() || NaN)
            }
        }
        return this.stack4pop.at(-1) || NaN
    }

    empty(): boolean {
        return (this.stack4pop.length + this.stack4push.length === 0)
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

