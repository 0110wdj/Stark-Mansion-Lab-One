/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

interface TestNode {
  val: number,
  next: TestNode | null,
  random: TestNode | null,
}

function copyRandomList(head: TestNode | null): TestNode | null {
  const recur = (head: TestNode | null, cachedNode = new Map()): TestNode | null => {
    if (head === null) return null
    if (!cachedNode.get(head)) {
      cachedNode.set(
        head,
        { val: head.val }
      );
      Object.assign(
        cachedNode.get(head),
        {
          next: recur(head.next, cachedNode),
          random: recur(head.random, cachedNode)
        }
      )
    }
    return cachedNode.get(head)
  }
  return recur(head)
};
// @lc code=end

const testNode: TestNode = {
  val: 3,
  random: null,
  next: {
    val: 3,
    next: {
      val: 3,
      next: null,
      random: null,
    },
    random: null
  }
}

testNode.next && (testNode.next.random = testNode)

const res = copyRandomList(testNode)

console.dir(res, { depth: null })