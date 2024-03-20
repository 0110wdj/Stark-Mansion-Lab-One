/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = []
  let left = 0, right = k - 1;
  let min_stack: number[] = []
  for (let i = 0; i <= right; i++) {
    while ((min_stack.at(-1) ?? Infinity) < nums[i]) {
      min_stack.pop()
    }
    min_stack.push(nums[i])
  }
  // console.log(min_stack);

  while (right < nums.length) {
    res.push(min_stack[0])
    if (nums[left] === min_stack[0]) {
      min_stack.shift()
    }
    left++
    right++
    while ((min_stack.at(-1) ?? Infinity) < nums[right]) {
      min_stack.pop()
    }
    min_stack.push(nums[right])
    // console.log(min_stack, nums[right]);
  }
  return res
};
// @lc code=end
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));

