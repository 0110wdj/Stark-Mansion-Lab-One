/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// 最总算法没有写出来，从结构上来看，思路是正确的
// 已经花费太多时间了，很少写双向链表，可能编码技能上有些欠缺，需要提升之后再来处理这个问题
// paused

class ListNode {
    val: number
    next: ListNode | null
    key: number | null
    pre: ListNode | null
    constructor(val?: number, next?: ListNode | null, pre?: ListNode | null, key?: number | null,) {
        this.val = (val === undefined ? -1 : val)
        this.next = (next === undefined ? null : next)
        this.pre = (pre === undefined ? null : pre)
        this.key = (key === undefined ? null : key)
    }
}

// @lc code=start

class LRUCache {
    head: ListNode | null = null;
    last: ListNode | null = null;
    nodeMap: Map<number, ListNode> = new Map();
    constructor(capacity: number) {
        for (let i = 0; i < capacity; i++) {
            const newNode: ListNode = new ListNode()
            if (i === 0) {
                this.head = newNode
                this.last = newNode
            } else {
                if (this.last) {
                    this.last.next = newNode
                    newNode.pre = this.last
                    this.last = newNode
                }
            }
        }
    }

    get(key: number): number {
        return -1
    }

    put(key: number, value: number): void {
        if (!this.nodeMap.has(key)) {
            if (this.last === null) return
            if (this.head === null) return
            if (this.head.next === null) {
                this.head.val = value
                return
            }
            const newNode = new ListNode(value, null, this.last, key)
            this.nodeMap.set(key, newNode)
            this.last.next = newNode
            if (this.head.key !== null) {
                this.nodeMap.delete(this.head.key)
            }
            this.head = this.head.next
            this.head.pre = null
        } else {
            const curNode = this.nodeMap.get(key) ?? null
            if (curNode === null) return
            if (curNode === this.head) {
                if (this.last === null) return
                if (this.head === null) return
                if (this.head.next === null) {
                    this.head.val = value
                    return
                }
                this.head = this.head.next
                this.head.pre = null
                this.last.next = curNode
                curNode.next = null
                curNode.pre = this.last
                this.last = curNode
            } else {
                if (this.last === null) return
                if (this.head === null) return
                if (curNode.pre === null) return
                if (curNode.next === null) return
                if (this.head.next === null) {
                    this.head.val = value
                    return
                }
                curNode.pre.next = curNode.next
                curNode.next.pre = curNode.pre
                this.last.next = curNode
                curNode.next = null
                curNode.pre = this.last
                this.last = curNode
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const opt = new LRUCache(2)
opt.put(1, 1)
opt.put(2, 2)
// opt.get(1)
// opt.put(3, 3)
console.log(opt);


