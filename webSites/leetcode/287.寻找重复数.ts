/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  const next = (i: number) => {
    return nums[i]
  }
  let slow = 0, fast = 0;
  while (slow === 0 || slow !== fast) {
    slow = next(slow)
    fast = next(next(fast))
  }
  slow = 0
  while (slow !== fast) {
    slow = next(slow)
    fast = next(fast)
  }
  // console.log({ slow, fast });

  return slow
};
// @lc code=end

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([3, 3, 3, 3, 3]));
