// 等差数列划分 - 动态规划

function numberOfArithmeticSlices(nums) {
  if (nums.length < 3) return 0;

  let result = 0;
  let dp = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp += 1;
      result += dp;
    } else {
      dp = 0;
    }
  }

  return result;
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
console.log(numberOfArithmeticSlices([1]));
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 6, 8, 10, 11, 12, 15]));
console.log(numberOfArithmeticSlices([1, 3, 5, 7, 9]));
console.log(numberOfArithmeticSlices([7, 7, 7, 7]));
console.log(numberOfArithmeticSlices([3, -1, -5, -9]));
