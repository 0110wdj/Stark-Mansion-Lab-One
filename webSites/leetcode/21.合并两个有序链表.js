/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const resList = { val: 0, next: null }
  let lastPoint = resList

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      lastPoint.next = list1
      lastPoint = lastPoint.next
      list1 = list1.next
    } else {
      lastPoint.next = list2
      lastPoint = lastPoint.next
      list2 = list2.next
    }
  }
  if (list1 !== null) {
    lastPoint.next = list1
  }
  if (list2 !== null) {
    lastPoint.next = list2
  }
  return resList.next
};
// @lc code=end

// const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }
// const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } }
// const res = mergeTwoLists(list1, list2)
// console.log(JSON.stringify(res));