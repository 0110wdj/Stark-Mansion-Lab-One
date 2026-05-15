/**
 * 港口货物价格统计问题
 *
 * 题目描述：
 * 给定一组港口货物的每分钟价格序列 portRates，需要计算每个价格之后需要等待多少分钟，
 * 才会出现一个比当前价格更高的价格。如果后续没有更高的价格，则返回 0。
 *
 * 输入：
 * - portRates: number[] 每分钟的货物价格数组
 *
 * 输出：
 * - 返回一个数组，第 i 个元素表示从第 i 分钟开始，需要等待多少分钟才会遇到更高的价格。
 *
 * 示例：
 * 输入: [730, 740, 750, 710, 690, 720, 760, 730]
 * 输出: [1, 1, 4, 2, 1, 1, 0, 0]
 * 解释:
 * - 730 (索引0): 下一个更大的是 740 在索引1，等待 1 分钟
 * - 740 (索引1): 下一个更大的是 750 在索引2，等待 1 分钟
 * - 750 (索引2): 下一个更大的是 760 在索引6，等待 4 分钟
 * - 710 (索引3): 下一个更大的是 720 在索引5，等待 2 分钟
 * - 690 (索引4): 下一个更大的是 720 在索引5，等待 1 分钟
 * - 720 (索引5): 下一个更大的是 760 在索引6，等待 1 分钟
 * - 760 (索引6): 后面没有更大的价格，返回 0
 * - 730 (索引7): 后面没有价格，返回 0
 */

/**
 * 解题思路：
 *
 * 这是经典的「下一个更大元素 I」问题，使用「单调栈」求解。
 *
 * 核心思想：
 * 从后往前遍历数组，维护一个保存索引的单调递减栈。
 * 栈中保存的是候选的"下一个更大元素的索引」。
 *
 * 算法步骤：
 * 1. 初始化一个空栈和结果数组
 * 2. 从后往前遍历数组：
 *    - 弹出栈中所有对应价格 <= 当前价格的元素（这些不可能成为后续元素的Next Greater）
 *    - 如果栈为空，结果为0；否则结果为栈顶索引 - 当前索引
 *    - 将当前索引入栈
 * 3. 返回结果数组
 *
 * 为什么单调栈有效：
 * 栈维护了一个单调递减的序列，每个元素最多入栈和出栈各一次，
 * 因此整体时间复杂度是线性。
 *
 * 时间复杂度：O(N)  - 每个元素入栈出栈各一次
 * 空间复杂度：O(N)  - 栈的空间
 */

function StatPortRates(portRates) {
  const n = portRates.length;
  const result = new Array(n).fill(0);
  const stack = [];  // 单调递减栈，存储索引

  // 从后往前遍历
  for (let i = n - 1; i >= 0; i--) {
    // 弹出栈中所有 <= 当前价格的元素（它们不可能成为后续元素的Next Greater）
    while (stack.length > 0 && portRates[stack.at(-1)] <= portRates[i]) {
      stack.pop();
    }

    // 栈不为空则计算距离，否则为0
    result[i] = stack.length > 0 ? stack.at(-1) - i : 0;

    // 当前索引入栈
    stack.push(i);
  }

  return result;
}

/* ========== 暴力解法（O(N²)，90%用例通过，大数据量超时） ==========
// function StatPortRates(portRates) {
//   if (portRates.length === 1) return [0];
//   const resArr = [];
//
//   for (let i = 0; i < portRates.length; i++) {
//     if (i === portRates.length - 1) {
//       resArr[i] = 0;
//     }
//     let nextRateMunite = 0;
//     const curRate = portRates[i];
//     for (let j = i + 1; j < portRates.length; j++) {
//       const nextRate = portRates[j];
//       if (nextRate > curRate) {
//         nextRateMunite = j - i;
//         break;
//       }
//     }
//     resArr[i] = nextRateMunite;
//   }
//
//   return resArr;
// }
========================================================================== */

// 测试用例 1: 官方示例
// 输入: [730, 740, 750, 710, 690, 720, 760, 730]
// 预期输出: [1, 1, 4, 2, 1, 1, 0, 0]
console.log("测试用例 1:");
console.log(StatPortRates([730, 740, 750, 710, 690, 720, 760, 730]));

// 测试用例 2: 严格递增序列
// 输入: [1, 2, 3, 4, 5]
// 预期输出: [1, 1, 1, 1, 0]
console.log("\n测试用例 2:");
console.log(StatPortRates([1, 2, 3, 4, 5]));

// 测试用例 3: 严格递减序列
// 输入: [5, 4, 3, 2, 1]
// 预期输出: [0, 0, 0, 0, 0]
console.log("\n测试用例 3:");
console.log(StatPortRates([5, 4, 3, 2, 1]));

// 测试用例 4: 只有一个元素
// 输入: [100]
// 预期输出: [0]
console.log("\n测试用例 4:");
console.log(StatPortRates([100]));

// 测试用例 5: 有重复元素
// 输入: [3, 1, 4, 1, 5, 9, 2, 6]
// 预期输出: [2, 1, 2, 1, 1, 0, 1, 0]
console.log("\n测试用例 5:");
console.log(StatPortRates([3, 1, 4, 1, 5, 9, 2, 6]));
