/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1 sort nums to arr if use dichotomy
  function mySort(nums) {
    return [...nums]
  }
  const arr = mySort(nums)
  // 2 find target from the rest of arr by dichotomy(or other ways)
  let targetNum = 0
  while (arr.length > 0) {
    targetNum = target - arr.pop()
    // const resIndex = myDichotomy(dichotomy, target)
    const res = arr.find(i => i === targetNum)
    if (res !== undefined) {
      return [arr.indexOf(res), arr.length]
    }
  }
};
// @lc code=end

// const nums = [2, 7, 11, 15]
// const target = 9
// console.log(twoSum(nums, target));