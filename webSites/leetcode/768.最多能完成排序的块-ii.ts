/*
 * @lc app=leetcode.cn id=768 lang=typescript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
function maxChunksToSorted(arr: number[]): number {
  const stack: number[] = []
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (cur >= (stack.at(-1) ?? -Infinity)) {
      stack.push(cur);
      continue;
    } else {
      const max = stack.pop()
      while (stack.length > 0) {
        if (cur < (stack.at(-1) ?? -Infinity)) {
          stack.pop()
        } else {
          break
        }
      }
      stack.push(max || NaN)
    }
  }
  return stack.length
};
// @lc code=end

console.log('exp:1,', maxChunksToSorted([5, 4, 3, 2, 1]));
console.log('exp:4,', maxChunksToSorted([2, 1, 3, 4, 4]));
console.log('exp:3,', maxChunksToSorted([1, 0, 1, 3, 2]));
