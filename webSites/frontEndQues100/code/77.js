// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]
// 解释:
// 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
// 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
// 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]


// 输入: [-1, -100, 3, 99] 和 k = 2
// 输出: [3, 99, -1, -100]
// 解释: 
// 向右旋转 1 步: [99, -1, -100, 3]
// 向右旋转 2 步: [3, 99, -1, -100]

/**
 * 将数组向右旋转k个位置
 * @param {number[]} nums 输入数组
 * @param {number} k 旋转次数
 * @return {void} 原地修改数组
 */
function rotate(nums, k) {
    // 处理k大于数组长度的情况
    const rotation = k % nums.length;
    
    // 反转整个数组
    reverse(nums, 0, nums.length - 1);
    // 反转前k个元素
    reverse(nums, 0, rotation - 1);
    // 反转剩余元素
    reverse(nums, rotation, nums.length - 1);
}

/**
 * 反转数组指定范围的元素
 * @param {number[]} nums 数组
 * @param {number} start 开始位置
 * @param {number} end 结束位置
 */
function reverse(nums, start, end) {
    let left = start;
    let right = end;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

// 测试用例
const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1); // 输出: [5, 6, 7, 1, 2, 3, 4]

const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2); // 输出: [3, 99, -1, -100]

