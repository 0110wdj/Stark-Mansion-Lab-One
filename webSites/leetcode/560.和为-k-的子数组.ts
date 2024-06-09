/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0;
  let pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    mp.set(pre, (mp.get(pre) ?? 0) + 1);
  }
  return count;
};
// @lc code=end

