// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

// 示例 1：

// 输入：nums = [10,2]
// 输出："210"
// 示例 2：

// 输入：nums = [3,30,34,5,9]
// 输出："9534330"

/**
 * @param {number[]} nums
 * @return {string}
 */
// var largestNumber = function (nums) {
//   const storeReouseNum = [];
//   for (let i = 0; i < nums.length; i++) {
//     let curNum = nums[i];
//     while (curNum >= 10) {
//       curNum = curNum / 10;
//     }
//     storeReouseNum[i] = [curNum, nums[i]]
//   }
//   const sortNums = storeReouseNum.sort((a, b) => b[0] - a[0]);
//   const resNums = storeReouseNum.map(item => item[1]);
//   return resNums.join("");
// };

var largestNumber = function (nums) {
  nums.sort((a, b) => {
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);
    return ba.localeCompare(ab);
  });

  if (nums[0] === 0) return "0";

  return nums.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([10, 10])); // "1010"
console.log(largestNumber([0])); // "0"
console.log(largestNumber([0, 1])); // "10"
console.log(largestNumber([0, 0])); // "0"
console.log(largestNumber([111311, 1113])); // "1113111311"