/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
class MedianFinder {
    sort_arr: number[]
    constructor() {
        this.sort_arr = []
    }

    addNum(num: number): void {
        let i = 0, j = this.sort_arr.length - 1;
        while (i <= j) {
            const mid = Math.floor(i + (j - i) / 2)
            const midNum = this.sort_arr[mid]
            // console.log(mid, midNum, num);
            if (num > midNum) {
                i = mid + 1
            } else if (num < midNum) {
                j = mid - 1
            } else {
                i = mid
                break
            }
        }
        this.sort_arr.splice(i, 0, num);
    }

    findMedian(): number {
        if (this.sort_arr.length % 2 === 0) {
            const left = this.sort_arr.length / 2
            return (this.sort_arr[left - 1] / 2 + this.sort_arr[left] / 2)
        } else {
            return this.sort_arr[Math.floor(this.sort_arr.length / 2)]
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

var obj = new MedianFinder()
obj.addNum(12)
obj.addNum(10)
obj.addNum(13)
obj.addNum(11)
obj.addNum(5)
obj.addNum(15)
obj.addNum(1)
obj.addNum(11)
console.log(obj);
var param_2 = obj.findMedian()
console.log(param_2);
