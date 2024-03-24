/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  if (nums.length === 1) return [[nums[0]]]
  const res: number[][] = []
  nums.forEach((cur, i) => {
    const subRes = permute([...nums.slice(0, i), ...nums.slice(i + 1)])
    subRes.map(v => {
      res.push([cur, ...v])
    })
  })
  return res
};
// @lc code=end

