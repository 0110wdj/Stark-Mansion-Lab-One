// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 说明:

// 1、必须在原数组上操作，不能拷贝额外的数组。

// 2、尽量减少操作次数。

function moveZeroes(nums) {
    let left = 0;  // 指向第一个0的位置
    
    // 找到第一个0的位置
    while (left < nums.length && nums[left] !== 0) {
        left++;
    }
    
    // 从第一个0后面的位置开始遍历
    for (let right = left + 1; right < nums.length; right++) {
        if (nums[right] !== 0) {
            // 交换left和right位置的元素
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;  // left指针向右移动，指向下一个0的位置
        }
    }
    
    return nums;
}

// 测试代码
const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums)); // 输出: [1, 3, 12, 0, 0]


