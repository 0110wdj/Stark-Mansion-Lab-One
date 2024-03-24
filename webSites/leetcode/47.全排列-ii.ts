/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 1) return [[nums[0]]]
  const res: number[][] = []
  const map = new Map()
  nums.forEach((cur, i) => {
    if (!map.has(cur)) {
      map.set(cur, 1)
      const subRes = permuteUnique([...nums.slice(0, i), ...nums.slice(i + 1)])
      subRes.map(v => {
        res.push([cur, ...v])
      })
    }
  })
  return res
};
// @lc code=end

