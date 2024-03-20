/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  const nums_sort = nums.sort((a, b) => a - b)
  // console.log({ nums_sort });

  let left = 0, right = 0;
  for (let i = 0; i < nums_sort.length;) {
    if (nums_sort[i] === nums_sort[i - 1]) {
      i++;
      continue;
    }
    left = i + 1
    right = nums_sort.length - 1
    while (left < right) {
      if ((left !== i + 1) && nums_sort[left] === nums_sort[left - 1]) {
        left++
        continue;
      }
      if ((right !== nums_sort.length - 1) && nums_sort[right] === nums_sort[right + 1]) {
        right--
        continue;
      }
      if (nums_sort[left] + nums_sort[right] === -nums_sort[i]) {
        // console.log({ i, iv: nums_sort[i], left, lv: nums_sort[left], right, rv: nums_sort[right] });
        res.push([nums_sort[i], nums_sort[left], nums_sort[right]])
        left++
      } else if (nums_sort[left] + nums_sort[right] < -nums_sort[i]) {
        left++
      } else {
        right--
      }
    }
    i++;
  }
  return res
};
// @lc code=end

console.log(threeSum([34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47, 61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49]
));
